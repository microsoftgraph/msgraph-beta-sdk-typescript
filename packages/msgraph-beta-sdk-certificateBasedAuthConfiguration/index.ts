import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { CertificateBasedAuthConfigurationRequestBuilder } from "./certificateBasedAuthConfiguration/index.js";
import { CertificateBasedAuthConfigurationServiceClientNavigationMetadata } from "./certificateBasedAuthConfigurationServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the certificateBasedAuthConfiguration singleton.
     */
    get certificateBasedAuthConfiguration(): CertificateBasedAuthConfigurationRequestBuilder;
  }
}
extendGraphBetaServiceClient(CertificateBasedAuthConfigurationServiceClientNavigationMetadata);
export * from "./certificateBasedAuthConfigurationServiceClient.js";
