import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DomainsRequestBuilder } from "./domains";
import { DomainsServiceClientNavigationMetadata } from "./domainsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the domains singleton.
     */
    get domains(): DomainsRequestBuilder;
  }
}
extendGraphBetaServiceClient(DomainsServiceClientNavigationMetadata);
export * from "./domainsServiceClient";
