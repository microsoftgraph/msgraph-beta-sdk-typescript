/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createContentTypeFromDiscriminatorValue, serializeContentType, type ContentType } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AssociateWithHubSitesRequestBuilderRequestsMetadata, AssociateWithHubSitesRequestBuilderUriTemplate, type AssociateWithHubSitesRequestBuilder } from './associateWithHubSites/';
import { BaseRequestBuilderEscapedRequestsMetadata, BaseRequestBuilderEscapedUriTemplate, type BaseRequestBuilderEscaped } from './base/';
import { BaseTypesRequestBuilderNavigationMetadata, BaseTypesRequestBuilderRequestsMetadata, BaseTypesRequestBuilderUriTemplate, type BaseTypesRequestBuilder } from './baseTypes/';
import { ColumnLinksRequestBuilderNavigationMetadata, ColumnLinksRequestBuilderRequestsMetadata, ColumnLinksRequestBuilderUriTemplate, type ColumnLinksRequestBuilder } from './columnLinks/';
import { ColumnPositionsRequestBuilderNavigationMetadata, ColumnPositionsRequestBuilderRequestsMetadata, ColumnPositionsRequestBuilderUriTemplate, type ColumnPositionsRequestBuilder } from './columnPositions/';
import { ColumnsRequestBuilderNavigationMetadata, ColumnsRequestBuilderRequestsMetadata, ColumnsRequestBuilderUriTemplate, type ColumnsRequestBuilder } from './columns/';
import { CopyToDefaultContentLocationRequestBuilderRequestsMetadata, CopyToDefaultContentLocationRequestBuilderUriTemplate, type CopyToDefaultContentLocationRequestBuilder } from './copyToDefaultContentLocation/';
import { IsPublishedRequestBuilderRequestsMetadata, IsPublishedRequestBuilderUriTemplate, type IsPublishedRequestBuilder } from './isPublished/';
import { PublishRequestBuilderRequestsMetadata, PublishRequestBuilderUriTemplate, type PublishRequestBuilder } from './publish/';
import { type UnpublishRequestBuilder, UnpublishRequestBuilderRequestsMetadata, UnpublishRequestBuilderUriTemplate } from './unpublish/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contentTypes property of the microsoft.graph.list entity.
 */
export interface ContentTypeItemRequestBuilder extends BaseRequestBuilder<ContentTypeItemRequestBuilder> {
    /**
     * Provides operations to call the associateWithHubSites method.
     */
    get associateWithHubSites(): AssociateWithHubSitesRequestBuilder;
    /**
     * Provides operations to manage the base property of the microsoft.graph.contentType entity.
     */
    get base(): BaseRequestBuilderEscaped;
    /**
     * Provides operations to manage the baseTypes property of the microsoft.graph.contentType entity.
     */
    get baseTypes(): BaseTypesRequestBuilder;
    /**
     * Provides operations to manage the columnLinks property of the microsoft.graph.contentType entity.
     */
    get columnLinks(): ColumnLinksRequestBuilder;
    /**
     * Provides operations to manage the columnPositions property of the microsoft.graph.contentType entity.
     */
    get columnPositions(): ColumnPositionsRequestBuilder;
    /**
     * Provides operations to manage the columns property of the microsoft.graph.contentType entity.
     */
    get columns(): ColumnsRequestBuilder;
    /**
     * Provides operations to call the copyToDefaultContentLocation method.
     */
    get copyToDefaultContentLocation(): CopyToDefaultContentLocationRequestBuilder;
    /**
     * Provides operations to call the isPublished method.
     */
    get isPublished(): IsPublishedRequestBuilder;
    /**
     * Provides operations to call the publish method.
     */
    get publish(): PublishRequestBuilder;
    /**
     * Provides operations to call the unpublish method.
     */
    get unpublish(): UnpublishRequestBuilder;
    /**
     * Delete navigation property contentTypes for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The collection of content types present in this list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContentType
     */
     get(requestConfiguration?: RequestConfiguration<ContentTypeItemRequestBuilderGetQueryParameters> | undefined) : Promise<ContentType | undefined>;
    /**
     * Update the navigation property contentTypes in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContentType
     */
     patch(body: ContentType, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ContentType | undefined>;
    /**
     * Delete navigation property contentTypes for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The collection of content types present in this list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ContentTypeItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property contentTypes in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ContentType, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of content types present in this list.
 */
export interface ContentTypeItemRequestBuilderGetQueryParameters {
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
const ContentTypeItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ContentTypeItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ContentTypeItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    associateWithHubSites: {
        uriTemplate: AssociateWithHubSitesRequestBuilderUriTemplate,
        requestsMetadata: AssociateWithHubSitesRequestBuilderRequestsMetadata,
    },
    base: {
        uriTemplate: BaseRequestBuilderEscapedUriTemplate,
        requestsMetadata: BaseRequestBuilderEscapedRequestsMetadata,
    },
    baseTypes: {
        uriTemplate: BaseTypesRequestBuilderUriTemplate,
        requestsMetadata: BaseTypesRequestBuilderRequestsMetadata,
        navigationMetadata: BaseTypesRequestBuilderNavigationMetadata,
    },
    columnLinks: {
        uriTemplate: ColumnLinksRequestBuilderUriTemplate,
        requestsMetadata: ColumnLinksRequestBuilderRequestsMetadata,
        navigationMetadata: ColumnLinksRequestBuilderNavigationMetadata,
    },
    columnPositions: {
        uriTemplate: ColumnPositionsRequestBuilderUriTemplate,
        requestsMetadata: ColumnPositionsRequestBuilderRequestsMetadata,
        navigationMetadata: ColumnPositionsRequestBuilderNavigationMetadata,
    },
    columns: {
        uriTemplate: ColumnsRequestBuilderUriTemplate,
        requestsMetadata: ColumnsRequestBuilderRequestsMetadata,
        navigationMetadata: ColumnsRequestBuilderNavigationMetadata,
    },
    copyToDefaultContentLocation: {
        uriTemplate: CopyToDefaultContentLocationRequestBuilderUriTemplate,
        requestsMetadata: CopyToDefaultContentLocationRequestBuilderRequestsMetadata,
    },
    isPublished: {
        uriTemplate: IsPublishedRequestBuilderUriTemplate,
        requestsMetadata: IsPublishedRequestBuilderRequestsMetadata,
    },
    publish: {
        uriTemplate: PublishRequestBuilderUriTemplate,
        requestsMetadata: PublishRequestBuilderRequestsMetadata,
    },
    unpublish: {
        uriTemplate: UnpublishRequestBuilderUriTemplate,
        requestsMetadata: UnpublishRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ContentTypeItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createContentTypeFromDiscriminatorValue,
        queryParametersMapper: ContentTypeItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createContentTypeFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeContentType,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ContentTypeItemRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/list/contentTypes/{contentType%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */