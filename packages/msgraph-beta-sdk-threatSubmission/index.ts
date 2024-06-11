import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ThreatSubmissionRequestBuilder } from "./threatSubmission/index.js";
import { ThreatSubmissionServiceClientNavigationMetadata } from "./threatSubmissionServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the threatSubmission singleton.
     */
    get threatSubmission(): ThreatSubmissionRequestBuilder;
  }
}
extendGraphBetaServiceClient(ThreatSubmissionServiceClientNavigationMetadata);
export * from "./threatSubmissionServiceClient.js";
