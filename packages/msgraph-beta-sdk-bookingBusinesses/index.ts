import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { BookingBusinessesRequestBuilder } from "./bookingBusinesses/index.js";
import { BookingBusinessesServiceClientNavigationMetadata } from "./bookingBusinessesServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the bookingBusinesses singleton.
     */
    get bookingBusinesses(): BookingBusinessesRequestBuilder;
  }
}
extendGraphBetaServiceClient(BookingBusinessesServiceClientNavigationMetadata);
export * from "./bookingBusinessesServiceClient.js";
