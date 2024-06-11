import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { SubscribedSkusRequestBuilder } from "./subscribedSkus";
import { SubscribedSkusServiceClientNavigationMetadata } from "./subscribedSkusServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the subscribedSkus singleton.
     */
    get subscribedSkus(): SubscribedSkusRequestBuilder;
  }
}
extendGraphBetaServiceClient(SubscribedSkusServiceClientNavigationMetadata);
export * from "./subscribedSkusServiceClient.js";
