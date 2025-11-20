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

export function useCreateFlow() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: any) => {
      const query = `
              mutation CreateFlow($input: FlowInput!) {
                createFlow(input: $input) {
                  id
                  name
                  flowType
                  cognitiveLevel
                  steps {
                    id
                    name
                    capacityId
                    timeoutSeconds
                  }
                }
              }
            `;
      const data = await request(API_URL, query, { input });
      return data.createFlow;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organization'] });
    },
  });
}

export function useFlow(id?: string) {
  return useQuery({
    queryKey: ['flow', id],
    queryFn: async () => {
      if (!id) return null;
      const query = `
              query GetFlow($id: ID!) {
                flow(id: $id) {
                  id
                  name
                  description
                  flowType
                  cognitiveLevel
                  outcome
                  customer
                  owner
                  criticality
                  isOrphaned
                  steps {
                    id
                    name
                    capacityId
                    timeoutSeconds
                    inputs
                    outputs
                  }
                }
              }
            `;
      const data = await request(API_URL, query, { id });
      return data.flow;
    },
    enabled: !!id
  });
}

export function useUpdateFlow() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, input }: { id: string, input: any }) => {
      const query = `
              mutation UpdateFlow($id: ID!, $input: FlowInput!) {
                updateFlow(id: $id, input: $input) {
                  id
                }
              }
            `;
      const data = await request(API_URL, query, { id, input });
      return data.updateFlow;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organization'] });
      queryClient.invalidateQueries({ queryKey: ['flow'] });
    },
  });
}
