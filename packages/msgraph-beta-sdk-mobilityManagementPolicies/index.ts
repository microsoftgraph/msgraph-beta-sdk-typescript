import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { MobilityManagementPoliciesRequestBuilder } from "./mobilityManagementPolicies/index.js";
import { MobilityManagementPoliciesServiceClientNavigationMetadata } from "./mobilityManagementPoliciesServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the mobilityManagementPolicies singleton.
     */
    get mobilityManagementPolicies(): MobilityManagementPoliciesRequestBuilder;
  }
}
extendGraphBetaServiceClient(MobilityManagementPoliciesServiceClientNavigationMetadata);
export * from "./mobilityManagementPoliciesServiceClient.js";
