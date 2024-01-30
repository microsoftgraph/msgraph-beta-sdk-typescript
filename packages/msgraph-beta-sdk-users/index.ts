import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { UsersRequestBuilder } from "./users";
import type { UserItemRequestBuilder } from "./users/item";
import { UsersServiceClientNavigationMetadata } from "./usersServiceClient";

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
export * from "./usersServiceClient";
