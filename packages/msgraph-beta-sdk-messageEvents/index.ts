import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { MessageEventsRequestBuilder } from "./messageEvents/index.js";
import { MessageEventsServiceClientNavigationMetadata } from "./messageEventsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the messageEvents singleton.
     */
    get messageEvents(): MessageEventsRequestBuilder;
  }
}
extendGraphBetaServiceClient(MessageEventsServiceClientNavigationMetadata);
export * from "./messageEventsServiceClient.js";
