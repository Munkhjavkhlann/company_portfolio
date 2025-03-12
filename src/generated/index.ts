/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AboutBlocksDynamicZoneInput: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Long: { input: any; output: any; }
};

export type About = {
  __typename?: 'About';
  blocks?: Maybe<Array<Maybe<AboutBlocksDynamicZone>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AboutBlocksDynamicZone = ComponentSharedMedia | ComponentSharedQuote | ComponentSharedRichText | ComponentSharedSlider | Error;

export type AboutInput = {
  blocks?: InputMaybe<Array<Scalars['AboutBlocksDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentSharedMedia = {
  __typename?: 'ComponentSharedMedia';
  file?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedQuote = {
  __typename?: 'ComponentSharedQuote';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedRichText = {
  __typename?: 'ComponentSharedRichText';
  body?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  id: Scalars['ID']['output'];
  metaDescription: Scalars['String']['output'];
  metaTitle: Scalars['String']['output'];
  shareImage?: Maybe<UploadFile>;
};

export type ComponentSharedSeoInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  shareImage?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSharedSlider = {
  __typename?: 'ComponentSharedSlider';
  files: Array<Maybe<UploadFile>>;
  files_connection?: Maybe<UploadFileRelationResponseCollection>;
  id: Scalars['ID']['output'];
};


export type ComponentSharedSliderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentSharedSliderFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContactUs = {
  __typename?: 'ContactUs';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['Long']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContactUsEntityResponseCollection = {
  __typename?: 'ContactUsEntityResponseCollection';
  nodes: Array<ContactUs>;
  pageInfo: Pagination;
};

export type ContactUsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContactUsFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContactUsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactUsFiltersInput>>>;
  phoneNumber?: InputMaybe<LongFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  reason?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContactUsInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['Long']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = About | ComponentSharedMedia | ComponentSharedQuote | ComponentSharedRichText | ComponentSharedSeo | ComponentSharedSlider | ContactUs | Global | I18NLocale | Partnership | Product | Quote | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | Service | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Work;

export type Global = {
  __typename?: 'Global';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  defaultSeo?: Maybe<ComponentSharedSeo>;
  documentId: Scalars['ID']['output'];
  favicon?: Maybe<UploadFile>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  siteDescription: Scalars['String']['output'];
  siteName: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GlobalInput = {
  defaultSeo?: InputMaybe<ComponentSharedSeoInput>;
  favicon?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  siteDescription?: InputMaybe<Scalars['String']['input']>;
  siteName?: InputMaybe<Scalars['String']['input']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  contains?: InputMaybe<Scalars['Long']['input']>;
  containsi?: InputMaybe<Scalars['Long']['input']>;
  endsWith?: InputMaybe<Scalars['Long']['input']>;
  eq?: InputMaybe<Scalars['Long']['input']>;
  eqi?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  ne?: InputMaybe<Scalars['Long']['input']>;
  nei?: InputMaybe<Scalars['Long']['input']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']['input']>;
  notContainsi?: InputMaybe<Scalars['Long']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  startsWith?: InputMaybe<Scalars['Long']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createContactUs?: Maybe<ContactUs>;
  createPartnership?: Maybe<Partnership>;
  createProduct?: Maybe<Product>;
  createQuote?: Maybe<Quote>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  createService?: Maybe<Service>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWork?: Maybe<Work>;
  deleteAbout?: Maybe<DeleteMutationResponse>;
  deleteContactUs?: Maybe<DeleteMutationResponse>;
  deleteGlobal?: Maybe<DeleteMutationResponse>;
  deletePartnership?: Maybe<DeleteMutationResponse>;
  deleteProduct?: Maybe<DeleteMutationResponse>;
  deleteQuote?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteService?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWork?: Maybe<DeleteMutationResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAbout?: Maybe<About>;
  updateContactUs?: Maybe<ContactUs>;
  updateGlobal?: Maybe<Global>;
  updatePartnership?: Maybe<Partnership>;
  updateProduct?: Maybe<Product>;
  updateQuote?: Maybe<Quote>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateService?: Maybe<Service>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWork?: Maybe<Work>;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateContactUsArgs = {
  data: ContactUsInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePartnershipArgs = {
  data: PartnershipInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateQuoteArgs = {
  data: QuoteInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateServiceArgs = {
  data: ServiceInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWorkArgs = {
  data: WorkInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationDeleteContactUsArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePartnershipArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteQuoteArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteServiceArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWorkArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAboutArgs = {
  data: AboutInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateContactUsArgs = {
  data: ContactUsInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePartnershipArgs = {
  data: PartnershipInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateQuoteArgs = {
  data: QuoteInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWorkArgs = {
  data: WorkInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Partnership = {
  __typename?: 'Partnership';
  Name?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  featuredImage?: Maybe<UploadFile>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PartnershipEntityResponseCollection = {
  __typename?: 'PartnershipEntityResponseCollection';
  nodes: Array<Partnership>;
  pageInfo: Pagination;
};

export type PartnershipFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PartnershipFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PartnershipFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PartnershipFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PartnershipInput = {
  Name?: InputMaybe<Scalars['String']['input']>;
  featuredImage?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Product = {
  __typename?: 'Product';
  Description?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  featuredImage?: Maybe<UploadFile>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  nodes: Array<Product>;
  pageInfo: Pagination;
};

export type ProductFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProductInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  featuredImage?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Query = {
  __typename?: 'Query';
  about?: Maybe<About>;
  contactUs?: Maybe<ContactUs>;
  contactUses: Array<Maybe<ContactUs>>;
  contactUses_connection?: Maybe<ContactUsEntityResponseCollection>;
  global?: Maybe<Global>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  partnership?: Maybe<Partnership>;
  partnerships: Array<Maybe<Partnership>>;
  partnerships_connection?: Maybe<PartnershipEntityResponseCollection>;
  product?: Maybe<Product>;
  products: Array<Maybe<Product>>;
  products_connection?: Maybe<ProductEntityResponseCollection>;
  quote?: Maybe<Quote>;
  quotes: Array<Maybe<Quote>>;
  quotes_connection?: Maybe<QuoteEntityResponseCollection>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  service?: Maybe<Service>;
  services: Array<Maybe<Service>>;
  services_connection?: Maybe<ServiceEntityResponseCollection>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  work?: Maybe<Work>;
  works: Array<Maybe<Work>>;
  works_connection?: Maybe<WorkEntityResponseCollection>;
};


export type QueryAboutArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContactUsArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContactUsesArgs = {
  filters?: InputMaybe<ContactUsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryContactUses_ConnectionArgs = {
  filters?: InputMaybe<ContactUsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGlobalArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPartnershipArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPartnershipsArgs = {
  filters?: InputMaybe<PartnershipFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPartnerships_ConnectionArgs = {
  filters?: InputMaybe<PartnershipFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryProducts_ConnectionArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryQuoteArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryQuotesArgs = {
  filters?: InputMaybe<QuoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryQuotes_ConnectionArgs = {
  filters?: InputMaybe<QuoteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryServiceArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryServices_ConnectionArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryWorkArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryWorksArgs = {
  filters?: InputMaybe<WorkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryWorks_ConnectionArgs = {
  filters?: InputMaybe<WorkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type Quote = {
  __typename?: 'Quote';
  Author?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type QuoteEntityResponseCollection = {
  __typename?: 'QuoteEntityResponseCollection';
  nodes: Array<Quote>;
  pageInfo: Pagination;
};

export type QuoteFiltersInput = {
  Author?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<QuoteFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<QuoteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuoteFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type QuoteInput = {
  Author?: InputMaybe<Scalars['String']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type Service = {
  __typename?: 'Service';
  Description?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  featuredImage: Array<Maybe<UploadFile>>;
  featuredImage_connection?: Maybe<UploadFileRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ServiceFeaturedImageArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ServiceFeaturedImage_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ServiceEntityResponseCollection = {
  __typename?: 'ServiceEntityResponseCollection';
  nodes: Array<Service>;
  pageInfo: Pagination;
};

export type ServiceFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ServiceInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  featuredImage?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  nodes: Array<UploadFile>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<UsersPermissionsPermission>>;
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<UsersPermissionsUser>>;
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<UsersPermissionsRole>;
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<UsersPermissionsUser>;
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<UsersPermissionsUser>;
};

export type Work = {
  __typename?: 'Work';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['JSON']['output']>;
  documentId: Scalars['ID']['output'];
  featuredImage?: Maybe<UploadFile>;
  handle?: Maybe<Scalars['String']['output']>;
  media: Array<Maybe<UploadFile>>;
  media_connection?: Maybe<UploadFileRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type WorkMediaArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WorkMedia_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WorkEntityResponseCollection = {
  __typename?: 'WorkEntityResponseCollection';
  nodes: Array<Work>;
  pageInfo: Pagination;
};

export type WorkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WorkFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<JsonFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  handle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WorkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WorkFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WorkInput = {
  description?: InputMaybe<Scalars['JSON']['input']>;
  featuredImage?: InputMaybe<Scalars['ID']['input']>;
  handle?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateContactUsMutationVariables = Exact<{
  data: ContactUsInput;
}>;


export type CreateContactUsMutation = { __typename?: 'Mutation', createContactUs?: { __typename?: 'ContactUs', documentId: string, reason?: string, name?: string, phoneNumber?: any, createdAt?: any, updatedAt?: any, publishedAt?: any } };

export type PartnershipQueryVariables = Exact<{
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
}>;


export type PartnershipQuery = { __typename?: 'Query', partnership?: { __typename?: 'Partnership', documentId: string, Name?: string, createdAt?: any, updatedAt?: any, publishedAt?: any, featuredImage?: { __typename?: 'UploadFile', documentId: string, url: string } } };

export type PartnershipsQueryVariables = Exact<{
  status?: InputMaybe<PublicationStatus>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  pagination?: InputMaybe<PaginationArg>;
  filters?: InputMaybe<PartnershipFiltersInput>;
}>;


export type PartnershipsQuery = { __typename?: 'Query', partnerships: Array<{ __typename?: 'Partnership', documentId: string, Name?: string, createdAt?: any, updatedAt?: any, publishedAt?: any, featuredImage?: { __typename?: 'UploadFile', documentId: string, url: string } }> };

export type ProductQueryVariables = Exact<{
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', documentId: string, Title?: string, Description?: string, createdAt?: any, updatedAt?: any, publishedAt?: any, featuredImage?: { __typename?: 'UploadFile', documentId: string, url: string } } };

export type ProductsQueryVariables = Exact<{
  status?: InputMaybe<PublicationStatus>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', documentId: string, Title?: string, Description?: string, createdAt?: any, updatedAt?: any, publishedAt?: any, featuredImage?: { __typename?: 'UploadFile', documentId: string, url: string } }> };

export type QuoteQueryVariables = Exact<{
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
}>;


export type QuoteQuery = { __typename?: 'Query', quote?: { __typename?: 'Quote', documentId: string, Author?: string, Description?: string, createdAt?: any, updatedAt?: any, publishedAt?: any } };

export type QuotesQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  status?: InputMaybe<PublicationStatus>;
}>;


export type QuotesQuery = { __typename?: 'Query', quotes: Array<{ __typename?: 'Quote', documentId: string, Author?: string, Description?: string, createdAt?: any, updatedAt?: any, publishedAt?: any }> };

export type ServiceQueryVariables = Exact<{
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
}>;


export type ServiceQuery = { __typename?: 'Query', service?: { __typename?: 'Service', documentId: string, Title?: string, Description?: string, createdAt?: any, updatedAt?: any, publishedAt?: any, featuredImage: Array<{ __typename?: 'UploadFile', url: string, documentId: string }> } };

export type ServicesQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  status?: InputMaybe<PublicationStatus>;
}>;


export type ServicesQuery = { __typename?: 'Query', services: Array<{ __typename?: 'Service', documentId: string, Title?: string, Description?: string, createdAt?: any, updatedAt?: any, publishedAt?: any, featuredImage: Array<{ __typename?: 'UploadFile', url: string, documentId: string }> }> };

export type WorkQueryVariables = Exact<{
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
}>;


export type WorkQuery = { __typename?: 'Query', work?: { __typename?: 'Work', documentId: string, title?: string, handle?: string, description?: any, createdAt?: any, updatedAt?: any, publishedAt?: any, featuredImage?: { __typename?: 'UploadFile', url: string, documentId: string }, media: Array<{ __typename?: 'UploadFile', url: string, documentId: string }> } };

export type WorksQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  status?: InputMaybe<PublicationStatus>;
}>;


export type WorksQuery = { __typename?: 'Query', works: Array<{ __typename?: 'Work', documentId: string, title?: string, handle?: string, description?: any, createdAt?: any, updatedAt?: any, publishedAt?: any, featuredImage?: { __typename?: 'UploadFile', url: string, documentId: string }, media: Array<{ __typename?: 'UploadFile', url: string, documentId: string }> }> };


export const CreateContactUsDocument = gql`
    mutation CreateContactUs($data: ContactUsInput!) {
  createContactUs(data: $data) {
    documentId
    reason
    name
    phoneNumber
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export type CreateContactUsMutationFn = Apollo.MutationFunction<CreateContactUsMutation, CreateContactUsMutationVariables>;
export type CreateContactUsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
  [key in TDataName]: Apollo.MutationFunction<CreateContactUsMutation, CreateContactUsMutationVariables>
} & TChildProps;
export function withCreateContactUs<TProps extends {} | Exact<{ data: ContactUsInput; }>, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateContactUsMutation,
  CreateContactUsMutationVariables,
  CreateContactUsProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withMutation<TProps, CreateContactUsMutation, CreateContactUsMutationVariables, CreateContactUsProps<TChildProps, TDataName>>(CreateContactUsDocument, {
    alias: 'createContactUs',
    ...operationOptions
  });
};

/**
 * __useCreateContactUsMutation__
 *
 * To run a mutation, you first call `useCreateContactUsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateContactUsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createContactUsMutation, { data, loading, error }] = useCreateContactUsMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateContactUsMutation(baseOptions?: Apollo.MutationHookOptions<CreateContactUsMutation, CreateContactUsMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateContactUsMutation, CreateContactUsMutationVariables>(CreateContactUsDocument, options);
}
export type CreateContactUsMutationHookResult = ReturnType<typeof useCreateContactUsMutation>;
export type CreateContactUsMutationResult = Apollo.MutationResult<CreateContactUsMutation>;
export type CreateContactUsMutationOptions = Apollo.BaseMutationOptions<CreateContactUsMutation, CreateContactUsMutationVariables>;
export const PartnershipDocument = gql`
    query Partnership($documentId: ID!, $status: PublicationStatus) {
  partnership(documentId: $documentId, status: $status) {
    documentId
    featuredImage {
      documentId
      url
    }
    Name
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export type PartnershipProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<PartnershipQuery, PartnershipQueryVariables>
} & TChildProps;
export function withPartnership<TProps extends Exact<{ documentId: Scalars["ID"]["input"]; status?: InputMaybe<PublicationStatus>; }>, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PartnershipQuery,
  PartnershipQueryVariables,
  PartnershipProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, PartnershipQuery, PartnershipQueryVariables, PartnershipProps<TChildProps, TDataName>>(PartnershipDocument, {
    alias: 'partnership',
    ...operationOptions
  });
};

/**
 * __usePartnershipQuery__
 *
 * To run a query within a React component, call `usePartnershipQuery` and pass it any options that fit your needs.
 * When your component renders, `usePartnershipQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePartnershipQuery({
 *   variables: {
 *      documentId: // value for 'documentId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function usePartnershipQuery(baseOptions: Apollo.QueryHookOptions<PartnershipQuery, PartnershipQueryVariables> & ({ variables: PartnershipQueryVariables; skip?: boolean; } | { skip: boolean; })) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PartnershipQuery, PartnershipQueryVariables>(PartnershipDocument, options);
}
export function usePartnershipLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PartnershipQuery, PartnershipQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PartnershipQuery, PartnershipQueryVariables>(PartnershipDocument, options);
}
export function usePartnershipSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PartnershipQuery, PartnershipQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<PartnershipQuery, PartnershipQueryVariables>(PartnershipDocument, options);
}
export type PartnershipQueryHookResult = ReturnType<typeof usePartnershipQuery>;
export type PartnershipLazyQueryHookResult = ReturnType<typeof usePartnershipLazyQuery>;
export type PartnershipSuspenseQueryHookResult = ReturnType<typeof usePartnershipSuspenseQuery>;
export type PartnershipQueryResult = Apollo.QueryResult<PartnershipQuery, PartnershipQueryVariables>;
export const PartnershipsDocument = gql`
    query Partnerships($status: PublicationStatus, $sort: [String], $pagination: PaginationArg, $filters: PartnershipFiltersInput) {
  partnerships(
    status: $status
    sort: $sort
    pagination: $pagination
    filters: $filters
  ) {
    documentId
    featuredImage {
      documentId
      url
    }
    Name
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export type PartnershipsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<PartnershipsQuery, PartnershipsQueryVariables>
} & TChildProps;
export function withPartnerships<TProps extends Exact<{ status?: InputMaybe<PublicationStatus>; sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>; pagination?: InputMaybe<PaginationArg>; filters?: InputMaybe<PartnershipFiltersInput>; }>, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PartnershipsQuery,
  PartnershipsQueryVariables,
  PartnershipsProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, PartnershipsQuery, PartnershipsQueryVariables, PartnershipsProps<TChildProps, TDataName>>(PartnershipsDocument, {
    alias: 'partnerships',
    ...operationOptions
  });
};

/**
 * __usePartnershipsQuery__
 *
 * To run a query within a React component, call `usePartnershipsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePartnershipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePartnershipsQuery({
 *   variables: {
 *      status: // value for 'status'
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function usePartnershipsQuery(baseOptions?: Apollo.QueryHookOptions<PartnershipsQuery, PartnershipsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PartnershipsQuery, PartnershipsQueryVariables>(PartnershipsDocument, options);
}
export function usePartnershipsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PartnershipsQuery, PartnershipsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PartnershipsQuery, PartnershipsQueryVariables>(PartnershipsDocument, options);
}
export function usePartnershipsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<PartnershipsQuery, PartnershipsQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<PartnershipsQuery, PartnershipsQueryVariables>(PartnershipsDocument, options);
}
export type PartnershipsQueryHookResult = ReturnType<typeof usePartnershipsQuery>;
export type PartnershipsLazyQueryHookResult = ReturnType<typeof usePartnershipsLazyQuery>;
export type PartnershipsSuspenseQueryHookResult = ReturnType<typeof usePartnershipsSuspenseQuery>;
export type PartnershipsQueryResult = Apollo.QueryResult<PartnershipsQuery, PartnershipsQueryVariables>;
export const ProductDocument = gql`
    query Product($documentId: ID!, $status: PublicationStatus) {
  product(documentId: $documentId, status: $status) {
    documentId
    featuredImage {
      documentId
      url
    }
    Title
    Description
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export type ProductProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<ProductQuery, ProductQueryVariables>
} & TChildProps;
export function withProduct<TProps extends Exact<{ documentId: Scalars["ID"]["input"]; status?: InputMaybe<PublicationStatus>; }>, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProductQuery,
  ProductQueryVariables,
  ProductProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, ProductQuery, ProductQueryVariables, ProductProps<TChildProps, TDataName>>(ProductDocument, {
    alias: 'product',
    ...operationOptions
  });
};

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      documentId: // value for 'documentId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useProductQuery(baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables> & ({ variables: ProductQueryVariables; skip?: boolean; } | { skip: boolean; })) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
}
export function useProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
}
export function useProductSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductQuery, ProductQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<ProductQuery, ProductQueryVariables>(ProductDocument, options);
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>;
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>;
export type ProductSuspenseQueryHookResult = ReturnType<typeof useProductSuspenseQuery>;
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>;
export const ProductsDocument = gql`
    query Products($status: PublicationStatus, $sort: [String], $pagination: PaginationArg) {
  products(status: $status, sort: $sort, pagination: $pagination) {
    documentId
    featuredImage {
      documentId
      url
    }
    Title
    Description
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export type ProductsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<ProductsQuery, ProductsQueryVariables>
} & TChildProps;
export function withProducts<TProps extends Exact<{ status?: InputMaybe<PublicationStatus>; sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>; pagination?: InputMaybe<PaginationArg>; }>, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ProductsQuery,
  ProductsQueryVariables,
  ProductsProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, ProductsQuery, ProductsQueryVariables, ProductsProps<TChildProps, TDataName>>(ProductsDocument, {
    alias: 'products',
    ...operationOptions
  });
};

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      status: // value for 'status'
 *      sort: // value for 'sort'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
}
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
}
export function useProductsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
}
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsSuspenseQueryHookResult = ReturnType<typeof useProductsSuspenseQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const QuoteDocument = gql`
    query Quote($documentId: ID!, $status: PublicationStatus) {
  quote(documentId: $documentId, status: $status) {
    documentId
    Author
    Description
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export type QuoteProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<QuoteQuery, QuoteQueryVariables>
} & TChildProps;
export function withQuote<TProps extends Exact<{ documentId: Scalars["ID"]["input"]; status?: InputMaybe<PublicationStatus>; }>, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  QuoteQuery,
  QuoteQueryVariables,
  QuoteProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, QuoteQuery, QuoteQueryVariables, QuoteProps<TChildProps, TDataName>>(QuoteDocument, {
    alias: 'quote',
    ...operationOptions
  });
};

/**
 * __useQuoteQuery__
 *
 * To run a query within a React component, call `useQuoteQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuoteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuoteQuery({
 *   variables: {
 *      documentId: // value for 'documentId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useQuoteQuery(baseOptions: Apollo.QueryHookOptions<QuoteQuery, QuoteQueryVariables> & ({ variables: QuoteQueryVariables; skip?: boolean; } | { skip: boolean; })) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<QuoteQuery, QuoteQueryVariables>(QuoteDocument, options);
}
export function useQuoteLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuoteQuery, QuoteQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<QuoteQuery, QuoteQueryVariables>(QuoteDocument, options);
}
export function useQuoteSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<QuoteQuery, QuoteQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<QuoteQuery, QuoteQueryVariables>(QuoteDocument, options);
}
export type QuoteQueryHookResult = ReturnType<typeof useQuoteQuery>;
export type QuoteLazyQueryHookResult = ReturnType<typeof useQuoteLazyQuery>;
export type QuoteSuspenseQueryHookResult = ReturnType<typeof useQuoteSuspenseQuery>;
export type QuoteQueryResult = Apollo.QueryResult<QuoteQuery, QuoteQueryVariables>;
export const QuotesDocument = gql`
    query Quotes($pagination: PaginationArg, $sort: [String], $status: PublicationStatus) {
  quotes(pagination: $pagination, sort: $sort, status: $status) {
    documentId
    Author
    Description
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export type QuotesProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<QuotesQuery, QuotesQueryVariables>
} & TChildProps;
export function withQuotes<TProps extends Exact<{ pagination?: InputMaybe<PaginationArg>; sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>; status?: InputMaybe<PublicationStatus>; }>, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  QuotesQuery,
  QuotesQueryVariables,
  QuotesProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, QuotesQuery, QuotesQueryVariables, QuotesProps<TChildProps, TDataName>>(QuotesDocument, {
    alias: 'quotes',
    ...operationOptions
  });
};

/**
 * __useQuotesQuery__
 *
 * To run a query within a React component, call `useQuotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuotesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuotesQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useQuotesQuery(baseOptions?: Apollo.QueryHookOptions<QuotesQuery, QuotesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<QuotesQuery, QuotesQueryVariables>(QuotesDocument, options);
}
export function useQuotesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QuotesQuery, QuotesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<QuotesQuery, QuotesQueryVariables>(QuotesDocument, options);
}
export function useQuotesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<QuotesQuery, QuotesQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<QuotesQuery, QuotesQueryVariables>(QuotesDocument, options);
}
export type QuotesQueryHookResult = ReturnType<typeof useQuotesQuery>;
export type QuotesLazyQueryHookResult = ReturnType<typeof useQuotesLazyQuery>;
export type QuotesSuspenseQueryHookResult = ReturnType<typeof useQuotesSuspenseQuery>;
export type QuotesQueryResult = Apollo.QueryResult<QuotesQuery, QuotesQueryVariables>;
export const ServiceDocument = gql`
    query Service($documentId: ID!, $status: PublicationStatus) {
  service(documentId: $documentId, status: $status) {
    documentId
    featuredImage {
      url
      documentId
    }
    Title
    Description
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export type ServiceProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<ServiceQuery, ServiceQueryVariables>
} & TChildProps;
export function withService<TProps extends Exact<{ documentId: Scalars["ID"]["input"]; status?: InputMaybe<PublicationStatus>; }>, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ServiceQuery,
  ServiceQueryVariables,
  ServiceProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, ServiceQuery, ServiceQueryVariables, ServiceProps<TChildProps, TDataName>>(ServiceDocument, {
    alias: 'service',
    ...operationOptions
  });
};

/**
 * __useServiceQuery__
 *
 * To run a query within a React component, call `useServiceQuery` and pass it any options that fit your needs.
 * When your component renders, `useServiceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServiceQuery({
 *   variables: {
 *      documentId: // value for 'documentId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useServiceQuery(baseOptions: Apollo.QueryHookOptions<ServiceQuery, ServiceQueryVariables> & ({ variables: ServiceQueryVariables; skip?: boolean; } | { skip: boolean; })) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ServiceQuery, ServiceQueryVariables>(ServiceDocument, options);
}
export function useServiceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServiceQuery, ServiceQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ServiceQuery, ServiceQueryVariables>(ServiceDocument, options);
}
export function useServiceSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ServiceQuery, ServiceQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<ServiceQuery, ServiceQueryVariables>(ServiceDocument, options);
}
export type ServiceQueryHookResult = ReturnType<typeof useServiceQuery>;
export type ServiceLazyQueryHookResult = ReturnType<typeof useServiceLazyQuery>;
export type ServiceSuspenseQueryHookResult = ReturnType<typeof useServiceSuspenseQuery>;
export type ServiceQueryResult = Apollo.QueryResult<ServiceQuery, ServiceQueryVariables>;
export const ServicesDocument = gql`
    query Services($pagination: PaginationArg, $sort: [String], $status: PublicationStatus) {
  services(pagination: $pagination, sort: $sort, status: $status) {
    documentId
    featuredImage {
      url
      documentId
    }
    Title
    Description
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export type ServicesProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<ServicesQuery, ServicesQueryVariables>
} & TChildProps;
export function withServices<TProps extends Exact<{ pagination?: InputMaybe<PaginationArg>; sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>; status?: InputMaybe<PublicationStatus>; }>, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ServicesQuery,
  ServicesQueryVariables,
  ServicesProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, ServicesQuery, ServicesQueryVariables, ServicesProps<TChildProps, TDataName>>(ServicesDocument, {
    alias: 'services',
    ...operationOptions
  });
};

/**
 * __useServicesQuery__
 *
 * To run a query within a React component, call `useServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServicesQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useServicesQuery(baseOptions?: Apollo.QueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, options);
}
export function useServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, options);
}
export function useServicesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, options);
}
export type ServicesQueryHookResult = ReturnType<typeof useServicesQuery>;
export type ServicesLazyQueryHookResult = ReturnType<typeof useServicesLazyQuery>;
export type ServicesSuspenseQueryHookResult = ReturnType<typeof useServicesSuspenseQuery>;
export type ServicesQueryResult = Apollo.QueryResult<ServicesQuery, ServicesQueryVariables>;
export const WorkDocument = gql`
    query Work($documentId: ID!, $status: PublicationStatus) {
  work(documentId: $documentId, status: $status) {
    documentId
    title
    handle
    featuredImage {
      url
      documentId
    }
    media {
      url
      documentId
    }
    description
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export type WorkProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<WorkQuery, WorkQueryVariables>
} & TChildProps;
export function withWork<TProps extends Exact<{ documentId: Scalars["ID"]["input"]; status?: InputMaybe<PublicationStatus>; }>, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  WorkQuery,
  WorkQueryVariables,
  WorkProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, WorkQuery, WorkQueryVariables, WorkProps<TChildProps, TDataName>>(WorkDocument, {
    alias: 'work',
    ...operationOptions
  });
};

/**
 * __useWorkQuery__
 *
 * To run a query within a React component, call `useWorkQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkQuery({
 *   variables: {
 *      documentId: // value for 'documentId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useWorkQuery(baseOptions: Apollo.QueryHookOptions<WorkQuery, WorkQueryVariables> & ({ variables: WorkQueryVariables; skip?: boolean; } | { skip: boolean; })) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<WorkQuery, WorkQueryVariables>(WorkDocument, options);
}
export function useWorkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkQuery, WorkQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<WorkQuery, WorkQueryVariables>(WorkDocument, options);
}
export function useWorkSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WorkQuery, WorkQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<WorkQuery, WorkQueryVariables>(WorkDocument, options);
}
export type WorkQueryHookResult = ReturnType<typeof useWorkQuery>;
export type WorkLazyQueryHookResult = ReturnType<typeof useWorkLazyQuery>;
export type WorkSuspenseQueryHookResult = ReturnType<typeof useWorkSuspenseQuery>;
export type WorkQueryResult = Apollo.QueryResult<WorkQuery, WorkQueryVariables>;
export const WorksDocument = gql`
    query Works($pagination: PaginationArg, $sort: [String], $status: PublicationStatus) {
  works(pagination: $pagination, sort: $sort, status: $status) {
    documentId
    title
    handle
    featuredImage {
      url
      documentId
    }
    media {
      url
      documentId
    }
    description
    createdAt
    updatedAt
    publishedAt
  }
}
    `;
export type WorksProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<WorksQuery, WorksQueryVariables>
} & TChildProps;
export function withWorks<TProps extends Exact<{ pagination?: InputMaybe<PaginationArg>; sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>> | InputMaybe<Scalars["String"]["input"]>>; status?: InputMaybe<PublicationStatus>; }>, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  WorksQuery,
  WorksQueryVariables,
  WorksProps<TChildProps, TDataName>>) {
  return ApolloReactHoc.withQuery<TProps, WorksQuery, WorksQueryVariables, WorksProps<TChildProps, TDataName>>(WorksDocument, {
    alias: 'works',
    ...operationOptions
  });
};

/**
 * __useWorksQuery__
 *
 * To run a query within a React component, call `useWorksQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorksQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useWorksQuery(baseOptions?: Apollo.QueryHookOptions<WorksQuery, WorksQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<WorksQuery, WorksQueryVariables>(WorksDocument, options);
}
export function useWorksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorksQuery, WorksQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<WorksQuery, WorksQueryVariables>(WorksDocument, options);
}
export function useWorksSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WorksQuery, WorksQueryVariables>) {
  const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<WorksQuery, WorksQueryVariables>(WorksDocument, options);
}
export type WorksQueryHookResult = ReturnType<typeof useWorksQuery>;
export type WorksLazyQueryHookResult = ReturnType<typeof useWorksLazyQuery>;
export type WorksSuspenseQueryHookResult = ReturnType<typeof useWorksSuspenseQuery>;
export type WorksQueryResult = Apollo.QueryResult<WorksQuery, WorksQueryVariables>;