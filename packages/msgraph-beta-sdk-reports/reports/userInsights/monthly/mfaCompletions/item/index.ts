/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMfaCompletionMetricFromDiscriminatorValue, type MfaCompletionMetric } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mfaCompletions property of the microsoft.graph.monthlyUserInsightMetricsRoot entity.
 */
export interface MfaCompletionMetricItemRequestBuilder extends BaseRequestBuilder<MfaCompletionMetricItemRequestBuilder> {
    /**
     * Insights for MFA usage on apps registered in the tenant for a specified period.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MfaCompletionMetric>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<MfaCompletionMetricItemRequestBuilderGetQueryParameters> | undefined) : Promise<MfaCompletionMetric | undefined>;
    /**
     * Insights for MFA usage on apps registered in the tenant for a specified period.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MfaCompletionMetricItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Insights for MFA usage on apps registered in the tenant for a specified period.
 */
export interface MfaCompletionMetricItemRequestBuilderGetQueryParameters {
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
export const MfaCompletionMetricItemRequestBuilderUriTemplate = "{+baseurl}/reports/userInsights/monthly/mfaCompletions/{mfaCompletionMetric%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MfaCompletionMetricItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MfaCompletionMetricItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: MfaCompletionMetricItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMfaCompletionMetricFromDiscriminatorValue,
        queryParametersMapper: MfaCompletionMetricItemRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
