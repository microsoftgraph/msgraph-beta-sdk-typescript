import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PrivilegedRoleAssignmentRequestsRequestBuilder } from "./privilegedRoleAssignmentRequests";
import { PrivilegedRoleAssignmentRequestsServiceClientNavigationMetadata } from "./privilegedRoleAssignmentRequestsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the privilegedRoleAssignmentRequests singleton.
     */
    get privilegedRoleAssignmentRequests(): PrivilegedRoleAssignmentRequestsRequestBuilder;
  }
}
extendGraphBetaServiceClient(PrivilegedRoleAssignmentRequestsServiceClientNavigationMetadata);
export * from "./privilegedRoleAssignmentRequestsServiceClient";
