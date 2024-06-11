import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ApplicationsRequestBuilder } from "./applications/index.js";
import { ApplicationsServiceClientNavigationMetadata } from "./applicationsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the applications singleton.
     */
    get applications(): ApplicationsRequestBuilder;
  }
}
extendGraphBetaServiceClient(ApplicationsServiceClientNavigationMetadata);
export * from "./applicationsServiceClient.js";
