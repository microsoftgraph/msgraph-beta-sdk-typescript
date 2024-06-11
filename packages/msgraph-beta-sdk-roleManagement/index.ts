import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { RoleManagementRequestBuilder } from "./roleManagement/index.js";
import { RoleManagementServiceClientNavigationMetadata } from "./roleManagementServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the roleManagement singleton.
     */
    get roleManagement(): RoleManagementRequestBuilder;
  }
}
extendGraphBetaServiceClient(RoleManagementServiceClientNavigationMetadata);
export * from "./roleManagementServiceClient.js";
