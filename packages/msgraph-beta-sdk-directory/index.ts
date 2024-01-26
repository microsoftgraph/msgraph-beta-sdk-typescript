import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DirectoryRequestBuilder } from "./directory";
import { DirectoryServiceClientNavigationMetadata } from "./directoryServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the directory singleton.
     */
    get directory(): DirectoryRequestBuilder;
  }
}
extendGraphBetaServiceClient(DirectoryServiceClientNavigationMetadata);
export * from "./directoryServiceClient";
