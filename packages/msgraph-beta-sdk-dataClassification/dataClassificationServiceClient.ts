/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { DataClassificationRequestBuilderNavigationMetadata, DataClassificationRequestBuilderRequestsMetadata, type DataClassificationRequestBuilder } from './dataClassification/index.js';
import { apiClientProxifier, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * Instantiates a new DataClassificationServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createDataClassificationServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/beta";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    requestAdapter.enableBackingStore(backingStore);
    return apiClientProxifier<DataClassificationServiceClient>(requestAdapter, pathParameters, DataClassificationServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface DataClassificationServiceClient extends BaseRequestBuilder<DataClassificationServiceClient> {
    /**
     * Provides operations to manage the dataClassificationService singleton.
     */
    get dataClassification(): DataClassificationRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DataClassificationServiceClientNavigationMetadata: Record<Exclude<keyof DataClassificationServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    dataClassification: {
        requestsMetadata: DataClassificationRequestBuilderRequestsMetadata,
        navigationMetadata: DataClassificationRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const DataClassificationServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
