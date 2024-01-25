import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { MessageTracesRequestBuilder } from "./messageTraces";
import { MessageTracesServiceClientNavigationMetadata } from "./messageTracesServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the messageTraces singleton.
     */
    get messageTraces(): MessageTracesRequestBuilder;
  }
}
extendGraphBetaServiceClient(MessageTracesServiceClientNavigationMetadata);
export * from "./messageTracesServiceClient";
