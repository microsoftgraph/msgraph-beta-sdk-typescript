/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMessageEventFromDiscriminatorValue, serializeMessageEvent, type MessageEvent } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of messageEvent entities.
 */
export interface MessageEventItemRequestBuilder extends BaseRequestBuilder<MessageEventItemRequestBuilder> {
    /**
     * Delete entity from messageEvents
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get entity from messageEvents by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MessageEvent
     */
     get(requestConfiguration?: RequestConfiguration<MessageEventItemRequestBuilderGetQueryParameters> | undefined) : Promise<MessageEvent | undefined>;
    /**
     * Update entity in messageEvents
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MessageEvent
     */
     patch(body: MessageEvent, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MessageEvent | undefined>;
    /**
     * Delete entity from messageEvents
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get entity from messageEvents by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MessageEventItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update entity in messageEvents
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: MessageEvent, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get entity from messageEvents by key
 */
export interface MessageEventItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MessageEventItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MessageEventItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMessageEventFromDiscriminatorValue,
        queryParametersMapper: MessageEventItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMessageEventFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMessageEvent,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const MessageEventItemRequestBuilderUriTemplate = "{+baseurl}/messageEvents/{messageEvent%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */