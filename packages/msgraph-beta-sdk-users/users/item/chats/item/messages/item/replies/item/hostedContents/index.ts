/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createChatMessageHostedContentCollectionResponseFromDiscriminatorValue, createChatMessageHostedContentFromDiscriminatorValue, serializeChatMessageHostedContent, type ChatMessageHostedContent, type ChatMessageHostedContentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ChatMessageHostedContentItemRequestBuilderNavigationMetadata, ChatMessageHostedContentItemRequestBuilderRequestsMetadata, type ChatMessageHostedContentItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hostedContents property of the microsoft.graph.chatMessage entity.
 */
export interface HostedContentsRequestBuilder extends BaseRequestBuilder<HostedContentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the hostedContents property of the microsoft.graph.chatMessage entity.
     * @param chatMessageHostedContentId The unique identifier of chatMessageHostedContent
     * @returns {ChatMessageHostedContentItemRequestBuilder}
     */
     byChatMessageHostedContentId(chatMessageHostedContentId: string) : ChatMessageHostedContentItemRequestBuilder;
    /**
     * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ChatMessageHostedContentCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<HostedContentsRequestBuilderGetQueryParameters> | undefined) : Promise<ChatMessageHostedContentCollectionResponse | undefined>;
    /**
     * Create new navigation property to hostedContents for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ChatMessageHostedContent>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ChatMessageHostedContent, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ChatMessageHostedContent | undefined>;
    /**
     * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HostedContentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to hostedContents for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ChatMessageHostedContent, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
 */
export interface HostedContentsRequestBuilderGetQueryParameters {
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
export const HostedContentsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/chats/{chat%2Did}/messages/{chatMessage%2Did}/replies/{chatMessage%2Did1}/hostedContents{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const HostedContentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const HostedContentsRequestBuilderNavigationMetadata: Record<Exclude<keyof HostedContentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byChatMessageHostedContentId: {
        requestsMetadata: ChatMessageHostedContentItemRequestBuilderRequestsMetadata,
        navigationMetadata: ChatMessageHostedContentItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["chatMessageHostedContent%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HostedContentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: HostedContentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createChatMessageHostedContentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: HostedContentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: HostedContentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createChatMessageHostedContentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeChatMessageHostedContent,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
