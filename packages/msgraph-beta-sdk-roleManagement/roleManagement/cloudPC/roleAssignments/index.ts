/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedRoleAssignmentMultipleCollectionResponseFromDiscriminatorValue, createUnifiedRoleAssignmentMultipleFromDiscriminatorValue, serializeUnifiedRoleAssignmentMultiple, type UnifiedRoleAssignmentMultiple, type UnifiedRoleAssignmentMultipleCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { type UnifiedRoleAssignmentMultipleItemRequestBuilder, UnifiedRoleAssignmentMultipleItemRequestBuilderNavigationMetadata, UnifiedRoleAssignmentMultipleItemRequestBuilderRequestsMetadata, UnifiedRoleAssignmentMultipleItemRequestBuilderUriTemplate } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleAssignments property of the microsoft.graph.rbacApplicationMultiple entity.
 */
export interface RoleAssignmentsRequestBuilder extends BaseRequestBuilder<RoleAssignmentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the roleAssignments property of the microsoft.graph.rbacApplicationMultiple entity.
     * @param unifiedRoleAssignmentMultipleId The unique identifier of unifiedRoleAssignmentMultiple
     * @returns a UnifiedRoleAssignmentMultipleItemRequestBuilder
     */
     byUnifiedRoleAssignmentMultipleId(unifiedRoleAssignmentMultipleId: string) : UnifiedRoleAssignmentMultipleItemRequestBuilder;
    /**
     * Get the properties and relationships of a unifiedRoleAssignmentMultiple object of an RBAC provider.  The following RBAC providers are currently supported:- Cloud PC - device management (Intune) For other Microsoft 365 applications (like Microsoft Entra ID), use unifiedRoleAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleAssignmentMultipleCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/rbacapplicationmultiple-list-roleassignments?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<RoleAssignmentsRequestBuilderGetQueryParameters> | undefined) : Promise<UnifiedRoleAssignmentMultipleCollectionResponse | undefined>;
    /**
     * Create a new unifiedRoleAssignmentMultiple object for an RBAC provider.  The following RBAC providers are currently supported:- Cloud PC - device management (Intune) For other Microsoft 365 applications (like Microsoft Entra ID), use unifiedRoleAssignment.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleAssignmentMultiple
     * @see {@link https://learn.microsoft.com/graph/api/rbacapplicationmultiple-post-roleassignments?view=graph-rest-1.0|Find more info here}
     */
     post(body: UnifiedRoleAssignmentMultiple, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UnifiedRoleAssignmentMultiple | undefined>;
    /**
     * Get the properties and relationships of a unifiedRoleAssignmentMultiple object of an RBAC provider.  The following RBAC providers are currently supported:- Cloud PC - device management (Intune) For other Microsoft 365 applications (like Microsoft Entra ID), use unifiedRoleAssignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RoleAssignmentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new unifiedRoleAssignmentMultiple object for an RBAC provider.  The following RBAC providers are currently supported:- Cloud PC - device management (Intune) For other Microsoft 365 applications (like Microsoft Entra ID), use unifiedRoleAssignment.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UnifiedRoleAssignmentMultiple, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the properties and relationships of a unifiedRoleAssignmentMultiple object of an RBAC provider.  The following RBAC providers are currently supported:- Cloud PC - device management (Intune) For other Microsoft 365 applications (like Microsoft Entra ID), use unifiedRoleAssignment.
 */
export interface RoleAssignmentsRequestBuilderGetQueryParameters {
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
const RoleAssignmentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const RoleAssignmentsRequestBuilderNavigationMetadata: Record<Exclude<keyof RoleAssignmentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUnifiedRoleAssignmentMultipleId: {
        uriTemplate: UnifiedRoleAssignmentMultipleItemRequestBuilderUriTemplate,
        requestsMetadata: UnifiedRoleAssignmentMultipleItemRequestBuilderRequestsMetadata,
        navigationMetadata: UnifiedRoleAssignmentMultipleItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["unifiedRoleAssignmentMultiple%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RoleAssignmentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUnifiedRoleAssignmentMultipleCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: RoleAssignmentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUnifiedRoleAssignmentMultipleFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedRoleAssignmentMultiple,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const RoleAssignmentsRequestBuilderUriTemplate = "{+baseurl}/roleManagement/cloudPC/roleAssignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */