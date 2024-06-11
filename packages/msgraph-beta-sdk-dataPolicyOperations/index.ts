import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DataPolicyOperationsRequestBuilder } from "./dataPolicyOperations";
import { DataPolicyOperationsServiceClientNavigationMetadata } from "./dataPolicyOperationsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the dataPolicyOperations singleton.
     */
    get dataPolicyOperations(): DataPolicyOperationsRequestBuilder;
  }
}
extendGraphBetaServiceClient(DataPolicyOperationsServiceClientNavigationMetadata);
export * from "./dataPolicyOperationsServiceClient.js";
