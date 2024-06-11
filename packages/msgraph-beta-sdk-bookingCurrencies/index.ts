import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { BookingCurrenciesRequestBuilder } from "./bookingCurrencies";
import { BookingCurrenciesServiceClientNavigationMetadata } from "./bookingCurrenciesServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the bookingCurrencies singleton.
     */
    get bookingCurrencies(): BookingCurrenciesRequestBuilder;
  }
}
extendGraphBetaServiceClient(BookingCurrenciesServiceClientNavigationMetadata);
export * from "./bookingCurrenciesServiceClient.js";
