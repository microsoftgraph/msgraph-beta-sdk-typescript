/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { IdentityProvidersRequestBuilderNavigationMetadata, IdentityProvidersRequestBuilderRequestsMetadata, type IdentityProvidersRequestBuilder } from './identityProviders/index.js';
import { apiClientProxifier, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * Instantiates a new IdentityProvidersServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createIdentityProvidersServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/beta";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    requestAdapter.enableBackingStore(backingStore);
    return apiClientProxifier<IdentityProvidersServiceClient>(requestAdapter, pathParameters, IdentityProvidersServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface IdentityProvidersServiceClient extends BaseRequestBuilder<IdentityProvidersServiceClient> {
    /**
     * Provides operations to manage the collection of identityProvider entities.
     */
    get identityProviders(): IdentityProvidersRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const IdentityProvidersServiceClientNavigationMetadata: Record<Exclude<keyof IdentityProvidersServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    identityProviders: {
        requestsMetadata: IdentityProvidersRequestBuilderRequestsMetadata,
        navigationMetadata: IdentityProvidersRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const IdentityProvidersServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
