import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ConnectionsRequestBuilder } from "./connections";
import { ConnectionsServiceClientNavigationMetadata } from "./connectionsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the connections singleton.
     */
    get connections(): ConnectionsRequestBuilder;
  }
}
extendGraphBetaServiceClient(ConnectionsServiceClientNavigationMetadata);
export * from "./connectionsServiceClient";
