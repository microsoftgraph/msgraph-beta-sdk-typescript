import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { FilterOperatorsRequestBuilder } from "./filterOperators/index.js";
import { FilterOperatorsServiceClientNavigationMetadata } from "./filterOperatorsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the filterOperators singleton.
     */
    get filterOperators(): FilterOperatorsRequestBuilder;
  }
}
extendGraphBetaServiceClient(FilterOperatorsServiceClientNavigationMetadata);
export * from "./filterOperatorsServiceClient.js";
