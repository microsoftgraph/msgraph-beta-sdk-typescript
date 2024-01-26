import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AllowedDataLocationsRequestBuilder } from "./allowedDataLocations";
import { AllowedDataLocationsServiceClientNavigationMetadata } from "./allowedDataLocationsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the allowedDataLocations singleton.
     */
    get allowedDataLocations(): AllowedDataLocationsRequestBuilder;
  }
}
extendGraphBetaServiceClient(AllowedDataLocationsServiceClientNavigationMetadata);
export * from "./allowedDataLocationsServiceClient";
