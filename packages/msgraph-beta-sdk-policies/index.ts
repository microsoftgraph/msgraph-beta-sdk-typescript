import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PoliciesRequestBuilder } from "./policies/index.js";
import { PoliciesServiceClientNavigationMetadata } from "./policiesServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the policies singleton.
     */
    get policies(): PoliciesRequestBuilder;
  }
}
extendGraphBetaServiceClient(PoliciesServiceClientNavigationMetadata);
export * from "./policiesServiceClient.js";
