/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUserRequestsMetricCollectionResponseFromDiscriminatorValue, type UserRequestsMetricCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { type UserRequestsMetricItemRequestBuilder, UserRequestsMetricItemRequestBuilderRequestsMetadata, UserRequestsMetricItemRequestBuilderUriTemplate } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the requests property of the microsoft.graph.monthlyUserInsightMetricsRoot entity.
 */
export interface RequestsRequestBuilder extends BaseRequestBuilder<RequestsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the requests property of the microsoft.graph.monthlyUserInsightMetricsRoot entity.
     * @param userRequestsMetricId The unique identifier of userRequestsMetric
     * @returns a UserRequestsMetricItemRequestBuilder
     */
     byUserRequestsMetricId(userRequestsMetricId: string) : UserRequestsMetricItemRequestBuilder;
    /**
     * Get a list of monthly user requests on apps registered in your tenant configured for Microsoft Entra External ID for customers.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserRequestsMetricCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/monthlyuserinsightmetricsroot-list-requests?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<RequestsRequestBuilderGetQueryParameters> | undefined) : Promise<UserRequestsMetricCollectionResponse | undefined>;
    /**
     * Get a list of monthly user requests on apps registered in your tenant configured for Microsoft Entra External ID for customers.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RequestsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get a list of monthly user requests on apps registered in your tenant configured for Microsoft Entra External ID for customers.
 */
export interface RequestsRequestBuilderGetQueryParameters {
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
const RequestsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const RequestsRequestBuilderNavigationMetadata: Record<Exclude<keyof RequestsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUserRequestsMetricId: {
        uriTemplate: UserRequestsMetricItemRequestBuilderUriTemplate,
        requestsMetadata: UserRequestsMetricItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["userRequestsMetric%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RequestsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUserRequestsMetricCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: RequestsRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const RequestsRequestBuilderUriTemplate = "{+baseurl}/reports/userInsights/monthly/requests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */