import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { SchemaExtensionsRequestBuilder } from "./schemaExtensions";
import { SchemaExtensionsServiceClientNavigationMetadata } from "./schemaExtensionsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the schemaExtensions singleton.
     */
    get schemaExtensions(): SchemaExtensionsRequestBuilder;
  }
}
extendGraphBetaServiceClient(SchemaExtensionsServiceClientNavigationMetadata);
export * from "./schemaExtensionsServiceClient.js";
