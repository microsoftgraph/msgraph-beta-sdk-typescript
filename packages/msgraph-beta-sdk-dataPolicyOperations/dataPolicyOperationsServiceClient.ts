/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { DataPolicyOperationsRequestBuilderNavigationMetadata, DataPolicyOperationsRequestBuilderRequestsMetadata, type DataPolicyOperationsRequestBuilder } from './dataPolicyOperations/index.js';
import { apiClientProxifier, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
/**
 * Instantiates a new DataPolicyOperationsServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createDataPolicyOperationsServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/beta";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    requestAdapter.enableBackingStore(backingStore);
    return apiClientProxifier<DataPolicyOperationsServiceClient>(requestAdapter, pathParameters, DataPolicyOperationsServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface DataPolicyOperationsServiceClient extends BaseRequestBuilder<DataPolicyOperationsServiceClient> {
    /**
     * Provides operations to manage the collection of dataPolicyOperation entities.
     */
    get dataPolicyOperations(): DataPolicyOperationsRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DataPolicyOperationsServiceClientNavigationMetadata: Record<Exclude<keyof DataPolicyOperationsServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    dataPolicyOperations: {
        requestsMetadata: DataPolicyOperationsRequestBuilderRequestsMetadata,
        navigationMetadata: DataPolicyOperationsRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const DataPolicyOperationsServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
