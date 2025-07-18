/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEngagementConversationMessageReactionCollectionResponseFromDiscriminatorValue, createEngagementConversationMessageReactionFromDiscriminatorValue, serializeEngagementConversationMessageReaction, type EngagementConversationMessageReaction, type EngagementConversationMessageReactionCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { EngagementConversationMessageReactionItemRequestBuilderRequestsMetadata, type EngagementConversationMessageReactionItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the reactions property of the microsoft.graph.engagementConversationMessage entity.
 */
export interface ReactionsRequestBuilder extends BaseRequestBuilder<ReactionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the reactions property of the microsoft.graph.engagementConversationMessage entity.
     * @param engagementConversationMessageReactionId The unique identifier of engagementConversationMessageReaction
     * @returns {EngagementConversationMessageReactionItemRequestBuilder}
     */
     byEngagementConversationMessageReactionId(engagementConversationMessageReactionId: string) : EngagementConversationMessageReactionItemRequestBuilder;
    /**
     * A collection of reactions (such as like and smile) that users have applied to this message.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EngagementConversationMessageReactionCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ReactionsRequestBuilderGetQueryParameters> | undefined) : Promise<EngagementConversationMessageReactionCollectionResponse | undefined>;
    /**
     * Create new navigation property to reactions for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EngagementConversationMessageReaction>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: EngagementConversationMessageReaction, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EngagementConversationMessageReaction | undefined>;
    /**
     * A collection of reactions (such as like and smile) that users have applied to this message.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ReactionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to reactions for communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: EngagementConversationMessageReaction, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A collection of reactions (such as like and smile) that users have applied to this message.
 */
export interface ReactionsRequestBuilderGetQueryParameters {
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
export const ReactionsRequestBuilderUriTemplate = "{+baseurl}/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation%2Did}/starter/reactions{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ReactionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ReactionsRequestBuilderNavigationMetadata: Record<Exclude<keyof ReactionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byEngagementConversationMessageReactionId: {
        requestsMetadata: EngagementConversationMessageReactionItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["engagementConversationMessageReaction%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ReactionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ReactionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEngagementConversationMessageReactionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ReactionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ReactionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEngagementConversationMessageReactionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEngagementConversationMessageReaction,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
