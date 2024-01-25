import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PermissionGrantsRequestBuilder } from "./permissionGrants";
import { PermissionGrantsServiceClientNavigationMetadata } from "./permissionGrantsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the permissionGrants singleton.
     */
    get permissionGrants(): PermissionGrantsRequestBuilder;
  }
}
extendGraphBetaServiceClient(PermissionGrantsServiceClientNavigationMetadata);
export * from "./permissionGrantsServiceClient";
