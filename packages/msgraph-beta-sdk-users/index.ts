import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { UsersRequestBuilder } from "./users/index.js";
import type { UserItemRequestBuilder } from "./users/item/index.js";
import { UsersServiceClientNavigationMetadata } from "./usersServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the users singleton.
     */
    get users(): UsersRequestBuilder;
    /**
     * Provides operations to manage the currently signed-in user.
     */
    get me(): UserItemRequestBuilder;
  }
}
extendGraphBetaServiceClient(UsersServiceClientNavigationMetadata);
export * from "./usersServiceClient.js";
