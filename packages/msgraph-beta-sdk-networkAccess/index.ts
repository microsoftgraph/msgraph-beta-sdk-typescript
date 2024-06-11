import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { NetworkAccessRequestBuilder } from "./networkAccess";
import { NetworkAccessServiceClientNavigationMetadata } from "./networkAccessServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the networkAccess singleton.
     */
    get networkAccess(): NetworkAccessRequestBuilder;
  }
}
extendGraphBetaServiceClient(NetworkAccessServiceClientNavigationMetadata);
export * from "./networkAccessServiceClient.js";
