/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue, serializeUnifiedRoleManagementPolicyAssignment, type UnifiedRoleManagementPolicyAssignment } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { PolicyRequestBuilderRequestsMetadata, PolicyRequestBuilderUriTemplate, type PolicyRequestBuilder } from './policy/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleManagementPolicyAssignments property of the microsoft.graph.policyRoot entity.
 */
export interface UnifiedRoleManagementPolicyAssignmentItemRequestBuilder extends BaseRequestBuilder<UnifiedRoleManagementPolicyAssignmentItemRequestBuilder> {
    /**
     * Provides operations to manage the policy property of the microsoft.graph.unifiedRoleManagementPolicyAssignment entity.
     */
    get policy(): PolicyRequestBuilder;
    /**
     * Delete navigation property roleManagementPolicyAssignments for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Represents the role management policy assignments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleManagementPolicyAssignment
     */
     get(requestConfiguration?: RequestConfiguration<UnifiedRoleManagementPolicyAssignmentItemRequestBuilderGetQueryParameters> | undefined) : Promise<UnifiedRoleManagementPolicyAssignment | undefined>;
    /**
     * Update the navigation property roleManagementPolicyAssignments in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleManagementPolicyAssignment
     */
     patch(body: UnifiedRoleManagementPolicyAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UnifiedRoleManagementPolicyAssignment | undefined>;
    /**
     * Delete navigation property roleManagementPolicyAssignments for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Represents the role management policy assignments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UnifiedRoleManagementPolicyAssignmentItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property roleManagementPolicyAssignments in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: UnifiedRoleManagementPolicyAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Represents the role management policy assignments.
 */
export interface UnifiedRoleManagementPolicyAssignmentItemRequestBuilderGetQueryParameters {
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
const UnifiedRoleManagementPolicyAssignmentItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const UnifiedRoleManagementPolicyAssignmentItemRequestBuilderNavigationMetadata: Record<Exclude<keyof UnifiedRoleManagementPolicyAssignmentItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    policy: {
        uriTemplate: PolicyRequestBuilderUriTemplate,
        requestsMetadata: PolicyRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UnifiedRoleManagementPolicyAssignmentItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue,
        queryParametersMapper: UnifiedRoleManagementPolicyAssignmentItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUnifiedRoleManagementPolicyAssignmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedRoleManagementPolicyAssignment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UnifiedRoleManagementPolicyAssignmentItemRequestBuilderUriTemplate = "{+baseurl}/policies/roleManagementPolicyAssignments/{unifiedRoleManagementPolicyAssignment%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */