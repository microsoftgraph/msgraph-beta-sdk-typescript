/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createOnlineMeetingEngagementConversationCollectionResponseFromDiscriminatorValue, createOnlineMeetingEngagementConversationFromDiscriminatorValue, serializeOnlineMeetingEngagementConversation, type OnlineMeetingEngagementConversation, type OnlineMeetingEngagementConversationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { OnlineMeetingEngagementConversationItemRequestBuilderNavigationMetadata, OnlineMeetingEngagementConversationItemRequestBuilderRequestsMetadata, type OnlineMeetingEngagementConversationItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the onlineMeetingConversations property of the microsoft.graph.cloudCommunications entity.
 */
export interface OnlineMeetingConversationsRequestBuilder extends BaseRequestBuilder<OnlineMeetingConversationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the onlineMeetingConversations property of the microsoft.graph.cloudCommunications entity.
     * @param onlineMeetingEngagementConversationId The unique identifier of onlineMeetingEngagementConversation
     * @returns {OnlineMeetingEngagementConversationItemRequestBuilder}
     */
     byOnlineMeetingEngagementConversationId(onlineMeetingEngagementConversationId: string) : OnlineMeetingEngagementConversationItemRequestBuilder;
    /**
     * A collection of structured question-and-answer (Q&A) thread in Teams directly associated with online meetings.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OnlineMeetingEngagementConversationCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<OnlineMeetingConversationsRequestBuilderGetQueryParameters> | undefined) : Promise<OnlineMeetingEngagementConversationCollectionResponse | undefined>;
    /**
     * Create new navigation property to onlineMeetingConversations for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OnlineMeetingEngagementConversation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: OnlineMeetingEngagementConversation, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<OnlineMeetingEngagementConversation | undefined>;
    /**
     * A collection of structured question-and-answer (Q&A) thread in Teams directly associated with online meetings.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OnlineMeetingConversationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to onlineMeetingConversations for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: OnlineMeetingEngagementConversation, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A collection of structured question-and-answer (Q&A) thread in Teams directly associated with online meetings.
 */
export interface OnlineMeetingConversationsRequestBuilderGetQueryParameters {
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
 * Uri template for the request builder.
 */
export const OnlineMeetingConversationsRequestBuilderUriTemplate = "{+baseurl}/communications/onlineMeetingConversations{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const OnlineMeetingConversationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const OnlineMeetingConversationsRequestBuilderNavigationMetadata: Record<Exclude<keyof OnlineMeetingConversationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byOnlineMeetingEngagementConversationId: {
        requestsMetadata: OnlineMeetingEngagementConversationItemRequestBuilderRequestsMetadata,
        navigationMetadata: OnlineMeetingEngagementConversationItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["onlineMeetingEngagementConversation%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const OnlineMeetingConversationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: OnlineMeetingConversationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOnlineMeetingEngagementConversationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: OnlineMeetingConversationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: OnlineMeetingConversationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOnlineMeetingEngagementConversationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeOnlineMeetingEngagementConversation,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
