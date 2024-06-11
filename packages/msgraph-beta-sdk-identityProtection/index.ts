import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { IdentityProtectionRequestBuilder } from "./identityProtection";
import { IdentityProtectionServiceClientNavigationMetadata } from "./identityProtectionServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the identityProtection singleton.
     */
    get identityProtection(): IdentityProtectionRequestBuilder;
  }
}
extendGraphBetaServiceClient(IdentityProtectionServiceClientNavigationMetadata);
export * from "./identityProtectionServiceClient.js";
