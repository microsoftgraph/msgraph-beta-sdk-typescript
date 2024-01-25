import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DeviceManagementRequestBuilder } from "./deviceManagement";
import { DeviceManagementServiceClientNavigationMetadata } from "./deviceManagementServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the deviceManagement singleton.
     */
    get deviceManagement(): DeviceManagementRequestBuilder;
  }
}
extendGraphBetaServiceClient(DeviceManagementServiceClientNavigationMetadata);
export * from "./deviceManagementServiceClient";
