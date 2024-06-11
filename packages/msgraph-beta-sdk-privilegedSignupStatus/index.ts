import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PrivilegedSignupStatusRequestBuilder } from "./privilegedSignupStatus";
import { PrivilegedSignupStatusServiceClientNavigationMetadata } from "./privilegedSignupStatusServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the privilegedSignupStatus singleton.
     */
    get privilegedSignupStatus(): PrivilegedSignupStatusRequestBuilder;
  }
}
extendGraphBetaServiceClient(PrivilegedSignupStatusServiceClientNavigationMetadata);
export * from "./privilegedSignupStatusServiceClient.js";
