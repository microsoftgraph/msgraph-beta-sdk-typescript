/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createImpactedResourceCollectionResponseFromDiscriminatorValue, createImpactedResourceFromDiscriminatorValue, serializeImpactedResource, type ImpactedResource, type ImpactedResourceCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ImpactedResourceItemRequestBuilderNavigationMetadata, ImpactedResourceItemRequestBuilderRequestsMetadata, type ImpactedResourceItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the impactedResources property of the microsoft.graph.recommendationBase entity.
 */
export interface ImpactedResourcesRequestBuilder extends BaseRequestBuilder<ImpactedResourcesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the impactedResources property of the microsoft.graph.recommendationBase entity.
     * @param impactedResourceId The unique identifier of impactedResource
     * @returns {ImpactedResourceItemRequestBuilder}
     */
     byImpactedResourceId(impactedResourceId: string) : ImpactedResourceItemRequestBuilder;
    /**
     * Get the impactedResource objects for a recommendation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ImpactedResourceCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/recommendation-list-impactedresources?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ImpactedResourcesRequestBuilderGetQueryParameters> | undefined) : Promise<ImpactedResourceCollectionResponse | undefined>;
    /**
     * Create new navigation property to impactedResources for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ImpactedResource>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ImpactedResource, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ImpactedResource | undefined>;
    /**
     * Get the impactedResource objects for a recommendation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ImpactedResourcesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to impactedResources for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ImpactedResource, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the impactedResource objects for a recommendation.
 */
export interface ImpactedResourcesRequestBuilderGetQueryParameters {
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
 * Uri template for the request builder.
 */
export const ImpactedResourcesRequestBuilderUriTemplate = "{+baseurl}/directory/recommendations/{recommendation%2Did}/impactedResources{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ImpactedResourcesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ImpactedResourcesRequestBuilderNavigationMetadata: Record<Exclude<keyof ImpactedResourcesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byImpactedResourceId: {
        requestsMetadata: ImpactedResourceItemRequestBuilderRequestsMetadata,
        navigationMetadata: ImpactedResourceItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["impactedResource%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ImpactedResourcesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ImpactedResourcesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createImpactedResourceCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ImpactedResourcesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ImpactedResourcesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createImpactedResourceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeImpactedResource,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
