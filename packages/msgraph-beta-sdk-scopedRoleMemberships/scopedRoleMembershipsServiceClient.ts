/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { ScopedRoleMembershipsRequestBuilderNavigationMetadata, ScopedRoleMembershipsRequestBuilderRequestsMetadata, ScopedRoleMembershipsRequestBuilderUriTemplate, type ScopedRoleMembershipsRequestBuilder } from './scopedRoleMemberships/';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * Instantiates a new ScopedRoleMembershipsServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createScopedRoleMembershipsServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
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
    return apiClientProxifier<ScopedRoleMembershipsServiceClient>(requestAdapter, pathParameters, ScopedRoleMembershipsServiceClientUriTemplate, ScopedRoleMembershipsServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface ScopedRoleMembershipsServiceClient extends BaseRequestBuilder<ScopedRoleMembershipsServiceClient> {
    /**
     * Provides operations to manage the collection of scopedRoleMembership entities.
     */
    get scopedRoleMemberships(): ScopedRoleMembershipsRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ScopedRoleMembershipsServiceClientNavigationMetadata: Record<Exclude<keyof ScopedRoleMembershipsServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    scopedRoleMemberships: {
        uriTemplate: ScopedRoleMembershipsRequestBuilderUriTemplate,
        requestsMetadata: ScopedRoleMembershipsRequestBuilderRequestsMetadata,
        navigationMetadata: ScopedRoleMembershipsRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const ScopedRoleMembershipsServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */