import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { GovernanceRoleAssignmentRequestsRequestBuilder } from "./governanceRoleAssignmentRequests/index.js";
import { GovernanceRoleAssignmentRequestsServiceClientNavigationMetadata } from "./governanceRoleAssignmentRequestsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the governanceRoleAssignmentRequests singleton.
     */
    get governanceRoleAssignmentRequests(): GovernanceRoleAssignmentRequestsRequestBuilder;
  }
}
extendGraphBetaServiceClient(GovernanceRoleAssignmentRequestsServiceClientNavigationMetadata);
export * from "./governanceRoleAssignmentRequestsServiceClient.js";
