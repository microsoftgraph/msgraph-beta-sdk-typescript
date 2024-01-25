import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { TeamsRequestBuilder } from "./teams";
import { TeamsServiceClientNavigationMetadata } from "./teamsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the teams singleton.
     */
    get teams(): TeamsRequestBuilder;
  }
}
extendGraphBetaServiceClient(TeamsServiceClientNavigationMetadata);
export * from "./teamsServiceClient";
