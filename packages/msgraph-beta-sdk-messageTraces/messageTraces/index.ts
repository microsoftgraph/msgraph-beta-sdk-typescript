/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMessageTraceCollectionResponseFromDiscriminatorValue, createMessageTraceFromDiscriminatorValue, serializeMessageTrace, type MessageTrace, type MessageTraceCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { MessageTraceItemRequestBuilderNavigationMetadata, MessageTraceItemRequestBuilderRequestsMetadata, MessageTraceItemRequestBuilderUriTemplate, type MessageTraceItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of messageTrace entities.
 */
export interface MessageTracesRequestBuilder extends BaseRequestBuilder<MessageTracesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the collection of messageTrace entities.
     * @param messageTraceId The unique identifier of messageTrace
     * @returns a MessageTraceItemRequestBuilder
     */
     byMessageTraceId(messageTraceId: string) : MessageTraceItemRequestBuilder;
    /**
     * Get entities from messageTraces
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MessageTraceCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<MessageTracesRequestBuilderGetQueryParameters> | undefined) : Promise<MessageTraceCollectionResponse | undefined>;
    /**
     * Add new entity to messageTraces
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MessageTrace
     */
     post(body: MessageTrace, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MessageTrace | undefined>;
    /**
     * Get entities from messageTraces
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MessageTracesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Add new entity to messageTraces
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: MessageTrace, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get entities from messageTraces
 */
export interface MessageTracesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MessageTracesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MessageTracesRequestBuilderNavigationMetadata: Record<Exclude<keyof MessageTracesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMessageTraceId: {
        uriTemplate: MessageTraceItemRequestBuilderUriTemplate,
        requestsMetadata: MessageTraceItemRequestBuilderRequestsMetadata,
        navigationMetadata: MessageTraceItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["messageTrace%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MessageTracesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMessageTraceCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: MessageTracesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMessageTraceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMessageTrace,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const MessageTracesRequestBuilderUriTemplate = "{+baseurl}/messageTraces{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */