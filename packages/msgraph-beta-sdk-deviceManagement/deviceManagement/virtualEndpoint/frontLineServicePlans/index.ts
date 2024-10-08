/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCloudPcFrontLineServicePlanCollectionResponseFromDiscriminatorValue, createCloudPcFrontLineServicePlanFromDiscriminatorValue, serializeCloudPcFrontLineServicePlan, type CloudPcFrontLineServicePlan, type CloudPcFrontLineServicePlanCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { CloudPcFrontLineServicePlanItemRequestBuilderRequestsMetadata, type CloudPcFrontLineServicePlanItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the frontLineServicePlans property of the microsoft.graph.virtualEndpoint entity.
 */
export interface FrontLineServicePlansRequestBuilder extends BaseRequestBuilder<FrontLineServicePlansRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the frontLineServicePlans property of the microsoft.graph.virtualEndpoint entity.
     * @param cloudPcFrontLineServicePlanId The unique identifier of cloudPcFrontLineServicePlan
     * @returns {CloudPcFrontLineServicePlanItemRequestBuilder}
     */
     byCloudPcFrontLineServicePlanId(cloudPcFrontLineServicePlanId: string) : CloudPcFrontLineServicePlanItemRequestBuilder;
    /**
     * Get a list of the cloudPcFrontLineServicePlan objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudPcFrontLineServicePlanCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/virtualendpoint-list-frontlineserviceplans?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<FrontLineServicePlansRequestBuilderGetQueryParameters> | undefined) : Promise<CloudPcFrontLineServicePlanCollectionResponse | undefined>;
    /**
     * Create new navigation property to frontLineServicePlans for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudPcFrontLineServicePlan>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: CloudPcFrontLineServicePlan, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CloudPcFrontLineServicePlan | undefined>;
    /**
     * Get a list of the cloudPcFrontLineServicePlan objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FrontLineServicePlansRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to frontLineServicePlans for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CloudPcFrontLineServicePlan, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the cloudPcFrontLineServicePlan objects and their properties.
 */
export interface FrontLineServicePlansRequestBuilderGetQueryParameters {
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
export const FrontLineServicePlansRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/virtualEndpoint/frontLineServicePlans{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FrontLineServicePlansRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const FrontLineServicePlansRequestBuilderNavigationMetadata: Record<Exclude<keyof FrontLineServicePlansRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCloudPcFrontLineServicePlanId: {
        requestsMetadata: CloudPcFrontLineServicePlanItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["cloudPcFrontLineServicePlan%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FrontLineServicePlansRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: FrontLineServicePlansRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudPcFrontLineServicePlanCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: FrontLineServicePlansRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: FrontLineServicePlansRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudPcFrontLineServicePlanFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCloudPcFrontLineServicePlan,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
