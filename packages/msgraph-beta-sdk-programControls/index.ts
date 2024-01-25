import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ProgramControlsRequestBuilder } from "./programControls";
import { ProgramControlsServiceClientNavigationMetadata } from "./programControlsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the programControls singleton.
     */
    get programControls(): ProgramControlsRequestBuilder;
  }
}
extendGraphBetaServiceClient(ProgramControlsServiceClientNavigationMetadata);
export * from "./programControlsServiceClient";
