/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { DevicesRequestBuilderNavigationMetadata, DevicesRequestBuilderRequestsMetadata, type DevicesRequestBuilder } from './devices/index.js';
import { apiClientProxifier, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * Instantiates a new DevicesServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createDevicesServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/beta";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    requestAdapter.enableBackingStore(backingStore);
    return apiClientProxifier<DevicesServiceClient>(requestAdapter, pathParameters, DevicesServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface DevicesServiceClient extends BaseRequestBuilder<DevicesServiceClient> {
    /**
     * Provides operations to manage the collection of device entities.
     */
    get devices(): DevicesRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DevicesServiceClientNavigationMetadata: Record<Exclude<keyof DevicesServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    devices: {
        requestsMetadata: DevicesRequestBuilderRequestsMetadata,
        navigationMetadata: DevicesRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const DevicesServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
