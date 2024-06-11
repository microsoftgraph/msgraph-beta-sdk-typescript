import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { GroupsRequestBuilder } from "./groups/index.js";
import { GroupsServiceClientNavigationMetadata } from "./groupsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the groups singleton.
     */
    get groups(): GroupsRequestBuilder;
  }
}
extendGraphBetaServiceClient(GroupsServiceClientNavigationMetadata);
export * from "./groupsServiceClient.js";
