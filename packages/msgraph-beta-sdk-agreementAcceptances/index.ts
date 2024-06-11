import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AgreementAcceptancesRequestBuilder } from "./agreementAcceptances";
import { AgreementAcceptancesServiceClientNavigationMetadata } from "./agreementAcceptancesServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the agreementAcceptances singleton.
     */
    get agreementAcceptances(): AgreementAcceptancesRequestBuilder;
  }
}
extendGraphBetaServiceClient(AgreementAcceptancesServiceClientNavigationMetadata);
export * from "./agreementAcceptancesServiceClient.js";
