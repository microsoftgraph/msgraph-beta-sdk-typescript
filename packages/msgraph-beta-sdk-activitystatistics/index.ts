import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ActivitystatisticsRequestBuilder } from "./activitystatistics/index.js";
import { ActivitystatisticsServiceClientNavigationMetadata } from "./activitystatisticsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the activitystatistics singleton.
     */
    get activitystatistics(): ActivitystatisticsRequestBuilder;
  }
}
extendGraphBetaServiceClient(ActivitystatisticsServiceClientNavigationMetadata);
export * from "./activitystatisticsServiceClient.js";
