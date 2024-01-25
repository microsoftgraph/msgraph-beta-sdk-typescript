import "@microsoft/msgraph-beta-sdk-users";

import { ClientSecretCredential } from "@azure/identity";
import { AzureIdentityAuthenticationProvider } from "@microsoft/kiota-authentication-azure";
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary";
import { createGraphBetaServiceClient } from "@microsoft/msgraph-beta-sdk";

const tenantId = process.env.TENANT_ID;
if (!tenantId) {
  throw Error("Missing TENANT_ID environment variable");
}
const clientId = process.env.CLIENT_ID;
if (!clientId) {
  throw Error("Missing CLIENT_ID environment variable");
}
const clientSecret = process.env.CLIENT_SECRET;
if (!clientSecret) {
  throw Error("Missing CLIENT_SECRET environment variable");
}

const tokenCredential = new ClientSecretCredential(
  tenantId,
  clientId,
  clientSecret,
);

const authProvider = new AzureIdentityAuthenticationProvider(tokenCredential);
const requestAdapter = new FetchRequestAdapter(authProvider);
export const graphServiceClient = createGraphBetaServiceClient(requestAdapter);
