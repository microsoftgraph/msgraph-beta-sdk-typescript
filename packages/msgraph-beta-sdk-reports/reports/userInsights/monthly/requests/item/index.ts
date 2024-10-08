/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserRequestsMetricFromDiscriminatorValue, type UserRequestsMetric } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the requests property of the microsoft.graph.monthlyUserInsightMetricsRoot entity.
 */
export interface UserRequestsMetricItemRequestBuilder extends BaseRequestBuilder<UserRequestsMetricItemRequestBuilder> {
    /**
     * Insights for all user requests on apps registered in the tenant for a specified period.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserRequestsMetric>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<UserRequestsMetricItemRequestBuilderGetQueryParameters> | undefined) : Promise<UserRequestsMetric | undefined>;
    /**
     * Insights for all user requests on apps registered in the tenant for a specified period.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserRequestsMetricItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Insights for all user requests on apps registered in the tenant for a specified period.
 */
export interface UserRequestsMetricItemRequestBuilderGetQueryParameters {
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
export const UserRequestsMetricItemRequestBuilderUriTemplate = "{+baseurl}/reports/userInsights/monthly/requests/{userRequestsMetric%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UserRequestsMetricItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserRequestsMetricItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: UserRequestsMetricItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserRequestsMetricFromDiscriminatorValue,
        queryParametersMapper: UserRequestsMetricItemRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
