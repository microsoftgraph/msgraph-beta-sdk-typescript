/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createSharedInsightCollectionResponseFromDiscriminatorValue, createSharedInsightFromDiscriminatorValue, serializeSharedInsight, type SharedInsight, type SharedInsightCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { SharedInsightItemRequestBuilderNavigationMetadata, SharedInsightItemRequestBuilderRequestsMetadata, SharedInsightItemRequestBuilderUriTemplate, type SharedInsightItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the shared property of the microsoft.graph.officeGraphInsights entity.
 */
export interface SharedRequestBuilder extends BaseRequestBuilder<SharedRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the shared property of the microsoft.graph.officeGraphInsights entity.
     * @param sharedInsightId The unique identifier of sharedInsight
     * @returns a SharedInsightItemRequestBuilder
     */
     bySharedInsightId(sharedInsightId: string) : SharedInsightItemRequestBuilder;
    /**
     * Access this property from the derived type itemInsights.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SharedInsightCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<SharedRequestBuilderGetQueryParameters> | undefined) : Promise<SharedInsightCollectionResponse | undefined>;
    /**
     * Create new navigation property to shared for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SharedInsight
     */
     post(body: SharedInsight, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SharedInsight | undefined>;
    /**
     * Access this property from the derived type itemInsights.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SharedRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to shared for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: SharedInsight, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Access this property from the derived type itemInsights.
 */
export interface SharedRequestBuilderGetQueryParameters {
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
const SharedRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const SharedRequestBuilderNavigationMetadata: Record<Exclude<keyof SharedRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    bySharedInsightId: {
        uriTemplate: SharedInsightItemRequestBuilderUriTemplate,
        requestsMetadata: SharedInsightItemRequestBuilderRequestsMetadata,
        navigationMetadata: SharedInsightItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["sharedInsight%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SharedRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSharedInsightCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: SharedRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSharedInsightFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSharedInsight,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const SharedRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/insights/shared{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */