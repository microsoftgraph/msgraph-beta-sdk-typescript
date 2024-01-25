import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { FinancialsRequestBuilder } from "./financials";
import { FinancialsServiceClientNavigationMetadata } from "./financialsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the financials singleton.
     */
    get financials(): FinancialsRequestBuilder;
  }
}
extendGraphBetaServiceClient(FinancialsServiceClientNavigationMetadata);
export * from "./financialsServiceClient";
