import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { TenantRelationshipsRequestBuilder } from "./tenantRelationships/index.js";
import { TenantRelationshipsServiceClientNavigationMetadata } from "./tenantRelationshipsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the tenantRelationships singleton.
     */
    get tenantRelationships(): TenantRelationshipsRequestBuilder;
  }
}
extendGraphBetaServiceClient(TenantRelationshipsServiceClientNavigationMetadata);
export * from "./tenantRelationshipsServiceClient.js";
