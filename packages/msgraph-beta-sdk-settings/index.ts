import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { SettingsRequestBuilder } from "./settings";
import { SettingsServiceClientNavigationMetadata } from "./settingsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the settings singleton.
     */
    get settings(): SettingsRequestBuilder;
  }
}
extendGraphBetaServiceClient(SettingsServiceClientNavigationMetadata);
export * from "./settingsServiceClient.js";
