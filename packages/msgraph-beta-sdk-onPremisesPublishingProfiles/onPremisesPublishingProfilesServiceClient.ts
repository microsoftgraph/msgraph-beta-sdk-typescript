/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { OnPremisesPublishingProfilesRequestBuilderNavigationMetadata, OnPremisesPublishingProfilesRequestBuilderRequestsMetadata, OnPremisesPublishingProfilesRequestBuilderUriTemplate, type OnPremisesPublishingProfilesRequestBuilder } from './onPremisesPublishingProfiles/';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * Instantiates a new OnPremisesPublishingProfilesServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createOnPremisesPublishingProfilesServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
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
    return apiClientProxifier<OnPremisesPublishingProfilesServiceClient>(requestAdapter, pathParameters, OnPremisesPublishingProfilesServiceClientUriTemplate, OnPremisesPublishingProfilesServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface OnPremisesPublishingProfilesServiceClient extends BaseRequestBuilder<OnPremisesPublishingProfilesServiceClient> {
    /**
     * Provides operations to manage the collection of onPremisesPublishingProfile entities.
     */
    get onPremisesPublishingProfiles(): OnPremisesPublishingProfilesRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const OnPremisesPublishingProfilesServiceClientNavigationMetadata: Record<Exclude<keyof OnPremisesPublishingProfilesServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    onPremisesPublishingProfiles: {
        uriTemplate: OnPremisesPublishingProfilesRequestBuilderUriTemplate,
        requestsMetadata: OnPremisesPublishingProfilesRequestBuilderRequestsMetadata,
        navigationMetadata: OnPremisesPublishingProfilesRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const OnPremisesPublishingProfilesServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */