import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DataClassificationRequestBuilder } from "./dataClassification/index.js";
import { DataClassificationServiceClientNavigationMetadata } from "./dataClassificationServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the dataClassification singleton.
     */
    get dataClassification(): DataClassificationRequestBuilder;
  }
}
extendGraphBetaServiceClient(DataClassificationServiceClientNavigationMetadata);
export * from "./dataClassificationServiceClient.js";
