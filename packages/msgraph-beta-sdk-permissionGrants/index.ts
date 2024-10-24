import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PermissionGrantsRequestBuilder } from "./permissionGrants/index.js";
import { PermissionGrantsServiceClientNavigationMetadata } from "./permissionGrantsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the permissionGrants singleton.
     */
    get permissionGrants(): PermissionGrantsRequestBuilder;
  }
}
extendGraphBetaServiceClient(PermissionGrantsServiceClientNavigationMetadata);
export * from "./permissionGrantsServiceClient.js";
