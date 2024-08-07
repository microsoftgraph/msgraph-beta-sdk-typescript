/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAccessPackageAssignmentResourceRoleCollectionResponseFromDiscriminatorValue, createAccessPackageAssignmentResourceRoleFromDiscriminatorValue, serializeAccessPackageAssignmentResourceRole, type AccessPackageAssignmentResourceRole, type AccessPackageAssignmentResourceRoleCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { AccessPackageAssignmentResourceRoleItemRequestBuilderNavigationMetadata, AccessPackageAssignmentResourceRoleItemRequestBuilderRequestsMetadata, type AccessPackageAssignmentResourceRoleItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { MyRequestBuilderRequestsMetadata, type MyRequestBuilder } from './my/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackageAssignmentResourceRoles property of the microsoft.graph.accessPackageAssignment entity.
 */
export interface AccessPackageAssignmentResourceRolesRequestBuilder extends BaseRequestBuilder<AccessPackageAssignmentResourceRolesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the My method.
     */
    get my(): MyRequestBuilder;
    /**
     * Provides operations to manage the accessPackageAssignmentResourceRoles property of the microsoft.graph.accessPackageAssignment entity.
     * @param accessPackageAssignmentResourceRoleId The unique identifier of accessPackageAssignmentResourceRole
     * @returns {AccessPackageAssignmentResourceRoleItemRequestBuilder}
     */
     byAccessPackageAssignmentResourceRoleId(accessPackageAssignmentResourceRoleId: string) : AccessPackageAssignmentResourceRoleItemRequestBuilder;
    /**
     * The resource roles delivered to the target user for this assignment. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageAssignmentResourceRoleCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AccessPackageAssignmentResourceRolesRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageAssignmentResourceRoleCollectionResponse | undefined>;
    /**
     * Create new navigation property to accessPackageAssignmentResourceRoles for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageAssignmentResourceRole>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: AccessPackageAssignmentResourceRole, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessPackageAssignmentResourceRole | undefined>;
    /**
     * The resource roles delivered to the target user for this assignment. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessPackageAssignmentResourceRolesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to accessPackageAssignmentResourceRoles for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AccessPackageAssignmentResourceRole, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The resource roles delivered to the target user for this assignment. Read-only. Nullable.
 */
export interface AccessPackageAssignmentResourceRolesRequestBuilderGetQueryParameters {
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
export const AccessPackageAssignmentResourceRolesRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment%2Did}/accessPackageAssignmentResourceRoles{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AccessPackageAssignmentResourceRolesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AccessPackageAssignmentResourceRolesRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessPackageAssignmentResourceRolesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAccessPackageAssignmentResourceRoleId: {
        requestsMetadata: AccessPackageAssignmentResourceRoleItemRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageAssignmentResourceRoleItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["accessPackageAssignmentResourceRole%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    my: {
        requestsMetadata: MyRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessPackageAssignmentResourceRolesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AccessPackageAssignmentResourceRolesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageAssignmentResourceRoleCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AccessPackageAssignmentResourceRolesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: AccessPackageAssignmentResourceRolesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageAssignmentResourceRoleFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessPackageAssignmentResourceRole,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
