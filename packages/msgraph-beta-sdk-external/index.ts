import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ExternalRequestBuilder } from "./external";
import { ExternalServiceClientNavigationMetadata } from "./externalServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the external singleton.
     */
    get external(): ExternalRequestBuilder;
  }
}
extendGraphBetaServiceClient(ExternalServiceClientNavigationMetadata);
export * from "./externalServiceClient";
