/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { PrivilegedRolesRequestBuilderNavigationMetadata, PrivilegedRolesRequestBuilderRequestsMetadata, type PrivilegedRolesRequestBuilder } from './privilegedRoles/index.js';
import { apiClientProxifier, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * Instantiates a new PrivilegedRolesServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createPrivilegedRolesServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/beta";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    requestAdapter.enableBackingStore(backingStore);
    return apiClientProxifier<PrivilegedRolesServiceClient>(requestAdapter, pathParameters, PrivilegedRolesServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface PrivilegedRolesServiceClient extends BaseRequestBuilder<PrivilegedRolesServiceClient> {
    /**
     * Provides operations to manage the collection of privilegedRole entities.
     */
    get privilegedRoles(): PrivilegedRolesRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PrivilegedRolesServiceClientNavigationMetadata: Record<Exclude<keyof PrivilegedRolesServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    privilegedRoles: {
        requestsMetadata: PrivilegedRolesRequestBuilderRequestsMetadata,
        navigationMetadata: PrivilegedRolesRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const PrivilegedRolesServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
