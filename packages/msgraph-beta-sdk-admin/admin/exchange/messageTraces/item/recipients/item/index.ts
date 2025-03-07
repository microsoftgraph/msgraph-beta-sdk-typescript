/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMessageRecipientFromDiscriminatorValue, serializeMessageRecipient, type MessageRecipient } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { EventsRequestBuilderNavigationMetadata, EventsRequestBuilderRequestsMetadata, type EventsRequestBuilder } from './events/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the recipients property of the microsoft.graph.messageTrace entity.
 */
export interface MessageRecipientItemRequestBuilder extends BaseRequestBuilder<MessageRecipientItemRequestBuilder> {
    /**
     * Provides operations to manage the events property of the microsoft.graph.messageRecipient entity.
     * @deprecated Private preview for Import Export APIs as of 2021-08/PrivatePreview:importExport on 2021-08-19 and will be removed 2021-11-15
     */
    get events(): EventsRequestBuilder;
    /**
     * Delete navigation property recipients for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated Private preview for Import Export APIs as of 2021-08/PrivatePreview:importExport on 2021-08-19 and will be removed 2021-11-15
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get recipients from admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MessageRecipient>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated Private preview for Import Export APIs as of 2021-08/PrivatePreview:importExport on 2021-08-19 and will be removed 2021-11-15
     */
     get(requestConfiguration?: RequestConfiguration<MessageRecipientItemRequestBuilderGetQueryParameters> | undefined) : Promise<MessageRecipient | undefined>;
    /**
     * Update the navigation property recipients in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MessageRecipient>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated Private preview for Import Export APIs as of 2021-08/PrivatePreview:importExport on 2021-08-19 and will be removed 2021-11-15
     */
     patch(body: MessageRecipient, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MessageRecipient | undefined>;
    /**
     * Delete navigation property recipients for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated Private preview for Import Export APIs as of 2021-08/PrivatePreview:importExport on 2021-08-19 and will be removed 2021-11-15
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get recipients from admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated Private preview for Import Export APIs as of 2021-08/PrivatePreview:importExport on 2021-08-19 and will be removed 2021-11-15
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MessageRecipientItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property recipients in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated Private preview for Import Export APIs as of 2021-08/PrivatePreview:importExport on 2021-08-19 and will be removed 2021-11-15
     */
     toPatchRequestInformation(body: MessageRecipient, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get recipients from admin
 */
export interface MessageRecipientItemRequestBuilderGetQueryParameters {
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
export const MessageRecipientItemRequestBuilderUriTemplate = "{+baseurl}/admin/exchange/messageTraces/{messageTrace%2Did}/recipients/{messageRecipient%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MessageRecipientItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MessageRecipientItemRequestBuilderNavigationMetadata: Record<Exclude<keyof MessageRecipientItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    events: {
        requestsMetadata: EventsRequestBuilderRequestsMetadata,
        navigationMetadata: EventsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MessageRecipientItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: MessageRecipientItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: MessageRecipientItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMessageRecipientFromDiscriminatorValue,
        queryParametersMapper: MessageRecipientItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: MessageRecipientItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMessageRecipientFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMessageRecipient,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
