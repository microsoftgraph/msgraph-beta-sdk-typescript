import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DirectoryRoleTemplatesRequestBuilder } from "./directoryRoleTemplates/index.js";
import { DirectoryRoleTemplatesServiceClientNavigationMetadata } from "./directoryRoleTemplatesServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the directoryRoleTemplates singleton.
     */
    get directoryRoleTemplates(): DirectoryRoleTemplatesRequestBuilder;
  }
}
extendGraphBetaServiceClient(DirectoryRoleTemplatesServiceClientNavigationMetadata);
export * from "./directoryRoleTemplatesServiceClient.js";
