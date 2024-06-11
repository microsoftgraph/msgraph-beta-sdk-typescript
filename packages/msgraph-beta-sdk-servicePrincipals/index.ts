import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ServicePrincipalsRequestBuilder } from "./servicePrincipals";
import { ServicePrincipalsServiceClientNavigationMetadata } from "./servicePrincipalsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the servicePrincipals singleton.
     */
    get servicePrincipals(): ServicePrincipalsRequestBuilder;
  }
}
extendGraphBetaServiceClient(ServicePrincipalsServiceClientNavigationMetadata);
export * from "./servicePrincipalsServiceClient.js";
