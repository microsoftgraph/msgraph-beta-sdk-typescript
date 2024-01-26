import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PrintRequestBuilder } from "./print";
import { PrintServiceClientNavigationMetadata } from "./printServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the print singleton.
     */
    get print(): PrintRequestBuilder;
  }
}
extendGraphBetaServiceClient(PrintServiceClientNavigationMetadata);
export * from "./printServiceClient";
