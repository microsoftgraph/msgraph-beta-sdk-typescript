/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { ConnectionsRequestBuilderNavigationMetadata, ConnectionsRequestBuilderRequestsMetadata, ConnectionsRequestBuilderUriTemplate, type ConnectionsRequestBuilder } from './connections/';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface ConnectionsServiceClient extends BaseRequestBuilder<ConnectionsServiceClient> {
    /**
     * Provides operations to manage the collection of externalConnection entities.
     */
    get connections(): ConnectionsRequestBuilder;
}
/**
 * Instantiates a new ConnectionsServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createConnectionsServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
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
    return apiClientProxifier<ConnectionsServiceClient>(requestAdapter, pathParameters, ConnectionsServiceClientUriTemplate, ConnectionsServiceClientNavigationMetadata, undefined);
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ConnectionsServiceClientNavigationMetadata: Record<Exclude<keyof ConnectionsServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    connections: {
        uriTemplate: ConnectionsRequestBuilderUriTemplate,
        requestsMetadata: ConnectionsRequestBuilderRequestsMetadata,
        navigationMetadata: ConnectionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const ConnectionsServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */