import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { PrintRequestBuilder } from "./print/index.js";
import { PrintServiceClientNavigationMetadata } from "./printServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the print singleton.
     */
    get print(): PrintRequestBuilder;
  }
}
extendGraphBetaServiceClient(PrintServiceClientNavigationMetadata);
export * from "./printServiceClient.js";
