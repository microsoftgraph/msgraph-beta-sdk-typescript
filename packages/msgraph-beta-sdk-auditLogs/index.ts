import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AuditLogsRequestBuilder } from "./auditLogs/index.js";
import { AuditLogsServiceClientNavigationMetadata } from "./auditLogsServiceClient.js";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the auditLogs singleton.
     */
    get auditLogs(): AuditLogsRequestBuilder;
  }
}
extendGraphBetaServiceClient(AuditLogsServiceClientNavigationMetadata);
export * from "./auditLogsServiceClient.js";
