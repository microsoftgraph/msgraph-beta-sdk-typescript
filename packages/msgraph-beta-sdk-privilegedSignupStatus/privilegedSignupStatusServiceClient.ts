/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { PrivilegedSignupStatusRequestBuilderNavigationMetadata, PrivilegedSignupStatusRequestBuilderRequestsMetadata, type PrivilegedSignupStatusRequestBuilder } from './privilegedSignupStatus/index.js';
import { apiClientProxifier, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * Instantiates a new PrivilegedSignupStatusServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createPrivilegedSignupStatusServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/beta";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    requestAdapter.enableBackingStore(backingStore);
    return apiClientProxifier<PrivilegedSignupStatusServiceClient>(requestAdapter, pathParameters, PrivilegedSignupStatusServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface PrivilegedSignupStatusServiceClient extends BaseRequestBuilder<PrivilegedSignupStatusServiceClient> {
    /**
     * Provides operations to manage the collection of privilegedSignupStatus entities.
     */
    get privilegedSignupStatus(): PrivilegedSignupStatusRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PrivilegedSignupStatusServiceClientNavigationMetadata: Record<Exclude<keyof PrivilegedSignupStatusServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    privilegedSignupStatus: {
        requestsMetadata: PrivilegedSignupStatusRequestBuilderRequestsMetadata,
        navigationMetadata: PrivilegedSignupStatusRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const PrivilegedSignupStatusServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
