import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { GovernanceRoleAssignmentsRequestBuilder } from "./governanceRoleAssignments/index.js";
import { GovernanceRoleAssignmentsServiceClientNavigationMetadata } from "./governanceRoleAssignmentsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the governanceRoleAssignments singleton.
     */
    get governanceRoleAssignments(): GovernanceRoleAssignmentsRequestBuilder;
  }
}
extendGraphBetaServiceClient(GovernanceRoleAssignmentsServiceClientNavigationMetadata);
export * from "./governanceRoleAssignmentsServiceClient.js";
