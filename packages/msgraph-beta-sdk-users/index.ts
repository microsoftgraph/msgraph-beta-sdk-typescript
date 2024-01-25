import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { UsersRequestBuilder } from "./users";
import { UsersServiceClientNavigationMetadata } from "./usersServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the users singleton.
     */
    get users(): UsersRequestBuilder;
  }
}
extendGraphBetaServiceClient(UsersServiceClientNavigationMetadata);
export * from "./usersServiceClient";
