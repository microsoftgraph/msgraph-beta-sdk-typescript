/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPrivilegedAccessGroupEligibilityScheduleInstanceCollectionResponseFromDiscriminatorValue, createPrivilegedAccessGroupEligibilityScheduleInstanceFromDiscriminatorValue, serializePrivilegedAccessGroupEligibilityScheduleInstance, type PrivilegedAccessGroupEligibilityScheduleInstance, type PrivilegedAccessGroupEligibilityScheduleInstanceCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { FilterByCurrentUserWithOnRequestBuilderRequestsMetadata, FilterByCurrentUserWithOnRequestBuilderUriTemplate, type FilterByCurrentUserWithOnRequestBuilder } from './filterByCurrentUserWithOn/';
import { PrivilegedAccessGroupEligibilityScheduleInstanceItemRequestBuilderNavigationMetadata, PrivilegedAccessGroupEligibilityScheduleInstanceItemRequestBuilderRequestsMetadata, PrivilegedAccessGroupEligibilityScheduleInstanceItemRequestBuilderUriTemplate, type PrivilegedAccessGroupEligibilityScheduleInstanceItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the eligibilityScheduleInstances property of the microsoft.graph.privilegedAccessGroup entity.
 */
export interface EligibilityScheduleInstancesRequestBuilder extends BaseRequestBuilder<EligibilityScheduleInstancesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the eligibilityScheduleInstances property of the microsoft.graph.privilegedAccessGroup entity.
     * @param privilegedAccessGroupEligibilityScheduleInstanceId The unique identifier of privilegedAccessGroupEligibilityScheduleInstance
     * @returns a PrivilegedAccessGroupEligibilityScheduleInstanceItemRequestBuilder
     */
     byPrivilegedAccessGroupEligibilityScheduleInstanceId(privilegedAccessGroupEligibilityScheduleInstanceId: string) : PrivilegedAccessGroupEligibilityScheduleInstanceItemRequestBuilder;
    /**
     * Provides operations to call the filterByCurrentUser method.
     * @param on Usage: on='{on}'
     * @returns a filterByCurrentUserWithOnRequestBuilder
     */
     filterByCurrentUserWithOn(on: string | undefined) : FilterByCurrentUserWithOnRequestBuilder;
    /**
     * Get a list of the privilegedAccessGroupEligibilityScheduleInstance objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrivilegedAccessGroupEligibilityScheduleInstanceCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/privilegedaccessgroup-list-eligibilityscheduleinstances?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<EligibilityScheduleInstancesRequestBuilderGetQueryParameters> | undefined) : Promise<PrivilegedAccessGroupEligibilityScheduleInstanceCollectionResponse | undefined>;
    /**
     * Create new navigation property to eligibilityScheduleInstances for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrivilegedAccessGroupEligibilityScheduleInstance
     */
     post(body: PrivilegedAccessGroupEligibilityScheduleInstance, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PrivilegedAccessGroupEligibilityScheduleInstance | undefined>;
    /**
     * Get a list of the privilegedAccessGroupEligibilityScheduleInstance objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EligibilityScheduleInstancesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to eligibilityScheduleInstances for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: PrivilegedAccessGroupEligibilityScheduleInstance, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the privilegedAccessGroupEligibilityScheduleInstance objects and their properties.
 */
export interface EligibilityScheduleInstancesRequestBuilderGetQueryParameters {
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
const EligibilityScheduleInstancesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const EligibilityScheduleInstancesRequestBuilderNavigationMetadata: Record<Exclude<keyof EligibilityScheduleInstancesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byPrivilegedAccessGroupEligibilityScheduleInstanceId: {
        uriTemplate: PrivilegedAccessGroupEligibilityScheduleInstanceItemRequestBuilderUriTemplate,
        requestsMetadata: PrivilegedAccessGroupEligibilityScheduleInstanceItemRequestBuilderRequestsMetadata,
        navigationMetadata: PrivilegedAccessGroupEligibilityScheduleInstanceItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["privilegedAccessGroupEligibilityScheduleInstance%2Did"],
    },
    filterByCurrentUserWithOn: {
        uriTemplate: FilterByCurrentUserWithOnRequestBuilderUriTemplate,
        requestsMetadata: FilterByCurrentUserWithOnRequestBuilderRequestsMetadata,
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EligibilityScheduleInstancesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPrivilegedAccessGroupEligibilityScheduleInstanceCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: EligibilityScheduleInstancesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPrivilegedAccessGroupEligibilityScheduleInstanceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePrivilegedAccessGroupEligibilityScheduleInstance,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const EligibilityScheduleInstancesRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/privilegedAccess/group/eligibilityScheduleInstances{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */