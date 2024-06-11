import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AccessReviewsRequestBuilder } from "./accessReviews";
import { AccessReviewsServiceClientNavigationMetadata } from "./accessReviewsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the accessReviews singleton.
     */
    get accessReviews(): AccessReviewsRequestBuilder;
  }
}
extendGraphBetaServiceClient(AccessReviewsServiceClientNavigationMetadata);
export * from "./accessReviewsServiceClient.js";
