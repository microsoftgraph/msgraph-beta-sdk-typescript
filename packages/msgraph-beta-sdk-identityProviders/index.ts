import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { IdentityProvidersRequestBuilder } from "./identityProviders";
import { IdentityProvidersServiceClientNavigationMetadata } from "./identityProvidersServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the identityProviders singleton.
     */
    get identityProviders(): IdentityProvidersRequestBuilder;
  }
}
extendGraphBetaServiceClient(IdentityProvidersServiceClientNavigationMetadata);
export * from "./identityProvidersServiceClient";
