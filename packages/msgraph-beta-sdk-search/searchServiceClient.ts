/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { SearchRequestBuilderNavigationMetadata, SearchRequestBuilderRequestsMetadata, SearchRequestBuilderUriTemplate, type SearchRequestBuilder } from './search/';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * Instantiates a new SearchServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createSearchServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
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
    return apiClientProxifier<SearchServiceClient>(requestAdapter, pathParameters, SearchServiceClientUriTemplate, SearchServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface SearchServiceClient extends BaseRequestBuilder<SearchServiceClient> {
    /**
     * Provides operations to manage the searchEntity singleton.
     */
    get search(): SearchRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SearchServiceClientNavigationMetadata: Record<Exclude<keyof SearchServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    search: {
        uriTemplate: SearchRequestBuilderUriTemplate,
        requestsMetadata: SearchRequestBuilderRequestsMetadata,
        navigationMetadata: SearchRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const SearchServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */