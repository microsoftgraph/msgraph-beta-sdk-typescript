import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { TrustFrameworkRequestBuilder } from "./trustFramework";
import { TrustFrameworkServiceClientNavigationMetadata } from "./trustFrameworkServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the trustFramework singleton.
     */
    get trustFramework(): TrustFrameworkRequestBuilder;
  }
}
extendGraphBetaServiceClient(TrustFrameworkServiceClientNavigationMetadata);
export * from "./trustFrameworkServiceClient.js";
