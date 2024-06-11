import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { EducationRequestBuilder } from "./education/index.js";
import { EducationServiceClientNavigationMetadata } from "./educationServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the education singleton.
     */
    get education(): EducationRequestBuilder;
  }
}
extendGraphBetaServiceClient(EducationServiceClientNavigationMetadata);
export * from "./educationServiceClient.js";
