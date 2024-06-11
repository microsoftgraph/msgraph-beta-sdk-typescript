import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { ContactsRequestBuilder } from "./contacts";
import { ContactsServiceClientNavigationMetadata } from "./contactsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the contacts singleton.
     */
    get contacts(): ContactsRequestBuilder;
  }
}
extendGraphBetaServiceClient(ContactsServiceClientNavigationMetadata);
export * from "./contactsServiceClient.js";
