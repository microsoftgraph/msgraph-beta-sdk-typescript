import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ContractsRequestBuilder } from "./contracts";
import { ContractsServiceClientNavigationMetadata } from "./contractsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the contracts singleton.
     */
    get contracts(): ContractsRequestBuilder;
  }
}
extendGraphBetaServiceClient(ContractsServiceClientNavigationMetadata);
export * from "./contractsServiceClient.js";
