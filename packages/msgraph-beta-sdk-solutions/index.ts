import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { SolutionsRequestBuilder } from "./solutions";
import { SolutionsServiceClientNavigationMetadata } from "./solutionsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the solutions singleton.
     */
    get solutions(): SolutionsRequestBuilder;
  }
}
extendGraphBetaServiceClient(SolutionsServiceClientNavigationMetadata);
export * from "./solutionsServiceClient.js";
