import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { SubscriptionsRequestBuilder } from "./subscriptions/index.js";
import { SubscriptionsServiceClientNavigationMetadata } from "./subscriptionsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the subscriptions singleton.
     */
    get subscriptions(): SubscriptionsRequestBuilder;
  }
}
extendGraphBetaServiceClient(SubscriptionsServiceClientNavigationMetadata);
export * from "./subscriptionsServiceClient.js";
