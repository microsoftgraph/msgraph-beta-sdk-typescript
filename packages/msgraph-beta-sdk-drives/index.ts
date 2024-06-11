import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DrivesRequestBuilder } from "./drives";
import { DrivesServiceClientNavigationMetadata } from "./drivesServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the drives singleton.
     */
    get drives(): DrivesRequestBuilder;
  }
}
extendGraphBetaServiceClient(DrivesServiceClientNavigationMetadata);
export * from "./drivesServiceClient.js";
