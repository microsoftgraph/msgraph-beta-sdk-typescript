/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { PermissionGrantsRequestBuilderNavigationMetadata, PermissionGrantsRequestBuilderRequestsMetadata, type PermissionGrantsRequestBuilder } from './permissionGrants/index.js';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * Instantiates a new PermissionGrantsServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createPermissionGrantsServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
    registerDefaultSerializer(JsonSerializationWriterFactory);
    registerDefaultSerializer(TextSerializationWriterFactory);
    registerDefaultSerializer(FormSerializationWriterFactory);
    registerDefaultSerializer(MultipartSerializationWriterFactory);
    registerDefaultDeserializer(JsonParseNodeFactory);
    registerDefaultDeserializer(TextParseNodeFactory);
    registerDefaultDeserializer(FormParseNodeFactory);
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://graph.microsoft.com/beta";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    requestAdapter.enableBackingStore(backingStore);
    return apiClientProxifier<PermissionGrantsServiceClient>(requestAdapter, pathParameters, PermissionGrantsServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface PermissionGrantsServiceClient extends BaseRequestBuilder<PermissionGrantsServiceClient> {
    /**
     * Provides operations to manage the collection of resourceSpecificPermissionGrant entities.
     */
    get permissionGrants(): PermissionGrantsRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PermissionGrantsServiceClientNavigationMetadata: Record<Exclude<keyof PermissionGrantsServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    permissionGrants: {
        requestsMetadata: PermissionGrantsRequestBuilderRequestsMetadata,
        navigationMetadata: PermissionGrantsRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const PermissionGrantsServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
