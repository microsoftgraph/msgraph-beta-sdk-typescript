import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DomainDnsRecordsRequestBuilder } from "./domainDnsRecords";
import { DomainDnsRecordsServiceClientNavigationMetadata } from "./domainDnsRecordsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the domainDnsRecords singleton.
     */
    get domainDnsRecords(): DomainDnsRecordsRequestBuilder;
  }
}
extendGraphBetaServiceClient(DomainDnsRecordsServiceClientNavigationMetadata);
export * from "./domainDnsRecordsServiceClient";
