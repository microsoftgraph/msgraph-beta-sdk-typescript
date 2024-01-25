import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { DirectoryNamespaceRequestBuilder } from "./directoryNamespace";
import { DirectoryNamespaceServiceClientNavigationMetadata } from "./directoryNamespaceServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the directoryNamespace singleton.
     */
    get directoryNamespace(): DirectoryNamespaceRequestBuilder;
  }
}
extendGraphBetaServiceClient(DirectoryNamespaceServiceClientNavigationMetadata);
export * from "./directoryNamespaceServiceClient";
