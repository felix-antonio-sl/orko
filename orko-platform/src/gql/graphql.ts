/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AssessmentInput = {
  arch: Scalars['Float']['input'];
  data: Scalars['Float']['input'];
  ops: Scalars['Float']['input'];
  orgId: Scalars['ID']['input'];
  proc: Scalars['Float']['input'];
};

export type DimensionScore = {
  __typename?: 'DimensionScore';
  dimension: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type FabricGraph = {
  __typename?: 'FabricGraph';
  teams: Array<Team>;
};

export type HealthState = {
  __typename?: 'HealthState';
  dimensions: Array<DimensionScore>;
  gate: Scalars['String']['output'];
  history: Array<Snapshot>;
  score: Scalars['Float']['output'];
};


export type HealthStateHistoryArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  recordAssessment?: Maybe<HealthState>;
};


export type MutationRecordAssessmentArgs = {
  input: AssessmentInput;
};

export type Organization = {
  __typename?: 'Organization';
  fabric?: Maybe<FabricGraph>;
  health?: Maybe<HealthState>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  strategy?: Maybe<Strategy>;
};

export type Playbook = {
  __typename?: 'Playbook';
  code: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  health?: Maybe<HealthState>;
  organization?: Maybe<Organization>;
  strategy?: Maybe<Strategy>;
};


export type QueryHealthArgs = {
  orgId: Scalars['ID']['input'];
};


export type QueryOrganizationArgs = {
  slug: Scalars['String']['input'];
};


export type QueryStrategyArgs = {
  orgId: Scalars['ID']['input'];
};

export type Snapshot = {
  __typename?: 'Snapshot';
  id: Scalars['ID']['output'];
  recordedAt: Scalars['String']['output'];
  score?: Maybe<Scalars['Float']['output']>;
};

export type Strategy = {
  __typename?: 'Strategy';
  description: Scalars['String']['output'];
  focus: Scalars['String']['output'];
  playbooks: Array<Playbook>;
  trajectory: Scalars['String']['output'];
};

export type Team = {
  __typename?: 'Team';
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type GetOrganizationQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetOrganizationQuery = { __typename?: 'Query', organization?: { __typename?: 'Organization', id: string, name: string, slug: string, health?: { __typename?: 'HealthState', score: number, gate: string, dimensions: Array<{ __typename?: 'DimensionScore', dimension: string, value: number }> } | null, strategy?: { __typename?: 'Strategy', trajectory: string, description: string, focus: string, playbooks: Array<{ __typename?: 'Playbook', id: string, code: string, name: string, description: string }> } | null } | null };

export type RecordAssessmentMutationVariables = Exact<{
  input: AssessmentInput;
}>;


export type RecordAssessmentMutation = { __typename?: 'Mutation', recordAssessment?: { __typename?: 'HealthState', score: number, gate: string, dimensions: Array<{ __typename?: 'DimensionScore', dimension: string, value: number }> } | null };


export const GetOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"health"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"gate"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimension"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"strategy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"trajectory"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"focus"}},{"kind":"Field","name":{"kind":"Name","value":"playbooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetOrganizationQuery, GetOrganizationQueryVariables>;
export const RecordAssessmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RecordAssessment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AssessmentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recordAssessment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"gate"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dimension"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<RecordAssessmentMutation, RecordAssessmentMutationVariables>;