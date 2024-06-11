import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { TermStoreRequestBuilder } from "./termStore/index.js";
import { TermStoreServiceClientNavigationMetadata } from "./termStoreServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the termStore singleton.
     */
    get termStore(): TermStoreRequestBuilder;
  }
}
extendGraphBetaServiceClient(TermStoreServiceClientNavigationMetadata);
export * from "./termStoreServiceClient.js";
