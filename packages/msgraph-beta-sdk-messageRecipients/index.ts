import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { MessageRecipientsRequestBuilder } from "./messageRecipients/index.js";
import { MessageRecipientsServiceClientNavigationMetadata } from "./messageRecipientsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the messageRecipients singleton.
     */
    get messageRecipients(): MessageRecipientsRequestBuilder;
  }
}
extendGraphBetaServiceClient(MessageRecipientsServiceClientNavigationMetadata);
export * from "./messageRecipientsServiceClient.js";
