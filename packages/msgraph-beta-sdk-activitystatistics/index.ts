import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ActivitystatisticsRequestBuilder } from "./activitystatistics";
import { ActivitystatisticsServiceClientNavigationMetadata } from "./activitystatisticsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the activitystatistics singleton.
     */
    get activitystatistics(): ActivitystatisticsRequestBuilder;
  }
}
extendGraphBetaServiceClient(ActivitystatisticsServiceClientNavigationMetadata);
export * from "./activitystatisticsServiceClient";
