import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { Oauth2PermissionGrantsRequestBuilder } from "./oauth2PermissionGrants";
import { Oauth2PermissionGrantsServiceClientNavigationMetadata } from "./oauth2PermissionGrantsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the oauth2PermissionGrants singleton.
     */
    get oauth2PermissionGrants(): Oauth2PermissionGrantsRequestBuilder;
  }
}
extendGraphBetaServiceClient(Oauth2PermissionGrantsServiceClientNavigationMetadata);
export * from "./oauth2PermissionGrantsServiceClient";
