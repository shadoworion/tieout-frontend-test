import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Dayjs: { input: any; output: any; }
  JSONObject: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  allTrxCount: Scalars['Int']['output'];
  allTrxDate: TrxDate;
  apiTrxCount: Scalars['Int']['output'];
  apiTrxDate: TrxDate;
  chartOfAccounts: Array<ChartOfAccount>;
  childTrxCount: Scalars['Int']['output'];
  childTrxDate: TrxDate;
  createdAt: Scalars['DateTime']['output'];
  dataTypes: Array<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fileTrxCount: Scalars['Int']['output'];
  fileTrxDate: TrxDate;
  files: Array<File>;
  folder?: Maybe<Folder>;
  folderId?: Maybe<Scalars['ID']['output']>;
  fullLabel?: Maybe<Scalars['String']['output']>;
  hasApi: Scalars['Boolean']['output'];
  hasBalance: Scalars['Boolean']['output'];
  hasFiles: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  inventory: InventoryType;
  inventoryType?: Maybe<Scalars['String']['output']>;
  isActive: Scalars['Boolean']['output'];
  isExcluded: Scalars['Boolean']['output'];
  isPinned: Scalars['Boolean']['output'];
  issues: Array<AccountIssues>;
  label: Scalars['String']['output'];
  lastSynced?: Maybe<Scalars['DateTime']['output']>;
  manualTrxCount: Scalars['Int']['output'];
  manualTrxDate: TrxDate;
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  parameters: Array<AccountParameter>;
  safeDelete: Scalars['Boolean']['output'];
  sharedInventory?: Maybe<SharedInventory>;
  sharedInventoryId?: Maybe<Scalars['ID']['output']>;
  source?: Maybe<Source>;
  sourceId?: Maybe<Scalars['ID']['output']>;
  sourceTrxDrafts: Array<SourceTrxDraft>;
  sourceTrxs: Array<SourceTrx>;
  stats: Array<AccountStats>;
  status?: Maybe<TaskStatus>;
  subaccount?: Maybe<SubAccountType>;
  tag?: Maybe<Scalars['String']['output']>;
  tasks: Array<Task>;
  timezone?: Maybe<Scalars['String']['output']>;
  trxMaps: Array<TrxMap>;
  trxs: Array<Trx>;
  type: AccountType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
  validation: Array<Scalars['String']['output']>;
  virtualBalances: Array<VirtualBalance>;
  virtualTrxCount: Scalars['Int']['output'];
  virtualTrxDate: TrxDate;
  wallet: Wallet;
};

export type AccountApiLast = {
  __typename?: 'AccountApiLast';
  fromDate?: Maybe<Scalars['String']['output']>;
  lastFetch?: Maybe<Scalars['String']['output']>;
  lastTrx?: Maybe<Scalars['String']['output']>;
};

export type AccountIssue = {
  __typename?: 'AccountIssue';
  account: Account;
  accountId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  file?: Maybe<File>;
  fileId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  isRead: Scalars['Boolean']['output'];
  reminder?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountIssues = {
  __typename?: 'AccountIssues';
  account: Scalars['String']['output'];
  accountId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  file?: Maybe<Scalars['String']['output']>;
  fileId?: Maybe<Scalars['String']['output']>;
  identifier: Scalars['String']['output'];
  isRead: Scalars['Boolean']['output'];
  reminder?: Maybe<Scalars['DateTime']['output']>;
};

export type AccountParameter = {
  __typename?: 'AccountParameter';
  account: Account;
  accountId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type AccountStats = {
  __typename?: 'AccountStats';
  account: Account;
  accountId: Scalars['ID']['output'];
  counts: Scalars['JSONObject']['output'];
  createdAt: Scalars['DateTime']['output'];
  dates: Scalars['JSONObject']['output'];
};

export type AccountTree = {
  __typename?: 'AccountTree';
  allTrxCount: Scalars['Int']['output'];
  allTrxDate: TrxDate;
  dataTypes: Array<Scalars['String']['output']>;
  folderId?: Maybe<Scalars['String']['output']>;
  hasBalance: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  inventory?: Maybe<InventoryType>;
  inventoryType?: Maybe<Scalars['String']['output']>;
  isAccount: Scalars['Boolean']['output'];
  isExcluded: Scalars['Boolean']['output'];
  isPinned: Scalars['Boolean']['output'];
  issues: Array<AccountIssues>;
  label: Scalars['String']['output'];
  lastSynced?: Maybe<Scalars['DateTime']['output']>;
  path: Array<Scalars['String']['output']>;
  safeDelete: Scalars['Boolean']['output'];
  sharedInventoryId?: Maybe<Scalars['ID']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  status?: Maybe<TaskStatus>;
  subaccount?: Maybe<SubAccountType>;
  type?: Maybe<AccountType>;
  userId?: Maybe<Scalars['String']['output']>;
  validation: Array<Scalars['String']['output']>;
  virtualTrxCount: Scalars['Int']['output'];
  wallet: Wallet;
};

export enum AccountType {
  Assets = 'assets',
  Capital = 'capital',
  Liabilities = 'liabilities',
  Payable = 'payable',
  Receivable = 'receivable'
}

export type Address = {
  __typename?: 'Address';
  address: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  type: AddressType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export enum AddressType {
  Contract = 'contract',
  Wallet = 'wallet'
}

export type AgFilterModel = {
  colId: Scalars['String']['input'];
  conditions?: InputMaybe<Array<AgFilterModel>>;
  customFilterType?: InputMaybe<Scalars['String']['input']>;
  dateFrom?: InputMaybe<Scalars['String']['input']>;
  dateTo?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  filterTo?: InputMaybe<Scalars['String']['input']>;
  filterType: Scalars['String']['input'];
  operator?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  values?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AgGroupCols = {
  aggFunc?: InputMaybe<Scalars['String']['input']>;
  displayName: Scalars['String']['input'];
  field?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type AgSortModel = {
  colId: Scalars['String']['input'];
  sort: Scalars['String']['input'];
};

export type Announcement = {
  __typename?: 'Announcement';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  level: LogLevel;
  message: Scalars['String']['output'];
  notifications: Array<Notification>;
  parameters: Scalars['JSONObject']['output'];
  type: AnnouncementType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export enum AnnouncementType {
  All = 'all',
  Organization = 'organization',
  User = 'user'
}

export type Api = {
  __typename?: 'Api';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<ApiField>;
  functions: Array<ApiFunction>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  network?: Maybe<Scalars['String']['output']>;
  options: Array<ApiOption>;
  provider: Scalars['String']['output'];
  sources: Array<Source>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ApiField = {
  __typename?: 'ApiField';
  apis: Array<Api>;
  controller: FieldController;
  defaultValue?: Maybe<Scalars['String']['output']>;
  manipulations: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  options: Array<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  permission?: Maybe<Permission>;
  permissionId?: Maybe<Scalars['String']['output']>;
  validators: Array<Scalars['String']['output']>;
};

export type ApiFunction = {
  __typename?: 'ApiFunction';
  api: Api;
  apiId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<ApiFunctionField>;
  fromDate?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
};

export type ApiFunctionField = {
  __typename?: 'ApiFunctionField';
  controller: FieldController;
  defaultValue?: Maybe<Scalars['String']['output']>;
  functions: Array<ApiFunction>;
  manipulations: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  options: Array<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  validators: Array<Scalars['String']['output']>;
};

export type ApiOption = {
  __typename?: 'ApiOption';
  api: Api;
  apiId: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type BitqueryMap = {
  __typename?: 'BitqueryMap';
  bitqueryMethod: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isExcluded: Scalars['Boolean']['output'];
  method: MapMethod;
  network: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CoaAccountsInput = {
  id: Scalars['String']['input'];
  identifier?: InputMaybe<Scalars['String']['input']>;
  isOverwrited: Scalars['Boolean']['input'];
  type: CoaType;
};

export type CacheListType = {
  __typename?: 'CacheListType';
  createdAt: Scalars['DateTime']['output'];
  path: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type Changelog = {
  __typename?: 'Changelog';
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isPublished: Scalars['Boolean']['output'];
  items: Array<ChangelogItem>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
  version: Scalars['String']['output'];
};

export type ChangelogInput = {
  description: Scalars['String']['input'];
  freshdeskId?: InputMaybe<Scalars['String']['input']>;
  isMajor: Scalars['Boolean']['input'];
  jiraId?: InputMaybe<Scalars['String']['input']>;
};

export type ChangelogItem = {
  __typename?: 'ChangelogItem';
  changelog: Changelog;
  changelogId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  freshdeskId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isMajor: Scalars['Boolean']['output'];
  jiraId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type ChangelogTicket = {
  __typename?: 'ChangelogTicket';
  agent?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  inProgress: Scalars['Boolean']['output'];
  subject: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
};

export type ChartDataType = {
  __typename?: 'ChartDataType';
  backgroundColor: Array<Scalars['String']['output']>;
  data: Array<Array<Scalars['Float']['output']>>;
  fullValue: Array<Scalars['Float']['output']>;
};

export type ChartOfAccount = {
  __typename?: 'ChartOfAccount';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  fullLabel?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  isLocked: Scalars['Boolean']['output'];
  isOverwrited: Scalars['Boolean']['output'];
  journalEntries: Array<JournalEntry>;
  label?: Maybe<Scalars['String']['output']>;
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  sharedInventory?: Maybe<SharedInventory>;
  sharedInventoryId?: Maybe<Scalars['ID']['output']>;
  sideJournalEntries: Array<JournalEntry>;
  trialBalances: Array<TrialBalance>;
  type: CoaType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ChartType = {
  __typename?: 'ChartType';
  datasets: Array<ChartDataType>;
  labels: Array<Scalars['String']['output']>;
};

export type CheckExchangeRate = {
  __typename?: 'CheckExchangeRate';
  newRate: Scalars['Float']['output'];
  rate?: Maybe<Scalars['Float']['output']>;
  rateId?: Maybe<Scalars['String']['output']>;
};

export type CloseBalance = {
  __typename?: 'CloseBalance';
  address?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  inventory?: Maybe<Scalars['String']['output']>;
  inventoryId?: Maybe<Scalars['ID']['output']>;
  isConfirmed: Scalars['Boolean']['output'];
  network?: Maybe<Scalars['String']['output']>;
  request: CloseBalanceRequest;
  requestId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type CloseBalanceAdvancedInput = {
  amount: Scalars['Float']['input'];
  year: Scalars['Int']['input'];
};

export type CloseBalanceCloseInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  amount: Scalars['Float']['input'];
  currency: Scalars['String']['input'];
  date?: InputMaybe<Scalars['Dayjs']['input']>;
  inventoryId?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  sourceTrxIds: Array<Scalars['String']['input']>;
};

export type CloseBalanceCurrent = {
  __typename?: 'CloseBalanceCurrent';
  items: Array<CloseBalanceCurrentItem>;
  request?: Maybe<CloseBalanceRequest>;
};

export type CloseBalanceCurrentItem = {
  __typename?: 'CloseBalanceCurrentItem';
  address?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  balance: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  inventory?: Maybe<Scalars['String']['output']>;
  inventoryId?: Maybe<Scalars['String']['output']>;
  isConfirmed: Scalars['Boolean']['output'];
  network?: Maybe<Scalars['String']['output']>;
};

export type CloseBalanceData = {
  __typename?: 'CloseBalanceData';
  address?: Maybe<Scalars['String']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  balance: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  difference: Scalars['Float']['output'];
  id: Scalars['String']['output'];
  inventory?: Maybe<Scalars['String']['output']>;
  inventoryId?: Maybe<Scalars['String']['output']>;
  network?: Maybe<Scalars['String']['output']>;
  prevChange: Scalars['Float']['output'];
  sourceTrxIds: Array<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type CloseBalanceRequest = {
  __typename?: 'CloseBalanceRequest';
  closeBalances: Array<CloseBalance>;
  createdAt: Scalars['DateTime']['output'];
  cutoff?: Maybe<Scalars['DateTime']['output']>;
  date: Scalars['DateTime']['output'];
  freshdeskTicketId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isEditable: Scalars['Boolean']['output'];
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
  withInventories: Scalars['Boolean']['output'];
};

export type CloseBalanceSaveInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  amount: Scalars['Float']['input'];
  currency: Scalars['String']['input'];
  date?: InputMaybe<Scalars['Dayjs']['input']>;
  inventoryId?: InputMaybe<Scalars['String']['input']>;
  isConfirmed: Scalars['Boolean']['input'];
  network?: InputMaybe<Scalars['String']['input']>;
};

export type CloseBalanceSuggestion = {
  __typename?: 'CloseBalanceSuggestion';
  id: Scalars['String']['output'];
  maxClose: Scalars['Float']['output'];
  prevChange: Scalars['Float']['output'];
  sourceTrxIds: Array<Scalars['String']['output']>;
  year: Scalars['Int']['output'];
};

export enum CoaType {
  Assets = 'assets',
  BusinessActivity = 'businessActivity',
  Capital = 'capital',
  FinanceActivity = 'financeActivity',
  GainLoss = 'gainLoss',
  Liabilities = 'liabilities',
  Payable = 'payable',
  Receivable = 'receivable'
}

export type Coin = {
  __typename?: 'Coin';
  cgId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isMain: Scalars['Boolean']['output'];
  items: Array<CoinItem>;
  orderId: Scalars['Int']['output'];
  strongFrom?: Maybe<Scalars['String']['output']>;
  strongRank: Scalars['Int']['output'];
  ticker: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type CoinAgList = {
  __typename?: 'CoinAgList';
  rowCount: Scalars['Int']['output'];
  rowData: Array<Coin>;
};

export type CoinFilterUsers = {
  __typename?: 'CoinFilterUsers';
  user: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type CoinGeko = {
  __typename?: 'CoinGeko';
  address?: Maybe<Scalars['String']['output']>;
  cgId: Scalars['String']['output'];
  coin?: Maybe<Coin>;
  coinItem?: Maybe<CoinItem>;
  coinItemId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  network?: Maybe<Scalars['String']['output']>;
  ticker: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type CoinItem = {
  __typename?: 'CoinItem';
  address?: Maybe<Scalars['String']['output']>;
  cgIds: Array<Scalars['String']['output']>;
  coin: Coin;
  coinId: Scalars['ID']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isEnabled: Scalars['Boolean']['output'];
  network?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  source?: Maybe<Source>;
  sourceId?: Maybe<Scalars['ID']['output']>;
  ticker?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  language: Scalars['String']['output'];
  name: Scalars['String']['output'];
  timezone: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Currency = {
  __typename?: 'Currency';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  icon: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  symbol: Scalars['String']['output'];
  tickers: Array<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type EmailLog = {
  __typename?: 'EmailLog';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  date: Scalars['String']['output'];
  file?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  isFiat: Scalars['Boolean']['output'];
  network?: Maybe<Scalars['String']['output']>;
  orderId: Scalars['Int']['output'];
  rate: Scalars['Float']['output'];
  source: ExchangeRateSource;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum ExchangeRateSource {
  Boi = 'boi',
  Cc = 'cc',
  Cg = 'cg',
  File = 'file',
  Fixer = 'fixer',
  Manual = 'manual'
}

export type ExchangeRatesAgList = {
  __typename?: 'ExchangeRatesAgList';
  rowCount: Scalars['Int']['output'];
  rowData: Array<ExchangeRate>;
};

export type Faq = {
  __typename?: 'Faq';
  category: FaqCategory;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isFaq: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
};

export type FaqCategory = {
  __typename?: 'FaqCategory';
  createdAt: Scalars['DateTime']['output'];
  faqs: Array<Faq>;
  freshdeskId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  keywords: Array<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['String']['output'];
};

export type FaqInput = {
  description: Scalars['String']['input'];
  isFaq: Scalars['Boolean']['input'];
  label: Scalars['String']['input'];
};

export enum FieldController {
  Checkbox = 'checkbox',
  Date = 'date',
  Number = 'number',
  Select = 'select',
  Text = 'text'
}

export type File = {
  __typename?: 'File';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['ID']['output']>;
  comments?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  firstTrx?: Maybe<Scalars['String']['output']>;
  hasDuplicates: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isDone: Scalars['Boolean']['output'];
  isExcluded: Scalars['Boolean']['output'];
  issues: Array<AccountIssue>;
  label: Scalars['String']['output'];
  lastSynced: Scalars['DateTime']['output'];
  lastTrx?: Maybe<Scalars['String']['output']>;
  location: Scalars['String']['output'];
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  parserSchema?: Maybe<ParserSchema>;
  parserSchemaId?: Maybe<Scalars['ID']['output']>;
  safeDelete: Scalars['Boolean']['output'];
  size: Scalars['Float']['output'];
  sourceTrxs: Array<SourceTrx>;
  status?: Maybe<TaskStatus>;
  timefix: Scalars['Float']['output'];
  timezone?: Maybe<Scalars['String']['output']>;
  trxCount?: Maybe<Scalars['Int']['output']>;
  unsupporteds: Array<Unsupported>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type FileUpload = {
  data: Scalars['String']['input'];
  name: Scalars['String']['input'];
  size: Scalars['Float']['input'];
  type: Scalars['String']['input'];
};

export type FileUploadRequest = {
  __typename?: 'FileUploadRequest';
  fileId: Scalars['String']['output'];
  location: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type FileUploadUser = {
  comments?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  parserSchemaId?: InputMaybe<Scalars['String']['input']>;
  size: Scalars['Float']['input'];
};

export type FileValidator = {
  __typename?: 'FileValidator';
  error?: Maybe<Scalars['String']['output']>;
  parserSchemaId?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

export type Folder = {
  __typename?: 'Folder';
  accounts: Array<Account>;
  createdAt: Scalars['DateTime']['output'];
  folder?: Maybe<Folder>;
  folderId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isPinned: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  subFolders: Array<Folder>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FolderList = {
  __typename?: 'FolderList';
  id: Scalars['String']['output'];
  path: Array<Scalars['String']['output']>;
};

export type ImdDataType = {
  __typename?: 'IMDDataType';
  account: Scalars['String']['output'];
  amount: Scalars['Float']['output'];
  cost: Scalars['Float']['output'];
  onHand: Scalars['Boolean']['output'];
};

export type ImdType = {
  __typename?: 'IMDType';
  amount: Scalars['Float']['output'];
  cost: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  data: Array<ImdDataType>;
  nAmount: Scalars['Float']['output'];
  nCost: Scalars['Float']['output'];
};

export type ITimelineBalancesQuery = {
  __typename?: 'ITimelineBalancesQuery';
  address?: Maybe<Scalars['String']['output']>;
  balance: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['String']['output'];
  items: Array<ITimelineBalancesQueryItem>;
  missing: Scalars['Float']['output'];
  network?: Maybe<Scalars['String']['output']>;
};

export type ITimelineBalancesQueryItem = {
  __typename?: 'ITimelineBalancesQueryItem';
  address?: Maybe<Scalars['String']['output']>;
  balance: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['String']['output'];
  inventory?: Maybe<Scalars['String']['output']>;
  inventoryId: Scalars['String']['output'];
  missing: Scalars['Float']['output'];
  network?: Maybe<Scalars['String']['output']>;
};

export type ITimelineMissingsItem = {
  __typename?: 'ITimelineMissingsItem';
  date: Scalars['String']['output'];
  id: Scalars['String']['output'];
  inventory?: Maybe<Scalars['String']['output']>;
  inventoryId: Scalars['String']['output'];
  missing: Scalars['Float']['output'];
  sourceTrxId: Scalars['String']['output'];
  value?: Maybe<Scalars['Float']['output']>;
};

export type ITimelineMissingsQuery = {
  __typename?: 'ITimelineMissingsQuery';
  address?: Maybe<Scalars['String']['output']>;
  currency: Scalars['String']['output'];
  id: Scalars['String']['output'];
  items: Array<ITimelineMissingsItem>;
  missing: Scalars['Float']['output'];
  network?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['Float']['output']>;
};

export type ImportMapType = {
  __typename?: 'ImportMapType';
  amount?: Maybe<Scalars['Float']['output']>;
  comments?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  idHash?: Maybe<Scalars['String']['output']>;
  mapAmount?: Maybe<Scalars['Float']['output']>;
  mapComments?: Maybe<Scalars['String']['output']>;
  mapCurrency?: Maybe<Scalars['String']['output']>;
  method: Scalars['String']['output'];
  side?: Maybe<TrxSide>;
  status: Scalars['String']['output'];
  subaccount?: Maybe<Scalars['String']['output']>;
  subaccountId?: Maybe<Scalars['String']['output']>;
};

export type Instruction = {
  __typename?: 'Instruction';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  freshdeskId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  keywords: Array<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  orderId?: Maybe<Scalars['Int']['output']>;
  source: Source;
  sourceId: Scalars['String']['output'];
  steps: Array<InstructionStep>;
  type: SourceType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['String']['output'];
  video?: Maybe<Scalars['String']['output']>;
};

export type InstructionStep = {
  __typename?: 'InstructionStep';
  createdAt: Scalars['DateTime']['output'];
  data: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  instruction: Instruction;
  instructionId: Scalars['String']['output'];
  order: Scalars['Int']['output'];
};

export type InstructionStepImageInput = {
  name: Scalars['String']['input'];
  response: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
  uid: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};

export type InstructionStepInput = {
  data: Scalars['String']['input'];
  image?: InputMaybe<InstructionStepImageInput>;
};

export type InventorySeparation = {
  __typename?: 'InventorySeparation';
  address?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Float']['output'];
  comments?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  date?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  network?: Maybe<Scalars['String']['output']>;
  request: InventorySeparationRequest;
  requestId: Scalars['ID']['output'];
  return?: Maybe<Scalars['DateTime']['output']>;
  sharedInventory: SharedInventory;
  sharedInventoryId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type InventorySeparationItemInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  amount: Scalars['Float']['input'];
  comments?: InputMaybe<Scalars['String']['input']>;
  currency: Scalars['String']['input'];
  date?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  return?: InputMaybe<Scalars['String']['input']>;
  sharedInventoryId: Scalars['String']['input'];
};

export type InventorySeparationRequest = {
  __typename?: 'InventorySeparationRequest';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isSynced: Scalars['Boolean']['output'];
  items: Array<InventorySeparation>;
  label?: Maybe<Scalars['String']['output']>;
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export enum InventoryType {
  Auto = 'auto',
  Group = 'group',
  Self = 'self',
  Shared = 'shared'
}

export type JournalEntry = {
  __typename?: 'JournalEntry';
  balanceCrypto: Scalars['Float']['output'];
  balanceUser: Scalars['Float']['output'];
  coa: ChartOfAccount;
  coaId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  creditsCrypto?: Maybe<Scalars['Float']['output']>;
  creditsUser?: Maybe<Scalars['Float']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  date: Scalars['DateTime']['output'];
  debitsCrypto?: Maybe<Scalars['Float']['output']>;
  debitsUser?: Maybe<Scalars['Float']['output']>;
  description: Scalars['String']['output'];
  entryId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  request: Request;
  requestId: Scalars['ID']['output'];
  sideCoa?: Maybe<ChartOfAccount>;
  sideCoaId?: Maybe<Scalars['ID']['output']>;
  trx?: Maybe<Trx>;
  trxId?: Maybe<Scalars['String']['output']>;
};

export enum LogLevel {
  Error = 'error',
  Info = 'info',
  Warning = 'warning'
}

export type Madad = {
  __typename?: 'Madad';
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rate: Scalars['Float']['output'];
  source: MadadSource;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum MadadSource {
  Cbs = 'cbs',
  Manual = 'manual'
}

export type MapFile = {
  __typename?: 'MapFile';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  edited?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  original: Scalars['String']['output'];
  trxMaps: Array<TrxMap>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export enum MapMethod {
  Blackbox = 'blackbox',
  Bridge = 'bridge',
  Deposit = 'deposit',
  Donate = 'donate',
  Fee = 'fee',
  Gift = 'gift',
  Ico = 'ico',
  Income = 'income',
  IncomeDeferred = 'income_deferred',
  IncomeDividend = 'income_dividend',
  IncomeFuture = 'income_future',
  IncomeLending = 'income_lending',
  Lend = 'lend',
  Loan = 'loan',
  Lost = 'lost',
  LostFuture = 'lost_future',
  Mining = 'mining',
  Payment = 'payment',
  Poolin = 'poolin',
  Poolout = 'poolout',
  Purchase = 'purchase',
  Staking = 'staking',
  Swap = 'swap',
  Trade = 'trade',
  Transfer = 'transfer',
  TransferIn = 'transfer_in',
  TransferOut = 'transfer_out',
  Utransfer = 'utransfer',
  Vault = 'vault',
  Withdrawal = 'withdrawal'
}

export type MapSourceTrxs = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  comments?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  idHash?: InputMaybe<Scalars['String']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  sourceTrxId: Scalars['String']['input'];
};

export enum MapType {
  Auto = 'auto',
  Defi = 'defi',
  File = 'file',
  Manual = 'manual'
}

export type Metadata = {
  __typename?: 'Metadata';
  accountId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  data: Scalars['JSONObject']['output'];
  fileId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
};

export type MigrateAccountsInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  secret?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type MigrationAccountList = {
  __typename?: 'MigrationAccountList';
  address?: Maybe<Scalars['String']['output']>;
  alreadyImported: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isFile: Scalars['Boolean']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  secret?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type MigrationFileList = {
  __typename?: 'MigrationFileList';
  alreadyImported: Scalars['Boolean']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  commentAdmin?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isBad: Scalars['Boolean']['output'];
  location?: Maybe<Scalars['String']['output']>;
  trxCount: Scalars['Int']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type MigrationOpenBalanceList = {
  __typename?: 'MigrationOpenBalanceList';
  calculations: Array<Scalars['String']['output']>;
  year?: Maybe<Scalars['String']['output']>;
};

export type MigrationTrxList = {
  __typename?: 'MigrationTrxList';
  buyAmount?: Maybe<Scalars['Float']['output']>;
  buyCurrency?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  date: Scalars['String']['output'];
  exchangeName?: Maybe<Scalars['String']['output']>;
  feeAmount?: Maybe<Scalars['Float']['output']>;
  feeCurrency?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isBad: Scalars['Boolean']['output'];
  sellAmount?: Maybe<Scalars['Float']['output']>;
  sellCurrency?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type MigrationUsersList = {
  __typename?: 'MigrationUsersList';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  account_advanced_edit: Scalars['Boolean']['output'];
  account_api_advanced: Scalars['Boolean']['output'];
  account_api_reset: Scalars['Boolean']['output'];
  account_api_start: Scalars['Boolean']['output'];
  account_api_sync: Scalars['Boolean']['output'];
  account_create: Account;
  account_create_wizard: Scalars['Boolean']['output'];
  account_delete: Scalars['Boolean']['output'];
  account_edit: Scalars['Boolean']['output'];
  account_exclude: Scalars['Boolean']['output'];
  account_folder: Scalars['Boolean']['output'];
  account_inventory: Scalars['Boolean']['output'];
  account_issue_delete: Scalars['Boolean']['output'];
  account_issue_reminder: Scalars['Boolean']['output'];
  account_issue_status: Scalars['Boolean']['output'];
  account_parameters: Scalars['Boolean']['output'];
  account_pin: Scalars['Boolean']['output'];
  account_subaccounts: Scalars['Boolean']['output'];
  account_update: Account;
  account_wallets_bulk: Scalars['Boolean']['output'];
  address_delete: Scalars['Boolean']['output'];
  address_upsert: Scalars['Boolean']['output'];
  announcement_delete: Scalars['Boolean']['output'];
  announcement_upsert: Scalars['Boolean']['output'];
  api_function: Scalars['String']['output'];
  bitqueryMap_create: Scalars['Boolean']['output'];
  bitqueryMap_delete: Scalars['Boolean']['output'];
  bitqueryMap_edit: Scalars['Boolean']['output'];
  bitqueryMap_status: Scalars['Boolean']['output'];
  cache_delete: Scalars['Boolean']['output'];
  cache_download: Scalars['String']['output'];
  changelog_bug: Scalars['Boolean']['output'];
  changelog_create: Scalars['Boolean']['output'];
  changelog_delete: Scalars['Boolean']['output'];
  changelog_edit: Scalars['Boolean']['output'];
  changelog_status: Scalars['Boolean']['output'];
  closeBalanceRequest_merge: Scalars['Boolean']['output'];
  closeBalanceRequest_remove: Scalars['Boolean']['output'];
  closeBalanceRequest_upsert: Scalars['String']['output'];
  closeBalance_advanced: Scalars['Boolean']['output'];
  closeBalance_close: Scalars['Boolean']['output'];
  closeBalance_complete: Scalars['Boolean']['output'];
  closeBalance_editable: Scalars['Boolean']['output'];
  closeBalance_reset: Scalars['Boolean']['output'];
  closeBalance_save: Scalars['Boolean']['output'];
  closeBalance_status: Scalars['Boolean']['output'];
  closeBalance_suggestions: Array<CloseBalanceSuggestion>;
  coa_export: Scalars['String']['output'];
  coa_import: Scalars['Boolean']['output'];
  coa_overwrite: Scalars['Boolean']['output'];
  coa_reset: Scalars['Boolean']['output'];
  coinGeko_create: Scalars['Boolean']['output'];
  coinGeko_reject: Scalars['Boolean']['output'];
  coinGeko_remove: Scalars['Boolean']['output'];
  coinGeko_update: Scalars['Boolean']['output'];
  coin_check: Scalars['Boolean']['output'];
  coin_delete: Scalars['Boolean']['output'];
  coin_item_delete: Scalars['Boolean']['output'];
  coin_item_move: Scalars['Boolean']['output'];
  coin_item_status: Scalars['Boolean']['output'];
  coin_item_ticker: Scalars['Boolean']['output'];
  coin_item_upsert: Scalars['Boolean']['output'];
  coin_quick: Scalars['String']['output'];
  coin_split: Scalars['Boolean']['output'];
  coin_status: Scalars['Boolean']['output'];
  coin_upsert: Scalars['Boolean']['output'];
  config_save: Scalars['Boolean']['output'];
  currency_delete: Scalars['Boolean']['output'];
  currency_status: Scalars['Boolean']['output'];
  currency_upsert: Scalars['Boolean']['output'];
  exchangeRate_check: CheckExchangeRate;
  exchangeRate_create: Scalars['Boolean']['output'];
  exchangeRate_delete: Scalars['Boolean']['output'];
  exchangeRate_edit: Scalars['Boolean']['output'];
  /** view */
  exchangeRate_export: Scalars['String']['output'];
  exchangeRate_fairValues: Scalars['Boolean']['output'];
  exchangeRate_get: Scalars['Float']['output'];
  /** view,add */
  exchangeRate_import: Scalars['Boolean']['output'];
  exchangeRate_import_boi: Scalars['Boolean']['output'];
  exchangeRate_save: Scalars['Boolean']['output'];
  faq_create: Scalars['Boolean']['output'];
  faq_delete: Scalars['Boolean']['output'];
  faq_edit: Scalars['Boolean']['output'];
  file_batch: Array<Scalars['Int']['output']>;
  file_batch_check: Array<File>;
  file_comments: Scalars['Boolean']['output'];
  file_delete: Scalars['Boolean']['output'];
  file_done: Scalars['Boolean']['output'];
  file_download: Scalars['String']['output'];
  file_exclude: Scalars['Boolean']['output'];
  file_master: Scalars['Boolean']['output'];
  file_move: Scalars['Boolean']['output'];
  file_parsing: Scalars['Boolean']['output'];
  file_request: FileUploadRequest;
  file_save: Scalars['Boolean']['output'];
  file_timefix: Scalars['Boolean']['output'];
  file_upload: Scalars['Boolean']['output'];
  file_validate: FileValidator;
  folder_create: Scalars['Boolean']['output'];
  folder_move: Scalars['Boolean']['output'];
  instruction_create: Scalars['Boolean']['output'];
  instruction_delete: Scalars['Boolean']['output'];
  instruction_delete_image: Scalars['Boolean']['output'];
  instruction_edit: Scalars['Boolean']['output'];
  inventorySeparationRequest_remove: Scalars['String']['output'];
  inventorySeparationRequest_status: Scalars['String']['output'];
  inventorySeparationRequest_upsert: Scalars['String']['output'];
  inventorySeparation_save: Scalars['Boolean']['output'];
  inventorySeparation_sync: Scalars['Boolean']['output'];
  log_export_email: Scalars['String']['output'];
  log_export_organization: Scalars['String']['output'];
  log_export_pipedrive: Scalars['String']['output'];
  log_export_system: Scalars['String']['output'];
  log_export_task: Scalars['String']['output'];
  mapFile_delete: Scalars['Boolean']['output'];
  /** view,edit */
  mapFile_edit: Scalars['Boolean']['output'];
  /** view,add,edit */
  mapFile_save: Scalars['Boolean']['output'];
  /** view */
  mapFile_show: Array<ImportMapType>;
  /** view,add */
  mapFile_upload: Scalars['String']['output'];
  migration_check?: Maybe<Scalars['String']['output']>;
  migration_create_accounts: Scalars['Boolean']['output'];
  migration_create_org: Scalars['String']['output'];
  migration_openbalance: Scalars['Boolean']['output'];
  migration_send_input: Scalars['Boolean']['output'];
  migration_transfer_files: Scalars['Boolean']['output'];
  migration_transfer_transations: Scalars['Boolean']['output'];
  migration_verify?: Maybe<Scalars['String']['output']>;
  network_upsert: Scalars['Boolean']['output'];
  notification_delete: Scalars['Boolean']['output'];
  notification_status: Scalars['Boolean']['output'];
  openBalanceRequest_remove: Scalars['Boolean']['output'];
  openBalanceRequest_status: Scalars['Boolean']['output'];
  openBalanceRequest_upsert: Scalars['String']['output'];
  openBalance_export: Scalars['String']['output'];
  openBalance_import: Scalars['Boolean']['output'];
  openBalance_save: Scalars['Boolean']['output'];
  openBalance_sync: Scalars['Boolean']['output'];
  organization_comments_remove: Scalars['Boolean']['output'];
  organization_comments_upsert: Scalars['Boolean']['output'];
  organization_delete: Scalars['Boolean']['output'];
  /** view,edit */
  organization_edit_status: Scalars['Boolean']['output'];
  organization_export: Scalars['Boolean']['output'];
  organization_member_add: Scalars['Boolean']['output'];
  organization_member_cpa: Scalars['Boolean']['output'];
  organization_member_invite: Scalars['Boolean']['output'];
  organization_member_remove: Scalars['Boolean']['output'];
  organization_pipedriveDealId: PipedriveId;
  organization_sync: Scalars['Boolean']['output'];
  organization_upsert: Scalars['Boolean']['output'];
  parser_builder_import: Array<ParserBuilder>;
  parser_builder_save: Scalars['Boolean']['output'];
  parser_delete: Scalars['Boolean']['output'];
  parser_schema_delete: Scalars['Boolean']['output'];
  parser_schema_duplicate: Scalars['Boolean']['output'];
  parser_schema_upsert: Scalars['Boolean']['output'];
  parser_status: Scalars['Boolean']['output'];
  parser_upsert: Scalars['Boolean']['output'];
  paymentLegacy_create: Scalars['Boolean']['output'];
  payment_attach: Scalars['Boolean']['output'];
  payment_cancel: Scalars['Boolean']['output'];
  payment_complete: Scalars['Boolean']['output'];
  payment_create: Scalars['Boolean']['output'];
  payment_prepayment: Scalars['Boolean']['output'];
  request_advanced_create: Scalars['Boolean']['output'];
  request_automation: Scalars['Boolean']['output'];
  request_bloxtax_cpa: Scalars['Boolean']['output'];
  request_comments: Scalars['Boolean']['output'];
  request_create: Scalars['Boolean']['output'];
  request_delete: Scalars['Boolean']['output'];
  request_download?: Maybe<Scalars['String']['output']>;
  request_freeze: Scalars['Boolean']['output'];
  request_reset: Scalars['Boolean']['output'];
  request_save: Scalars['Boolean']['output'];
  request_selfCreate: Scalars['Boolean']['output'];
  request_share: Scalars['Boolean']['output'];
  request_unshare: Scalars['Boolean']['output'];
  role_upsert: Scalars['Boolean']['output'];
  sharedInventory_change: Scalars['Boolean']['output'];
  sharedInventory_delete: Scalars['Boolean']['output'];
  sharedInventory_upsert: Scalars['Boolean']['output'];
  sourceTrxDraft_convert: Scalars['Boolean']['output'];
  sourceTrxDraft_delete: Scalars['Boolean']['output'];
  sourceTrxDraft_set_tag: Scalars['Boolean']['output'];
  sourceTrx_bulkEdit: Scalars['Boolean']['output'];
  sourceTrx_documentation_request: FileUploadRequest;
  sourceTrx_edit: Scalars['Boolean']['output'];
  sourceTrx_exclude: Scalars['Boolean']['output'];
  sourceTrx_manual_create: Scalars['String']['output'];
  sourceTrx_manual_delete: Scalars['Boolean']['output'];
  sourceTrx_manual_delete_documentation: Scalars['Boolean']['output'];
  sourceTrx_manual_documentation: Scalars['Boolean']['output'];
  sourceTrx_manual_edit: Scalars['String']['output'];
  sourceTrx_set_tag: Scalars['Boolean']['output'];
  sourceTrx_split: Scalars['Boolean']['output'];
  source_status: Scalars['Boolean']['output'];
  /** view,add */
  source_upsert: Scalars['Boolean']['output'];
  swap_delete: Scalars['Boolean']['output'];
  swap_status: Scalars['Boolean']['output'];
  swap_upsert: Scalars['Boolean']['output'];
  tag_create: Scalars['Boolean']['output'];
  tag_upsert: Scalars['Boolean']['output'];
  task_api_log: Scalars['String']['output'];
  task_destroy: Scalars['Boolean']['output'];
  task_enlarge: Scalars['Boolean']['output'];
  task_restart: Scalars['Boolean']['output'];
  task_set: Scalars['Boolean']['output'];
  task_start: Scalars['Boolean']['output'];
  task_stop: Scalars['Boolean']['output'];
  task_subscribe: Scalars['Boolean']['output'];
  task_terminate: Scalars['Boolean']['output'];
  timeline_refresh_balances: Scalars['Boolean']['output'];
  /** view,add */
  transfer_approve: Scalars['Boolean']['output'];
  /** view,add,edit */
  transfer_comments: Scalars['Boolean']['output'];
  transfer_connect: Scalars['Boolean']['output'];
  transfer_disconnect: Scalars['Boolean']['output'];
  /** view,edit */
  transfer_reject: Scalars['Boolean']['output'];
  transfer_request: Scalars['Boolean']['output'];
  trialBalance_chart_fcd: ChartType;
  trialBalance_chart_imd: Array<ImdType>;
  trxMap_clear: Scalars['Boolean']['output'];
  trxMap_defi: Scalars['Boolean']['output'];
  trxMap_force_normalization: Scalars['Boolean']['output'];
  trxMap_reset: Scalars['Boolean']['output'];
  trxMap_set: Scalars['Boolean']['output'];
  trxMap_timefix: Scalars['Boolean']['output'];
  trx_comments: Scalars['Boolean']['output'];
  unsupported_comments: Scalars['Boolean']['output'];
  unsupported_edit: Scalars['Boolean']['output'];
  unsupported_fix: Scalars['Boolean']['output'];
  unsupported_fix_edit: Scalars['Boolean']['output'];
  unsupported_remove: Scalars['Boolean']['output'];
  unsupported_request: FileUploadRequest;
  unsupported_source_file: Scalars['Boolean']['output'];
  unsupported_source_wallet: Scalars['Boolean']['output'];
  unsupported_status: Scalars['Boolean']['output'];
  user_admin: Scalars['Boolean']['output'];
  user_phone: Scalars['Boolean']['output'];
  user_pipedrivePersonId: PipedriveId;
  user_remove: Scalars['Boolean']['output'];
  user_roles: Scalars['Boolean']['output'];
  user_selfedit: Scalars['Boolean']['output'];
  user_signup_support: Scalars['String']['output'];
  user_status: Scalars['Boolean']['output'];
  user_support: Scalars['Boolean']['output'];
  user_sync?: Maybe<SyncType>;
  validate_address: Scalars['Boolean']['output'];
  validate_api: Scalars['String']['output'];
  validate_api_exists: Scalars['Boolean']['output'];
  validate_tag_exists: Scalars['Boolean']['output'];
  validate_wallet_exists: Scalars['Boolean']['output'];
  watchdog_delete: Scalars['Boolean']['output'];
  watchdog_upsert: Scalars['Boolean']['output'];
};


export type MutationAccount_Advanced_EditArgs = {
  accountId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  parameters: Array<ParametersType>;
  subaccount?: InputMaybe<SubAccountType>;
  tag: Scalars['String']['input'];
  timezone?: InputMaybe<Scalars['String']['input']>;
  type: AccountType;
};


export type MutationAccount_Api_AdvancedArgs = {
  accountId: Scalars['String']['input'];
  functions: Array<Scalars['String']['input']>;
  isReset: Scalars['Boolean']['input'];
  subscribe: Scalars['Boolean']['input'];
};


export type MutationAccount_Api_ResetArgs = {
  accountId: Scalars['String']['input'];
  subscribe: Scalars['Boolean']['input'];
};


export type MutationAccount_Api_StartArgs = {
  accountId: Scalars['String']['input'];
  subscribe: Scalars['Boolean']['input'];
};


export type MutationAccount_Api_SyncArgs = {
  accountIds: Array<Scalars['String']['input']>;
};


export type MutationAccount_CreateArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  parameters: Array<ParametersType>;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  subaccount?: InputMaybe<SubAccountType>;
  tag?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AccountType>;
};


export type MutationAccount_Create_WizardArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  exchangeIds: Array<Scalars['String']['input']>;
  hasCash: Scalars['Boolean']['input'];
  hasUser: Scalars['Boolean']['input'];
  hasWallets: Scalars['Boolean']['input'];
  walletAddresses: Array<Scalars['String']['input']>;
};


export type MutationAccount_DeleteArgs = {
  accountIds: Array<Scalars['String']['input']>;
};


export type MutationAccount_EditArgs = {
  accountId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  tag: Scalars['String']['input'];
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAccount_ExcludeArgs = {
  accountIds: Array<Scalars['String']['input']>;
  state: Scalars['Boolean']['input'];
};


export type MutationAccount_FolderArgs = {
  accountIds: Array<Scalars['String']['input']>;
  folderId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAccount_InventoryArgs = {
  accountId: Scalars['String']['input'];
  inventory: InventoryType;
  sharedInventoryId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationAccount_Issue_DeleteArgs = {
  accountId: Scalars['String']['input'];
  fileId?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
};


export type MutationAccount_Issue_ReminderArgs = {
  accountId: Scalars['String']['input'];
  fileId?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
};


export type MutationAccount_Issue_StatusArgs = {
  accountId: Scalars['String']['input'];
  fileId?: InputMaybe<Scalars['String']['input']>;
  identifier: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationAccount_ParametersArgs = {
  accountId: Scalars['String']['input'];
  parameters: Array<ParametersType>;
};


export type MutationAccount_PinArgs = {
  accountId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationAccount_SubaccountsArgs = {
  accountId: Scalars['String']['input'];
};


export type MutationAccount_UpdateArgs = {
  accountId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  parameters: Array<ParametersType>;
};


export type MutationAccount_Wallets_BulkArgs = {
  addresses: Array<Scalars['String']['input']>;
};


export type MutationAddress_DeleteArgs = {
  address: Scalars['String']['input'];
};


export type MutationAddress_UpsertArgs = {
  address: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  type: AddressType;
};


export type MutationAnnouncement_DeleteArgs = {
  announcementId: Scalars['String']['input'];
};


export type MutationAnnouncement_UpsertArgs = {
  announcementId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  level: LogLevel;
  message: Scalars['String']['input'];
  parameters: Scalars['JSONObject']['input'];
  type: AnnouncementType;
};


export type MutationApi_FunctionArgs = {
  accountId: Scalars['String']['input'];
  apiFunction: Scalars['String']['input'];
  parameters: Array<ParametersType>;
};


export type MutationBitqueryMap_CreateArgs = {
  bitqueryMethod: Scalars['String']['input'];
  isExcluded: Scalars['Boolean']['input'];
  method: MapMethod;
  networks: Array<Scalars['String']['input']>;
};


export type MutationBitqueryMap_DeleteArgs = {
  bitqueryMapIds: Array<Scalars['String']['input']>;
};


export type MutationBitqueryMap_EditArgs = {
  bitqueryMapId: Scalars['String']['input'];
  bitqueryMethod: Scalars['String']['input'];
  isExcluded: Scalars['Boolean']['input'];
  method: MapMethod;
  network: Scalars['String']['input'];
};


export type MutationBitqueryMap_StatusArgs = {
  bitqueryMapId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationCache_DeleteArgs = {
  path: Scalars['String']['input'];
};


export type MutationCache_DownloadArgs = {
  path: Scalars['String']['input'];
};


export type MutationChangelog_BugArgs = {
  changelogId?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
  ticketId: Scalars['String']['input'];
};


export type MutationChangelog_CreateArgs = {
  date: Scalars['Dayjs']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  items: Array<ChangelogInput>;
  version: Scalars['String']['input'];
};


export type MutationChangelog_DeleteArgs = {
  changelogId: Scalars['String']['input'];
};


export type MutationChangelog_EditArgs = {
  changelogId: Scalars['String']['input'];
  date: Scalars['Dayjs']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  items: Array<ChangelogInput>;
  version: Scalars['String']['input'];
};


export type MutationChangelog_StatusArgs = {
  changelogId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationCloseBalanceRequest_MergeArgs = {
  requestIds: Array<Scalars['String']['input']>;
};


export type MutationCloseBalanceRequest_RemoveArgs = {
  requestId: Scalars['String']['input'];
};


export type MutationCloseBalanceRequest_UpsertArgs = {
  cutoff?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['String']['input'];
  requestId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCloseBalance_AdvancedArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  balances: Array<CloseBalanceAdvancedInput>;
  currency: Scalars['String']['input'];
  network?: InputMaybe<Scalars['String']['input']>;
  requestId: Scalars['String']['input'];
};


export type MutationCloseBalance_CloseArgs = {
  balances: Array<CloseBalanceCloseInput>;
  requestId: Scalars['String']['input'];
};


export type MutationCloseBalance_CompleteArgs = {
  balances: Array<CloseBalanceSaveInput>;
  requestId: Scalars['String']['input'];
};


export type MutationCloseBalance_EditableArgs = {
  requestId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationCloseBalance_ResetArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  inventoryId?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  requestId: Scalars['String']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCloseBalance_SaveArgs = {
  balances: Array<CloseBalanceSaveInput>;
  requestId: Scalars['String']['input'];
};


export type MutationCloseBalance_StatusArgs = {
  requestId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationCloseBalance_SuggestionsArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  currency: Scalars['String']['input'];
  date?: InputMaybe<Scalars['Dayjs']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  requestId: Scalars['String']['input'];
  timezone: Scalars['String']['input'];
};


export type MutationCoa_ImportArgs = {
  data: Scalars['String']['input'];
};


export type MutationCoa_OverwriteArgs = {
  accounts: Array<CoaAccountsInput>;
};


export type MutationCoinGeko_CreateArgs = {
  coinGekoIds: Array<Scalars['String']['input']>;
};


export type MutationCoinGeko_RejectArgs = {
  coinGekoIds: Array<Scalars['String']['input']>;
};


export type MutationCoinGeko_RemoveArgs = {
  coinGekoIds: Array<Scalars['String']['input']>;
};


export type MutationCoinGeko_UpdateArgs = {
  coinGekoIds: Array<Scalars['String']['input']>;
  coinId: Scalars['String']['input'];
};


export type MutationCoin_CheckArgs = {
  coinId?: InputMaybe<Scalars['String']['input']>;
  ticker: Scalars['String']['input'];
};


export type MutationCoin_DeleteArgs = {
  coinId: Scalars['String']['input'];
};


export type MutationCoin_Item_DeleteArgs = {
  itemId: Scalars['String']['input'];
};


export type MutationCoin_Item_MoveArgs = {
  coinId: Scalars['String']['input'];
  coinItemId: Scalars['String']['input'];
};


export type MutationCoin_Item_StatusArgs = {
  coinItemId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationCoin_Item_TickerArgs = {
  coinItemId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationCoin_Item_UpsertArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  cgIds: Array<Scalars['String']['input']>;
  coinId: Scalars['String']['input'];
  coinItemId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  sourceId?: InputMaybe<Scalars['String']['input']>;
  ticker?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCoin_QuickArgs = {
  address: Scalars['String']['input'];
  currency: Scalars['String']['input'];
  network: Scalars['String']['input'];
};


export type MutationCoin_SplitArgs = {
  itemId: Scalars['String']['input'];
};


export type MutationCoin_StatusArgs = {
  coinId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationCoin_UpsertArgs = {
  cgId: Scalars['String']['input'];
  coinId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMain: Scalars['Boolean']['input'];
  strongFrom?: InputMaybe<Scalars['String']['input']>;
  strongRank: Scalars['Int']['input'];
  ticker: Scalars['String']['input'];
};


export type MutationConfig_SaveArgs = {
  input: Scalars['JSONObject']['input'];
};


export type MutationCurrency_DeleteArgs = {
  currencyId: Scalars['String']['input'];
};


export type MutationCurrency_StatusArgs = {
  currencyId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationCurrency_UpsertArgs = {
  currencyId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon: Scalars['String']['input'];
  symbol: Scalars['String']['input'];
  tickers: Array<Scalars['String']['input']>;
};


export type MutationExchangeRate_CheckArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  currency: Scalars['String']['input'];
  date: Scalars['String']['input'];
  identifier?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  source: ExchangeRateSource;
};


export type MutationExchangeRate_CreateArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  currency: Scalars['String']['input'];
  date: Scalars['String']['input'];
  identifier?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  rate: Scalars['Float']['input'];
};


export type MutationExchangeRate_DeleteArgs = {
  rateIds: Array<Scalars['String']['input']>;
};


export type MutationExchangeRate_EditArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  rate: Scalars['Float']['input'];
  rateId: Scalars['String']['input'];
};


export type MutationExchangeRate_ExportArgs = {
  currencies?: InputMaybe<Array<Scalars['String']['input']>>;
  dateRange?: InputMaybe<Array<Scalars['Dayjs']['input']>>;
};


export type MutationExchangeRate_FairValuesArgs = {
  date: Scalars['String']['input'];
};


export type MutationExchangeRate_GetArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  currency: Scalars['String']['input'];
  date: Scalars['String']['input'];
  network?: InputMaybe<Scalars['String']['input']>;
};


export type MutationExchangeRate_ImportArgs = {
  data: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type MutationExchangeRate_Import_BoiArgs = {
  data: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type MutationExchangeRate_SaveArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  currency: Scalars['String']['input'];
  date: Scalars['Dayjs']['input'];
  identifier?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  rate: Scalars['Float']['input'];
  rateId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationFaq_CreateArgs = {
  faqs: Array<FaqInput>;
  keywords: Array<Scalars['String']['input']>;
  label: Scalars['String']['input'];
};


export type MutationFaq_DeleteArgs = {
  categoryId: Scalars['String']['input'];
};


export type MutationFaq_EditArgs = {
  categoryId: Scalars['String']['input'];
  faqs: Array<FaqInput>;
  keywords: Array<Scalars['String']['input']>;
  label: Scalars['String']['input'];
};


export type MutationFile_BatchArgs = {
  fileIds: Array<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


export type MutationFile_Batch_CheckArgs = {
  parserId?: InputMaybe<Scalars['String']['input']>;
  sourceId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationFile_CommentsArgs = {
  comments: Scalars['String']['input'];
  fileId: Scalars['String']['input'];
};


export type MutationFile_DeleteArgs = {
  fileIds: Array<Scalars['String']['input']>;
};


export type MutationFile_DoneArgs = {
  fileId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationFile_DownloadArgs = {
  location: Scalars['String']['input'];
};


export type MutationFile_ExcludeArgs = {
  fileIds: Array<Scalars['String']['input']>;
  state: Scalars['Boolean']['input'];
};


export type MutationFile_MasterArgs = {
  file: FileUpload;
};


export type MutationFile_MoveArgs = {
  accountId: Scalars['String']['input'];
  fileIds: Array<Scalars['String']['input']>;
};


export type MutationFile_ParsingArgs = {
  accountId: Scalars['String']['input'];
  fileIds: Array<Scalars['String']['input']>;
  isMultiple: Scalars['Boolean']['input'];
};


export type MutationFile_RequestArgs = {
  accountId: Scalars['String']['input'];
  filename: Scalars['String']['input'];
  filetype: Scalars['String']['input'];
};


export type MutationFile_SaveArgs = {
  accountId: Scalars['String']['input'];
  upload: Array<FileUploadUser>;
};


export type MutationFile_TimefixArgs = {
  fileId: Scalars['String']['input'];
  timefix: Scalars['Float']['input'];
};


export type MutationFile_UploadArgs = {
  accountId?: InputMaybe<Scalars['String']['input']>;
  upload: Array<FileUpload>;
};


export type MutationFile_ValidateArgs = {
  base64: Scalars['String']['input'];
  extension: Scalars['String']['input'];
  sourceId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationFolder_CreateArgs = {
  accountIds: Array<Scalars['String']['input']>;
  label: Scalars['String']['input'];
};


export type MutationFolder_MoveArgs = {
  folderIds: Array<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationInstruction_CreateArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  isActive: Scalars['Boolean']['input'];
  keywords: Array<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  orderId?: InputMaybe<Scalars['Int']['input']>;
  sourceId: Scalars['String']['input'];
  steps: Array<InstructionStepInput>;
  type: SourceType;
  video?: InputMaybe<Scalars['String']['input']>;
};


export type MutationInstruction_DeleteArgs = {
  instructionId: Scalars['String']['input'];
};


export type MutationInstruction_Delete_ImageArgs = {
  stepId: Scalars['String']['input'];
};


export type MutationInstruction_EditArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  instructionId: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  keywords: Array<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  orderId?: InputMaybe<Scalars['Int']['input']>;
  sourceId: Scalars['String']['input'];
  steps: Array<InstructionStepInput>;
  type: SourceType;
  video?: InputMaybe<Scalars['String']['input']>;
};


export type MutationInventorySeparationRequest_RemoveArgs = {
  requestId: Scalars['String']['input'];
};


export type MutationInventorySeparationRequest_StatusArgs = {
  requestId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationInventorySeparationRequest_UpsertArgs = {
  label?: InputMaybe<Scalars['String']['input']>;
  requestId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationInventorySeparation_SaveArgs = {
  items: Array<InventorySeparationItemInput>;
  requestId: Scalars['String']['input'];
};


export type MutationInventorySeparation_SyncArgs = {
  requestId: Scalars['String']['input'];
};


export type MutationLog_Export_OrganizationArgs = {
  organizationId: Scalars['String']['input'];
};


export type MutationLog_Export_SystemArgs = {
  level: Scalars['String']['input'];
};


export type MutationLog_Export_TaskArgs = {
  level: Scalars['String']['input'];
  taskId: Scalars['String']['input'];
};


export type MutationMapFile_DeleteArgs = {
  mapFileId: Scalars['String']['input'];
};


export type MutationMapFile_EditArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  mapFileId: Scalars['String']['input'];
};


export type MutationMapFile_SaveArgs = {
  data: Array<SaveMapData>;
  mapFileId: Scalars['String']['input'];
};


export type MutationMapFile_ShowArgs = {
  mapFileId: Scalars['String']['input'];
};


export type MutationMapFile_UploadArgs = {
  upload: FileUpload;
};


export type MutationMigration_CheckArgs = {
  email: Scalars['String']['input'];
};


export type MutationMigration_Create_AccountsArgs = {
  accounts: Array<MigrateAccountsInput>;
  organizationId: Scalars['String']['input'];
};


export type MutationMigration_Create_OrgArgs = {
  currentOrg: Scalars['Boolean']['input'];
  type?: InputMaybe<OrgType>;
  userId: Scalars['String']['input'];
};


export type MutationMigration_OpenbalanceArgs = {
  calculation?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationMigration_Send_InputArgs = {
  location: Scalars['String']['input'];
};


export type MutationMigration_Transfer_FilesArgs = {
  fileIds: Array<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
};


export type MutationMigration_Transfer_TransationsArgs = {
  organizationId: Scalars['String']['input'];
  trxIds: Array<Scalars['String']['input']>;
};


export type MutationMigration_VerifyArgs = {
  firebaseId: Scalars['String']['input'];
};


export type MutationNetwork_UpsertArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  keywords: Array<Scalars['String']['input']>;
  network: Scalars['String']['input'];
  networkId: Scalars['String']['input'];
  scanner?: InputMaybe<Scalars['String']['input']>;
};


export type MutationNotification_DeleteArgs = {
  notificationId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationNotification_StatusArgs = {
  notificationId?: InputMaybe<Scalars['String']['input']>;
  state: Scalars['Boolean']['input'];
};


export type MutationOpenBalanceRequest_RemoveArgs = {
  requestId: Scalars['String']['input'];
};


export type MutationOpenBalanceRequest_StatusArgs = {
  requestId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationOpenBalanceRequest_UpsertArgs = {
  calculation?: InputMaybe<RequestCalculation>;
  date: Scalars['String']['input'];
  fiat: Scalars['String']['input'];
  isSplitted: Scalars['Boolean']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  requestId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationOpenBalance_ExportArgs = {
  requestId: Scalars['String']['input'];
};


export type MutationOpenBalance_ImportArgs = {
  file: FileUpload;
  requestId: Scalars['String']['input'];
};


export type MutationOpenBalance_SaveArgs = {
  items: Array<OpenBalanceItemInput>;
  removed: Array<OpenBalanceItemInput>;
  requestId: Scalars['String']['input'];
};


export type MutationOpenBalance_SyncArgs = {
  requestId: Scalars['String']['input'];
};


export type MutationOrganization_Comments_RemoveArgs = {
  commentId: Scalars['String']['input'];
};


export type MutationOrganization_Comments_UpsertArgs = {
  comment: Scalars['String']['input'];
  commentId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationOrganization_DeleteArgs = {
  isReset: Scalars['Boolean']['input'];
  organizationId: Scalars['String']['input'];
};


export type MutationOrganization_Edit_StatusArgs = {
  organizationId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationOrganization_ExportArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['String']['input'];
};


export type MutationOrganization_Member_AddArgs = {
  organizationId: Scalars['String']['input'];
  roleId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationOrganization_Member_CpaArgs = {
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
};


export type MutationOrganization_Member_InviteArgs = {
  email: Scalars['String']['input'];
  fullname: Scalars['String']['input'];
  roleId: Scalars['String']['input'];
};


export type MutationOrganization_Member_RemoveArgs = {
  organizationId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationOrganization_PipedriveDealIdArgs = {
  orgId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationOrganization_SyncArgs = {
  organizationId: Scalars['String']['input'];
};


export type MutationOrganization_UpsertArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
  parameters: Array<ParametersType>;
  type: OrgType;
  wizard: Scalars['Boolean']['input'];
};


export type MutationParser_Builder_ImportArgs = {
  base64: Scalars['String']['input'];
  extension: Scalars['String']['input'];
  schemaId: Scalars['String']['input'];
};


export type MutationParser_Builder_SaveArgs = {
  columns: Array<ParserBuilderInput>;
  schemaId: Scalars['String']['input'];
};


export type MutationParser_DeleteArgs = {
  parserId: Scalars['String']['input'];
};


export type MutationParser_Schema_DeleteArgs = {
  schemaId: Scalars['String']['input'];
};


export type MutationParser_Schema_DuplicateArgs = {
  schemaId: Scalars['String']['input'];
};


export type MutationParser_Schema_UpsertArgs = {
  parserId: Scalars['String']['input'];
  row: Scalars['Int']['input'];
  schemaId?: InputMaybe<Scalars['String']['input']>;
  target: Array<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type MutationParser_StatusArgs = {
  parserId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationParser_UpsertArgs = {
  description: Scalars['String']['input'];
  isRequired: Scalars['Boolean']['input'];
  outlet?: InputMaybe<Outlet>;
  parserId?: InputMaybe<Scalars['String']['input']>;
  sourceIds: Array<Scalars['String']['input']>;
};


export type MutationPaymentLegacy_CreateArgs = {
  amount: Scalars['Float']['input'];
  comments?: InputMaybe<Scalars['String']['input']>;
  currency: Scalars['String']['input'];
  parameters: Array<ParametersType>;
  type: PaymentType;
  years: Array<YearsType>;
};


export type MutationPayment_AttachArgs = {
  paymentId: Scalars['String']['input'];
};


export type MutationPayment_CancelArgs = {
  paymentId: Scalars['String']['input'];
};


export type MutationPayment_CompleteArgs = {
  invoiceId?: InputMaybe<Scalars['String']['input']>;
  paymentId: Scalars['String']['input'];
};


export type MutationPayment_CreateArgs = {
  amount: Scalars['Float']['input'];
  comments?: InputMaybe<Scalars['String']['input']>;
  currency: Scalars['String']['input'];
  discount: PaymentItemInput;
  isManual: Scalars['Boolean']['input'];
  items: Array<PaymentItemInput>;
  payments: Scalars['Int']['input'];
  prepaymentIds: Array<Scalars['String']['input']>;
  reports: Array<PaymentReportItemInput>;
  vat: Scalars['Boolean']['input'];
};


export type MutationPayment_PrepaymentArgs = {
  amount: Scalars['Float']['input'];
  comments?: InputMaybe<Scalars['String']['input']>;
  currency: Scalars['String']['input'];
  discount: PaymentItemInput;
  payments: Scalars['Int']['input'];
  vat: Scalars['Boolean']['input'];
};


export type MutationRequest_Advanced_CreateArgs = {
  accountIds: Array<Scalars['String']['input']>;
  builder: Scalars['JSONObject']['input'];
  calculation: RequestCalculation;
  checkRates: Scalars['Boolean']['input'];
  comments?: InputMaybe<Scalars['String']['input']>;
  fromDate?: InputMaybe<Scalars['Dayjs']['input']>;
  options: Array<Scalars['String']['input']>;
  toDate?: InputMaybe<Scalars['Dayjs']['input']>;
};


export type MutationRequest_CommentsArgs = {
  comments: Scalars['String']['input'];
  requestId: Scalars['String']['input'];
};


export type MutationRequest_CreateArgs = {
  accountIds: Array<Scalars['String']['input']>;
  builder: Scalars['JSONObject']['input'];
  calculation: RequestCalculation;
  checkOrg: Scalars['Boolean']['input'];
  checkRates: Scalars['Boolean']['input'];
  comments?: InputMaybe<Scalars['String']['input']>;
  compareShared: Scalars['Boolean']['input'];
  cutOff?: InputMaybe<Scalars['String']['input']>;
  fairValue?: InputMaybe<Scalars['Boolean']['input']>;
  fairValueDate?: InputMaybe<Scalars['String']['input']>;
  options: Array<Scalars['String']['input']>;
  pdf: Scalars['Boolean']['input'];
};


export type MutationRequest_DeleteArgs = {
  requestId: Scalars['String']['input'];
};


export type MutationRequest_DownloadArgs = {
  requestId: Scalars['String']['input'];
  type: Scalars['String']['input'];
};


export type MutationRequest_FreezeArgs = {
  requestDataId: Scalars['String']['input'];
};


export type MutationRequest_ResetArgs = {
  year: Scalars['Int']['input'];
};


export type MutationRequest_SaveArgs = {
  requestId: Scalars['String']['input'];
};


export type MutationRequest_SelfCreateArgs = {
  years: Array<Scalars['Int']['input']>;
};


export type MutationRequest_ShareArgs = {
  requestId: Scalars['String']['input'];
  shareExtended: Scalars['Boolean']['input'];
  years: Array<Scalars['Int']['input']>;
};


export type MutationRequest_UnshareArgs = {
  year: Scalars['Int']['input'];
};


export type MutationRole_UpsertArgs = {
  description: Scalars['String']['input'];
  invitable: Scalars['Boolean']['input'];
  isActive: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  permissionIds: Array<Scalars['String']['input']>;
  roleId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSharedInventory_ChangeArgs = {
  inventory: InventoryType;
};


export type MutationSharedInventory_DeleteArgs = {
  sharedInventoryId: Scalars['String']['input'];
};


export type MutationSharedInventory_UpsertArgs = {
  accountIds: Array<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  label: Scalars['String']['input'];
  sharedInventoryId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSourceTrxDraft_ConvertArgs = {
  accountId: Scalars['String']['input'];
  buyAmount?: InputMaybe<Scalars['Float']['input']>;
  buyCurrency?: InputMaybe<Scalars['String']['input']>;
  buyToken?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['Dayjs']['input'];
  draftId: Scalars['String']['input'];
  feeAmount?: InputMaybe<Scalars['Float']['input']>;
  feeCurrency?: InputMaybe<Scalars['String']['input']>;
  feeToken?: InputMaybe<Scalars['String']['input']>;
  idHash?: InputMaybe<Scalars['String']['input']>;
  method: MapMethod;
  network?: InputMaybe<Scalars['String']['input']>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  sellAmount?: InputMaybe<Scalars['Float']['input']>;
  sellCurrency?: InputMaybe<Scalars['String']['input']>;
  sellToken?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  smartContract?: InputMaybe<Scalars['String']['input']>;
  subAccountId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSourceTrxDraft_DeleteArgs = {
  draftTrxIds: Array<Scalars['String']['input']>;
};


export type MutationSourceTrxDraft_Set_TagArgs = {
  sourceTrxDraftIds: Array<Scalars['String']['input']>;
  tagId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSourceTrx_BulkEditArgs = {
  key: Scalars['String']['input'];
  sourceTrxIds: Array<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSourceTrx_Documentation_RequestArgs = {
  filename: Scalars['String']['input'];
  filetype: Scalars['String']['input'];
  sourceTrxId: Scalars['String']['input'];
};


export type MutationSourceTrx_EditArgs = {
  buyToken?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Scalars['String']['input']>;
  feeToken?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
  sellToken?: InputMaybe<Scalars['String']['input']>;
  sourceTrxId: Scalars['String']['input'];
};


export type MutationSourceTrx_ExcludeArgs = {
  sourceTrxIds: Array<Scalars['String']['input']>;
  state: Scalars['Boolean']['input'];
};


export type MutationSourceTrx_Manual_CreateArgs = {
  accountId?: InputMaybe<Scalars['String']['input']>;
  buyAmount?: InputMaybe<Scalars['Float']['input']>;
  buyCurrency?: InputMaybe<Scalars['String']['input']>;
  buyToken?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['Dayjs']['input'];
  feeAmount?: InputMaybe<Scalars['Float']['input']>;
  feeCurrency?: InputMaybe<Scalars['String']['input']>;
  feeToken?: InputMaybe<Scalars['String']['input']>;
  idHash?: InputMaybe<Scalars['String']['input']>;
  method: MapMethod;
  network?: InputMaybe<Scalars['String']['input']>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  sellAmount?: InputMaybe<Scalars['Float']['input']>;
  sellCurrency?: InputMaybe<Scalars['String']['input']>;
  sellToken?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  smartContract?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSourceTrx_Manual_DeleteArgs = {
  sourceTrxIds: Array<Scalars['String']['input']>;
};


export type MutationSourceTrx_Manual_Delete_DocumentationArgs = {
  location: Scalars['String']['input'];
  sourceTrxId: Scalars['String']['input'];
};


export type MutationSourceTrx_Manual_DocumentationArgs = {
  location: Scalars['String']['input'];
  sourceTrxId: Scalars['String']['input'];
};


export type MutationSourceTrx_Manual_EditArgs = {
  accountId?: InputMaybe<Scalars['String']['input']>;
  buyAmount?: InputMaybe<Scalars['Float']['input']>;
  buyCurrency?: InputMaybe<Scalars['String']['input']>;
  buyToken?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['Dayjs']['input'];
  feeAmount?: InputMaybe<Scalars['Float']['input']>;
  feeCurrency?: InputMaybe<Scalars['String']['input']>;
  feeToken?: InputMaybe<Scalars['String']['input']>;
  idHash?: InputMaybe<Scalars['String']['input']>;
  method: MapMethod;
  network?: InputMaybe<Scalars['String']['input']>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  sellAmount?: InputMaybe<Scalars['Float']['input']>;
  sellCurrency?: InputMaybe<Scalars['String']['input']>;
  sellToken?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  smartContract?: InputMaybe<Scalars['String']['input']>;
  sourceTrxId: Scalars['String']['input'];
};


export type MutationSourceTrx_Set_TagArgs = {
  sourceTrxIds: Array<Scalars['String']['input']>;
  tagId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSourceTrx_SplitArgs = {
  sourceTrxId: Scalars['String']['input'];
};


export type MutationSource_StatusArgs = {
  sourceId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationSource_UpsertArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  isPopular: Scalars['Boolean']['input'];
  kind: SourceKind;
  link: Scalars['String']['input'];
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
  sourceId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSwap_DeleteArgs = {
  swapId: Scalars['String']['input'];
};


export type MutationSwap_StatusArgs = {
  state: Scalars['Boolean']['input'];
  swapId: Scalars['String']['input'];
};


export type MutationSwap_UpsertArgs = {
  buyCurrency: Scalars['String']['input'];
  buyToken?: InputMaybe<Scalars['String']['input']>;
  date: Scalars['String']['input'];
  network?: InputMaybe<Scalars['String']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  sellCurrency: Scalars['String']['input'];
  sellToken?: InputMaybe<Scalars['String']['input']>;
  swapId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTag_CreateArgs = {
  color: Scalars['String']['input'];
  label: Scalars['String']['input'];
  trxIds: Array<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};


export type MutationTag_UpsertArgs = {
  deletedIds: Array<Scalars['String']['input']>;
  tags: Array<TagInput>;
};


export type MutationTask_Api_LogArgs = {
  taskId: Scalars['String']['input'];
};


export type MutationTask_DestroyArgs = {
  arn: Scalars['String']['input'];
};


export type MutationTask_EnlargeArgs = {
  taskId: Scalars['String']['input'];
};


export type MutationTask_RestartArgs = {
  taskId: Scalars['String']['input'];
};


export type MutationTask_SetArgs = {
  accountIds?: InputMaybe<Array<Scalars['String']['input']>>;
  action: Scalars['String']['input'];
  isLarge?: InputMaybe<Scalars['Boolean']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  type: TaskType;
};


export type MutationTask_StartArgs = {
  taskId: Scalars['String']['input'];
};


export type MutationTask_StopArgs = {
  taskId: Scalars['String']['input'];
};


export type MutationTask_SubscribeArgs = {
  taskId: Scalars['String']['input'];
};


export type MutationTask_TerminateArgs = {
  groupId?: InputMaybe<Scalars['String']['input']>;
  taskIds: Array<Scalars['String']['input']>;
};


export type MutationTransfer_ApproveArgs = {
  transferIds: Array<Scalars['String']['input']>;
};


export type MutationTransfer_CommentsArgs = {
  comments: Scalars['String']['input'];
  transferId: Scalars['String']['input'];
};


export type MutationTransfer_ConnectArgs = {
  depositHash: Scalars['String']['input'];
  withdrawalHash: Scalars['String']['input'];
};


export type MutationTransfer_DisconnectArgs = {
  transferIds: Array<Scalars['String']['input']>;
};


export type MutationTransfer_RejectArgs = {
  transferIds: Array<Scalars['String']['input']>;
};


export type MutationTransfer_RequestArgs = {
  accountIds?: InputMaybe<Array<Scalars['String']['input']>>;
  amountDifference: Scalars['Int']['input'];
  checkRates: Scalars['Boolean']['input'];
  fromDate?: InputMaybe<Scalars['Dayjs']['input']>;
  isReset: Scalars['Boolean']['input'];
  timeDifference: Scalars['Int']['input'];
  toDate?: InputMaybe<Scalars['Dayjs']['input']>;
};


export type MutationTrialBalance_Chart_FcdArgs = {
  fromDate: Scalars['Dayjs']['input'];
  requestId: Scalars['String']['input'];
  toDate: Scalars['Dayjs']['input'];
};


export type MutationTrialBalance_Chart_ImdArgs = {
  date: Scalars['Dayjs']['input'];
  requestId: Scalars['String']['input'];
};


export type MutationTrxMap_ClearArgs = {
  sourceTrxIds: Array<Scalars['String']['input']>;
};


export type MutationTrxMap_Force_NormalizationArgs = {
  accountIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationTrxMap_ResetArgs = {
  sourceTrxIds: Array<Scalars['String']['input']>;
};


export type MutationTrxMap_SetArgs = {
  bonus: Array<Scalars['String']['input']>;
  byTxHash: Scalars['Boolean']['input'];
  doHardMerge: Scalars['Boolean']['input'];
  method: MapMethod;
  sourceTrxs: Array<MapSourceTrxs>;
  subAccountId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationTrxMap_TimefixArgs = {
  sourceTrxIds: Array<Scalars['String']['input']>;
  timefix: Scalars['Float']['input'];
};


export type MutationTrx_CommentsArgs = {
  comments: Scalars['String']['input'];
  trxId: Scalars['String']['input'];
};


export type MutationUnsupported_CommentsArgs = {
  comments?: InputMaybe<Scalars['String']['input']>;
  unsupportedId: Scalars['String']['input'];
};


export type MutationUnsupported_EditArgs = {
  parameters: Array<ParametersType>;
  unsupportedId: Scalars['String']['input'];
};


export type MutationUnsupported_FixArgs = {
  accountId?: InputMaybe<Scalars['String']['input']>;
  bloxtax?: InputMaybe<FileUploadUser>;
  comments?: InputMaybe<Scalars['String']['input']>;
  fileId?: InputMaybe<Scalars['String']['input']>;
  unsupportedIds: Array<Scalars['String']['input']>;
  work?: InputMaybe<FileUploadUser>;
};


export type MutationUnsupported_Fix_EditArgs = {
  accountId?: InputMaybe<Scalars['String']['input']>;
  bloxtax?: InputMaybe<FileUploadUser>;
  comments?: InputMaybe<Scalars['String']['input']>;
  fileId: Scalars['String']['input'];
  unsupportedId: Scalars['String']['input'];
  work?: InputMaybe<FileUploadUser>;
};


export type MutationUnsupported_RemoveArgs = {
  unsupportedId: Scalars['String']['input'];
};


export type MutationUnsupported_RequestArgs = {
  filename: Scalars['String']['input'];
  filetype: Scalars['String']['input'];
  unsupportedId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnsupported_Source_FileArgs = {
  parameters: Array<ParametersType>;
  upload: FileUploadUser;
};


export type MutationUnsupported_Source_WalletArgs = {
  address: Scalars['String']['input'];
  parameters: Array<ParametersType>;
};


export type MutationUnsupported_StatusArgs = {
  state: Scalars['Boolean']['input'];
  unsupportedId: Scalars['String']['input'];
};


export type MutationUser_AdminArgs = {
  userId: Scalars['String']['input'];
};


export type MutationUser_PhoneArgs = {
  countryCode: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
};


export type MutationUser_PipedrivePersonIdArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUser_RemoveArgs = {
  userId: Scalars['String']['input'];
};


export type MutationUser_RolesArgs = {
  roleIds: Array<Scalars['String']['input']>;
  userId: Scalars['String']['input'];
};


export type MutationUser_SelfeditArgs = {
  settings: Array<ParametersType>;
};


export type MutationUser_Signup_SupportArgs = {
  countryCode: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email_address: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  logs?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  recaptcha: Scalars['String']['input'];
};


export type MutationUser_StatusArgs = {
  serviceId: Scalars['String']['input'];
  state: Scalars['Boolean']['input'];
};


export type MutationUser_SupportArgs = {
  attachment?: InputMaybe<FileUpload>;
  description: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};


export type MutationValidate_AddressArgs = {
  options: Array<ParametersType>;
  parameters: Array<ParametersType>;
};


export type MutationValidate_ApiArgs = {
  parameters: Array<ParametersType>;
  type: Scalars['String']['input'];
};


export type MutationValidate_Api_ExistsArgs = {
  values: Array<Scalars['String']['input']>;
};


export type MutationValidate_Tag_ExistsArgs = {
  color: Scalars['String']['input'];
  tagId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationValidate_Wallet_ExistsArgs = {
  values: Array<Scalars['String']['input']>;
};


export type MutationWatchdog_DeleteArgs = {
  watchdogId: Scalars['String']['input'];
};


export type MutationWatchdog_UpsertArgs = {
  delay?: InputMaybe<Scalars['Int']['input']>;
  isActive: Scalars['Boolean']['input'];
  maxRunCount?: InputMaybe<Scalars['Int']['input']>;
  method?: InputMaybe<Scalars['String']['input']>;
  runTime?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<TaskStatus>;
  task?: InputMaybe<TaskType>;
  type: WatchdogType;
  watchdogId?: InputMaybe<Scalars['String']['input']>;
};

export type Network = {
  __typename?: 'Network';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  scanner: Scalars['JSONObject']['output'];
  source: NetworkSource;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum NetworkSource {
  Cg = 'cg',
  Manual = 'manual'
}

export type Notification = {
  __typename?: 'Notification';
  announcement?: Maybe<Announcement>;
  announcementId?: Maybe<Scalars['String']['output']>;
  asPopup: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAdvanced: Scalars['Boolean']['output'];
  isRead: Scalars['Boolean']['output'];
  level: LogLevel;
  message: Scalars['String']['output'];
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  parameters: Array<NotificationParameter>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type NotificationParameter = {
  __typename?: 'NotificationParameter';
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  notification: Notification;
  notificationId: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export type OpenBalance = {
  __typename?: 'OpenBalance';
  address?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Float']['output'];
  comments?: Maybe<Scalars['String']['output']>;
  cost: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  date?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  network?: Maybe<Scalars['String']['output']>;
  request: OpenBalanceRequest;
  requestId: Scalars['ID']['output'];
  sharedInventory: SharedInventory;
  sharedInventoryId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type OpenBalanceItemInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  amount: Scalars['Float']['input'];
  comments?: InputMaybe<Scalars['String']['input']>;
  cost: Scalars['Float']['input'];
  currency: Scalars['String']['input'];
  date?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  network?: InputMaybe<Scalars['String']['input']>;
  sharedInventoryId: Scalars['String']['input'];
};

export type OpenBalanceRequest = {
  __typename?: 'OpenBalanceRequest';
  calculation?: Maybe<RequestCalculation>;
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  fiat: Scalars['String']['output'];
  file?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isSplitted: Scalars['Boolean']['output'];
  isSynced: Scalars['Boolean']['output'];
  isSyncing: Scalars['Boolean']['output'];
  items: Array<OpenBalance>;
  label?: Maybe<Scalars['String']['output']>;
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  type: OpenBalanceType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export enum OpenBalanceType {
  Manual = 'manual',
  Migration = 'migration',
  Report = 'report'
}

export enum OrgType {
  Basic = 'basic',
  Commercial = 'commercial'
}

export type Organization = {
  __typename?: 'Organization';
  accounts: Array<Account>;
  chartOfAccounts: Array<ChartOfAccount>;
  closeBalanceRequests: Array<CloseBalanceRequest>;
  createdAt: Scalars['DateTime']['output'];
  currency: Currency;
  deals: Array<OrganizationDeal>;
  description?: Maybe<Scalars['String']['output']>;
  exports: Array<OrganizationExport>;
  files: Array<File>;
  id: Scalars['ID']['output'];
  identifier?: Maybe<Scalars['String']['output']>;
  inventorySeparationRequests: Array<InventorySeparationRequest>;
  isActive: Scalars['Boolean']['output'];
  isBalanced: Scalars['Boolean']['output'];
  label?: Maybe<Scalars['String']['output']>;
  mapFiles: Array<MapFile>;
  members: Array<UserRole>;
  name: Scalars['String']['output'];
  openBalanceRequests: Array<OpenBalanceRequest>;
  owner?: Maybe<User>;
  parameters: Array<OrganizationParameter>;
  requests: Array<Request>;
  sharedInventories: Array<SharedInventory>;
  tags: Array<Tag>;
  tasks: Array<Task>;
  type: OrgType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  wizard: Scalars['Boolean']['output'];
};

export type OrganizationComment = {
  __typename?: 'OrganizationComment';
  comments: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type OrganizationDeal = {
  __typename?: 'OrganizationDeal';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  personId: Scalars['Int']['output'];
  pipelineId: Scalars['Int']['output'];
  stageId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type OrganizationExport = {
  __typename?: 'OrganizationExport';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type OrganizationInfo = {
  __typename?: 'OrganizationInfo';
  closeBalanceDate?: Maybe<Scalars['DateTime']['output']>;
  hasInventorySeparation: Scalars['Boolean']['output'];
  hasTickets: Scalars['Boolean']['output'];
  hasWallets: Scalars['Boolean']['output'];
  isRunDefi: Scalars['Boolean']['output'];
  lastSharedYear?: Maybe<Scalars['Int']['output']>;
  openBalanceDate?: Maybe<Scalars['DateTime']['output']>;
  unsupported: Scalars['String']['output'];
};

export type OrganizationLog = {
  __typename?: 'OrganizationLog';
  createdAt: Scalars['DateTime']['output'];
  data: Scalars['JSONObject']['output'];
  id: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  type: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type OrganizationParameter = {
  __typename?: 'OrganizationParameter';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export enum Outlet {
  AllStatements = 'all_statements',
  Bitquery = 'bitquery',
  BybitContract = 'bybit_contract',
  BybitCopytrading = 'bybit_copytrading',
  BybitFund = 'bybit_fund',
  BybitSpot = 'bybit_spot',
  BybitUta = 'bybit_uta',
  Covalent = 'covalent',
  Etherscan = 'etherscan',
  Margin = 'margin',
  Mixed = 'mixed',
  Simplehash = 'simplehash',
  Spot = 'spot'
}

export type ParametersType = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type Parser = {
  __typename?: 'Parser';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isRequired: Scalars['Boolean']['output'];
  outlet?: Maybe<Outlet>;
  schemas: Array<ParserSchema>;
  sources: Array<Source>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ParserBuilder = {
  __typename?: 'ParserBuilder';
  nullable: Scalars['Boolean']['output'];
  template: Scalars['String']['output'];
  type: SchemaType;
};

export type ParserBuilderInput = {
  column?: InputMaybe<Scalars['String']['input']>;
  format: Array<Scalars['String']['input']>;
  nullable: Scalars['Boolean']['input'];
  template: Scalars['String']['input'];
  type: SchemaType;
};

export type ParserSchema = {
  __typename?: 'ParserSchema';
  createdAt: Scalars['DateTime']['output'];
  files: Array<File>;
  id: Scalars['ID']['output'];
  isLegacy: Scalars['Boolean']['output'];
  parser: Parser;
  parserId: Scalars['String']['output'];
  row: Scalars['Int']['output'];
  target: Array<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  types: Array<ParserSchemaType>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ParserSchemaType = {
  __typename?: 'ParserSchemaType';
  column?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  format: Array<Scalars['String']['output']>;
  nullable: Scalars['Boolean']['output'];
  order: Scalars['Int']['output'];
  schema: ParserSchema;
  schemaId: Scalars['String']['output'];
  template: Scalars['String']['output'];
  type: SchemaType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float']['output'];
  applied: Array<PaymentApplied>;
  appliedTo: Array<PaymentApplied>;
  comments?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isManual: Scalars['Boolean']['output'];
  items: Array<PaymentItem>;
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  parameters: Array<PaymentParameter>;
  reports: Array<PaymentReport>;
  splits: Array<PaymentSplit>;
  status: PaymentStatus;
  submissions: Array<PaymentSubmission>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type PaymentApplied = {
  __typename?: 'PaymentApplied';
  createdAt: Scalars['DateTime']['output'];
  payment: Payment;
  paymentId: Scalars['ID']['output'];
  prePayment: Payment;
  prePaymentId: Scalars['ID']['output'];
};

export type PaymentInvoiceObject = {
  __typename?: 'PaymentInvoiceObject';
  documentDate: Scalars['String']['output'];
  id: Scalars['String']['output'];
  number: Scalars['Int']['output'];
};

export type PaymentItem = {
  __typename?: 'PaymentItem';
  amount: Scalars['Float']['output'];
  comments?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  payment: Payment;
  paymentId: Scalars['ID']['output'];
  type: PaymentItemType;
  unit: PaymentItemUnit;
};

export type PaymentItemInput = {
  amount: Scalars['Float']['input'];
  comments?: InputMaybe<Scalars['String']['input']>;
  type: PaymentItemType;
  unit: PaymentItemUnit;
};

export enum PaymentItemType {
  AssetDeclaration = 'asset_declaration',
  CloseTaxFile = 'close_tax_file',
  Consulting = 'consulting',
  Discount = 'discount',
  MoneyTrail = 'money_trail',
  PrePayment = 'pre_payment',
  PreSubmission = 'pre_submission',
  Vat = 'vat'
}

export enum PaymentItemUnit {
  Amount = 'amount',
  Percent = 'percent'
}

export type PaymentLegacy = {
  __typename?: 'PaymentLegacy';
  amount: Scalars['Float']['output'];
  comments?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  parameters: Array<PaymentLegacyParameter>;
  type: PaymentType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
  years: Array<PaymentLegacyToYear>;
};

export type PaymentLegacyParameter = {
  __typename?: 'PaymentLegacyParameter';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  payment: PaymentLegacy;
  paymentId: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export type PaymentLegacyToYear = {
  __typename?: 'PaymentLegacyToYear';
  amount: Scalars['Float']['output'];
  payment: PaymentLegacy;
  paymentId: Scalars['ID']['output'];
  requestData: RequestData;
  requestDataId: Scalars['ID']['output'];
};

export type PaymentParameter = {
  __typename?: 'PaymentParameter';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  payment: Payment;
  paymentId: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export type PaymentReport = {
  __typename?: 'PaymentReport';
  amount: Scalars['Float']['output'];
  capitalTrxCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  payment: Payment;
  paymentId: Scalars['ID']['output'];
  stakingTrxCount: Scalars['Int']['output'];
  year: Scalars['Int']['output'];
};

export type PaymentReportItemInput = {
  amount: Scalars['Float']['input'];
  capitalTrxCount: Scalars['Int']['input'];
  stakingTrxCount: Scalars['Int']['input'];
  year: Scalars['Int']['input'];
};

export type PaymentReportsObject = {
  __typename?: 'PaymentReportsObject';
  amount: Scalars['Float']['output'];
  capitalTrxCount: Scalars['Int']['output'];
  stakingTrxCount: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

export type PaymentSplit = {
  __typename?: 'PaymentSplit';
  amount: Scalars['Float']['output'];
  dueDate: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  payment: Payment;
  paymentId: Scalars['ID']['output'];
  status: PaymentStatus;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum PaymentStatus {
  Canceled = 'canceled',
  Completed = 'completed',
  Pending = 'pending'
}

export type PaymentSubmission = {
  __typename?: 'PaymentSubmission';
  amount: Scalars['Float']['output'];
  fixes: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isBusiness: Scalars['Boolean']['output'];
  payment: Payment;
  paymentId: Scalars['ID']['output'];
  type: PaymentSubmissionType;
  year: Scalars['Int']['output'];
};

export enum PaymentSubmissionType {
  Main = 'main',
  Secondary = 'secondary'
}

export enum PaymentType {
  Auto = 'auto',
  Manual = 'manual',
  Pre = 'pre'
}

export type Permission = {
  __typename?: 'Permission';
  category: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  roles: Array<Role>;
  type: PermissionType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum PermissionType {
  Page = 'page',
  Request = 'request'
}

export type PipedriveId = {
  __typename?: 'PipedriveId';
  basePath: Scalars['String']['output'];
  value?: Maybe<Scalars['Int']['output']>;
};

export type PipedriveLog = {
  __typename?: 'PipedriveLog';
  createdAt: Scalars['DateTime']['output'];
  data: Scalars['JSONObject']['output'];
  id: Scalars['String']['output'];
  level: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  account_api_balance: Array<VirtualBalance>;
  account_api_last: AccountApiLast;
  account_api_status: Scalars['Boolean']['output'];
  account_data?: Maybe<Account>;
  account_issues: Array<AccountIssues>;
  account_list: Array<Account>;
  account_manual_list: Array<Account>;
  account_metadata: Scalars['JSONObject']['output'];
  account_operation: Array<Account>;
  account_stats: Array<AccountStats>;
  account_tree: Array<AccountTree>;
  address_list: Array<Address>;
  announcement_list: Array<Announcement>;
  api_functions: Array<ApiFunction>;
  bitqueryMap_list: Array<BitqueryMap>;
  bitqueryMap_networks: Array<Scalars['String']['output']>;
  cache_list: Array<CacheListType>;
  changelog_data?: Maybe<Changelog>;
  changelog_list: Array<Changelog>;
  changelog_tickets: Array<ChangelogTicket>;
  closeBalanceRequest_check: Scalars['Boolean']['output'];
  closeBalanceRequest_list: Array<CloseBalanceRequest>;
  closeBalance_current: CloseBalanceCurrent;
  closeBalance_data: Array<CloseBalanceData>;
  coa_list: Array<ChartOfAccount>;
  coinGeko_list: Array<CoinGeko>;
  coin_filter_addresses: Array<Scalars['String']['output']>;
  coin_filter_cgIds: Array<Scalars['String']['output']>;
  coin_filter_tickers: Array<Scalars['String']['output']>;
  coin_filter_users: Array<CoinFilterUsers>;
  coin_items: Array<CoinItem>;
  coin_light_list: Array<Coin>;
  coin_list: CoinAgList;
  config_data: Scalars['JSONObject']['output'];
  config_organization: Scalars['JSONObject']['output'];
  config_payment: Scalars['JSONObject']['output'];
  config_reportServer_status: Scalars['Boolean']['output'];
  country_list: Array<Country>;
  currency_list: Array<Currency>;
  /** view */
  exchangeRate_filter_currencies: Array<Scalars['String']['output']>;
  /** view */
  exchangeRate_filter_networks: Array<Scalars['String']['output']>;
  exchangeRate_list: ExchangeRatesAgList;
  /** view */
  faq_categories: Array<FaqCategory>;
  /** view */
  faq_data?: Maybe<FaqCategory>;
  file_list: Array<File>;
  file_selfList: Array<File>;
  folder_list: Array<FolderList>;
  instruction_data?: Maybe<Instruction>;
  instruction_list: Array<Instruction>;
  instruction_source?: Maybe<Array<Instruction>>;
  inventorySeparationRequest_list: Array<InventorySeparationRequest>;
  inventorySeparation_list: Array<InventorySeparation>;
  log_email: Array<EmailLog>;
  log_import?: Maybe<Scalars['String']['output']>;
  log_organization: Array<OrganizationLog>;
  log_pipedrive: Array<PipedriveLog>;
  log_system: Array<SystemLog>;
  log_task: Array<TaskLog>;
  /** view */
  madad_list: Array<Madad>;
  /** view */
  mapFile_list: Array<MapFile>;
  metadata_list: Array<Metadata>;
  migration_accounts: Array<MigrationAccountList>;
  migration_files: Array<MigrationFileList>;
  migration_openBalance: MigrationOpenBalanceList;
  migration_transactions: Array<MigrationTrxList>;
  migration_users: Array<MigrationUsersList>;
  migration_wizard: Scalars['Boolean']['output'];
  network_list: Array<Network>;
  notification_admin: Array<Notification>;
  notification_list: Array<Notification>;
  notification_popups: Array<Notification>;
  notification_user: Array<Notification>;
  openBalanceRequest_list: Array<OpenBalanceRequest>;
  openBalanceRequest_sync: Scalars['Boolean']['output'];
  openBalance_current: Array<OpenBalance>;
  openBalance_list: Array<OpenBalance>;
  organization_comments: Array<OrganizationComment>;
  organization_cpa: Array<Organization>;
  organization_data?: Maybe<Organization>;
  organization_deals: Array<OrganizationDeal>;
  organization_exports: Array<OrganizationExport>;
  organization_info: OrganizationInfo;
  organization_list: Array<Organization>;
  organization_members: Array<UserRole>;
  organization_new: Scalars['Boolean']['output'];
  organization_operation: Array<Organization>;
  organization_search: Array<SearchResult>;
  organization_selfInfo?: Maybe<Organization>;
  organization_selfList: Array<Organization>;
  organization_status: Scalars['Boolean']['output'];
  organization_valid_report?: Maybe<Scalars['String']['output']>;
  parser_list: Array<Parser>;
  parser_schema_list: Array<ParserSchema>;
  parser_schema_type_list: Array<ParserSchemaType>;
  paymentLegacy_list: Array<PaymentLegacy>;
  paymentLegacy_prepayment: Scalars['Float']['output'];
  paymentLegacy_prepayments: Array<PaymentLegacy>;
  payment_invoices: Array<PaymentInvoiceObject>;
  payment_list: Array<Payment>;
  payment_prepayments: Array<Payment>;
  payment_reports: Array<PaymentReportsObject>;
  permission_list: Scalars['JSONObject']['output'];
  permission_scopes: Array<Scalars['String']['output']>;
  request_client_data?: Maybe<RequestData>;
  request_compare: Scalars['JSONObject']['output'];
  request_cpa: Array<RequestData>;
  request_data: Array<RequestData>;
  request_list: Array<Request>;
  request_paid: Scalars['Boolean']['output'];
  request_request: Array<Scalars['Int']['output']>;
  request_summary?: Maybe<Scalars['JSONObject']['output']>;
  request_years: Array<RequestYearsList>;
  role_invite: Array<Role>;
  role_list: Array<Role>;
  sharedInventory_inventories: Array<SharedInventoryInventory>;
  sharedInventory_list: Array<SharedInventory>;
  sourceTrxDraft_list: Array<SourceTrxDraft>;
  sourceTrx_data?: Maybe<SourceTrx>;
  sourceTrx_filter_accounts: Array<SourceTrxFilterAccounts>;
  sourceTrx_filter_fields: Array<Scalars['String']['output']>;
  sourceTrx_filter_methods: Array<Scalars['String']['output']>;
  sourceTrx_filter_rawFields: Array<Scalars['String']['output']>;
  sourceTrx_filter_subAccounts: Array<SourceTrxFilterAccounts>;
  sourceTrx_manual_list: Array<SourceTrx>;
  sourceTrx_manual_selflist: Array<SourceTrxManualList>;
  source_data?: Maybe<Source>;
  source_list: Array<Source>;
  subaccountField_list: Array<SubaccountField>;
  swap_list: Array<Swap>;
  tag_list: Array<Tag>;
  task_filter_accounts: Array<TaskFilterAccounts>;
  task_filter_organizations: Array<TaskFilterOrganizations>;
  task_filter_users: Array<TaskFilterUsers>;
  task_info?: Maybe<Task>;
  task_list: TaskAgList;
  task_running: Array<Task>;
  task_scheduled: Array<TaskSchedule>;
  task_stats: TaskStats;
  timeline_balances: Array<ITimelineBalancesQuery>;
  timeline_check: Scalars['String']['output'];
  timeline_filter_accounts: Array<TimelineFilterAccounts>;
  timeline_filter_currencies: Array<Scalars['String']['output']>;
  timeline_graph: Array<TimelineGraph>;
  timeline_list: Array<Timeline>;
  timeline_missings: Array<ITimelineMissingsQuery>;
  transfer_filter_accounts: Array<TransferFilterAccounts>;
  transfer_filter_fields: Array<Scalars['String']['output']>;
  transfer_filter_methods: Array<Scalars['String']['output']>;
  transfer_filter_rawFields: Array<Scalars['String']['output']>;
  transfer_filter_sideAccounts: Array<TransferFilterAccounts>;
  trialBalance_months: Array<Scalars['String']['output']>;
  trxMap_history: Array<TrxMapHistory>;
  trxMap_normalization: Scalars['Boolean']['output'];
  trxMap_unknown: Scalars['Boolean']['output'];
  /** view */
  trx_filter_accounts: Array<TrxFilterAccounts>;
  trx_filter_fields: Array<Scalars['String']['output']>;
  /** view */
  trx_filter_rawFields: Array<Scalars['String']['output']>;
  trx_last?: Maybe<Scalars['DateTime']['output']>;
  trx_virtual_list: Array<Trx>;
  trx_years: Array<Scalars['Int']['output']>;
  type_list: Array<Type>;
  unsupported_accounts: Array<Account>;
  unsupported_check: Scalars['Int']['output'];
  unsupported_exchanges: Array<Scalars['String']['output']>;
  unsupported_files: Array<File>;
  unsupported_lightList: Array<Unsupported>;
  unsupported_list: Array<Unsupported>;
  unsupported_networks: Array<Scalars['String']['output']>;
  unsupported_operation: Array<Unsupported>;
  unsupported_selfList: Array<Unsupported>;
  user_admin_list: Array<User>;
  user_current?: Maybe<User>;
  user_list: Array<User>;
  user_permissions: Array<UserPermissionList>;
  user_pipedrive?: Maybe<Scalars['String']['output']>;
  validate_wallet: ValidAddress;
  virtualBalance_list: Array<VirtualBalance>;
  watchdog_list: Array<Watchdog>;
};


export type QueryAccount_Api_BalanceArgs = {
  accountId: Scalars['String']['input'];
};


export type QueryAccount_Api_LastArgs = {
  accountId: Scalars['String']['input'];
};


export type QueryAccount_Api_StatusArgs = {
  accountId: Scalars['String']['input'];
};


export type QueryAccount_DataArgs = {
  accountId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAccount_ListArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAccount_Manual_ListArgs = {
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAccount_MetadataArgs = {
  accountId: Scalars['String']['input'];
};


export type QueryAccount_OperationArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
};


export type QueryAccount_TreeArgs = {
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryApi_FunctionsArgs = {
  apiId: Scalars['String']['input'];
};


export type QueryChangelog_DataArgs = {
  changelogId: Scalars['String']['input'];
};


export type QueryChangelog_ListArgs = {
  onlyPublished?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCloseBalance_DataArgs = {
  requestId: Scalars['String']['input'];
};


export type QueryCoin_ItemsArgs = {
  coinId: Scalars['String']['input'];
};


export type QueryCoin_ListArgs = {
  endRow: Scalars['Int']['input'];
  filterModel: Array<AgFilterModel>;
  sortModel: Array<AgSortModel>;
  startRow: Scalars['Int']['input'];
};


export type QueryExchangeRate_Filter_CurrenciesArgs = {
  isFiat: Scalars['Boolean']['input'];
};


export type QueryExchangeRate_ListArgs = {
  endRow: Scalars['Int']['input'];
  filterModel: Array<AgFilterModel>;
  sortModel: Array<AgSortModel>;
  startRow: Scalars['Int']['input'];
};


export type QueryFaq_DataArgs = {
  categoryId: Scalars['String']['input'];
};


export type QueryFile_ListArgs = {
  accountId: Scalars['String']['input'];
};


export type QueryFile_SelfListArgs = {
  accountId: Scalars['String']['input'];
};


export type QueryInstruction_DataArgs = {
  instructionId: Scalars['String']['input'];
};


export type QueryInstruction_SourceArgs = {
  sourceId: Scalars['String']['input'];
};


export type QueryInventorySeparation_ListArgs = {
  requestId: Scalars['String']['input'];
};


export type QueryLog_ImportArgs = {
  taskId: Scalars['String']['input'];
};


export type QueryLog_OrganizationArgs = {
  organizationId: Scalars['String']['input'];
};


export type QueryLog_SystemArgs = {
  level: Scalars['String']['input'];
};


export type QueryLog_TaskArgs = {
  level: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  taskId: Scalars['String']['input'];
};


export type QueryMetadata_ListArgs = {
  accountId: Scalars['String']['input'];
  fileId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMigration_AccountsArgs = {
  organizationId: Scalars['String']['input'];
};


export type QueryMigration_FilesArgs = {
  organizationId: Scalars['String']['input'];
};


export type QueryMigration_OpenBalanceArgs = {
  organizationId: Scalars['String']['input'];
};


export type QueryMigration_TransactionsArgs = {
  organizationId: Scalars['String']['input'];
};


export type QueryNotification_PopupsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryNotification_UserArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOpenBalance_ListArgs = {
  requestId: Scalars['String']['input'];
};


export type QueryOrganization_DataArgs = {
  organizationId: Scalars['String']['input'];
};


export type QueryOrganization_DealsArgs = {
  orgId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganization_ExportsArgs = {
  organizationId: Scalars['String']['input'];
};


export type QueryOrganization_ListArgs = {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryOrganization_MembersArgs = {
  organizationId: Scalars['String']['input'];
};


export type QueryOrganization_OperationArgs = {
  blxId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOrganization_SearchArgs = {
  search: Scalars['String']['input'];
};


export type QueryOrganization_Valid_ReportArgs = {
  type: RequestType;
};


export type QueryParser_Schema_ListArgs = {
  parserId: Scalars['String']['input'];
};


export type QueryParser_Schema_Type_ListArgs = {
  schemaId: Scalars['String']['input'];
};


export type QueryRequest_Client_DataArgs = {
  requestDataId: Scalars['String']['input'];
};


export type QueryRequest_CompareArgs = {
  requestIds: Array<Scalars['String']['input']>;
};


export type QueryRequest_DataArgs = {
  organizationId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRequest_ListArgs = {
  type: RequestType;
};


export type QueryRequest_SummaryArgs = {
  requestId: Scalars['String']['input'];
};


export type QueryRequest_YearsArgs = {
  type: RequestType;
};


export type QuerySharedInventory_ListArgs = {
  withGlobal?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySourceTrx_DataArgs = {
  sourceTrxId: Scalars['String']['input'];
};


export type QuerySourceTrx_Filter_FieldsArgs = {
  field: Scalars['String']['input'];
};


export type QuerySourceTrx_Filter_RawFieldsArgs = {
  field: Scalars['String']['input'];
  side?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySourceTrx_Manual_ListArgs = {
  accountId: Scalars['String']['input'];
};


export type QuerySourceTrx_Manual_SelflistArgs = {
  accountId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySource_DataArgs = {
  sourceId: Scalars['String']['input'];
};


export type QuerySource_ListArgs = {
  kind?: InputMaybe<SourceKind>;
  showAll?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySubaccountField_ListArgs = {
  type: SubAccountType;
};


export type QueryTask_Filter_UsersArgs = {
  showAll: Scalars['Boolean']['input'];
};


export type QueryTask_InfoArgs = {
  taskId: Scalars['String']['input'];
};


export type QueryTask_ListArgs = {
  endRow: Scalars['Int']['input'];
  filterModel: Array<AgFilterModel>;
  groupKeys: Array<Scalars['String']['input']>;
  showAll: Scalars['Boolean']['input'];
  sortModel: Array<AgSortModel>;
  startRow: Scalars['Int']['input'];
};


export type QueryTask_RunningArgs = {
  showAll?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTimeline_BalancesArgs = {
  cutoff?: InputMaybe<Scalars['Dayjs']['input']>;
  withoutNft: Scalars['Boolean']['input'];
  withoutZero: Scalars['Boolean']['input'];
};


export type QueryTimeline_GraphArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  currency: Scalars['String']['input'];
  network?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTimeline_ListArgs = {
  currency?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTimeline_MissingsArgs = {
  cutoff?: InputMaybe<Scalars['Dayjs']['input']>;
  withoutZero: Scalars['Boolean']['input'];
  years: Array<Scalars['Int']['input']>;
};


export type QueryTransfer_Filter_FieldsArgs = {
  field: Scalars['String']['input'];
};


export type QueryTransfer_Filter_RawFieldsArgs = {
  field: Scalars['String']['input'];
};


export type QueryTrialBalance_MonthsArgs = {
  requestId: Scalars['String']['input'];
};


export type QueryTrxMap_HistoryArgs = {
  sourceTrxId: Scalars['String']['input'];
};


export type QueryTrx_Filter_FieldsArgs = {
  field: Scalars['String']['input'];
  schema?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTrx_Filter_RawFieldsArgs = {
  field: Scalars['String']['input'];
  side?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTrx_Virtual_ListArgs = {
  accountId: Scalars['String']['input'];
};


export type QueryType_ListArgs = {
  kind: TypeKind;
};


export type QueryUnsupported_CheckArgs = {
  isDone?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUnsupported_ExchangesArgs = {
  search: Scalars['String']['input'];
};


export type QueryUnsupported_NetworksArgs = {
  search: Scalars['String']['input'];
};


export type QueryUnsupported_OperationArgs = {
  blxId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryValidate_WalletArgs = {
  address: Scalars['String']['input'];
};


export type QueryVirtualBalance_ListArgs = {
  accountId: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ReportStatus = {
  __typename?: 'ReportStatus';
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  status: Scalars['String']['output'];
};

export type Request = {
  __typename?: 'Request';
  calculation: RequestCalculation;
  comments?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  data: Array<RequestData>;
  id: Scalars['ID']['output'];
  journalEntries: Array<JournalEntry>;
  locations: Array<RequestLocation>;
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  parameters: Array<RequestParameter>;
  paymentId?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  shareExtended: Scalars['Boolean']['output'];
  summary?: Maybe<RequestSummary>;
  task: ReportStatus;
  trialBalances: Array<TrialBalance>;
  type: RequestType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export enum RequestCalculation {
  Avco = 'avco',
  Fifo = 'fifo',
  Hifo = 'hifo',
  Lifo = 'lifo'
}

export type RequestData = {
  __typename?: 'RequestData';
  cost: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  gainloss: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  income: Scalars['Float']['output'];
  isActive: Scalars['Boolean']['output'];
  isShared: Scalars['Boolean']['output'];
  items: Array<RequestDataItem>;
  location?: Maybe<Scalars['String']['output']>;
  locationBalances?: Maybe<Scalars['String']['output']>;
  locationCpa?: Maybe<Scalars['String']['output']>;
  locationExtended?: Maybe<Scalars['String']['output']>;
  request: Request;
  requestId: Scalars['ID']['output'];
  shareDate?: Maybe<Scalars['DateTime']['output']>;
  stakingCount: Scalars['Int']['output'];
  status?: Maybe<Scalars['String']['output']>;
  txCount: Scalars['Int']['output'];
  value: Scalars['Float']['output'];
  year: Scalars['Int']['output'];
};

export type RequestDataItem = {
  __typename?: 'RequestDataItem';
  address?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  network?: Maybe<Scalars['String']['output']>;
  requestData: RequestData;
  requestDataId: Scalars['ID']['output'];
  type: RequestDataType;
  value: Scalars['Float']['output'];
};

export enum RequestDataType {
  Balance = 'balance',
  Gainloss = 'gainloss'
}

export type RequestLocation = {
  __typename?: 'RequestLocation';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  request: Request;
  requestId: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export type RequestParameter = {
  __typename?: 'RequestParameter';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  request: Request;
  requestId: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export type RequestSummary = {
  __typename?: 'RequestSummary';
  createdAt: Scalars['DateTime']['output'];
  data: Scalars['JSONObject']['output'];
  log: Scalars['JSONObject']['output'];
  request: Request;
  requestId: Scalars['ID']['output'];
};

export enum RequestType {
  Advanced = 'advanced',
  Basic = 'basic'
}

export type RequestYearsList = {
  __typename?: 'RequestYearsList';
  requestDataId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  year: Scalars['Int']['output'];
};

export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  invitable: Scalars['Boolean']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Permission>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  usersRole: Array<UserRole>;
};

export type SaveMapData = {
  id: Scalars['String']['input'];
  mapAmount?: InputMaybe<Scalars['Float']['input']>;
  mapComments?: InputMaybe<Scalars['String']['input']>;
  mapCurrency?: InputMaybe<Scalars['String']['input']>;
  method: Scalars['String']['input'];
  subaccount?: InputMaybe<Scalars['String']['input']>;
  subaccountId?: InputMaybe<Scalars['String']['input']>;
};

export enum SchemaType {
  Boolean = 'boolean',
  Datetime = 'datetime',
  Number = 'number',
  String = 'string'
}

export type SearchResult = {
  __typename?: 'SearchResult';
  icon?: Maybe<Scalars['String']['output']>;
  label: Scalars['String']['output'];
  link: Scalars['String']['output'];
  secondary?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type SharedInventory = {
  __typename?: 'SharedInventory';
  accounts: Array<Account>;
  chartOfAccounts: Array<ChartOfAccount>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isGlobal: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type SharedInventoryInventory = {
  __typename?: 'SharedInventoryInventory';
  inventory: Scalars['String']['output'];
  inventoryId: Scalars['String']['output'];
  type: InventoryType;
};

export type Source = {
  __typename?: 'Source';
  accounts: Array<Account>;
  api?: Maybe<Api>;
  apiId?: Maybe<Scalars['String']['output']>;
  coinItems: Array<CoinItem>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  instructions: Array<Instruction>;
  isActive: Scalars['Boolean']['output'];
  isPopular: Scalars['Boolean']['output'];
  kind: SourceKind;
  link: Scalars['String']['output'];
  logo: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parsers: Array<Parser>;
  subaccounts: Array<Subaccount>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum SourceKind {
  Blockchain = 'blockchain',
  Exchange = 'exchange',
  Wallet = 'wallet'
}

export type SourceTrx = {
  __typename?: 'SourceTrx';
  account: Account;
  accountId: Scalars['ID']['output'];
  bitqueryMethod?: Maybe<Scalars['String']['output']>;
  buy?: Maybe<SourceTrxRaw>;
  comments?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  documentation?: Maybe<Scalars['String']['output']>;
  fee?: Maybe<SourceTrxRaw>;
  files: Array<File>;
  id: Scalars['ID']['output'];
  idHash?: Maybe<Scalars['String']['output']>;
  isExcluded: Scalars['Boolean']['output'];
  isIgnored: Scalars['Boolean']['output'];
  network?: Maybe<Scalars['String']['output']>;
  objectHash: Scalars['String']['output'];
  orderId: Scalars['Int']['output'];
  outlet?: Maybe<Outlet>;
  raws: Array<SourceTrxRaw>;
  receiver?: Maybe<Scalars['String']['output']>;
  sell?: Maybe<SourceTrxRaw>;
  sender?: Maybe<Scalars['String']['output']>;
  smartContract?: Maybe<Scalars['String']['output']>;
  source: SourceType;
  tag?: Maybe<Tag>;
  tagId?: Maybe<Scalars['String']['output']>;
  task?: Maybe<Task>;
  taskId?: Maybe<Scalars['ID']['output']>;
  trxMap?: Maybe<TrxMap>;
  trxMapHistory: Array<TrxMapHistory>;
  trxs: Array<Trx>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type SourceTrxAgList = {
  __typename?: 'SourceTrxAgList';
  rowCount: Scalars['Int']['output'];
  rowData: Array<SourceTrxList>;
};

export type SourceTrxDraft = {
  __typename?: 'SourceTrxDraft';
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['ID']['output']>;
  createdAt: Scalars['DateTime']['output'];
  data: Scalars['JSONObject']['output'];
  id: Scalars['ID']['output'];
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  source?: Maybe<SourceType>;
  tag?: Maybe<Tag>;
  tagId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SourceTrxFilterAccounts = {
  __typename?: 'SourceTrxFilterAccounts';
  account: Scalars['String']['output'];
  accountId: Scalars['String']['output'];
};

export type SourceTrxList = {
  __typename?: 'SourceTrxList';
  account: Scalars['String']['output'];
  accountId: Scalars['String']['output'];
  bitqueryMethod?: Maybe<Scalars['String']['output']>;
  buyAmount?: Maybe<Scalars['Float']['output']>;
  buyCurrency?: Maybe<Scalars['String']['output']>;
  buyId?: Maybe<Scalars['String']['output']>;
  buyNft?: Maybe<Scalars['String']['output']>;
  buyToken?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Scalars['String']['output']>;
  date: Scalars['DateTime']['output'];
  documentation?: Maybe<Scalars['String']['output']>;
  feeAmount?: Maybe<Scalars['Float']['output']>;
  feeCurrency?: Maybe<Scalars['String']['output']>;
  feeId?: Maybe<Scalars['String']['output']>;
  feeToken?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  idHash?: Maybe<Scalars['String']['output']>;
  isExcluded: Scalars['Boolean']['output'];
  isIgnored: Scalars['Boolean']['output'];
  method?: Maybe<MapMethod>;
  network?: Maybe<Scalars['String']['output']>;
  receiver?: Maybe<Scalars['String']['output']>;
  sellAmount?: Maybe<Scalars['Float']['output']>;
  sellCurrency?: Maybe<Scalars['String']['output']>;
  sellId?: Maybe<Scalars['String']['output']>;
  sellNft?: Maybe<Scalars['String']['output']>;
  sellToken?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
  smartContract?: Maybe<Scalars['String']['output']>;
  source: SourceType;
  subAccount?: Maybe<Scalars['String']['output']>;
  subAccountId?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  tagId?: Maybe<Scalars['String']['output']>;
  timefix: Scalars['Float']['output'];
  transfer?: Maybe<Scalars['String']['output']>;
  trxTag?: Maybe<Scalars['String']['output']>;
  vAmount?: Maybe<Scalars['Float']['output']>;
  vCurrency?: Maybe<Scalars['String']['output']>;
};

export type SourceTrxManualList = {
  __typename?: 'SourceTrxManualList';
  account: Scalars['String']['output'];
  accountId: Scalars['String']['output'];
  buyAmount?: Maybe<Scalars['Float']['output']>;
  buyCurrency?: Maybe<Scalars['String']['output']>;
  buyToken?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  documentation?: Maybe<Scalars['String']['output']>;
  feeAmount?: Maybe<Scalars['Float']['output']>;
  feeCurrency?: Maybe<Scalars['String']['output']>;
  feeToken?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  idHash?: Maybe<Scalars['String']['output']>;
  isExcluded: Scalars['Boolean']['output'];
  isIgnored: Scalars['Boolean']['output'];
  method: Scalars['String']['output'];
  network?: Maybe<Scalars['String']['output']>;
  originalMethod: MapMethod;
  receiver?: Maybe<Scalars['String']['output']>;
  sellAmount?: Maybe<Scalars['Float']['output']>;
  sellCurrency?: Maybe<Scalars['String']['output']>;
  sellToken?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
  smartContract?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

export type SourceTrxRaw = {
  __typename?: 'SourceTrxRaw';
  amount: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isFee: Scalars['Boolean']['output'];
  nft?: Maybe<Scalars['String']['output']>;
  side: TrxSide;
  token?: Maybe<Scalars['String']['output']>;
  trx: SourceTrx;
  trxId: Scalars['ID']['output'];
};

export enum SourceType {
  Api = 'api',
  File = 'file',
  Manual = 'manual'
}

export enum SubAccountType {
  Blackbox = 'blackbox',
  CloseBalance = 'closeBalance',
  Exchange = 'exchange',
  Ico = 'ico',
  Lendcrypto = 'lendcrypto',
  Lendfiat = 'lendfiat',
  Loancrypto = 'loancrypto',
  Loanfiat = 'loanfiat',
  Manual = 'manual',
  OpenBalance = 'openBalance',
  Pool = 'pool',
  Separation = 'separation',
  Staking = 'staking',
  Vault = 'vault'
}

export type Subaccount = {
  __typename?: 'Subaccount';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  parameters: Array<SubaccountParameter>;
  source: Source;
  sourceId: Scalars['ID']['output'];
  subaccount?: Maybe<SubAccountType>;
  suffix: Scalars['String']['output'];
  type: AccountType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SubaccountField = {
  __typename?: 'SubaccountField';
  controller: FieldController;
  manipulations: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  options: Array<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  type: SubAccountType;
  validators: Array<Scalars['String']['output']>;
};

export type SubaccountParameter = {
  __typename?: 'SubaccountParameter';
  account: Subaccount;
  accountId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Swap = {
  __typename?: 'Swap';
  buyCurrency: Scalars['String']['output'];
  buyToken?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  network?: Maybe<Scalars['String']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  sellCurrency: Scalars['String']['output'];
  sellToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type SyncType = {
  __typename?: 'SyncType';
  organizationId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type SystemLog = {
  __typename?: 'SystemLog';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  level: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  sourceTrxDrafts: Array<SourceTrxDraft>;
  sourceTrxs: Array<SourceTrx>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TagInput = {
  color: Scalars['String']['input'];
  label: Scalars['String']['input'];
  tagId?: InputMaybe<Scalars['String']['input']>;
};

export type Task = {
  __typename?: 'Task';
  action: Scalars['String']['output'];
  actualStatus?: Maybe<Scalars['String']['output']>;
  arn?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  env: Scalars['String']['output'];
  group?: Maybe<TaskGroup>;
  groupId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isApproved: Scalars['Boolean']['output'];
  isTerminated: Scalars['Boolean']['output'];
  lastRunAt?: Maybe<Scalars['DateTime']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  orderId: Scalars['Int']['output'];
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  parameters: Array<TaskParameter>;
  runCount: Scalars['Int']['output'];
  runTime: Scalars['Int']['output'];
  serverStatus?: Maybe<Scalars['String']['output']>;
  sourceTrxs: Array<SourceTrx>;
  stages: Array<TaskStage>;
  status: TaskStatus;
  type: TaskType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type TaskAgList = {
  __typename?: 'TaskAgList';
  rowCount: Scalars['Int']['output'];
  rowData: Array<TaskList>;
};

export type TaskFilterAccounts = {
  __typename?: 'TaskFilterAccounts';
  comment: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type TaskFilterOrganizations = {
  __typename?: 'TaskFilterOrganizations';
  organization: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
};

export type TaskFilterUsers = {
  __typename?: 'TaskFilterUsers';
  user: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type TaskGroup = {
  __typename?: 'TaskGroup';
  action?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  orderId: Scalars['Int']['output'];
  tasks: Array<Task>;
  type: TaskType;
};

export type TaskList = {
  __typename?: 'TaskList';
  action?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  group: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  lastRunAt?: Maybe<Scalars['DateTime']['output']>;
  organization: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  parameters: Array<Array<TaskParameter>>;
  runCount: Scalars['Int']['output'];
  runTime: Scalars['Int']['output'];
  status: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  user: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type TaskLog = {
  __typename?: 'TaskLog';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  level: Scalars['String']['output'];
  message: Scalars['String']['output'];
  taskId: Scalars['String']['output'];
};

export type TaskParameter = {
  __typename?: 'TaskParameter';
  comment?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  task: Task;
  taskId: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export type TaskSchedule = {
  __typename?: 'TaskSchedule';
  action: Scalars['String']['output'];
  env: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  organization: Organization;
  organizationId: Scalars['String']['output'];
  schedule: Scalars['DateTime']['output'];
  type: TaskType;
  user: User;
  userId: Scalars['ID']['output'];
};

export type TaskStage = {
  __typename?: 'TaskStage';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  operation: Scalars['String']['output'];
  progress: Scalars['Float']['output'];
  task: Task;
  taskId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TaskStats = {
  __typename?: 'TaskStats';
  failed: Scalars['Int']['output'];
  pending: Scalars['Int']['output'];
  pendingApproval: Scalars['Int']['output'];
  running: Scalars['Int']['output'];
};

export enum TaskStatus {
  Completed = 'completed',
  Failed = 'failed',
  Launch = 'launch',
  Pending = 'pending',
  Running = 'running'
}

export enum TaskType {
  Api = 'api',
  Completer = 'completer',
  Defi = 'defi',
  Deletion = 'deletion',
  Export = 'export',
  ImportRates = 'importRates',
  InsertData = 'insertData',
  Journal = 'journal',
  Migration = 'migration',
  Normalization = 'normalization',
  OpenBalance = 'openBalance',
  Parser = 'parser',
  Report = 'report',
  Saving = 'saving',
  Stats = 'stats',
  Timeline = 'timeline',
  Transfers = 'transfers',
  Validation = 'validation',
  Wallets = 'wallets'
}

export type Timeline = {
  __typename?: 'Timeline';
  address?: Maybe<Scalars['String']['output']>;
  inventory?: Maybe<Scalars['String']['output']>;
  inventoryId?: Maybe<Scalars['String']['output']>;
  inventoryMissing: Scalars['Float']['output'];
  inventoryMissingSum: Scalars['Float']['output'];
  inventoryPositive: Scalars['Float']['output'];
  inventoryTotal: Scalars['Float']['output'];
  network?: Maybe<Scalars['String']['output']>;
  orderId: Scalars['Int']['output'];
  organizationMissing: Scalars['Float']['output'];
  organizationMissingSum: Scalars['Float']['output'];
  organizationPositive: Scalars['Float']['output'];
  organizationTotal: Scalars['Float']['output'];
  raw: TrxRaw;
  rawId: Scalars['ID']['output'];
  suspicious: Array<Scalars['String']['output']>;
  type: TimelineType;
};

export type TimelineFilterAccounts = {
  __typename?: 'TimelineFilterAccounts';
  account: Scalars['String']['output'];
  accountId: Scalars['String']['output'];
};

export type TimelineGraph = {
  __typename?: 'TimelineGraph';
  amount: Scalars['Float']['output'];
  balance: Scalars['Float']['output'];
  date: Scalars['DateTime']['output'];
  missing: Scalars['Float']['output'];
  suspicious: Array<Scalars['String']['output']>;
  type: TimelineType;
};

export enum TimelineType {
  Deposit = 'DEPOSIT',
  Trade = 'TRADE',
  TransferIn = 'TRANSFER_IN',
  TransferOut = 'TRANSFER_OUT',
  Withdrawal = 'WITHDRAWAL'
}

export type Transfer = {
  __typename?: 'Transfer';
  comments?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  depositHash: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isApproved: Scalars['Boolean']['output'];
  options: Scalars['JSONObject']['output'];
  type: TransferType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
  withdrawalHash: Scalars['String']['output'];
};

export type TransferAgList = {
  __typename?: 'TransferAgList';
  rowCount: Scalars['Int']['output'];
  rowData: Array<TransferList>;
};

export type TransferFilterAccounts = {
  __typename?: 'TransferFilterAccounts';
  account: Scalars['String']['output'];
  accountId: Scalars['String']['output'];
};

export type TransferList = {
  __typename?: 'TransferList';
  account: Scalars['String']['output'];
  accountId: Scalars['String']['output'];
  amount: Scalars['Float']['output'];
  comments?: Maybe<Scalars['String']['output']>;
  counterparty?: Maybe<Scalars['String']['output']>;
  currency: Scalars['String']['output'];
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  idHash?: Maybe<Scalars['String']['output']>;
  isApproved?: Maybe<Scalars['Boolean']['output']>;
  method: Scalars['String']['output'];
  network?: Maybe<Scalars['String']['output']>;
  objectHash: Scalars['String']['output'];
  rawId: Scalars['String']['output'];
  receiver?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
  side: TrxSide;
  sideAccount?: Maybe<Scalars['String']['output']>;
  sideAccountId?: Maybe<Scalars['String']['output']>;
  sideAmount?: Maybe<Scalars['Float']['output']>;
  sideCurrency?: Maybe<Scalars['String']['output']>;
  sideDate?: Maybe<Scalars['DateTime']['output']>;
  sideIdHash?: Maybe<Scalars['String']['output']>;
  smartContract?: Maybe<Scalars['String']['output']>;
  subAccount?: Maybe<Scalars['String']['output']>;
  subAccountId?: Maybe<Scalars['String']['output']>;
  tag?: Maybe<Scalars['String']['output']>;
  tagId?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  transferId?: Maybe<Scalars['String']['output']>;
  value: Scalars['Float']['output'];
};

export enum TransferType {
  Manual = 'manual',
  Recognized = 'recognized',
  Suspicious = 'suspicious'
}

export type TrialBalance = {
  __typename?: 'TrialBalance';
  closeBalance: Scalars['Float']['output'];
  closeBalanceCrypto: Scalars['Float']['output'];
  coa: ChartOfAccount;
  coaId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  credits: Scalars['Float']['output'];
  creditsCrypto: Scalars['Float']['output'];
  debits: Scalars['Float']['output'];
  debitsCrypto: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  month: Scalars['String']['output'];
  openBalance: Scalars['Float']['output'];
  openBalanceCrypto: Scalars['Float']['output'];
  request: Request;
  requestId: Scalars['ID']['output'];
};

export type Trx = {
  __typename?: 'Trx';
  account: Account;
  accountId: Scalars['ID']['output'];
  buy?: Maybe<TrxRaw>;
  comments?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  fee?: Maybe<TrxRaw>;
  id: Scalars['ID']['output'];
  orderId: Scalars['Int']['output'];
  raws: Array<TrxRaw>;
  sell?: Maybe<TrxRaw>;
  sourceTrx: SourceTrx;
  sourceTrxId: Scalars['ID']['output'];
  type: TrxType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TrxAgList = {
  __typename?: 'TrxAgList';
  rowCount: Scalars['Int']['output'];
  rowData: Array<TrxList>;
};

export type TrxDate = {
  __typename?: 'TrxDate';
  firstTrx?: Maybe<Scalars['String']['output']>;
  lastTrx?: Maybe<Scalars['String']['output']>;
};

export type TrxFilterAccounts = {
  __typename?: 'TrxFilterAccounts';
  account: Scalars['String']['output'];
  accountId: Scalars['String']['output'];
};

export type TrxList = {
  __typename?: 'TrxList';
  account: Scalars['String']['output'];
  accountId: Scalars['String']['output'];
  buyAmount?: Maybe<Scalars['Float']['output']>;
  buyCurrency?: Maybe<Scalars['String']['output']>;
  buyNft?: Maybe<Scalars['String']['output']>;
  buyToken?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Scalars['String']['output']>;
  date: Scalars['DateTime']['output'];
  feeAmount?: Maybe<Scalars['Float']['output']>;
  feeCurrency?: Maybe<Scalars['String']['output']>;
  feeToken?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  idHash?: Maybe<Scalars['String']['output']>;
  network?: Maybe<Scalars['String']['output']>;
  receiver?: Maybe<Scalars['String']['output']>;
  sellAmount?: Maybe<Scalars['Float']['output']>;
  sellCurrency?: Maybe<Scalars['String']['output']>;
  sellNft?: Maybe<Scalars['String']['output']>;
  sellToken?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
  smartContract?: Maybe<Scalars['String']['output']>;
  sourceTrxId: Scalars['String']['output'];
  tag?: Maybe<Scalars['String']['output']>;
  tagId?: Maybe<Scalars['String']['output']>;
  trxTag?: Maybe<Scalars['String']['output']>;
  type: TrxType;
};

export type TrxMap = {
  __typename?: 'TrxMap';
  amount?: Maybe<Scalars['Float']['output']>;
  bonus: Array<Scalars['String']['output']>;
  comments?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  file?: Maybe<MapFile>;
  fileId?: Maybe<Scalars['ID']['output']>;
  isNormalized: Scalars['Boolean']['output'];
  isTransfer: Scalars['Boolean']['output'];
  mergeId?: Maybe<Scalars['ID']['output']>;
  method: MapMethod;
  sourceTrx: SourceTrx;
  sourceTrxId: Scalars['ID']['output'];
  subAccount?: Maybe<Account>;
  subAccountId?: Maybe<Scalars['ID']['output']>;
  timefix: Scalars['Float']['output'];
  type: MapType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type TrxMapHistory = {
  __typename?: 'TrxMapHistory';
  amount?: Maybe<Scalars['Float']['output']>;
  bonus: Array<Scalars['String']['output']>;
  comments?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  currency?: Maybe<Scalars['String']['output']>;
  file?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isExcluded: Scalars['Boolean']['output'];
  mergeId?: Maybe<Scalars['ID']['output']>;
  method: MapMethod;
  sourceTrx: SourceTrx;
  sourceTrxId: Scalars['ID']['output'];
  subAccount?: Maybe<Scalars['String']['output']>;
  timefix: Scalars['Float']['output'];
  type: MapType;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type TrxRaw = {
  __typename?: 'TrxRaw';
  amount: Scalars['Float']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isFee: Scalars['Boolean']['output'];
  nft?: Maybe<Scalars['String']['output']>;
  side: TrxSide;
  timeline?: Maybe<Timeline>;
  token?: Maybe<Scalars['String']['output']>;
  trx: Trx;
  trxId: Scalars['ID']['output'];
};

export enum TrxSide {
  In = 'in',
  Out = 'out'
}

export enum TrxType {
  Deposit = 'deposit',
  Donate = 'donate',
  Fee = 'fee',
  Gift = 'gift',
  Income = 'income',
  IncomeDeferred = 'income_deferred',
  IncomeDividend = 'income_dividend',
  IncomeFuture = 'income_future',
  IncomeLending = 'income_lending',
  Lost = 'lost',
  LostFuture = 'lost_future',
  Mining = 'mining',
  Payment = 'payment',
  Purchase = 'purchase',
  Staking = 'staking',
  Swap = 'swap',
  Trade = 'trade',
  TransferIn = 'transfer_in',
  TransferOut = 'transfer_out',
  Withdrawal = 'withdrawal'
}

export type Type = {
  __typename?: 'Type';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  kind: TypeKind;
  label?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value: Scalars['String']['output'];
};

export enum TypeKind {
  ExchangeFile = 'exchangeFile',
  ImportFile = 'importFile',
  Language = 'language',
  Timezone = 'timezone',
  UserFile = 'userFile'
}

export type Unsupported = {
  __typename?: 'Unsupported';
  childrens: Array<Unsupported>;
  comments?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  file?: Maybe<File>;
  fileId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isDone: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  organization: Organization;
  organizationId: Scalars['ID']['output'];
  parameters: Array<UnsupportedParameter>;
  parent?: Maybe<Unsupported>;
  parentId?: Maybe<Scalars['ID']['output']>;
  type: UnsupportedType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
  work?: Maybe<Scalars['String']['output']>;
};

export type UnsupportedParameter = {
  __typename?: 'UnsupportedParameter';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  unsupported: Unsupported;
  unsupportedId: Scalars['ID']['output'];
  value: Scalars['String']['output'];
};

export enum UnsupportedType {
  File = 'file',
  Wallet = 'wallet'
}

export type User = {
  __typename?: 'User';
  accounts: Array<Account>;
  clerk?: Maybe<UserClerk>;
  coinItems: Array<CoinItem>;
  coins: Array<Coin>;
  createdAt: Scalars['DateTime']['output'];
  currencies: Array<Currency>;
  email: Scalars['String']['output'];
  faqCategories: Array<FaqCategory>;
  files: Array<File>;
  fullLabel?: Maybe<Scalars['String']['output']>;
  fullname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  isAdmin: Scalars['Boolean']['output'];
  mapFiles: Array<MapFile>;
  requests: Array<Request>;
  serviceId?: Maybe<Scalars['String']['output']>;
  sharedInventories: Array<SharedInventory>;
  tasks: Array<Task>;
  transfers: Array<Transfer>;
  trxMapHistory: Array<TrxMapHistory>;
  trxMaps: Array<TrxMap>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userRoles: Array<UserRole>;
};

export type UserClerk = {
  __typename?: 'UserClerk';
  avatar?: Maybe<Scalars['String']['output']>;
  isBanned: Scalars['Boolean']['output'];
  lastSignInAt?: Maybe<Scalars['BigInt']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  private: Scalars['JSONObject']['output'];
  public: Scalars['JSONObject']['output'];
  signedUpAt?: Maybe<Scalars['BigInt']['output']>;
};

export type UserPermissionList = {
  __typename?: 'UserPermissionList';
  organizationId?: Maybe<Scalars['String']['output']>;
  permissions: Array<Scalars['String']['output']>;
};

export type UserRole = {
  __typename?: 'UserRole';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  inviter?: Maybe<User>;
  inviterId?: Maybe<Scalars['ID']['output']>;
  organization?: Maybe<Organization>;
  organizationId?: Maybe<Scalars['ID']['output']>;
  role: Role;
  roleId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export type ValidAddress = {
  __typename?: 'ValidAddress';
  accounts: Array<Account>;
  isValid: Scalars['Boolean']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type VirtualBalance = {
  __typename?: 'VirtualBalance';
  account: Account;
  accountId: Scalars['String']['output'];
  address?: Maybe<Scalars['String']['output']>;
  balance: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isMain: Scalars['Boolean']['output'];
  isOpen: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Wallet = {
  __typename?: 'Wallet';
  address?: Maybe<Scalars['String']['output']>;
  network?: Maybe<Scalars['String']['output']>;
};

export type Watchdog = {
  __typename?: 'Watchdog';
  createdAt: Scalars['DateTime']['output'];
  delay: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  maxRunCount: Scalars['Int']['output'];
  method?: Maybe<Scalars['String']['output']>;
  runTime: Scalars['Int']['output'];
  status?: Maybe<TaskStatus>;
  task?: Maybe<TaskType>;
  type: WatchdogType;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: User;
  userId: Scalars['ID']['output'];
};

export enum WatchdogType {
  Restart = 'restart',
  Start = 'start',
  Stop = 'stop',
  Terminate = 'terminate'
}

export type YearsType = {
  amount: Scalars['Float']['input'];
  requestDataId: Scalars['String']['input'];
};

export type Organization_SyncMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
}>;


export type Organization_SyncMutation = { __typename?: 'Mutation', organization_sync: boolean };

export type User_SyncMutationVariables = Exact<{ [key: string]: never; }>;


export type User_SyncMutation = { __typename?: 'Mutation', user_sync?: { __typename?: 'SyncType', userId: string, organizationId: string } | null };

export type Organization_SelfInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type Organization_SelfInfoQuery = { __typename?: 'Query', organization_selfInfo?: { __typename?: 'Organization', id: string, name: string, label?: string | null, description?: string | null, type: OrgType, createdAt: any, updatedAt?: any | null, owner?: { __typename?: 'User', id: string, email: string, fullname: string } | null, members: Array<{ __typename?: 'UserRole', user: { __typename?: 'User', id: string, email: string, fullname: string } }>, parameters: Array<{ __typename?: 'OrganizationParameter', key: string, value: string }>, openBalanceRequests: Array<{ __typename?: 'OpenBalanceRequest', date: any }>, currency: { __typename?: 'Currency', symbol: string, icon: string } } | null };

export type SourceTrx_Filter_AccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type SourceTrx_Filter_AccountsQuery = { __typename?: 'Query', sourceTrx_filter_accounts: Array<{ __typename?: 'SourceTrxFilterAccounts', accountId: string, account: string }> };

export type SourceTrx_Filter_FieldsQueryVariables = Exact<{
  field: Scalars['String']['input'];
}>;


export type SourceTrx_Filter_FieldsQuery = { __typename?: 'Query', sourceTrx_filter_fields: Array<string> };

export type SourceTrx_Filter_MethodsQueryVariables = Exact<{ [key: string]: never; }>;


export type SourceTrx_Filter_MethodsQuery = { __typename?: 'Query', sourceTrx_filter_methods: Array<string> };

export type SourceTrx_Filter_RawFieldsQueryVariables = Exact<{
  field: Scalars['String']['input'];
  side?: InputMaybe<Scalars['String']['input']>;
}>;


export type SourceTrx_Filter_RawFieldsQuery = { __typename?: 'Query', sourceTrx_filter_rawFields: Array<string> };

export type SourceTrx_Filter_SubAccountsQueryVariables = Exact<{ [key: string]: never; }>;


export type SourceTrx_Filter_SubAccountsQuery = { __typename?: 'Query', sourceTrx_filter_subAccounts: Array<{ __typename?: 'SourceTrxFilterAccounts', accountId: string, account: string }> };

export type User_PermissionsQueryVariables = Exact<{ [key: string]: never; }>;


export type User_PermissionsQuery = { __typename?: 'Query', user_permissions: Array<{ __typename?: 'UserPermissionList', organizationId?: string | null, permissions: Array<string> }> };


export const Organization_SyncDocument = gql`
    mutation organization_sync($organizationId: String!) {
  organization_sync(organizationId: $organizationId)
}
    `;
export const User_SyncDocument = gql`
    mutation user_sync {
  user_sync {
    userId
    organizationId
  }
}
    `;
export const Organization_SelfInfoDocument = gql`
    query organization_selfInfo {
  organization_selfInfo {
    id
    name
    label
    description
    type
    owner {
      id
      email
      fullname
    }
    members {
      user {
        id
        email
        fullname
      }
    }
    parameters {
      key
      value
    }
    openBalanceRequests {
      date
    }
    currency {
      symbol
      icon
    }
    createdAt
    updatedAt
  }
}
    `;
export const SourceTrx_Filter_AccountsDocument = gql`
    query sourceTrx_filter_accounts {
  sourceTrx_filter_accounts {
    accountId
    account
  }
}
    `;
export const SourceTrx_Filter_FieldsDocument = gql`
    query sourceTrx_filter_fields($field: String!) {
  sourceTrx_filter_fields(field: $field)
}
    `;
export const SourceTrx_Filter_MethodsDocument = gql`
    query sourceTrx_filter_methods {
  sourceTrx_filter_methods
}
    `;
export const SourceTrx_Filter_RawFieldsDocument = gql`
    query sourceTrx_filter_rawFields($field: String!, $side: String) {
  sourceTrx_filter_rawFields(field: $field, side: $side)
}
    `;
export const SourceTrx_Filter_SubAccountsDocument = gql`
    query sourceTrx_filter_subAccounts {
  sourceTrx_filter_subAccounts {
    accountId
    account
  }
}
    `;
export const User_PermissionsDocument = gql`
    query user_permissions {
  user_permissions {
    organizationId
    permissions
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    organization_sync(variables: Organization_SyncMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Organization_SyncMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<Organization_SyncMutation>(Organization_SyncDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'organization_sync', 'mutation', variables);
    },
    user_sync(variables?: User_SyncMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<User_SyncMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<User_SyncMutation>(User_SyncDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'user_sync', 'mutation', variables);
    },
    organization_selfInfo(variables?: Organization_SelfInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Organization_SelfInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Organization_SelfInfoQuery>(Organization_SelfInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'organization_selfInfo', 'query', variables);
    },
    sourceTrx_filter_accounts(variables?: SourceTrx_Filter_AccountsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SourceTrx_Filter_AccountsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SourceTrx_Filter_AccountsQuery>(SourceTrx_Filter_AccountsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sourceTrx_filter_accounts', 'query', variables);
    },
    sourceTrx_filter_fields(variables: SourceTrx_Filter_FieldsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SourceTrx_Filter_FieldsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SourceTrx_Filter_FieldsQuery>(SourceTrx_Filter_FieldsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sourceTrx_filter_fields', 'query', variables);
    },
    sourceTrx_filter_methods(variables?: SourceTrx_Filter_MethodsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SourceTrx_Filter_MethodsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SourceTrx_Filter_MethodsQuery>(SourceTrx_Filter_MethodsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sourceTrx_filter_methods', 'query', variables);
    },
    sourceTrx_filter_rawFields(variables: SourceTrx_Filter_RawFieldsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SourceTrx_Filter_RawFieldsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SourceTrx_Filter_RawFieldsQuery>(SourceTrx_Filter_RawFieldsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sourceTrx_filter_rawFields', 'query', variables);
    },
    sourceTrx_filter_subAccounts(variables?: SourceTrx_Filter_SubAccountsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SourceTrx_Filter_SubAccountsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SourceTrx_Filter_SubAccountsQuery>(SourceTrx_Filter_SubAccountsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sourceTrx_filter_subAccounts', 'query', variables);
    },
    user_permissions(variables?: User_PermissionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<User_PermissionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<User_PermissionsQuery>(User_PermissionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'user_permissions', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;