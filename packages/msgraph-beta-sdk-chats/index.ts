import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ChatsRequestBuilder } from "./chats";
import { ChatsServiceClientNavigationMetadata } from "./chatsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the chats singleton.
     */
    get chats(): ChatsRequestBuilder;
  }
}
extendGraphBetaServiceClient(ChatsServiceClientNavigationMetadata);
export * from "./chatsServiceClient.js";
