import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PrivilegedOperationEventsRequestBuilder } from "./privilegedOperationEvents";
import { PrivilegedOperationEventsServiceClientNavigationMetadata } from "./privilegedOperationEventsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the privilegedOperationEvents singleton.
     */
    get privilegedOperationEvents(): PrivilegedOperationEventsRequestBuilder;
  }
}
extendGraphBetaServiceClient(PrivilegedOperationEventsServiceClientNavigationMetadata);
export * from "./privilegedOperationEventsServiceClient";
