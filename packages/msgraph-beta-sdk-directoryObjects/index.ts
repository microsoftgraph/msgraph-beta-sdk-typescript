import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DirectoryObjectsRequestBuilder } from "./directoryObjects";
import { DirectoryObjectsServiceClientNavigationMetadata } from "./directoryObjectsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the directoryObjects singleton.
     */
    get directoryObjects(): DirectoryObjectsRequestBuilder;
  }
}
extendGraphBetaServiceClient(DirectoryObjectsServiceClientNavigationMetadata);
export * from "./directoryObjectsServiceClient";
