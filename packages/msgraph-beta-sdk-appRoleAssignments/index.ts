import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AppRoleAssignmentsRequestBuilder } from "./appRoleAssignments";
import { AppRoleAssignmentsServiceClientNavigationMetadata } from "./appRoleAssignmentsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the appRoleAssignments singleton.
     */
    get appRoleAssignments(): AppRoleAssignmentsRequestBuilder;
  }
}
extendGraphBetaServiceClient(AppRoleAssignmentsServiceClientNavigationMetadata);
export * from "./appRoleAssignmentsServiceClient.js";
