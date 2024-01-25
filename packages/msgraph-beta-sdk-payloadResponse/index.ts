import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PayloadResponseRequestBuilder } from "./payloadResponse";
import { PayloadResponseServiceClientNavigationMetadata } from "./payloadResponseServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the payloadResponse singleton.
     */
    get payloadResponse(): PayloadResponseRequestBuilder;
  }
}
extendGraphBetaServiceClient(PayloadResponseServiceClientNavigationMetadata);
export * from "./payloadResponseServiceClient";
