/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAccessPackageAssignmentResourceRoleFromDiscriminatorValue, serializeAccessPackageAssignmentResourceRole, type AccessPackageAssignmentResourceRole } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AccessPackageAssignmentsRequestBuilderNavigationMetadata, AccessPackageAssignmentsRequestBuilderRequestsMetadata, AccessPackageAssignmentsRequestBuilderUriTemplate, type AccessPackageAssignmentsRequestBuilder } from './accessPackageAssignments/';
import { AccessPackageResourceRoleRequestBuilderNavigationMetadata, AccessPackageResourceRoleRequestBuilderRequestsMetadata, AccessPackageResourceRoleRequestBuilderUriTemplate, type AccessPackageResourceRoleRequestBuilder } from './accessPackageResourceRole/';
import { AccessPackageResourceScopeRequestBuilderNavigationMetadata, AccessPackageResourceScopeRequestBuilderRequestsMetadata, AccessPackageResourceScopeRequestBuilderUriTemplate, type AccessPackageResourceScopeRequestBuilder } from './accessPackageResourceScope/';
import { AccessPackageSubjectRequestBuilderNavigationMetadata, AccessPackageSubjectRequestBuilderRequestsMetadata, AccessPackageSubjectRequestBuilderUriTemplate, type AccessPackageSubjectRequestBuilder } from './accessPackageSubject/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackageAssignmentResourceRoles property of the microsoft.graph.accessPackageAssignment entity.
 */
export interface AccessPackageAssignmentResourceRoleItemRequestBuilder extends BaseRequestBuilder<AccessPackageAssignmentResourceRoleItemRequestBuilder> {
    /**
     * Provides operations to manage the accessPackageAssignments property of the microsoft.graph.accessPackageAssignmentResourceRole entity.
     */
    get accessPackageAssignments(): AccessPackageAssignmentsRequestBuilder;
    /**
     * Provides operations to manage the accessPackageResourceRole property of the microsoft.graph.accessPackageAssignmentResourceRole entity.
     */
    get accessPackageResourceRole(): AccessPackageResourceRoleRequestBuilder;
    /**
     * Provides operations to manage the accessPackageResourceScope property of the microsoft.graph.accessPackageAssignmentResourceRole entity.
     */
    get accessPackageResourceScope(): AccessPackageResourceScopeRequestBuilder;
    /**
     * Provides operations to manage the accessPackageSubject property of the microsoft.graph.accessPackageAssignmentResourceRole entity.
     */
    get accessPackageSubject(): AccessPackageSubjectRequestBuilder;
    /**
     * Delete navigation property accessPackageAssignmentResourceRoles for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The resource roles delivered to the target user for this assignment. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageAssignmentResourceRole
     */
     get(requestConfiguration?: RequestConfiguration<AccessPackageAssignmentResourceRoleItemRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageAssignmentResourceRole | undefined>;
    /**
     * Update the navigation property accessPackageAssignmentResourceRoles in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageAssignmentResourceRole
     */
     patch(body: AccessPackageAssignmentResourceRole, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessPackageAssignmentResourceRole | undefined>;
    /**
     * Delete navigation property accessPackageAssignmentResourceRoles for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The resource roles delivered to the target user for this assignment. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessPackageAssignmentResourceRoleItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property accessPackageAssignmentResourceRoles in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: AccessPackageAssignmentResourceRole, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The resource roles delivered to the target user for this assignment. Read-only. Nullable.
 */
export interface AccessPackageAssignmentResourceRoleItemRequestBuilderGetQueryParameters {
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
const AccessPackageAssignmentResourceRoleItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AccessPackageAssignmentResourceRoleItemRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessPackageAssignmentResourceRoleItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    accessPackageAssignments: {
        uriTemplate: AccessPackageAssignmentsRequestBuilderUriTemplate,
        requestsMetadata: AccessPackageAssignmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageAssignmentsRequestBuilderNavigationMetadata,
    },
    accessPackageResourceRole: {
        uriTemplate: AccessPackageResourceRoleRequestBuilderUriTemplate,
        requestsMetadata: AccessPackageResourceRoleRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageResourceRoleRequestBuilderNavigationMetadata,
    },
    accessPackageResourceScope: {
        uriTemplate: AccessPackageResourceScopeRequestBuilderUriTemplate,
        requestsMetadata: AccessPackageResourceScopeRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageResourceScopeRequestBuilderNavigationMetadata,
    },
    accessPackageSubject: {
        uriTemplate: AccessPackageSubjectRequestBuilderUriTemplate,
        requestsMetadata: AccessPackageSubjectRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageSubjectRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessPackageAssignmentResourceRoleItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAccessPackageAssignmentResourceRoleFromDiscriminatorValue,
        queryParametersMapper: AccessPackageAssignmentResourceRoleItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAccessPackageAssignmentResourceRoleFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessPackageAssignmentResourceRole,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AccessPackageAssignmentResourceRoleItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment%2Did}/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */