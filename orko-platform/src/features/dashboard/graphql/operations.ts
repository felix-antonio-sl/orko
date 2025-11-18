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
