import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AgreementsRequestBuilder } from "./agreements/index.js";
import { AgreementsServiceClientNavigationMetadata } from "./agreementsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the agreements singleton.
     */
    get agreements(): AgreementsRequestBuilder;
  }
}
extendGraphBetaServiceClient(AgreementsServiceClientNavigationMetadata);
export * from "./agreementsServiceClient.js";
