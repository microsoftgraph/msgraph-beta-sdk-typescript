/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { PrivilegedAccessRequestBuilderNavigationMetadata, PrivilegedAccessRequestBuilderRequestsMetadata, PrivilegedAccessRequestBuilderUriTemplate, type PrivilegedAccessRequestBuilder } from './privilegedAccess/';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * Instantiates a new PrivilegedAccessServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createPrivilegedAccessServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
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
    return apiClientProxifier<PrivilegedAccessServiceClient>(requestAdapter, pathParameters, PrivilegedAccessServiceClientUriTemplate, PrivilegedAccessServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface PrivilegedAccessServiceClient extends BaseRequestBuilder<PrivilegedAccessServiceClient> {
    /**
     * Provides operations to manage the collection of privilegedAccess entities.
     */
    get privilegedAccess(): PrivilegedAccessRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PrivilegedAccessServiceClientNavigationMetadata: Record<Exclude<keyof PrivilegedAccessServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    privilegedAccess: {
        uriTemplate: PrivilegedAccessRequestBuilderUriTemplate,
        requestsMetadata: PrivilegedAccessRequestBuilderRequestsMetadata,
        navigationMetadata: PrivilegedAccessRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const PrivilegedAccessServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */