import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ApprovalWorkflowProvidersRequestBuilder } from "./approvalWorkflowProviders";
import { ApprovalWorkflowProvidersServiceClientNavigationMetadata } from "./approvalWorkflowProvidersServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the approvalWorkflowProviders singleton.
     */
    get approvalWorkflowProviders(): ApprovalWorkflowProvidersRequestBuilder;
  }
}
extendGraphBetaServiceClient(ApprovalWorkflowProvidersServiceClientNavigationMetadata);
export * from "./approvalWorkflowProvidersServiceClient.js";
