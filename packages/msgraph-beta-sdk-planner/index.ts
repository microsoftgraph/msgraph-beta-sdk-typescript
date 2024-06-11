import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PlannerRequestBuilder } from "./planner/index.js";
import { PlannerServiceClientNavigationMetadata } from "./plannerServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the planner singleton.
     */
    get planner(): PlannerRequestBuilder;
  }
}
extendGraphBetaServiceClient(PlannerServiceClientNavigationMetadata);
export * from "./plannerServiceClient.js";
