/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createKnowledgeBaseArticleFromDiscriminatorValue, serializeKnowledgeBaseArticle, type KnowledgeBaseArticle } from '@microsoft/msgraph-beta-sdk/models/windowsUpdates/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the knowledgeBaseArticle property of the microsoft.graph.windowsUpdates.productRevision entity.
 */
export interface KnowledgeBaseArticleRequestBuilder extends BaseRequestBuilder<KnowledgeBaseArticleRequestBuilder> {
    /**
     * Delete navigation property knowledgeBaseArticle for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The knowledge base article associated with the product revision.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<KnowledgeBaseArticle>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<KnowledgeBaseArticleRequestBuilderGetQueryParameters> | undefined) : Promise<KnowledgeBaseArticle | undefined>;
    /**
     * Update the navigation property knowledgeBaseArticle in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<KnowledgeBaseArticle>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: KnowledgeBaseArticle, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<KnowledgeBaseArticle | undefined>;
    /**
     * Delete navigation property knowledgeBaseArticle for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The knowledge base article associated with the product revision.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<KnowledgeBaseArticleRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property knowledgeBaseArticle in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: KnowledgeBaseArticle, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The knowledge base article associated with the product revision.
 */
export interface KnowledgeBaseArticleRequestBuilderGetQueryParameters {
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
export const KnowledgeBaseArticleRequestBuilderUriTemplate = "{+baseurl}/admin/windows/updates/products/{product%2Did}/revisions/{productRevision%2Did}/knowledgeBaseArticle{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const KnowledgeBaseArticleRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const KnowledgeBaseArticleRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: KnowledgeBaseArticleRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: KnowledgeBaseArticleRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createKnowledgeBaseArticleFromDiscriminatorValue,
        queryParametersMapper: KnowledgeBaseArticleRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: KnowledgeBaseArticleRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createKnowledgeBaseArticleFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeKnowledgeBaseArticle,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
