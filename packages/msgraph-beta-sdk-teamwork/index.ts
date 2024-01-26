import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { TeamworkRequestBuilder } from "./teamwork";
import { TeamworkServiceClientNavigationMetadata } from "./teamworkServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the teamwork singleton.
     */
    get teamwork(): TeamworkRequestBuilder;
  }
}
extendGraphBetaServiceClient(TeamworkServiceClientNavigationMetadata);
export * from "./teamworkServiceClient";
