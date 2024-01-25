import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { RoleManagementRequestBuilder } from "./roleManagement";
import { RoleManagementServiceClientNavigationMetadata } from "./roleManagementServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the roleManagement singleton.
     */
    get roleManagement(): RoleManagementRequestBuilder;
  }
}
extendGraphBetaServiceClient(RoleManagementServiceClientNavigationMetadata);
export * from "./roleManagementServiceClient";
