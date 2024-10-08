/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createBusinessFlowCollectionResponseFromDiscriminatorValue, createBusinessFlowFromDiscriminatorValue, serializeBusinessFlow, type BusinessFlow, type BusinessFlowCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { BusinessFlowItemRequestBuilderNavigationMetadata, BusinessFlowItemRequestBuilderRequestsMetadata, type BusinessFlowItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the businessFlows property of the microsoft.graph.approvalWorkflowProvider entity.
 */
export interface BusinessFlowsRequestBuilder extends BaseRequestBuilder<BusinessFlowsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the businessFlows property of the microsoft.graph.approvalWorkflowProvider entity.
     * @param businessFlowId The unique identifier of businessFlow
     * @returns {BusinessFlowItemRequestBuilder}
     */
     byBusinessFlowId(businessFlowId: string) : BusinessFlowItemRequestBuilder;
    /**
     * Get businessFlows from approvalWorkflowProviders
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<BusinessFlowCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<BusinessFlowsRequestBuilderGetQueryParameters> | undefined) : Promise<BusinessFlowCollectionResponse | undefined>;
    /**
     * Create new navigation property to businessFlows for approvalWorkflowProviders
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<BusinessFlow>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: BusinessFlow, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<BusinessFlow | undefined>;
    /**
     * Get businessFlows from approvalWorkflowProviders
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<BusinessFlowsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to businessFlows for approvalWorkflowProviders
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: BusinessFlow, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get businessFlows from approvalWorkflowProviders
 */
export interface BusinessFlowsRequestBuilderGetQueryParameters {
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
export const BusinessFlowsRequestBuilderUriTemplate = "{+baseurl}/approvalWorkflowProviders/{approvalWorkflowProvider%2Did}/businessFlows{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const BusinessFlowsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const BusinessFlowsRequestBuilderNavigationMetadata: Record<Exclude<keyof BusinessFlowsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byBusinessFlowId: {
        requestsMetadata: BusinessFlowItemRequestBuilderRequestsMetadata,
        navigationMetadata: BusinessFlowItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["businessFlow%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const BusinessFlowsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: BusinessFlowsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createBusinessFlowCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: BusinessFlowsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: BusinessFlowsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createBusinessFlowFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeBusinessFlow,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
