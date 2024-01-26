import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { SitesRequestBuilder } from "./sites";
import { SitesServiceClientNavigationMetadata } from "./sitesServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the sites singleton.
     */
    get sites(): SitesRequestBuilder;
  }
}
extendGraphBetaServiceClient(SitesServiceClientNavigationMetadata);
export * from "./sitesServiceClient";
