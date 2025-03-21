/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { PrivilegedAccessRequestBuilderNavigationMetadata, PrivilegedAccessRequestBuilderRequestsMetadata, type PrivilegedAccessRequestBuilder } from './privilegedAccess/index.js';
import { apiClientProxifier, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * Instantiates a new PrivilegedAccessServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createPrivilegedAccessServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/beta";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    requestAdapter.enableBackingStore(backingStore);
    return apiClientProxifier<PrivilegedAccessServiceClient>(requestAdapter, pathParameters, PrivilegedAccessServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface PrivilegedAccessServiceClient extends BaseRequestBuilder<PrivilegedAccessServiceClient> {
    /**
     * Provides operations to manage the collection of privilegedAccess entities.
     */
    get privilegedAccess(): PrivilegedAccessRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PrivilegedAccessServiceClientNavigationMetadata: Record<Exclude<keyof PrivilegedAccessServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    privilegedAccess: {
        requestsMetadata: PrivilegedAccessRequestBuilderRequestsMetadata,
        navigationMetadata: PrivilegedAccessRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const PrivilegedAccessServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
