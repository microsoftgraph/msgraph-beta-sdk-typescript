import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AppCatalogsRequestBuilder } from "./appCatalogs";
import { AppCatalogsServiceClientNavigationMetadata } from "./appCatalogsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the appCatalogs singleton.
     */
    get appCatalogs(): AppCatalogsRequestBuilder;
  }
}
extendGraphBetaServiceClient(AppCatalogsServiceClientNavigationMetadata);
export * from "./appCatalogsServiceClient";
