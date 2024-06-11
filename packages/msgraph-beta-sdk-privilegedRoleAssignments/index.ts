import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PrivilegedRoleAssignmentsRequestBuilder } from "./privilegedRoleAssignments";
import { PrivilegedRoleAssignmentsServiceClientNavigationMetadata } from "./privilegedRoleAssignmentsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the privilegedRoleAssignments singleton.
     */
    get privilegedRoleAssignments(): PrivilegedRoleAssignmentsRequestBuilder;
  }
}
extendGraphBetaServiceClient(PrivilegedRoleAssignmentsServiceClientNavigationMetadata);
export * from "./privilegedRoleAssignmentsServiceClient.js";
