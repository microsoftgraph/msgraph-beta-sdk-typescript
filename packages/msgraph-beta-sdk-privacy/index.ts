import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PrivacyRequestBuilder } from "./privacy";
import { PrivacyServiceClientNavigationMetadata } from "./privacyServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the privacy singleton.
     */
    get privacy(): PrivacyRequestBuilder;
  }
}
extendGraphBetaServiceClient(PrivacyServiceClientNavigationMetadata);
export * from "./privacyServiceClient";
