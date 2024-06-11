import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DevicesRequestBuilder } from "./devices";
import { DevicesServiceClientNavigationMetadata } from "./devicesServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the devices singleton.
     */
    get devices(): DevicesRequestBuilder;
  }
}
extendGraphBetaServiceClient(DevicesServiceClientNavigationMetadata);
export * from "./devicesServiceClient.js";
