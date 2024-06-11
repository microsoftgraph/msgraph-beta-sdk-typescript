import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AdministrativeUnitsRequestBuilder } from "./administrativeUnits/index.js";
import { AdministrativeUnitsServiceClientNavigationMetadata } from "./administrativeUnitsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the administrativeUnits singleton.
     */
    get administrativeUnits(): AdministrativeUnitsRequestBuilder;
  }
}
extendGraphBetaServiceClient(AdministrativeUnitsServiceClientNavigationMetadata);
export * from "./administrativeUnitsServiceClient.js";
