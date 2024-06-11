import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AuthenticationMethodsPolicyRequestBuilder } from "./authenticationMethodsPolicy/index.js";
import { AuthenticationMethodsPolicyServiceClientNavigationMetadata } from "./authenticationMethodsPolicyServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the authenticationMethodsPolicy singleton.
     */
    get authenticationMethodsPolicy(): AuthenticationMethodsPolicyRequestBuilder;
  }
}
extendGraphBetaServiceClient(AuthenticationMethodsPolicyServiceClientNavigationMetadata);
export * from "./authenticationMethodsPolicyServiceClient.js";
