import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AdminRequestBuilder } from "./admin";
import { AdminServiceClientNavigationMetadata } from "./adminServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the admin singleton.
     */
    get admin(): AdminRequestBuilder;
  }
}
extendGraphBetaServiceClient(AdminServiceClientNavigationMetadata);
export * from "./adminServiceClient.js";
