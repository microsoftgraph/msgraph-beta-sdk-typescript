/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createCustomerInsightCollectionResponseFromDiscriminatorValue, createCustomerInsightFromDiscriminatorValue, serializeCustomerInsight, type CustomerInsight, type CustomerInsightCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/partner/security/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { CustomerInsightTenantItemRequestBuilderRequestsMetadata, type CustomerInsightTenantItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customerInsights property of the microsoft.graph.partner.security.partnerSecurityScore entity.
 */
export interface CustomerInsightsRequestBuilder extends BaseRequestBuilder<CustomerInsightsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the customerInsights property of the microsoft.graph.partner.security.partnerSecurityScore entity.
     * @param customerInsightTenantId The unique identifier of customerInsight
     * @returns {CustomerInsightTenantItemRequestBuilder}
     */
     byCustomerInsightTenantId(customerInsightTenantId: string) : CustomerInsightTenantItemRequestBuilder;
    /**
     * Get a list of the customerInsight objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CustomerInsightCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/partner-security-partnersecurityscore-list-customerinsights?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CustomerInsightsRequestBuilderGetQueryParameters> | undefined) : Promise<CustomerInsightCollectionResponse | undefined>;
    /**
     * Create new navigation property to customerInsights for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CustomerInsight>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: CustomerInsight, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CustomerInsight | undefined>;
    /**
     * Get a list of the customerInsight objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CustomerInsightsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to customerInsights for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CustomerInsight, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the customerInsight objects and their properties.
 */
export interface CustomerInsightsRequestBuilderGetQueryParameters {
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
export const CustomerInsightsRequestBuilderUriTemplate = "{+baseurl}/security/partner/securityScore/customerInsights{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CustomerInsightsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const CustomerInsightsRequestBuilderNavigationMetadata: Record<Exclude<keyof CustomerInsightsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCustomerInsightTenantId: {
        requestsMetadata: CustomerInsightTenantItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["customerInsight%2DtenantId"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CustomerInsightsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: CustomerInsightsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCustomerInsightCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CustomerInsightsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: CustomerInsightsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCustomerInsightFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCustomerInsight,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */