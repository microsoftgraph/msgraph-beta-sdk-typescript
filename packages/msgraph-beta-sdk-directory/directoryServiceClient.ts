/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { DirectoryRequestBuilderNavigationMetadata, DirectoryRequestBuilderRequestsMetadata, type DirectoryRequestBuilder } from './directory/index.js';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * Instantiates a new DirectoryServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createDirectoryServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
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
    return apiClientProxifier<DirectoryServiceClient>(requestAdapter, pathParameters, DirectoryServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface DirectoryServiceClient extends BaseRequestBuilder<DirectoryServiceClient> {
    /**
     * Provides operations to manage the directory singleton.
     */
    get directory(): DirectoryRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DirectoryServiceClientNavigationMetadata: Record<Exclude<keyof DirectoryServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    directory: {
        requestsMetadata: DirectoryRequestBuilderRequestsMetadata,
        navigationMetadata: DirectoryRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const DirectoryServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
