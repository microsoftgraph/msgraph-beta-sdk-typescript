import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { GovernanceRoleDefinitionsRequestBuilder } from "./governanceRoleDefinitions";
import { GovernanceRoleDefinitionsServiceClientNavigationMetadata } from "./governanceRoleDefinitionsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the governanceRoleDefinitions singleton.
     */
    get governanceRoleDefinitions(): GovernanceRoleDefinitionsRequestBuilder;
  }
}
extendGraphBetaServiceClient(GovernanceRoleDefinitionsServiceClientNavigationMetadata);
export * from "./governanceRoleDefinitionsServiceClient";
