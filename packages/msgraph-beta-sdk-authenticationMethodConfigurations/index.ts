import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AuthenticationMethodConfigurationsRequestBuilder } from "./authenticationMethodConfigurations/index.js";
import { AuthenticationMethodConfigurationsServiceClientNavigationMetadata } from "./authenticationMethodConfigurationsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the authenticationMethodConfigurations singleton.
     */
    get authenticationMethodConfigurations(): AuthenticationMethodConfigurationsRequestBuilder;
  }
}
extendGraphBetaServiceClient(AuthenticationMethodConfigurationsServiceClientNavigationMetadata);
export * from "./authenticationMethodConfigurationsServiceClient.js";
