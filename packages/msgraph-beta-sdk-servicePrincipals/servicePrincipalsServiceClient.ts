/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { ServicePrincipalsRequestBuilderNavigationMetadata, ServicePrincipalsRequestBuilderRequestsMetadata, ServicePrincipalsRequestBuilderUriTemplate, type ServicePrincipalsRequestBuilder } from './servicePrincipals/';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * Instantiates a new ServicePrincipalsServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createServicePrincipalsServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
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
    return apiClientProxifier<ServicePrincipalsServiceClient>(requestAdapter, pathParameters, ServicePrincipalsServiceClientUriTemplate, ServicePrincipalsServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface ServicePrincipalsServiceClient extends BaseRequestBuilder<ServicePrincipalsServiceClient> {
    /**
     * Provides operations to manage the collection of servicePrincipal entities.
     */
    get servicePrincipals(): ServicePrincipalsRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ServicePrincipalsServiceClientNavigationMetadata: Record<Exclude<keyof ServicePrincipalsServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    servicePrincipals: {
        uriTemplate: ServicePrincipalsRequestBuilderUriTemplate,
        requestsMetadata: ServicePrincipalsRequestBuilderRequestsMetadata,
        navigationMetadata: ServicePrincipalsRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const ServicePrincipalsServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */