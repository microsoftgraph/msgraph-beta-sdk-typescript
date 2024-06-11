import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AccessReviewDecisionsRequestBuilder } from "./accessReviewDecisions/index.js";
import { AccessReviewDecisionsServiceClientNavigationMetadata } from "./accessReviewDecisionsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the accessReviewDecisions singleton.
     */
    get accessReviewDecisions(): AccessReviewDecisionsRequestBuilder;
  }
}
extendGraphBetaServiceClient(AccessReviewDecisionsServiceClientNavigationMetadata);
export * from "./accessReviewDecisionsServiceClient.js";
