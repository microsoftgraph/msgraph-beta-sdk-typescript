import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ComplianceRequestBuilder } from "./compliance";
import { ComplianceServiceClientNavigationMetadata } from "./complianceServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the compliance singleton.
     */
    get compliance(): ComplianceRequestBuilder;
  }
}
extendGraphBetaServiceClient(ComplianceServiceClientNavigationMetadata);
export * from "./complianceServiceClient.js";
