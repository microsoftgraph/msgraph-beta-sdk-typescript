import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { TeamsTemplatesRequestBuilder } from "./teamsTemplates/index.js";
import { TeamsTemplatesServiceClientNavigationMetadata } from "./teamsTemplatesServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the teamsTemplates singleton.
     */
    get teamsTemplates(): TeamsTemplatesRequestBuilder;
  }
}
extendGraphBetaServiceClient(TeamsTemplatesServiceClientNavigationMetadata);
export * from "./teamsTemplatesServiceClient.js";
