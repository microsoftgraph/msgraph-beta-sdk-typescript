/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createChannelCollectionResponseFromDiscriminatorValue, createChannelFromDiscriminatorValue, serializeChannel, type Channel, type ChannelCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AllMessagesRequestBuilderRequestsMetadata, AllMessagesRequestBuilderUriTemplate, type AllMessagesRequestBuilder } from './allMessages/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { GetAllMessagesRequestBuilderRequestsMetadata, GetAllMessagesRequestBuilderUriTemplate, type GetAllMessagesRequestBuilder } from './getAllMessages/';
import { GetAllRetainedMessagesRequestBuilderRequestsMetadata, GetAllRetainedMessagesRequestBuilderUriTemplate, type GetAllRetainedMessagesRequestBuilder } from './getAllRetainedMessages/';
import { ChannelItemRequestBuilderNavigationMetadata, ChannelItemRequestBuilderRequestsMetadata, ChannelItemRequestBuilderUriTemplate, type ChannelItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the channels property of the microsoft.graph.team entity.
 */
export interface ChannelsRequestBuilder extends BaseRequestBuilder<ChannelsRequestBuilder> {
    /**
     * Provides operations to call the allMessages method.
     */
    get allMessages(): AllMessagesRequestBuilder;
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the getAllMessages method.
     */
    get getAllMessages(): GetAllMessagesRequestBuilder;
    /**
     * Provides operations to call the getAllRetainedMessages method.
     */
    get getAllRetainedMessages(): GetAllRetainedMessagesRequestBuilder;
    /**
     * Provides operations to manage the channels property of the microsoft.graph.team entity.
     * @param channelId The unique identifier of channel
     * @returns a ChannelItemRequestBuilder
     */
     byChannelId(channelId: string) : ChannelItemRequestBuilder;
    /**
     * Retrieve the list of channels in this team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ChannelCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/channel-list?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ChannelsRequestBuilderGetQueryParameters> | undefined) : Promise<ChannelCollectionResponse | undefined>;
    /**
     * Create a new channel in a team, as specified in the request body. When you create a channel, the maximum length of the channel's displayName is 50 characters. This is the name that appears to the user in Microsoft Teams. You can add a maximum of 200 members when you create a private channel.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Channel
     * @see {@link https://learn.microsoft.com/graph/api/channel-post?view=graph-rest-1.0|Find more info here}
     */
     post(body: Channel, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Channel | undefined>;
    /**
     * Retrieve the list of channels in this team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ChannelsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new channel in a team, as specified in the request body. When you create a channel, the maximum length of the channel's displayName is 50 characters. This is the name that appears to the user in Microsoft Teams. You can add a maximum of 200 members when you create a private channel.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Channel, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the list of channels in this team.
 */
export interface ChannelsRequestBuilderGetQueryParameters {
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
const ChannelsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ChannelsRequestBuilderNavigationMetadata: Record<Exclude<keyof ChannelsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byChannelId: {
        uriTemplate: ChannelItemRequestBuilderUriTemplate,
        requestsMetadata: ChannelItemRequestBuilderRequestsMetadata,
        navigationMetadata: ChannelItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["channel%2Did"],
    },
    allMessages: {
        uriTemplate: AllMessagesRequestBuilderUriTemplate,
        requestsMetadata: AllMessagesRequestBuilderRequestsMetadata,
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    getAllMessages: {
        uriTemplate: GetAllMessagesRequestBuilderUriTemplate,
        requestsMetadata: GetAllMessagesRequestBuilderRequestsMetadata,
    },
    getAllRetainedMessages: {
        uriTemplate: GetAllRetainedMessagesRequestBuilderUriTemplate,
        requestsMetadata: GetAllRetainedMessagesRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ChannelsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createChannelCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ChannelsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createChannelFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeChannel,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ChannelsRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/team/channels{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */