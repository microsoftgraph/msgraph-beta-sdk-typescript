/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAccessPackageFromDiscriminatorValue, serializeAccessPackage, type AccessPackage } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AccessPackageAssignmentPoliciesRequestBuilderNavigationMetadata, AccessPackageAssignmentPoliciesRequestBuilderRequestsMetadata, type AccessPackageAssignmentPoliciesRequestBuilder } from './accessPackageAssignmentPolicies/index.js';
// @ts-ignore
import { AccessPackageCatalogRequestBuilderRequestsMetadata, type AccessPackageCatalogRequestBuilder } from './accessPackageCatalog/index.js';
// @ts-ignore
import { AccessPackageResourceRoleScopesRequestBuilderNavigationMetadata, AccessPackageResourceRoleScopesRequestBuilderRequestsMetadata, type AccessPackageResourceRoleScopesRequestBuilder } from './accessPackageResourceRoleScopes/index.js';
// @ts-ignore
import { AccessPackagesIncompatibleWithRequestBuilderNavigationMetadata, AccessPackagesIncompatibleWithRequestBuilderRequestsMetadata, type AccessPackagesIncompatibleWithRequestBuilder } from './accessPackagesIncompatibleWith/index.js';
// @ts-ignore
import { AccessPackagesIncompatibleWithWithUniqueNameRequestBuilderRequestsMetadata, type AccessPackagesIncompatibleWithWithUniqueNameRequestBuilder } from './accessPackagesIncompatibleWithWithUniqueName/index.js';
// @ts-ignore
import { GetApplicablePolicyRequirementsRequestBuilderRequestsMetadata, type GetApplicablePolicyRequirementsRequestBuilder } from './getApplicablePolicyRequirements/index.js';
// @ts-ignore
import { IncompatibleAccessPackagesRequestBuilderNavigationMetadata, IncompatibleAccessPackagesRequestBuilderRequestsMetadata, type IncompatibleAccessPackagesRequestBuilder } from './incompatibleAccessPackages/index.js';
// @ts-ignore
import { IncompatibleGroupsRequestBuilderNavigationMetadata, IncompatibleGroupsRequestBuilderRequestsMetadata, type IncompatibleGroupsRequestBuilder } from './incompatibleGroups/index.js';
// @ts-ignore
import { MoveToCatalogRequestBuilderRequestsMetadata, type MoveToCatalogRequestBuilder } from './moveToCatalog/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackages property of the microsoft.graph.entitlementManagement entity.
 */
export interface AccessPackageItemRequestBuilder extends BaseRequestBuilder<AccessPackageItemRequestBuilder> {
    /**
     * Provides operations to manage the accessPackageAssignmentPolicies property of the microsoft.graph.accessPackage entity.
     */
    get accessPackageAssignmentPolicies(): AccessPackageAssignmentPoliciesRequestBuilder;
    /**
     * Provides operations to manage the accessPackageCatalog property of the microsoft.graph.accessPackage entity.
     */
    get accessPackageCatalog(): AccessPackageCatalogRequestBuilder;
    /**
     * Provides operations to manage the accessPackageResourceRoleScopes property of the microsoft.graph.accessPackage entity.
     */
    get accessPackageResourceRoleScopes(): AccessPackageResourceRoleScopesRequestBuilder;
    /**
     * Provides operations to manage the accessPackagesIncompatibleWith property of the microsoft.graph.accessPackage entity.
     */
    get accessPackagesIncompatibleWith(): AccessPackagesIncompatibleWithRequestBuilder;
    /**
     * Provides operations to call the getApplicablePolicyRequirements method.
     */
    get getApplicablePolicyRequirements(): GetApplicablePolicyRequirementsRequestBuilder;
    /**
     * Provides operations to manage the incompatibleAccessPackages property of the microsoft.graph.accessPackage entity.
     */
    get incompatibleAccessPackages(): IncompatibleAccessPackagesRequestBuilder;
    /**
     * Provides operations to manage the incompatibleGroups property of the microsoft.graph.accessPackage entity.
     */
    get incompatibleGroups(): IncompatibleGroupsRequestBuilder;
    /**
     * Provides operations to call the moveToCatalog method.
     */
    get moveToCatalog(): MoveToCatalogRequestBuilder;
    /**
     * Provides operations to manage the accessPackagesIncompatibleWith property of the microsoft.graph.accessPackage entity.
     * @param uniqueName Alternate key of accessPackage
     * @returns {AccessPackagesIncompatibleWithWithUniqueNameRequestBuilder}
     */
     accessPackagesIncompatibleWithWithUniqueName(uniqueName: string | undefined) : AccessPackagesIncompatibleWithWithUniqueNameRequestBuilder;
    /**
     * Delete an accessPackage object. You can't delete an access package if it has any accessPackageAssignment. To delete the access package, first query if there are any assignments with a filter to indicate the specific access package, such as: $filter=accessPackage/id eq 'a914b616-e04e-476b-aa37-91038f0b165b'. For more information on how to remove assignments that are still in the delivered state, see Remove an assignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/accesspackage-delete?view=graph-rest-beta|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve an access package with a list of accessPackageResourceRoleScope objects. These objects represent the resource roles that an access package assigns to each subject. Each object links to an accessPackageResourceRole and an accessPackageResourceScope.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/accesspackage-list-accesspackageresourcerolescopes?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AccessPackageItemRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackage | undefined>;
    /**
     * Update an existing accessPackage object to change one or more of its properties, such as the display name or description.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/accesspackage-update?view=graph-rest-beta|Find more info here}
     */
     patch(body: AccessPackage, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessPackage | undefined>;
    /**
     * Delete an accessPackage object. You can't delete an access package if it has any accessPackageAssignment. To delete the access package, first query if there are any assignments with a filter to indicate the specific access package, such as: $filter=accessPackage/id eq 'a914b616-e04e-476b-aa37-91038f0b165b'. For more information on how to remove assignments that are still in the delivered state, see Remove an assignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve an access package with a list of accessPackageResourceRoleScope objects. These objects represent the resource roles that an access package assigns to each subject. Each object links to an accessPackageResourceRole and an accessPackageResourceScope.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessPackageItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update an existing accessPackage object to change one or more of its properties, such as the display name or description.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: AccessPackage, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve an access package with a list of accessPackageResourceRoleScope objects. These objects represent the resource roles that an access package assigns to each subject. Each object links to an accessPackageResourceRole and an accessPackageResourceScope.
 */
export interface AccessPackageItemRequestBuilderGetQueryParameters {
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
export const AccessPackageItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackages/{accessPackage%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AccessPackageItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AccessPackageItemRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessPackageItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    accessPackagesIncompatibleWithWithUniqueName: {
        requestsMetadata: AccessPackagesIncompatibleWithWithUniqueNameRequestBuilderRequestsMetadata,
        pathParametersMappings: ["uniqueName"],
    },
    accessPackageAssignmentPolicies: {
        requestsMetadata: AccessPackageAssignmentPoliciesRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageAssignmentPoliciesRequestBuilderNavigationMetadata,
    },
    accessPackageCatalog: {
        requestsMetadata: AccessPackageCatalogRequestBuilderRequestsMetadata,
    },
    accessPackageResourceRoleScopes: {
        requestsMetadata: AccessPackageResourceRoleScopesRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageResourceRoleScopesRequestBuilderNavigationMetadata,
    },
    accessPackagesIncompatibleWith: {
        requestsMetadata: AccessPackagesIncompatibleWithRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackagesIncompatibleWithRequestBuilderNavigationMetadata,
    },
    getApplicablePolicyRequirements: {
        requestsMetadata: GetApplicablePolicyRequirementsRequestBuilderRequestsMetadata,
    },
    incompatibleAccessPackages: {
        requestsMetadata: IncompatibleAccessPackagesRequestBuilderRequestsMetadata,
        navigationMetadata: IncompatibleAccessPackagesRequestBuilderNavigationMetadata,
    },
    incompatibleGroups: {
        requestsMetadata: IncompatibleGroupsRequestBuilderRequestsMetadata,
        navigationMetadata: IncompatibleGroupsRequestBuilderNavigationMetadata,
    },
    moveToCatalog: {
        requestsMetadata: MoveToCatalogRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessPackageItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AccessPackageItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AccessPackageItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageFromDiscriminatorValue,
        queryParametersMapper: AccessPackageItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AccessPackageItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessPackage,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
