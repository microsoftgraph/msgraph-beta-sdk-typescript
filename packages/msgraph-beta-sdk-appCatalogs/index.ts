import { extendBetaGraphServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AppCatalogsRequestBuilder } from "./appCatalogs";
import { AppCatalogsServiceClientNavigationMetadata } from "./appCatalogsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphServiceClient {
    /**
     * Provides operations to manage the appCatalogs singleton.
     */
    get appCatalogs(): AppCatalogsRequestBuilder;
  }
}
extendBetaGraphServiceClient(AppCatalogsServiceClientNavigationMetadata);
export * from "./appCatalogsServiceClient";
