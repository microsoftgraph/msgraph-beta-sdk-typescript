import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { MonitoringRequestBuilder } from "./monitoring";
import { MonitoringServiceClientNavigationMetadata } from "./monitoringServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the monitoring singleton.
     */
    get monitoring(): MonitoringRequestBuilder;
  }
}
extendGraphBetaServiceClient(MonitoringServiceClientNavigationMetadata);
export * from "./monitoringServiceClient.js";
