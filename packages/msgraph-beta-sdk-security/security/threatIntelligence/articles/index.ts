/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createArticleCollectionResponseFromDiscriminatorValue, createArticleFromDiscriminatorValue, serializeArticle, type Article, type ArticleCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/security/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { ArticleItemRequestBuilderNavigationMetadata, ArticleItemRequestBuilderRequestsMetadata, ArticleItemRequestBuilderUriTemplate, type ArticleItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the articles property of the microsoft.graph.security.threatIntelligence entity.
 */
export interface ArticlesRequestBuilder extends BaseRequestBuilder<ArticlesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the articles property of the microsoft.graph.security.threatIntelligence entity.
     * @param articleId The unique identifier of article
     * @returns a ArticleItemRequestBuilder
     */
     byArticleId(articleId: string) : ArticleItemRequestBuilder;
    /**
     * Get a list of article objects, including their properties and relationships.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArticleCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-threatintelligence-list-articles?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ArticlesRequestBuilderGetQueryParameters> | undefined) : Promise<ArticleCollectionResponse | undefined>;
    /**
     * Create new navigation property to articles for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Article
     */
     post(body: Article, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Article | undefined>;
    /**
     * Get a list of article objects, including their properties and relationships.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ArticlesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to articles for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Article, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of article objects, including their properties and relationships.
 */
export interface ArticlesRequestBuilderGetQueryParameters {
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
const ArticlesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ArticlesRequestBuilderNavigationMetadata: Record<Exclude<keyof ArticlesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byArticleId: {
        uriTemplate: ArticleItemRequestBuilderUriTemplate,
        requestsMetadata: ArticleItemRequestBuilderRequestsMetadata,
        navigationMetadata: ArticleItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["article%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ArticlesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createArticleCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ArticlesRequestBuilderGetQueryParametersMapper,
    },
    post: {
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
export const ArticlesRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/articles{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */