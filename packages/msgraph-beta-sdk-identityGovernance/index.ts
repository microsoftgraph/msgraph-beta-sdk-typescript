import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { IdentityGovernanceRequestBuilder } from "./identityGovernance/index.js";
import { IdentityGovernanceServiceClientNavigationMetadata } from "./identityGovernanceServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the identityGovernance singleton.
     */
    get identityGovernance(): IdentityGovernanceRequestBuilder;
  }
}
extendGraphBetaServiceClient(IdentityGovernanceServiceClientNavigationMetadata);
export * from "./identityGovernanceServiceClient.js";
