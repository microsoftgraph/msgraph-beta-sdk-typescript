import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PrivilegedRolesRequestBuilder } from "./privilegedRoles";
import { PrivilegedRolesServiceClientNavigationMetadata } from "./privilegedRolesServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the privilegedRoles singleton.
     */
    get privilegedRoles(): PrivilegedRolesRequestBuilder;
  }
}
extendGraphBetaServiceClient(PrivilegedRolesServiceClientNavigationMetadata);
export * from "./privilegedRolesServiceClient";
