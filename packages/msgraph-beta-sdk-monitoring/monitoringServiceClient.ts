/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { MonitoringRequestBuilderNavigationMetadata, MonitoringRequestBuilderRequestsMetadata, MonitoringRequestBuilderUriTemplate, type MonitoringRequestBuilder } from './monitoring/';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * Instantiates a new MonitoringServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createMonitoringServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
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
    return apiClientProxifier<MonitoringServiceClient>(requestAdapter, pathParameters, MonitoringServiceClientUriTemplate, MonitoringServiceClientNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface MonitoringServiceClient extends BaseRequestBuilder<MonitoringServiceClient> {
    /**
     * Provides operations to manage the monitoring singleton.
     */
    get monitoring(): MonitoringRequestBuilder;
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MonitoringServiceClientNavigationMetadata: Record<Exclude<keyof MonitoringServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    monitoring: {
        uriTemplate: MonitoringRequestBuilderUriTemplate,
        requestsMetadata: MonitoringRequestBuilderRequestsMetadata,
        navigationMetadata: MonitoringRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const MonitoringServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */