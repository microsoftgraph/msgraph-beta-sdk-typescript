import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { GovernanceResourcesRequestBuilder } from "./governanceResources/index.js";
import { GovernanceResourcesServiceClientNavigationMetadata } from "./governanceResourcesServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the governanceResources singleton.
     */
    get governanceResources(): GovernanceResourcesRequestBuilder;
  }
}
extendGraphBetaServiceClient(GovernanceResourcesServiceClientNavigationMetadata);
export * from "./governanceResourcesServiceClient.js";
