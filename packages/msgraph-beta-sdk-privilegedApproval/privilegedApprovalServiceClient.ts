/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { PrivilegedApprovalRequestBuilderNavigationMetadata, PrivilegedApprovalRequestBuilderRequestsMetadata, type PrivilegedApprovalRequestBuilder } from './privilegedApproval/index.js';
import { apiClientProxifier, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * Instantiates a new PrivilegedApprovalServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createPrivilegedApprovalServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/beta";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    requestAdapter.enableBackingStore(backingStore);
    return apiClientProxifier<PrivilegedApprovalServiceClient>(requestAdapter, pathParameters, PrivilegedApprovalServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface PrivilegedApprovalServiceClient extends BaseRequestBuilder<PrivilegedApprovalServiceClient> {
    /**
     * Provides operations to manage the collection of privilegedApproval entities.
     */
    get privilegedApproval(): PrivilegedApprovalRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PrivilegedApprovalServiceClientNavigationMetadata: Record<Exclude<keyof PrivilegedApprovalServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    privilegedApproval: {
        requestsMetadata: PrivilegedApprovalRequestBuilderRequestsMetadata,
        navigationMetadata: PrivilegedApprovalRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const PrivilegedApprovalServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
