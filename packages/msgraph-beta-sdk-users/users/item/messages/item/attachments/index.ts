/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAttachmentCollectionResponseFromDiscriminatorValue, createAttachmentFromDiscriminatorValue, serializeAttachment, type Attachment, type AttachmentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/';
import { CreateUploadSessionRequestBuilderRequestsMetadata, type CreateUploadSessionRequestBuilder } from './createUploadSession/';
import { AttachmentItemRequestBuilderRequestsMetadata, type AttachmentItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the attachments property of the microsoft.graph.message entity.
 */
export interface AttachmentsRequestBuilder extends BaseRequestBuilder<AttachmentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the createUploadSession method.
     */
    get createUploadSession(): CreateUploadSessionRequestBuilder;
    /**
     * Provides operations to manage the attachments property of the microsoft.graph.message entity.
     * @param attachmentId The unique identifier of attachment
     * @returns {AttachmentItemRequestBuilder}
     */
     byAttachmentId(attachmentId: string) : AttachmentItemRequestBuilder;
    /**
     * Retrieve a list of attachment objects attached to a message.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AttachmentCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/message-list-attachments?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AttachmentsRequestBuilderGetQueryParameters> | undefined) : Promise<AttachmentCollectionResponse | undefined>;
    /**
     * Use this API to add an attachment to a message. An attachment can be one of the following types: All these types of attachment resources are derived from the attachmentresource. You can add an attachment to an existing message by posting to its attachments collection, or to a newmessage that is being drafted, or created and sent on the fly.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Attachment>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/message-post-attachments?view=graph-rest-1.0|Find more info here}
     */
     post(body: Attachment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Attachment | undefined>;
    /**
     * Retrieve a list of attachment objects attached to a message.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AttachmentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Use this API to add an attachment to a message. An attachment can be one of the following types: All these types of attachment resources are derived from the attachmentresource. You can add an attachment to an existing message by posting to its attachments collection, or to a newmessage that is being drafted, or created and sent on the fly.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Attachment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of attachment objects attached to a message.
 */
export interface AttachmentsRequestBuilderGetQueryParameters {
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
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const AttachmentsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/messages/{message%2Did}/attachments{?%24count,%24expand,%24filter,%24orderby,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AttachmentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AttachmentsRequestBuilderNavigationMetadata: Record<Exclude<keyof AttachmentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAttachmentId: {
        requestsMetadata: AttachmentItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["attachment%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    createUploadSession: {
        requestsMetadata: CreateUploadSessionRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AttachmentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AttachmentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAttachmentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AttachmentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: AttachmentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAttachmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAttachment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
