import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { MessageEventsRequestBuilder } from "./messageEvents";
import { MessageEventsServiceClientNavigationMetadata } from "./messageEventsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the messageEvents singleton.
     */
    get messageEvents(): MessageEventsRequestBuilder;
  }
}
extendGraphBetaServiceClient(MessageEventsServiceClientNavigationMetadata);
export * from "./messageEventsServiceClient";
