/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUserCountMetricFromDiscriminatorValue, type UserCountMetric } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userCount property of the microsoft.graph.dailyUserInsightMetricsRoot entity.
 */
export interface UserCountMetricItemRequestBuilder extends BaseRequestBuilder<UserCountMetricItemRequestBuilder> {
    /**
     * Insights for total users on apps registered in the tenant for a specified period.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserCountMetric
     */
     get(requestConfiguration?: RequestConfiguration<UserCountMetricItemRequestBuilderGetQueryParameters> | undefined) : Promise<UserCountMetric | undefined>;
    /**
     * Insights for total users on apps registered in the tenant for a specified period.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserCountMetricItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Insights for total users on apps registered in the tenant for a specified period.
 */
export interface UserCountMetricItemRequestBuilderGetQueryParameters {
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
const UserCountMetricItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserCountMetricItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUserCountMetricFromDiscriminatorValue,
        queryParametersMapper: UserCountMetricItemRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const UserCountMetricItemRequestBuilderUriTemplate = "{+baseurl}/reports/userInsights/daily/userCount/{userCountMetric%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */