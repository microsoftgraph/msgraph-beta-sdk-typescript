/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAccessPackageAssignmentResourceRoleFromDiscriminatorValue, serializeAccessPackageAssignmentResourceRole, type AccessPackageAssignmentResourceRole } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AccessPackageAssignmentsRequestBuilderNavigationMetadata, AccessPackageAssignmentsRequestBuilderRequestsMetadata, type AccessPackageAssignmentsRequestBuilder } from './accessPackageAssignments/index.js';
// @ts-ignore
import { AccessPackageResourceRoleRequestBuilderNavigationMetadata, AccessPackageResourceRoleRequestBuilderRequestsMetadata, type AccessPackageResourceRoleRequestBuilder } from './accessPackageResourceRole/index.js';
// @ts-ignore
import { AccessPackageResourceScopeRequestBuilderNavigationMetadata, AccessPackageResourceScopeRequestBuilderRequestsMetadata, type AccessPackageResourceScopeRequestBuilder } from './accessPackageResourceScope/index.js';
// @ts-ignore
import { AccessPackageSubjectRequestBuilderNavigationMetadata, AccessPackageSubjectRequestBuilderRequestsMetadata, type AccessPackageSubjectRequestBuilder } from './accessPackageSubject/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackageAssignmentResourceRoles property of the microsoft.graph.entitlementManagement entity.
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
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties and relationships of an accessPackageAssignmentResourceRole object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageAssignmentResourceRole>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/accesspackageassignmentresourcerole-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AccessPackageAssignmentResourceRoleItemRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageAssignmentResourceRole | undefined>;
    /**
     * Update the navigation property accessPackageAssignmentResourceRoles in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageAssignmentResourceRole>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: AccessPackageAssignmentResourceRole, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessPackageAssignmentResourceRole | undefined>;
    /**
     * Delete navigation property accessPackageAssignmentResourceRoles for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties and relationships of an accessPackageAssignmentResourceRole object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessPackageAssignmentResourceRoleItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property accessPackageAssignmentResourceRoles in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: AccessPackageAssignmentResourceRole, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and relationships of an accessPackageAssignmentResourceRole object.
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
 * Uri template for the request builder.
 */
export const AccessPackageAssignmentResourceRoleItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole%2Did}{?%24expand,%24select}";
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
        requestsMetadata: AccessPackageAssignmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageAssignmentsRequestBuilderNavigationMetadata,
    },
    accessPackageResourceRole: {
        requestsMetadata: AccessPackageResourceRoleRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageResourceRoleRequestBuilderNavigationMetadata,
    },
    accessPackageResourceScope: {
        requestsMetadata: AccessPackageResourceScopeRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageResourceScopeRequestBuilderNavigationMetadata,
    },
    accessPackageSubject: {
        requestsMetadata: AccessPackageSubjectRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageSubjectRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessPackageAssignmentResourceRoleItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AccessPackageAssignmentResourceRoleItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AccessPackageAssignmentResourceRoleItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageAssignmentResourceRoleFromDiscriminatorValue,
        queryParametersMapper: AccessPackageAssignmentResourceRoleItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AccessPackageAssignmentResourceRoleItemRequestBuilderUriTemplate,
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
