import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ProgramsRequestBuilder } from "./programs";
import { ProgramsServiceClientNavigationMetadata } from "./programsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the programs singleton.
     */
    get programs(): ProgramsRequestBuilder;
  }
}
extendGraphBetaServiceClient(ProgramsServiceClientNavigationMetadata);
export * from "./programsServiceClient.js";
