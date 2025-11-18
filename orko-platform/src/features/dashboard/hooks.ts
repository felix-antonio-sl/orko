import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { request } from 'graphql-request';
import { GET_ORGANIZATION, RECORD_ASSESSMENT } from './graphql/operations';
import { AssessmentInput } from '@/gql/graphql';

import { useOrganizationContext } from '@/context/OrganizationContext';

const API_URL = typeof window !== 'undefined'
    ? `${window.location.origin}/api/graphql`
    : 'http://localhost:3000/api/graphql';

export const useOrganization = (slug?: string) => {
    const { currentOrgSlug } = useOrganizationContext();
    const targetSlug = slug || currentOrgSlug;

    return useQuery({
        queryKey: ['organization', targetSlug],
        queryFn: async () => {
            const data = await request(API_URL, GET_ORGANIZATION, { slug: targetSlug });
            return data.organization;
        },
    });
};

export function useRecordAssessment() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (input: AssessmentInput) => {
            const data = await request(API_URL, RECORD_ASSESSMENT, { input });
            return data.recordAssessment;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['organization'] });
        },
    });
}
