/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
// @ts-ignore
import { createProductRevisionFromDiscriminatorValue, serializeProductRevision, type ProductRevision } from '@microsoft/msgraph-beta-sdk/models/windowsUpdates/';
// @ts-ignore
import { CatalogEntryRequestBuilderRequestsMetadata, type CatalogEntryRequestBuilder } from './catalogEntry/';
// @ts-ignore
import { KnowledgeBaseArticleRequestBuilderRequestsMetadata, type KnowledgeBaseArticleRequestBuilder } from './knowledgeBaseArticle/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the revisions property of the microsoft.graph.windowsUpdates.product entity.
 */
export interface ProductRevisionItemRequestBuilder extends BaseRequestBuilder<ProductRevisionItemRequestBuilder> {
    /**
     * Provides operations to manage the catalogEntry property of the microsoft.graph.windowsUpdates.productRevision entity.
     */
    get catalogEntry(): CatalogEntryRequestBuilder;
    /**
     * Provides operations to manage the knowledgeBaseArticle property of the microsoft.graph.windowsUpdates.productRevision entity.
     */
    get knowledgeBaseArticle(): KnowledgeBaseArticleRequestBuilder;
    /**
     * Delete navigation property revisions for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Represents a product revision.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ProductRevision>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ProductRevisionItemRequestBuilderGetQueryParameters> | undefined) : Promise<ProductRevision | undefined>;
    /**
     * Update the navigation property revisions in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ProductRevision>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ProductRevision, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ProductRevision | undefined>;
    /**
     * Delete navigation property revisions for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Represents a product revision.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ProductRevisionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property revisions in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ProductRevision, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Represents a product revision.
 */
export interface ProductRevisionItemRequestBuilderGetQueryParameters {
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
export const ProductRevisionItemRequestBuilderUriTemplate = "{+baseurl}/admin/windows/updates/products/{product%2Did}/revisions/{productRevision%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ProductRevisionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ProductRevisionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ProductRevisionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    catalogEntry: {
        requestsMetadata: CatalogEntryRequestBuilderRequestsMetadata,
    },
    knowledgeBaseArticle: {
        requestsMetadata: KnowledgeBaseArticleRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ProductRevisionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ProductRevisionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ProductRevisionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createProductRevisionFromDiscriminatorValue,
        queryParametersMapper: ProductRevisionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ProductRevisionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createProductRevisionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeProductRevision,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */