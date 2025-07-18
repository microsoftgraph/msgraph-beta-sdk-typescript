/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEngagementConversationMessageFromDiscriminatorValue, serializeEngagementConversationMessage, type EngagementConversationMessage } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ConversationRequestBuilderRequestsMetadata, type ConversationRequestBuilder } from './conversation/index.js';
// @ts-ignore
import { ReactionsRequestBuilderNavigationMetadata, ReactionsRequestBuilderRequestsMetadata, type ReactionsRequestBuilder } from './reactions/index.js';
// @ts-ignore
import { ReplyToRequestBuilderRequestsMetadata, type ReplyToRequestBuilder } from './replyTo/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the replies property of the microsoft.graph.engagementConversationMessage entity.
 */
export interface EngagementConversationMessageItemRequestBuilder extends BaseRequestBuilder<EngagementConversationMessageItemRequestBuilder> {
    /**
     * Provides operations to manage the conversation property of the microsoft.graph.engagementConversationMessage entity.
     */
    get conversation(): ConversationRequestBuilder;
    /**
     * Provides operations to manage the reactions property of the microsoft.graph.engagementConversationMessage entity.
     */
    get reactions(): ReactionsRequestBuilder;
    /**
     * Provides operations to manage the replyTo property of the microsoft.graph.engagementConversationMessage entity.
     */
    get replyTo(): ReplyToRequestBuilder;
    /**
     * Delete navigation property replies for communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A collection of messages that are replies to this message and form a threaded discussion.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EngagementConversationMessage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<EngagementConversationMessageItemRequestBuilderGetQueryParameters> | undefined) : Promise<EngagementConversationMessage | undefined>;
    /**
     * Update the navigation property replies in communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EngagementConversationMessage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: EngagementConversationMessage, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EngagementConversationMessage | undefined>;
    /**
     * Delete navigation property replies for communications
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A collection of messages that are replies to this message and form a threaded discussion.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EngagementConversationMessageItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property replies in communications
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: EngagementConversationMessage, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A collection of messages that are replies to this message and form a threaded discussion.
 */
export interface EngagementConversationMessageItemRequestBuilderGetQueryParameters {
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
 * Uri template for the request builder.
 */
export const EngagementConversationMessageItemRequestBuilderUriTemplate = "{+baseurl}/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation%2Did}/starter/replies/{engagementConversationMessage%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const EngagementConversationMessageItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const EngagementConversationMessageItemRequestBuilderNavigationMetadata: Record<Exclude<keyof EngagementConversationMessageItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    conversation: {
        requestsMetadata: ConversationRequestBuilderRequestsMetadata,
    },
    reactions: {
        requestsMetadata: ReactionsRequestBuilderRequestsMetadata,
        navigationMetadata: ReactionsRequestBuilderNavigationMetadata,
    },
    replyTo: {
        requestsMetadata: ReplyToRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EngagementConversationMessageItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: EngagementConversationMessageItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: EngagementConversationMessageItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEngagementConversationMessageFromDiscriminatorValue,
        queryParametersMapper: EngagementConversationMessageItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: EngagementConversationMessageItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEngagementConversationMessageFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEngagementConversationMessage,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
