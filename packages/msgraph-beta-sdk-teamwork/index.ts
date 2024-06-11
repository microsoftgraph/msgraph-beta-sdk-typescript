import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { TeamworkRequestBuilder } from "./teamwork/index.js";
import { TeamworkServiceClientNavigationMetadata } from "./teamworkServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the teamwork singleton.
     */
    get teamwork(): TeamworkRequestBuilder;
  }
}
extendGraphBetaServiceClient(TeamworkServiceClientNavigationMetadata);
export * from "./teamworkServiceClient.js";
