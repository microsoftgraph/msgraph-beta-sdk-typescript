/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { AdministrativeUnitsRequestBuilderNavigationMetadata, AdministrativeUnitsRequestBuilderRequestsMetadata, type AdministrativeUnitsRequestBuilder } from './administrativeUnits/index.js';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface AdministrativeUnitsServiceClient extends BaseRequestBuilder<AdministrativeUnitsServiceClient> {
    /**
     * Provides operations to manage the collection of administrativeUnit entities.
     */
    get administrativeUnits(): AdministrativeUnitsRequestBuilder;
}
/**
 * Instantiates a new AdministrativeUnitsServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createAdministrativeUnitsServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
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
    return apiClientProxifier<AdministrativeUnitsServiceClient>(requestAdapter, pathParameters, AdministrativeUnitsServiceClientNavigationMetadata, undefined);
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AdministrativeUnitsServiceClientNavigationMetadata: Record<Exclude<keyof AdministrativeUnitsServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    administrativeUnits: {
        requestsMetadata: AdministrativeUnitsRequestBuilderRequestsMetadata,
        navigationMetadata: AdministrativeUnitsRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const AdministrativeUnitsServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
