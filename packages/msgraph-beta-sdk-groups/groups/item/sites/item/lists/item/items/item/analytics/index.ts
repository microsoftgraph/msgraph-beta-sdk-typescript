/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createItemAnalyticsFromDiscriminatorValue, type ItemAnalytics } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the analytics property of the microsoft.graph.listItem entity.
 */
export interface AnalyticsRequestBuilder extends BaseRequestBuilder<AnalyticsRequestBuilder> {
    /**
     * Analytics about the view activities that took place on this item.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ItemAnalytics
     */
     get(requestConfiguration?: RequestConfiguration<AnalyticsRequestBuilderGetQueryParameters> | undefined) : Promise<ItemAnalytics | undefined>;
    /**
     * Analytics about the view activities that took place on this item.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AnalyticsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Analytics about the view activities that took place on this item.
 */
export interface AnalyticsRequestBuilderGetQueryParameters {
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
const AnalyticsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AnalyticsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createItemAnalyticsFromDiscriminatorValue,
        queryParametersMapper: AnalyticsRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const AnalyticsRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/lists/{list%2Did}/items/{listItem%2Did}/analytics{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */