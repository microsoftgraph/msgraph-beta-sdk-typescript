/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPrivilegedAccessGroupAssignmentScheduleRequestCollectionResponseFromDiscriminatorValue, createPrivilegedAccessGroupAssignmentScheduleRequestFromDiscriminatorValue, serializePrivilegedAccessGroupAssignmentScheduleRequest, type PrivilegedAccessGroupAssignmentScheduleRequest, type PrivilegedAccessGroupAssignmentScheduleRequestCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { FilterByCurrentUserWithOnRequestBuilderRequestsMetadata, FilterByCurrentUserWithOnRequestBuilderUriTemplate, type FilterByCurrentUserWithOnRequestBuilder } from './filterByCurrentUserWithOn/';
import { PrivilegedAccessGroupAssignmentScheduleRequestItemRequestBuilderNavigationMetadata, PrivilegedAccessGroupAssignmentScheduleRequestItemRequestBuilderRequestsMetadata, PrivilegedAccessGroupAssignmentScheduleRequestItemRequestBuilderUriTemplate, type PrivilegedAccessGroupAssignmentScheduleRequestItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignmentScheduleRequests property of the microsoft.graph.privilegedAccessGroup entity.
 */
export interface AssignmentScheduleRequestsRequestBuilder extends BaseRequestBuilder<AssignmentScheduleRequestsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the assignmentScheduleRequests property of the microsoft.graph.privilegedAccessGroup entity.
     * @param privilegedAccessGroupAssignmentScheduleRequestId The unique identifier of privilegedAccessGroupAssignmentScheduleRequest
     * @returns a PrivilegedAccessGroupAssignmentScheduleRequestItemRequestBuilder
     */
     byPrivilegedAccessGroupAssignmentScheduleRequestId(privilegedAccessGroupAssignmentScheduleRequestId: string) : PrivilegedAccessGroupAssignmentScheduleRequestItemRequestBuilder;
    /**
     * Provides operations to call the filterByCurrentUser method.
     * @param on Usage: on='{on}'
     * @returns a filterByCurrentUserWithOnRequestBuilder
     */
     filterByCurrentUserWithOn(on: string | undefined) : FilterByCurrentUserWithOnRequestBuilder;
    /**
     * Get a list of the privilegedAccessGroupAssignmentScheduleRequest objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrivilegedAccessGroupAssignmentScheduleRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/privilegedaccessgroup-list-assignmentschedulerequests?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AssignmentScheduleRequestsRequestBuilderGetQueryParameters> | undefined) : Promise<PrivilegedAccessGroupAssignmentScheduleRequestCollectionResponse | undefined>;
    /**
     * Create a new privilegedAccessGroupAssignmentScheduleRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrivilegedAccessGroupAssignmentScheduleRequest
     * @see {@link https://learn.microsoft.com/graph/api/privilegedaccessgroup-post-assignmentschedulerequests?view=graph-rest-1.0|Find more info here}
     */
     post(body: PrivilegedAccessGroupAssignmentScheduleRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PrivilegedAccessGroupAssignmentScheduleRequest | undefined>;
    /**
     * Get a list of the privilegedAccessGroupAssignmentScheduleRequest objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AssignmentScheduleRequestsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new privilegedAccessGroupAssignmentScheduleRequest object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: PrivilegedAccessGroupAssignmentScheduleRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the privilegedAccessGroupAssignmentScheduleRequest objects and their properties.
 */
export interface AssignmentScheduleRequestsRequestBuilderGetQueryParameters {
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
const AssignmentScheduleRequestsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AssignmentScheduleRequestsRequestBuilderNavigationMetadata: Record<Exclude<keyof AssignmentScheduleRequestsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byPrivilegedAccessGroupAssignmentScheduleRequestId: {
        uriTemplate: PrivilegedAccessGroupAssignmentScheduleRequestItemRequestBuilderUriTemplate,
        requestsMetadata: PrivilegedAccessGroupAssignmentScheduleRequestItemRequestBuilderRequestsMetadata,
        navigationMetadata: PrivilegedAccessGroupAssignmentScheduleRequestItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["privilegedAccessGroupAssignmentScheduleRequest%2Did"],
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
export const AssignmentScheduleRequestsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPrivilegedAccessGroupAssignmentScheduleRequestCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AssignmentScheduleRequestsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPrivilegedAccessGroupAssignmentScheduleRequestFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePrivilegedAccessGroupAssignmentScheduleRequest,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AssignmentScheduleRequestsRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/privilegedAccess/group/assignmentScheduleRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */