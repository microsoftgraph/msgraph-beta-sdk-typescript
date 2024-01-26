import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AgreementsRequestBuilder } from "./agreements";
import { AgreementsServiceClientNavigationMetadata } from "./agreementsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the agreements singleton.
     */
    get agreements(): AgreementsRequestBuilder;
  }
}
extendGraphBetaServiceClient(AgreementsServiceClientNavigationMetadata);
export * from "./agreementsServiceClient";
