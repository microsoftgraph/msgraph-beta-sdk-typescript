/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { AccessReviewDecisionsRequestBuilderNavigationMetadata, AccessReviewDecisionsRequestBuilderRequestsMetadata, AccessReviewDecisionsRequestBuilderUriTemplate, type AccessReviewDecisionsRequestBuilder } from './accessReviewDecisions/';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BackingStoreFactory, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface AccessReviewDecisionsServiceClient extends BaseRequestBuilder<AccessReviewDecisionsServiceClient> {
    /**
     * Provides operations to manage the collection of accessReviewDecision entities.
     */
    get accessReviewDecisions(): AccessReviewDecisionsRequestBuilder;
}
/**
 * Instantiates a new AccessReviewDecisionsServiceClient and sets the default values.
 * @param backingStore The backing store to use for the models.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createAccessReviewDecisionsServiceClient(requestAdapter: RequestAdapter, backingStore?: BackingStoreFactory | undefined) {
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
    return apiClientProxifier<AccessReviewDecisionsServiceClient>(requestAdapter, pathParameters, AccessReviewDecisionsServiceClientUriTemplate, AccessReviewDecisionsServiceClientNavigationMetadata, undefined);
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AccessReviewDecisionsServiceClientNavigationMetadata: Record<Exclude<keyof AccessReviewDecisionsServiceClient, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    accessReviewDecisions: {
        uriTemplate: AccessReviewDecisionsRequestBuilderUriTemplate,
        requestsMetadata: AccessReviewDecisionsRequestBuilderRequestsMetadata,
        navigationMetadata: AccessReviewDecisionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const AccessReviewDecisionsServiceClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */