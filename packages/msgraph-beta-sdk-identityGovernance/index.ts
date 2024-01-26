import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { IdentityGovernanceRequestBuilder } from "./identityGovernance";
import { IdentityGovernanceServiceClientNavigationMetadata } from "./identityGovernanceServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the identityGovernance singleton.
     */
    get identityGovernance(): IdentityGovernanceRequestBuilder;
  }
}
extendGraphBetaServiceClient(IdentityGovernanceServiceClientNavigationMetadata);
export * from "./identityGovernanceServiceClient";
