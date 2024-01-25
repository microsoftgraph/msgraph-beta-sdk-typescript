import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ProgramControlTypesRequestBuilder } from "./programControlTypes";
import { ProgramControlTypesServiceClientNavigationMetadata } from "./programControlTypesServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the programControlTypes singleton.
     */
    get programControlTypes(): ProgramControlTypesRequestBuilder;
  }
}
extendGraphBetaServiceClient(ProgramControlTypesServiceClientNavigationMetadata);
export * from "./programControlTypesServiceClient";
