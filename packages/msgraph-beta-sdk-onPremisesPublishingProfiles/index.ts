import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { OnPremisesPublishingProfilesRequestBuilder } from "./onPremisesPublishingProfiles";
import { OnPremisesPublishingProfilesServiceClientNavigationMetadata } from "./onPremisesPublishingProfilesServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the onPremisesPublishingProfiles singleton.
     */
    get onPremisesPublishingProfiles(): OnPremisesPublishingProfilesRequestBuilder;
  }
}
extendGraphBetaServiceClient(OnPremisesPublishingProfilesServiceClientNavigationMetadata);
export * from "./onPremisesPublishingProfilesServiceClient";
