/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { ApplicationsRequestBuilderNavigationMetadata, ApplicationsRequestBuilderRequestsMetadata, type ApplicationsRequestBuilder } from './applications/index.js';
import { apiClientProxifier, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface ApplicationsServiceClient extends BaseRequestBuilder<ApplicationsServiceClient> {
    /**
     * Provides operations to manage the collection of application entities.
     */
    get applications(): ApplicationsRequestBuilder;
}
/**
 * Instantiates a new ApplicationsServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createApplicationsServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/beta";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    requestAdapter.enableBackingStore(backingStore);
    return apiClientProxifier<ApplicationsServiceClient>(requestAdapter, pathParameters, ApplicationsServiceClientNavigationMetadata, undefined);
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ApplicationsServiceClientNavigationMetadata: Record<Exclude<keyof ApplicationsServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    applications: {
        requestsMetadata: ApplicationsRequestBuilderRequestsMetadata,
        navigationMetadata: ApplicationsRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const ApplicationsServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
