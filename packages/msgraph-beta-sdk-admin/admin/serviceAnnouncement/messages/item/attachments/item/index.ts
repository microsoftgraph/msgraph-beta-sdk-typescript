/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createServiceAnnouncementAttachmentFromDiscriminatorValue, serializeServiceAnnouncementAttachment, type ServiceAnnouncementAttachment } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { ContentRequestBuilderRequestsMetadata, ContentRequestBuilderUriTemplate, type ContentRequestBuilder } from './content/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the attachments property of the microsoft.graph.serviceUpdateMessage entity.
 */
export interface ServiceAnnouncementAttachmentItemRequestBuilder extends BaseRequestBuilder<ServiceAnnouncementAttachmentItemRequestBuilder> {
    /**
     * Provides operations to manage the media for the admin entity.
     */
    get content(): ContentRequestBuilder;
    /**
     * Delete navigation property attachments for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a serviceAnnouncementAttachment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceAnnouncementAttachment
     * @see {@link https://learn.microsoft.com/graph/api/serviceannouncementattachment-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ServiceAnnouncementAttachmentItemRequestBuilderGetQueryParameters> | undefined) : Promise<ServiceAnnouncementAttachment | undefined>;
    /**
     * Update the navigation property attachments in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceAnnouncementAttachment
     */
     patch(body: ServiceAnnouncementAttachment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ServiceAnnouncementAttachment | undefined>;
    /**
     * Delete navigation property attachments for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a serviceAnnouncementAttachment object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ServiceAnnouncementAttachmentItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property attachments in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ServiceAnnouncementAttachment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a serviceAnnouncementAttachment object.
 */
export interface ServiceAnnouncementAttachmentItemRequestBuilderGetQueryParameters {
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
const ServiceAnnouncementAttachmentItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ServiceAnnouncementAttachmentItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ServiceAnnouncementAttachmentItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    content: {
        uriTemplate: ContentRequestBuilderUriTemplate,
        requestsMetadata: ContentRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ServiceAnnouncementAttachmentItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createServiceAnnouncementAttachmentFromDiscriminatorValue,
        queryParametersMapper: ServiceAnnouncementAttachmentItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createServiceAnnouncementAttachmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeServiceAnnouncementAttachment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ServiceAnnouncementAttachmentItemRequestBuilderUriTemplate = "{+baseurl}/admin/serviceAnnouncement/messages/{serviceUpdateMessage%2Did}/attachments/{serviceAnnouncementAttachment%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */