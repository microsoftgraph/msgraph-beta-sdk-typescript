import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DirectoryRolesRequestBuilder } from "./directoryRoles";
import { DirectoryRolesServiceClientNavigationMetadata } from "./directoryRolesServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the directoryRoles singleton.
     */
    get directoryRoles(): DirectoryRolesRequestBuilder;
  }
}
extendGraphBetaServiceClient(DirectoryRolesServiceClientNavigationMetadata);
export * from "./directoryRolesServiceClient";
