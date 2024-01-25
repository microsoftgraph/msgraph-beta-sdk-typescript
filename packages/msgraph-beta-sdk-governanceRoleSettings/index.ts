import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { GovernanceRoleSettingsRequestBuilder } from "./governanceRoleSettings";
import { GovernanceRoleSettingsServiceClientNavigationMetadata } from "./governanceRoleSettingsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the governanceRoleSettings singleton.
     */
    get governanceRoleSettings(): GovernanceRoleSettingsRequestBuilder;
  }
}
extendGraphBetaServiceClient(GovernanceRoleSettingsServiceClientNavigationMetadata);
export * from "./governanceRoleSettingsServiceClient";
