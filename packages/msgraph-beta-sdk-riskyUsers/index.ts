import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { RiskyUsersRequestBuilder } from "./riskyUsers";
import { RiskyUsersServiceClientNavigationMetadata } from "./riskyUsersServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the riskyUsers singleton.
     */
    get riskyUsers(): RiskyUsersRequestBuilder;
  }
}
extendGraphBetaServiceClient(RiskyUsersServiceClientNavigationMetadata);
export * from "./riskyUsersServiceClient.js";
