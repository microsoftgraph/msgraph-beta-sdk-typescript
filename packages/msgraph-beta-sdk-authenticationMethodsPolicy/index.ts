import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AuthenticationMethodsPolicyRequestBuilder } from "./authenticationMethodsPolicy";
import { AuthenticationMethodsPolicyServiceClientNavigationMetadata } from "./authenticationMethodsPolicyServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the authenticationMethodsPolicy singleton.
     */
    get authenticationMethodsPolicy(): AuthenticationMethodsPolicyRequestBuilder;
  }
}
extendGraphBetaServiceClient(AuthenticationMethodsPolicyServiceClientNavigationMetadata);
export * from "./authenticationMethodsPolicyServiceClient";
