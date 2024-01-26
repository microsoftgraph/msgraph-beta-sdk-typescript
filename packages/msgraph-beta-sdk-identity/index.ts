import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { IdentityRequestBuilder } from "./identity";
import { IdentityServiceClientNavigationMetadata } from "./identityServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the identity singleton.
     */
    get identity(): IdentityRequestBuilder;
  }
}
extendGraphBetaServiceClient(IdentityServiceClientNavigationMetadata);
export * from "./identityServiceClient";
