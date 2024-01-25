import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AuthenticationMethodConfigurationsRequestBuilder } from "./authenticationMethodConfigurations";
import { AuthenticationMethodConfigurationsServiceClientNavigationMetadata } from "./authenticationMethodConfigurationsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the authenticationMethodConfigurations singleton.
     */
    get authenticationMethodConfigurations(): AuthenticationMethodConfigurationsRequestBuilder;
  }
}
extendGraphBetaServiceClient(AuthenticationMethodConfigurationsServiceClientNavigationMetadata);
export * from "./authenticationMethodConfigurationsServiceClient";
