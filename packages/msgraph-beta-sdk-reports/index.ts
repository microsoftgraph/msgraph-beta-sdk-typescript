import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ReportsRequestBuilder } from "./reports/index.js";
import { ReportsServiceClientNavigationMetadata } from "./reportsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the reports singleton.
     */
    get reports(): ReportsRequestBuilder;
  }
}
extendGraphBetaServiceClient(ReportsServiceClientNavigationMetadata);
export * from "./reportsServiceClient.js";
