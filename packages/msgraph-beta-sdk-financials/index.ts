import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { FinancialsRequestBuilder } from "./financials/index.js";
import { FinancialsServiceClientNavigationMetadata } from "./financialsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the financials singleton.
     */
    get financials(): FinancialsRequestBuilder;
  }
}
extendGraphBetaServiceClient(FinancialsServiceClientNavigationMetadata);
export * from "./financialsServiceClient.js";
