import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DirectoryObjectsRequestBuilder } from "./directoryObjects/index.js";
import { DirectoryObjectsServiceClientNavigationMetadata } from "./directoryObjectsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the directoryObjects singleton.
     */
    get directoryObjects(): DirectoryObjectsRequestBuilder;
  }
}
extendGraphBetaServiceClient(DirectoryObjectsServiceClientNavigationMetadata);
export * from "./directoryObjectsServiceClient.js";
