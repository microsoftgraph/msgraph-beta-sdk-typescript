/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedRoleAssignmentScheduleInstanceCollectionResponseFromDiscriminatorValue, createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue, serializeUnifiedRoleAssignmentScheduleInstance, type UnifiedRoleAssignmentScheduleInstance, type UnifiedRoleAssignmentScheduleInstanceCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { FilterByCurrentUserWithOnRequestBuilderRequestsMetadata, FilterByCurrentUserWithOnRequestBuilderUriTemplate, type FilterByCurrentUserWithOnRequestBuilder } from './filterByCurrentUserWithOn/';
import { type UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder, UnifiedRoleAssignmentScheduleInstanceItemRequestBuilderNavigationMetadata, UnifiedRoleAssignmentScheduleInstanceItemRequestBuilderRequestsMetadata, UnifiedRoleAssignmentScheduleInstanceItemRequestBuilderUriTemplate } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleAssignmentScheduleInstances property of the microsoft.graph.rbacApplication entity.
 */
export interface RoleAssignmentScheduleInstancesRequestBuilder extends BaseRequestBuilder<RoleAssignmentScheduleInstancesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the roleAssignmentScheduleInstances property of the microsoft.graph.rbacApplication entity.
     * @param unifiedRoleAssignmentScheduleInstanceId The unique identifier of unifiedRoleAssignmentScheduleInstance
     * @returns a UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder
     */
     byUnifiedRoleAssignmentScheduleInstanceId(unifiedRoleAssignmentScheduleInstanceId: string) : UnifiedRoleAssignmentScheduleInstanceItemRequestBuilder;
    /**
     * Provides operations to call the filterByCurrentUser method.
     * @param on Usage: on='{on}'
     * @returns a filterByCurrentUserWithOnRequestBuilder
     */
     filterByCurrentUserWithOn(on: string | undefined) : FilterByCurrentUserWithOnRequestBuilder;
    /**
     * Get the instances of active role assignments in your tenant. The active assignments include those made through assignments and activation requests, and directly through the role assignments API.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleAssignmentScheduleInstanceCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/rbacapplication-list-roleassignmentscheduleinstances?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<RoleAssignmentScheduleInstancesRequestBuilderGetQueryParameters> | undefined) : Promise<UnifiedRoleAssignmentScheduleInstanceCollectionResponse | undefined>;
    /**
     * Create new navigation property to roleAssignmentScheduleInstances for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleAssignmentScheduleInstance
     */
     post(body: UnifiedRoleAssignmentScheduleInstance, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UnifiedRoleAssignmentScheduleInstance | undefined>;
    /**
     * Get the instances of active role assignments in your tenant. The active assignments include those made through assignments and activation requests, and directly through the role assignments API.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RoleAssignmentScheduleInstancesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to roleAssignmentScheduleInstances for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UnifiedRoleAssignmentScheduleInstance, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the instances of active role assignments in your tenant. The active assignments include those made through assignments and activation requests, and directly through the role assignments API.
 */
export interface RoleAssignmentScheduleInstancesRequestBuilderGetQueryParameters {
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
const RoleAssignmentScheduleInstancesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const RoleAssignmentScheduleInstancesRequestBuilderNavigationMetadata: Record<Exclude<keyof RoleAssignmentScheduleInstancesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUnifiedRoleAssignmentScheduleInstanceId: {
        uriTemplate: UnifiedRoleAssignmentScheduleInstanceItemRequestBuilderUriTemplate,
        requestsMetadata: UnifiedRoleAssignmentScheduleInstanceItemRequestBuilderRequestsMetadata,
        navigationMetadata: UnifiedRoleAssignmentScheduleInstanceItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["unifiedRoleAssignmentScheduleInstance%2Did"],
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
export const RoleAssignmentScheduleInstancesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUnifiedRoleAssignmentScheduleInstanceCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: RoleAssignmentScheduleInstancesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUnifiedRoleAssignmentScheduleInstanceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedRoleAssignmentScheduleInstance,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const RoleAssignmentScheduleInstancesRequestBuilderUriTemplate = "{+baseurl}/roleManagement/directory/roleAssignmentScheduleInstances{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */