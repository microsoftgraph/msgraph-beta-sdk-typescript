/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCloudPcSharedUseServicePlanCollectionResponseFromDiscriminatorValue, createCloudPcSharedUseServicePlanFromDiscriminatorValue, serializeCloudPcSharedUseServicePlan, type CloudPcSharedUseServicePlan, type CloudPcSharedUseServicePlanCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { CloudPcSharedUseServicePlanItemRequestBuilderRequestsMetadata, CloudPcSharedUseServicePlanItemRequestBuilderUriTemplate, type CloudPcSharedUseServicePlanItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sharedUseServicePlans property of the microsoft.graph.virtualEndpoint entity.
 */
export interface SharedUseServicePlansRequestBuilder extends BaseRequestBuilder<SharedUseServicePlansRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated The sharedUseServicePlans property is deprecated and will not be supported starting Oct 8, 2023. This property will not be included as part of the API response. as of 2023-03/sharedUseServicePlans
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the sharedUseServicePlans property of the microsoft.graph.virtualEndpoint entity.
     * @param cloudPcSharedUseServicePlanId The unique identifier of cloudPcSharedUseServicePlan
     * @returns a CloudPcSharedUseServicePlanItemRequestBuilder
     * @deprecated The sharedUseServicePlans property is deprecated and will not be supported starting Oct 8, 2023. This property will not be included as part of the API response. as of 2023-03/sharedUseServicePlans
     */
     byCloudPcSharedUseServicePlanId(cloudPcSharedUseServicePlanId: string) : CloudPcSharedUseServicePlanItemRequestBuilder;
    /**
     * Get a list of the cloudPcSharedUseServicePlan objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CloudPcSharedUseServicePlanCollectionResponse
     * @deprecated The sharedUseServicePlans property is deprecated and will not be supported starting Oct 8, 2023. This property will not be included as part of the API response. as of 2023-03/sharedUseServicePlans
     * @see {@link https://learn.microsoft.com/graph/api/virtualendpoint-list-shareduseserviceplans?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<SharedUseServicePlansRequestBuilderGetQueryParameters> | undefined) : Promise<CloudPcSharedUseServicePlanCollectionResponse | undefined>;
    /**
     * Create new navigation property to sharedUseServicePlans for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CloudPcSharedUseServicePlan
     * @deprecated The sharedUseServicePlans property is deprecated and will not be supported starting Oct 8, 2023. This property will not be included as part of the API response. as of 2023-03/sharedUseServicePlans
     */
     post(body: CloudPcSharedUseServicePlan, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CloudPcSharedUseServicePlan | undefined>;
    /**
     * Get a list of the cloudPcSharedUseServicePlan objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The sharedUseServicePlans property is deprecated and will not be supported starting Oct 8, 2023. This property will not be included as part of the API response. as of 2023-03/sharedUseServicePlans
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SharedUseServicePlansRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to sharedUseServicePlans for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The sharedUseServicePlans property is deprecated and will not be supported starting Oct 8, 2023. This property will not be included as part of the API response. as of 2023-03/sharedUseServicePlans
     */
     toPostRequestInformation(body: CloudPcSharedUseServicePlan, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the cloudPcSharedUseServicePlan objects and their properties.
 */
export interface SharedUseServicePlansRequestBuilderGetQueryParameters {
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
const SharedUseServicePlansRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const SharedUseServicePlansRequestBuilderNavigationMetadata: Record<Exclude<keyof SharedUseServicePlansRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCloudPcSharedUseServicePlanId: {
        uriTemplate: CloudPcSharedUseServicePlanItemRequestBuilderUriTemplate,
        requestsMetadata: CloudPcSharedUseServicePlanItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["cloudPcSharedUseServicePlan%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SharedUseServicePlansRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCloudPcSharedUseServicePlanCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: SharedUseServicePlansRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCloudPcSharedUseServicePlanFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCloudPcSharedUseServicePlan,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const SharedUseServicePlansRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/virtualEndpoint/sharedUseServicePlans{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */