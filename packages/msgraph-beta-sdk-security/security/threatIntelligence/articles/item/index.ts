/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createArticleFromDiscriminatorValue, serializeArticle, type Article } from '@microsoft/msgraph-beta-sdk/models/security/';
import { IndicatorsRequestBuilderNavigationMetadata, IndicatorsRequestBuilderRequestsMetadata, IndicatorsRequestBuilderUriTemplate, type IndicatorsRequestBuilder } from './indicators/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the articles property of the microsoft.graph.security.threatIntelligence entity.
 */
export interface ArticleItemRequestBuilder extends BaseRequestBuilder<ArticleItemRequestBuilder> {
    /**
     * Provides operations to manage the indicators property of the microsoft.graph.security.article entity.
     */
    get indicators(): IndicatorsRequestBuilder;
    /**
     * Delete navigation property articles for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of an article object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Article
     * @see {@link https://learn.microsoft.com/graph/api/security-article-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ArticleItemRequestBuilderGetQueryParameters> | undefined) : Promise<Article | undefined>;
    /**
     * Update the navigation property articles in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Article
     */
     patch(body: Article, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Article | undefined>;
    /**
     * Delete navigation property articles for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of an article object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ArticleItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property articles in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: Article, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of an article object.
 */
export interface ArticleItemRequestBuilderGetQueryParameters {
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
const ArticleItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ArticleItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ArticleItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    indicators: {
        uriTemplate: IndicatorsRequestBuilderUriTemplate,
        requestsMetadata: IndicatorsRequestBuilderRequestsMetadata,
        navigationMetadata: IndicatorsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ArticleItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createArticleFromDiscriminatorValue,
        queryParametersMapper: ArticleItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createArticleFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeArticle,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ArticleItemRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/articles/{article%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */