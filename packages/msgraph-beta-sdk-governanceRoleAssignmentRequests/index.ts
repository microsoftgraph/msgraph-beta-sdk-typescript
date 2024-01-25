import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { GovernanceRoleAssignmentRequestsRequestBuilder } from "./governanceRoleAssignmentRequests";
import { GovernanceRoleAssignmentRequestsServiceClientNavigationMetadata } from "./governanceRoleAssignmentRequestsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the governanceRoleAssignmentRequests singleton.
     */
    get governanceRoleAssignmentRequests(): GovernanceRoleAssignmentRequestsRequestBuilder;
  }
}
extendGraphBetaServiceClient(GovernanceRoleAssignmentRequestsServiceClientNavigationMetadata);
export * from "./governanceRoleAssignmentRequestsServiceClient";
