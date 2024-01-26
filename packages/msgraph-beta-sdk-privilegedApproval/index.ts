import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PrivilegedApprovalRequestBuilder } from "./privilegedApproval";
import { PrivilegedApprovalServiceClientNavigationMetadata } from "./privilegedApprovalServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the privilegedApproval singleton.
     */
    get privilegedApproval(): PrivilegedApprovalRequestBuilder;
  }
}
extendGraphBetaServiceClient(PrivilegedApprovalServiceClientNavigationMetadata);
export * from "./privilegedApprovalServiceClient";
