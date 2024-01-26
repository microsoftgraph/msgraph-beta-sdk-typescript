import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { MessageRecipientsRequestBuilder } from "./messageRecipients";
import { MessageRecipientsServiceClientNavigationMetadata } from "./messageRecipientsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the messageRecipients singleton.
     */
    get messageRecipients(): MessageRecipientsRequestBuilder;
  }
}
extendGraphBetaServiceClient(MessageRecipientsServiceClientNavigationMetadata);
export * from "./messageRecipientsServiceClient";
