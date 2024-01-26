import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AppRequestBuilder } from "./app";
import { AppServiceClientNavigationMetadata } from "./appServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the app singleton.
     */
    get app(): AppRequestBuilder;
  }
}
extendGraphBetaServiceClient(AppServiceClientNavigationMetadata);
export * from "./appServiceClient";
