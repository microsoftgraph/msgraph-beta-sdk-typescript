import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ReportsRequestBuilder } from "./reports";
import { ReportsServiceClientNavigationMetadata } from "./reportsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the reports singleton.
     */
    get reports(): ReportsRequestBuilder;
  }
}
extendGraphBetaServiceClient(ReportsServiceClientNavigationMetadata);
export * from "./reportsServiceClient";
