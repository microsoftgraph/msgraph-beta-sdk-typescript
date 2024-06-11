import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { GroupLifecyclePoliciesRequestBuilder } from "./groupLifecyclePolicies";
import { GroupLifecyclePoliciesServiceClientNavigationMetadata } from "./groupLifecyclePoliciesServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the groupLifecyclePolicies singleton.
     */
    get groupLifecyclePolicies(): GroupLifecyclePoliciesRequestBuilder;
  }
}
extendGraphBetaServiceClient(GroupLifecyclePoliciesServiceClientNavigationMetadata);
export * from "./groupLifecyclePoliciesServiceClient.js";
