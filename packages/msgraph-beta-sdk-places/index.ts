import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PlacesRequestBuilder } from "./places";
import { PlacesServiceClientNavigationMetadata } from "./placesServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the places singleton.
     */
    get places(): PlacesRequestBuilder;
  }
}
extendGraphBetaServiceClient(PlacesServiceClientNavigationMetadata);
export * from "./placesServiceClient.js";
