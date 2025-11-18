/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetOrganization($slug: String!) {\n    organization(slug: $slug) {\n      id\n      name\n      slug\n      health {\n        score\n        gate\n        dimensions {\n          dimension\n          value\n        }\n      }\n      strategy {\n        trajectory\n        description\n        focus\n        playbooks {\n          id\n          code\n          name\n          description\n        }\n      }\n      fabric {\n        nodes {\n          id\n          label\n          type\n          group\n        }\n        links {\n          source\n          target\n          type\n        }\n      }\n      activePlaybooks {\n        id\n        playbookCode\n        status\n        progress\n        startedAt\n      }\n    }\n  }\n": typeof types.GetOrganizationDocument,
    "\n  mutation StartPlaybook($orgId: ID!, $code: String!) {\n    startPlaybook(orgId: $orgId, code: $code) {\n      id\n      status\n    }\n  }\n": typeof types.StartPlaybookDocument,
    "\n  mutation RecordAssessment($input: AssessmentInput!) {\n    recordAssessment(input: $input) {\n      score\n      gate\n      dimensions {\n        dimension\n        value\n      }\n    }\n  }\n": typeof types.RecordAssessmentDocument,
};
const documents: Documents = {
    "\n  query GetOrganization($slug: String!) {\n    organization(slug: $slug) {\n      id\n      name\n      slug\n      health {\n        score\n        gate\n        dimensions {\n          dimension\n          value\n        }\n      }\n      strategy {\n        trajectory\n        description\n        focus\n        playbooks {\n          id\n          code\n          name\n          description\n        }\n      }\n      fabric {\n        nodes {\n          id\n          label\n          type\n          group\n        }\n        links {\n          source\n          target\n          type\n        }\n      }\n      activePlaybooks {\n        id\n        playbookCode\n        status\n        progress\n        startedAt\n      }\n    }\n  }\n": types.GetOrganizationDocument,
    "\n  mutation StartPlaybook($orgId: ID!, $code: String!) {\n    startPlaybook(orgId: $orgId, code: $code) {\n      id\n      status\n    }\n  }\n": types.StartPlaybookDocument,
    "\n  mutation RecordAssessment($input: AssessmentInput!) {\n    recordAssessment(input: $input) {\n      score\n      gate\n      dimensions {\n        dimension\n        value\n      }\n    }\n  }\n": types.RecordAssessmentDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetOrganization($slug: String!) {\n    organization(slug: $slug) {\n      id\n      name\n      slug\n      health {\n        score\n        gate\n        dimensions {\n          dimension\n          value\n        }\n      }\n      strategy {\n        trajectory\n        description\n        focus\n        playbooks {\n          id\n          code\n          name\n          description\n        }\n      }\n      fabric {\n        nodes {\n          id\n          label\n          type\n          group\n        }\n        links {\n          source\n          target\n          type\n        }\n      }\n      activePlaybooks {\n        id\n        playbookCode\n        status\n        progress\n        startedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetOrganization($slug: String!) {\n    organization(slug: $slug) {\n      id\n      name\n      slug\n      health {\n        score\n        gate\n        dimensions {\n          dimension\n          value\n        }\n      }\n      strategy {\n        trajectory\n        description\n        focus\n        playbooks {\n          id\n          code\n          name\n          description\n        }\n      }\n      fabric {\n        nodes {\n          id\n          label\n          type\n          group\n        }\n        links {\n          source\n          target\n          type\n        }\n      }\n      activePlaybooks {\n        id\n        playbookCode\n        status\n        progress\n        startedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation StartPlaybook($orgId: ID!, $code: String!) {\n    startPlaybook(orgId: $orgId, code: $code) {\n      id\n      status\n    }\n  }\n"): (typeof documents)["\n  mutation StartPlaybook($orgId: ID!, $code: String!) {\n    startPlaybook(orgId: $orgId, code: $code) {\n      id\n      status\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation RecordAssessment($input: AssessmentInput!) {\n    recordAssessment(input: $input) {\n      score\n      gate\n      dimensions {\n        dimension\n        value\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation RecordAssessment($input: AssessmentInput!) {\n    recordAssessment(input: $input) {\n      score\n      gate\n      dimensions {\n        dimension\n        value\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;