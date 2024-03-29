import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { TeamsTemplatesRequestBuilder } from "./teamsTemplates";
import { TeamsTemplatesServiceClientNavigationMetadata } from "./teamsTemplatesServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the teamsTemplates singleton.
     */
    get teamsTemplates(): TeamsTemplatesRequestBuilder;
  }
}
extendGraphBetaServiceClient(TeamsTemplatesServiceClientNavigationMetadata);
export * from "./teamsTemplatesServiceClient";
