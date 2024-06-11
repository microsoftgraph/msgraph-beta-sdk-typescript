import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ConnectionsRequestBuilder } from "./connections/index.js";
import { ConnectionsServiceClientNavigationMetadata } from "./connectionsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the connections singleton.
     */
    get connections(): ConnectionsRequestBuilder;
  }
}
extendGraphBetaServiceClient(ConnectionsServiceClientNavigationMetadata);
export * from "./connectionsServiceClient.js";
