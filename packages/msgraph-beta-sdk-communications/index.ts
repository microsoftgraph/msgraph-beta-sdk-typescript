import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { CommunicationsRequestBuilder } from "./communications";
import { CommunicationsServiceClientNavigationMetadata } from "./communicationsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the communications singleton.
     */
    get communications(): CommunicationsRequestBuilder;
  }
}
extendGraphBetaServiceClient(CommunicationsServiceClientNavigationMetadata);
export * from "./communicationsServiceClient";
