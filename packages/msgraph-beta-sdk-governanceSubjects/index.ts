import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { GovernanceSubjectsRequestBuilder } from "./governanceSubjects/index.js";
import { GovernanceSubjectsServiceClientNavigationMetadata } from "./governanceSubjectsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the governanceSubjects singleton.
     */
    get governanceSubjects(): GovernanceSubjectsRequestBuilder;
  }
}
extendGraphBetaServiceClient(GovernanceSubjectsServiceClientNavigationMetadata);
export * from "./governanceSubjectsServiceClient.js";
