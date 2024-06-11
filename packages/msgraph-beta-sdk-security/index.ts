import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { SecurityRequestBuilder } from "./security";
import { SecurityServiceClientNavigationMetadata } from "./securityServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the security singleton.
     */
    get security(): SecurityRequestBuilder;
  }
}
extendGraphBetaServiceClient(SecurityServiceClientNavigationMetadata);
export * from "./securityServiceClient.js";
