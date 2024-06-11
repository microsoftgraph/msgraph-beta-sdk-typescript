import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { FunctionsRequestBuilder } from "./functions/index.js";
import { FunctionsServiceClientNavigationMetadata } from "./functionsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the functions singleton.
     */
    get functions(): FunctionsRequestBuilder;
  }
}
extendGraphBetaServiceClient(FunctionsServiceClientNavigationMetadata);
export * from "./functionsServiceClient.js";
