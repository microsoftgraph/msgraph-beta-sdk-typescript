import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ScopedRoleMembershipsRequestBuilder } from "./scopedRoleMemberships/index.js";
import { ScopedRoleMembershipsServiceClientNavigationMetadata } from "./scopedRoleMembershipsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the scopedRoleMemberships singleton.
     */
    get scopedRoleMemberships(): ScopedRoleMembershipsRequestBuilder;
  }
}
extendGraphBetaServiceClient(ScopedRoleMembershipsServiceClientNavigationMetadata);
export * from "./scopedRoleMembershipsServiceClient.js";
