import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { SearchRequestBuilder } from "./search";
import { SearchServiceClientNavigationMetadata } from "./searchServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the search singleton.
     */
    get search(): SearchRequestBuilder;
  }
}
extendGraphBetaServiceClient(SearchServiceClientNavigationMetadata);
export * from "./searchServiceClient.js";
