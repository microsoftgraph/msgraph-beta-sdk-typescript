import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DeviceAppManagementRequestBuilder } from "./deviceAppManagement/index.js";
import { DeviceAppManagementServiceClientNavigationMetadata } from "./deviceAppManagementServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the deviceAppManagement singleton.
     */
    get deviceAppManagement(): DeviceAppManagementRequestBuilder;
  }
}
extendGraphBetaServiceClient(DeviceAppManagementServiceClientNavigationMetadata);
export * from "./deviceAppManagementServiceClient.js";
