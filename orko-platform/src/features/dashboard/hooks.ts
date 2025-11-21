import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { request } from 'graphql-request';
import { GET_ORGANIZATION, RECORD_ASSESSMENT, GET_STRATEGIC_OBJECTIVES, CREATE_STRATEGIC_OBJECTIVE, GET_TEAM, GET_PERSON, GET_DATA_ASSET, GET_STRATEGIC_OBJECTIVE, UPDATE_TEAM, UPDATE_PERSON, UPDATE_DATA_ASSET, UPDATE_STRATEGIC_OBJECTIVE, GET_DATA_ASSETS } from './graphql/operations';
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

export function useStrategicObjectives(orgSlug: string) {
  return useQuery({
    queryKey: ['strategicObjectives', orgSlug],
    queryFn: async () => {
      const data = await request<any>(API_URL, GET_STRATEGIC_OBJECTIVES, { orgSlug });
      return data.strategicObjectives;
    },
  });
}

export function useCreateStrategicObjective() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: any) => {
      const data = await request<any>(API_URL, CREATE_STRATEGIC_OBJECTIVE, { input });
      return data.createStrategicObjective;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['strategicObjectives'] });
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

export function useCreateTeam() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: any) => {
      const query = `
        mutation CreateTeam($input: TeamInput!) {
          createTeam(input: $input) {
            id
            name
            type
          }
        }
      `;
      const data = await request(API_URL, query, { input });
      return data.createTeam;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organization'] });
      queryClient.invalidateQueries({ queryKey: ['capacities'] });
    },
  });
}

export function useCreatePerson() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: any) => {
      const query = `
        mutation CreatePerson($input: PersonInput!) {
          createPerson(input: $input) {
            id
            name
            role
          }
        }
      `;
      const data = await request(API_URL, query, { input });
      return data.createPerson;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organization'] });
      queryClient.invalidateQueries({ queryKey: ['capacities'] });
    },
  });
}

export function useCapacities(orgSlug: string) {
  return useQuery({
    queryKey: ['capacities', orgSlug],
    queryFn: async () => {
      const query = `
        query GetCapacities($orgSlug: String!) {
          capacities(orgSlug: $orgSlug) {
            id
            name
            type
          }
        }
      `;
      const data = await request(API_URL, query, { orgSlug });
      return data.capacities;
    },
    enabled: !!orgSlug
  });
}

export function useCreateDataAsset() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: any) => {
      const query = `
        mutation CreateDataAsset($input: DataAssetInput!) {
          createDataAsset(input: $input) {
            id
            name
            type
            description
            source
          }
        }
      `;
      const data = await request(API_URL, query, { input });
      return data.createDataAsset;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organization'] });
    },
  });
}

export function useAddMemberToTeam() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ teamId, personId }: { teamId: string, personId: string }) => {
      const query = `
        mutation AddMemberToTeam($teamId: ID!, $personId: ID!) {
          addMemberToTeam(teamId: $teamId, personId: $personId) {
            id
            name
          }
        }
      `;
      const data = await request(API_URL, query, { teamId, personId });
      return data.addMemberToTeam;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organization'] });
      queryClient.invalidateQueries({ queryKey: ['capacities'] });
    },
  });
}

export function useDataAssets(orgSlug: string) {
  return useQuery({
    queryKey: ['dataAssets', orgSlug],
    queryFn: async () => {
      const data = await request<any>(API_URL, GET_DATA_ASSETS, { orgSlug });
      return data.dataAssets;
    },
  });
}

// Individual node GET hooks
export function useTeam(id?: string) {
  return useQuery({
    queryKey: ['team', id],
    queryFn: async () => {
      if (!id) return null;
      const data = await request<any>(API_URL, GET_TEAM, { id });
      return data.team;
    },
    enabled: !!id
  });
}

export function usePerson(id?: string) {
  return useQuery({
    queryKey: ['person', id],
    queryFn: async () => {
      if (!id) return null;
      const data = await request<any>(API_URL, GET_PERSON, { id });
      return data.person;
    },
    enabled: !!id
  });
}

export function useDataAsset(id?: string) {
  return useQuery({
    queryKey: ['dataAsset', id],
    queryFn: async () => {
      if (!id) return null;
      const data = await request<any>(API_URL, GET_DATA_ASSET, { id });
      return data.dataAsset;
    },
    enabled: !!id
  });
}

export function useStrategicObjective(id?: string) {
  return useQuery({
    queryKey: ['strategicObjective', id],
    queryFn: async () => {
      if (!id) return null;
      const data = await request<any>(API_URL, GET_STRATEGIC_OBJECTIVE, { id });
      return data.strategicObjective;
    },
    enabled: !!id
  });
}

// UPDATE hooks
export function useUpdateTeam() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, input }: { id: string; input: any }) => {
      const data = await request<any>(API_URL, UPDATE_TEAM, { id, input });
      return data.updateTeam;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['team'] });
      queryClient.invalidateQueries({ queryKey: ['organization'] });
      queryClient.invalidateQueries({ queryKey: ['capacities'] });
    },
  });
}

export function useUpdatePerson() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, input }: { id: string; input: any }) => {
      const data = await request<any>(API_URL, UPDATE_PERSON, { id, input });
      return data.updatePerson;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['person'] });
      queryClient.invalidateQueries({ queryKey: ['organization'] });
      queryClient.invalidateQueries({ queryKey: ['capacities'] });
    },
  });
}

export function useUpdateDataAsset() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, input }: { id: string; input: any }) => {
      const data = await request<any>(API_URL, UPDATE_DATA_ASSET, { id, input });
      return data.updateDataAsset;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['dataAsset'] });
      queryClient.invalidateQueries({ queryKey: ['dataAssets'] });
    },
  });
}

export function useUpdateStrategicObjective() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, input }: { id: string; input: any }) => {
      const data = await request<any>(API_URL, UPDATE_STRATEGIC_OBJECTIVE, { id, input });
      return data.updateStrategicObjective;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['strategicObjective'] });
      queryClient.invalidateQueries({ queryKey: ['strategicObjectives'] });
    },
  });
}
