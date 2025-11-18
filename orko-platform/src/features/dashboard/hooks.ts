import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { request } from 'graphql-request';
import { GET_ORGANIZATION, RECORD_ASSESSMENT } from './graphql/operations';
import { AssessmentInput } from '@/gql/graphql';

const API_URL = typeof window !== 'undefined'
    ? `${window.location.origin}/api/graphql`
    : 'http://localhost:3000/api/graphql';

export function useOrganization(slug: string) {
    return useQuery({
        queryKey: ['organization', slug],
        queryFn: async () => {
            const data = await request(API_URL, GET_ORGANIZATION, { slug });
            return data.organization;
        },
    });
}

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
