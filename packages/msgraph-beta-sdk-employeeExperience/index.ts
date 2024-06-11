import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { EmployeeExperienceRequestBuilder } from "./employeeExperience";
import { EmployeeExperienceServiceClientNavigationMetadata } from "./employeeExperienceServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the employeeExperience singleton.
     */
    get employeeExperience(): EmployeeExperienceRequestBuilder;
  }
}
extendGraphBetaServiceClient(EmployeeExperienceServiceClientNavigationMetadata);
export * from "./employeeExperienceServiceClient.js";
