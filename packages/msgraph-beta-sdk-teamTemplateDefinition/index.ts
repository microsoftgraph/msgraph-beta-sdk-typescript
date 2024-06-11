import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { TeamTemplateDefinitionRequestBuilder } from "./teamTemplateDefinition";
import { TeamTemplateDefinitionServiceClientNavigationMetadata } from "./teamTemplateDefinitionServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the teamTemplateDefinition singleton.
     */
    get teamTemplateDefinition(): TeamTemplateDefinitionRequestBuilder;
  }
}
extendGraphBetaServiceClient(TeamTemplateDefinitionServiceClientNavigationMetadata);
export * from "./teamTemplateDefinitionServiceClient.js";
