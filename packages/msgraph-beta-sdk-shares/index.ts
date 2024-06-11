import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { SharesRequestBuilder } from "./shares";
import { SharesServiceClientNavigationMetadata } from "./sharesServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the shares singleton.
     */
    get shares(): SharesRequestBuilder;
  }
}
extendGraphBetaServiceClient(SharesServiceClientNavigationMetadata);
export * from "./sharesServiceClient.js";
