import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { InformationProtectionRequestBuilder } from "./informationProtection";
import { InformationProtectionServiceClientNavigationMetadata } from "./informationProtectionServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the informationProtection singleton.
     */
    get informationProtection(): InformationProtectionRequestBuilder;
  }
}
extendGraphBetaServiceClient(InformationProtectionServiceClientNavigationMetadata);
export * from "./informationProtectionServiceClient.js";
