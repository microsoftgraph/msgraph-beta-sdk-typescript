import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PrivilegedOperationEventsRequestBuilder } from "./privilegedOperationEvents/index.js";
import { PrivilegedOperationEventsServiceClientNavigationMetadata } from "./privilegedOperationEventsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the privilegedOperationEvents singleton.
     */
    get privilegedOperationEvents(): PrivilegedOperationEventsRequestBuilder;
  }
}
extendGraphBetaServiceClient(PrivilegedOperationEventsServiceClientNavigationMetadata);
export * from "./privilegedOperationEventsServiceClient.js";
