import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DirectorySettingTemplatesRequestBuilder } from "./directorySettingTemplates";
import { DirectorySettingTemplatesServiceClientNavigationMetadata } from "./directorySettingTemplatesServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the directorySettingTemplates singleton.
     */
    get directorySettingTemplates(): DirectorySettingTemplatesRequestBuilder;
  }
}
extendGraphBetaServiceClient(DirectorySettingTemplatesServiceClientNavigationMetadata);
export * from "./directorySettingTemplatesServiceClient";
