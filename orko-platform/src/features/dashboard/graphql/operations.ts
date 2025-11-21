import { gql } from '@/gql';

export const GET_ORGANIZATION = gql(`
  query GetOrganization($slug: String!) {
    organization(slug: $slug) {
      id
      name
      slug
      health {
        score
        gate
        dimensions {
          dimension
          value
        }
      }
      strategy {
        trajectory
        description
        focus
        playbooks {
          id
          code
          name
          description
        }
      }
      fabric {
        nodes {
          id
          label
          type
          group
        }
        links {
          source
          target
          type
        }
      }
      activePlaybooks {
        id
        playbookCode
        status
        progress
        startedAt
      }
    }
  }
`);

export const START_PLAYBOOK = gql(`
  mutation StartPlaybook($orgId: ID!, $code: String!) {
    startPlaybook(orgId: $orgId, code: $code) {
      id
      status
    }
  }
`);

export const RECORD_ASSESSMENT = gql(`
  mutation RecordAssessment($input: AssessmentInput!) {
    recordAssessment(input: $input) {
      score
      gate
      dimensions {
        dimension
        value
      }
    }
  }
`);
export const CREATE_FLOW = gql(`
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
`);

export const CREATE_DATA_ASSET = gql(`
  mutation CreateDataAsset($input: DataAssetInput!) {
    createDataAsset(input: $input) {
      id
      name
      type
      description
      source
    }
  }
`);

export const ADD_MEMBER_TO_TEAM = `
  mutation AddMemberToTeam($teamId: ID!, $personId: ID!) {
    addMemberToTeam(teamId: $teamId, personId: $personId) {
      id
      name
    }
  }
`;

export const GET_DATA_ASSETS = `
  query GetDataAssets($orgSlug: String!) {
    dataAssets(orgSlug: $orgSlug) {
      id
      name
      type
      description
      source
    }
  }
`;

export const GET_STRATEGIC_OBJECTIVES = `
  query GetStrategicObjectives($orgSlug: String!) {
    strategicObjectives(orgSlug: $orgSlug) {
      id
      description
      type
      status
    }
  }
`;

export const CREATE_STRATEGIC_OBJECTIVE = `
  mutation CreateStrategicObjective($orgSlug: String!, $description: String!, $type: String!, $status: String!) {
    createStrategicObjective(input: { orgSlug: $orgSlug, description: $description, type: $type, status: $status }) {
      id
      description
      type
      status
    }
  }
`;

// GET queries for individual nodes
export const GET_TEAM = `
  query GetTeam($id: ID!) {
    team(id: $id) {
      id
      name
      type
      description
    }
  }
`;

export const GET_PERSON = `
  query GetPerson($id: ID!) {
    person(id: $id) {
      id
      name
      role
      email
    }
  }
`;

export const GET_DATA_ASSET = `
  query GetDataAsset($id: ID!) {
    dataAsset(id: $id) {
      id
      name
      type
      description
      source
    }
  }
`;

export const GET_STRATEGIC_OBJECTIVE = `
  query GetStrategicObjective($id: ID!) {
    strategicObjective(id: $id) {
      id
      description
      type
      status
    }
  }
`;

// UPDATE mutations
export const UPDATE_TEAM = `
  mutation UpdateTeam($id: ID!, $orgSlug: String!, $name: String!, $type: String!, $description: String) {
    updateTeam(id: $id, input: { orgSlug: $orgSlug, name: $name, type: $type, description: $description }) {
      id
      name
      type
      description
    }
  }
`;

export const UPDATE_PERSON = `
  mutation UpdatePerson($id: ID!, $orgSlug: String!, $name: String!, $role: String!, $email: String) {
    updatePerson(id: $id, input: { orgSlug: $orgSlug, name: $name, role: $role, email: $email }) {
      id
      name
      role
      email
    }
  }
`;

export const UPDATE_DATA_ASSET = `
  mutation UpdateDataAsset($id: ID!, $orgSlug: String!, $name: String!, $type: String!, $description: String, $source: String) {
    updateDataAsset(id: $id, input: { orgSlug: $orgSlug, name: $name, type: $type, description: $description, source: $source }) {
      id
      name
      type
      description
      source
    }
  }
`;

export const UPDATE_STRATEGIC_OBJECTIVE = `
  mutation UpdateStrategicObjective($id: ID!, $orgSlug: String!, $description: String!, $type: String!, $status: String!) {
    updateStrategicObjective(id: $id, input: { orgSlug: $orgSlug, description: $description, type: $type, status: $status }) {
      id
      description
      type
      status
    }
  }
`;
