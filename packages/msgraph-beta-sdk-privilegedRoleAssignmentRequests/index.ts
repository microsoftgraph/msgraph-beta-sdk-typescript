import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PrivilegedRoleAssignmentRequestsRequestBuilder } from "./privilegedRoleAssignmentRequests/index.js";
import { PrivilegedRoleAssignmentRequestsServiceClientNavigationMetadata } from "./privilegedRoleAssignmentRequestsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the privilegedRoleAssignmentRequests singleton.
     */
    get privilegedRoleAssignmentRequests(): PrivilegedRoleAssignmentRequestsRequestBuilder;
  }
}
extendGraphBetaServiceClient(PrivilegedRoleAssignmentRequestsServiceClientNavigationMetadata);
export * from "./privilegedRoleAssignmentRequestsServiceClient.js";
