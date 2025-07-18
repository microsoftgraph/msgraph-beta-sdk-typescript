/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEngagementConversationMessageFromDiscriminatorValue, type EngagementConversationMessage } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the replyTo property of the microsoft.graph.engagementConversationMessage entity.
 */
export interface ReplyToRequestBuilder extends BaseRequestBuilder<ReplyToRequestBuilder> {
    /**
     * The parent message to which this message is a reply, if it is part of a reply chain.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EngagementConversationMessage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ReplyToRequestBuilderGetQueryParameters> | undefined) : Promise<EngagementConversationMessage | undefined>;
    /**
     * The parent message to which this message is a reply, if it is part of a reply chain.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ReplyToRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The parent message to which this message is a reply, if it is part of a reply chain.
 */
export interface ReplyToRequestBuilderGetQueryParameters {
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
export const ReplyToRequestBuilderUriTemplate = "{+baseurl}/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation%2Did}/starter/replies/{engagementConversationMessage%2Did}/replyTo{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ReplyToRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ReplyToRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ReplyToRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEngagementConversationMessageFromDiscriminatorValue,
        queryParametersMapper: ReplyToRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
