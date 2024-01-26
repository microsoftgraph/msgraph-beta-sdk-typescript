import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DeviceLocalCredentialsRequestBuilder } from "./deviceLocalCredentials";
import { DeviceLocalCredentialsServiceClientNavigationMetadata } from "./deviceLocalCredentialsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the deviceLocalCredentials singleton.
     */
    get deviceLocalCredentials(): DeviceLocalCredentialsRequestBuilder;
  }
}
extendGraphBetaServiceClient(DeviceLocalCredentialsServiceClientNavigationMetadata);
export * from "./deviceLocalCredentialsServiceClient";
