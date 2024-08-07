/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { AppRequestBuilderNavigationMetadata, AppRequestBuilderRequestsMetadata, type AppRequestBuilder } from './app/index.js';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface AppServiceClient extends BaseRequestBuilder<AppServiceClient> {
    /**
     * Provides operations to manage the commsApplication singleton.
     */
    get app(): AppRequestBuilder;
}
/**
 * Instantiates a new AppServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createAppServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
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
    return apiClientProxifier<AppServiceClient>(requestAdapter, pathParameters, AppServiceClientNavigationMetadata, undefined);
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AppServiceClientNavigationMetadata: Record<Exclude<keyof AppServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    app: {
        requestsMetadata: AppRequestBuilderRequestsMetadata,
        navigationMetadata: AppRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const AppServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
