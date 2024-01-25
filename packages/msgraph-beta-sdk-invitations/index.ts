import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { InvitationsRequestBuilder } from "./invitations";
import { InvitationsServiceClientNavigationMetadata } from "./invitationsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the invitations singleton.
     */
    get invitations(): InvitationsRequestBuilder;
  }
}
extendGraphBetaServiceClient(InvitationsServiceClientNavigationMetadata);
export * from "./invitationsServiceClient";
