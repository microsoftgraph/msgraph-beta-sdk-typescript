/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMfaCompletionMetricCollectionResponseFromDiscriminatorValue, type MfaCompletionMetricCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { MfaCompletionMetricItemRequestBuilderRequestsMetadata, type MfaCompletionMetricItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mfaCompletions property of the microsoft.graph.dailyUserInsightMetricsRoot entity.
 */
export interface MfaCompletionsRequestBuilder extends BaseRequestBuilder<MfaCompletionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the mfaCompletions property of the microsoft.graph.dailyUserInsightMetricsRoot entity.
     * @param mfaCompletionMetricId The unique identifier of mfaCompletionMetric
     * @returns {MfaCompletionMetricItemRequestBuilder}
     */
     byMfaCompletionMetricId(mfaCompletionMetricId: string) : MfaCompletionMetricItemRequestBuilder;
    /**
     * Get a list of daily MFA completions on apps registered in your tenant configured for Microsoft Entra External ID for customers.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MfaCompletionMetricCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/dailyuserinsightmetricsroot-list-mfacompletions?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<MfaCompletionsRequestBuilderGetQueryParameters> | undefined) : Promise<MfaCompletionMetricCollectionResponse | undefined>;
    /**
     * Get a list of daily MFA completions on apps registered in your tenant configured for Microsoft Entra External ID for customers.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MfaCompletionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get a list of daily MFA completions on apps registered in your tenant configured for Microsoft Entra External ID for customers.
 */
export interface MfaCompletionsRequestBuilderGetQueryParameters {
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
export const MfaCompletionsRequestBuilderUriTemplate = "{+baseurl}/reports/userInsights/daily/mfaCompletions{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MfaCompletionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const MfaCompletionsRequestBuilderNavigationMetadata: Record<Exclude<keyof MfaCompletionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMfaCompletionMetricId: {
        requestsMetadata: MfaCompletionMetricItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["mfaCompletionMetric%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MfaCompletionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: MfaCompletionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMfaCompletionMetricCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: MfaCompletionsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
