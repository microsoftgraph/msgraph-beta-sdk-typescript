import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { RiskDetectionsRequestBuilder } from "./riskDetections/index.js";
import { RiskDetectionsServiceClientNavigationMetadata } from "./riskDetectionsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the riskDetections singleton.
     */
    get riskDetections(): RiskDetectionsRequestBuilder;
  }
}
extendGraphBetaServiceClient(RiskDetectionsServiceClientNavigationMetadata);
export * from "./riskDetectionsServiceClient.js";
