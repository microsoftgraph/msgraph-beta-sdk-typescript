import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DirectorySettingTemplatesRequestBuilder } from "./directorySettingTemplates/index.js";
import { DirectorySettingTemplatesServiceClientNavigationMetadata } from "./directorySettingTemplatesServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the directorySettingTemplates singleton.
     */
    get directorySettingTemplates(): DirectorySettingTemplatesRequestBuilder;
  }
}
extendGraphBetaServiceClient(DirectorySettingTemplatesServiceClientNavigationMetadata);
export * from "./directorySettingTemplatesServiceClient.js";
