import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ApplicationTemplatesRequestBuilder } from "./applicationTemplates/index.js";
import { ApplicationTemplatesServiceClientNavigationMetadata } from "./applicationTemplatesServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the applicationTemplates singleton.
     */
    get applicationTemplates(): ApplicationTemplatesRequestBuilder;
  }
}
extendGraphBetaServiceClient(ApplicationTemplatesServiceClientNavigationMetadata);
export * from "./applicationTemplatesServiceClient.js";
