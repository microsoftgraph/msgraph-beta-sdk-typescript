/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createImpactedResourceCollectionResponseFromDiscriminatorValue, createImpactedResourceFromDiscriminatorValue, serializeImpactedResource, type ImpactedResource, type ImpactedResourceCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { ImpactedResourceItemRequestBuilderNavigationMetadata, ImpactedResourceItemRequestBuilderRequestsMetadata, ImpactedResourceItemRequestBuilderUriTemplate, type ImpactedResourceItemRequestBuilder } from './item/';
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
     * @returns a ImpactedResourceItemRequestBuilder
     */
     byImpactedResourceId(impactedResourceId: string) : ImpactedResourceItemRequestBuilder;
    /**
     * The list of directory objects associated with the recommendation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ImpactedResourceCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<ImpactedResourcesRequestBuilderGetQueryParameters> | undefined) : Promise<ImpactedResourceCollectionResponse | undefined>;
    /**
     * Create new navigation property to impactedResources for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ImpactedResource
     */
     post(body: ImpactedResource, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ImpactedResource | undefined>;
    /**
     * The list of directory objects associated with the recommendation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ImpactedResourcesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to impactedResources for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: ImpactedResource, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of directory objects associated with the recommendation.
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
        uriTemplate: ImpactedResourceItemRequestBuilderUriTemplate,
        requestsMetadata: ImpactedResourceItemRequestBuilderRequestsMetadata,
        navigationMetadata: ImpactedResourceItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["impactedResource%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ImpactedResourcesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createImpactedResourceCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ImpactedResourcesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createImpactedResourceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeImpactedResource,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ImpactedResourcesRequestBuilderUriTemplate = "{+baseurl}/directory/recommendations/{recommendation%2Did}/impactedResources{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */