import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { BusinessFlowTemplatesRequestBuilder } from "./businessFlowTemplates";
import { BusinessFlowTemplatesServiceClientNavigationMetadata } from "./businessFlowTemplatesServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the businessFlowTemplates singleton.
     */
    get businessFlowTemplates(): BusinessFlowTemplatesRequestBuilder;
  }
}
extendGraphBetaServiceClient(BusinessFlowTemplatesServiceClientNavigationMetadata);
export * from "./businessFlowTemplatesServiceClient";
