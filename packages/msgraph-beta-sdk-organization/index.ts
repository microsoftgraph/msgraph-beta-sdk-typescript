import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { OrganizationRequestBuilder } from "./organization";
import { OrganizationServiceClientNavigationMetadata } from "./organizationServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the organization singleton.
     */
    get organization(): OrganizationRequestBuilder;
  }
}
extendGraphBetaServiceClient(OrganizationServiceClientNavigationMetadata);
export * from "./organizationServiceClient";
