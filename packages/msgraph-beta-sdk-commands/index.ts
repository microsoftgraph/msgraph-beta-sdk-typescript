import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { CommandsRequestBuilder } from "./commands";
import { CommandsServiceClientNavigationMetadata } from "./commandsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the commands singleton.
     */
    get commands(): CommandsRequestBuilder;
  }
}
extendGraphBetaServiceClient(CommandsServiceClientNavigationMetadata);
export * from "./commandsServiceClient.js";
