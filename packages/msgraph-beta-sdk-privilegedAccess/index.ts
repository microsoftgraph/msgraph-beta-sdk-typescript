import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PrivilegedAccessRequestBuilder } from "./privilegedAccess/index.js";
import { PrivilegedAccessServiceClientNavigationMetadata } from "./privilegedAccessServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the privilegedAccess singleton.
     */
    get privilegedAccess(): PrivilegedAccessRequestBuilder;
  }
}
extendGraphBetaServiceClient(PrivilegedAccessServiceClientNavigationMetadata);
export * from "./privilegedAccessServiceClient.js";
