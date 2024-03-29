import { extendGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

import type { AuditLogsRequestBuilder } from "./auditLogs";
import { AuditLogsServiceClientNavigationMetadata } from "./auditLogsServiceClient";

declare module "@microsoft/msgraph-beta-sdk" {
  interface GraphBetaServiceClient {
    /**
     * Provides operations to manage the auditLogs singleton.
     */
    get auditLogs(): AuditLogsRequestBuilder;
  }
}
extendGraphBetaServiceClient(AuditLogsServiceClientNavigationMetadata);
export * from "./auditLogsServiceClient";
