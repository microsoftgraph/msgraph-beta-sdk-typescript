/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue, serializeTargetedManagedAppPolicyAssignment, type TargetedManagedAppPolicyAssignment } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.windowsManagedAppProtection entity.
 */
export interface TargetedManagedAppPolicyAssignmentItemRequestBuilder extends BaseRequestBuilder<TargetedManagedAppPolicyAssignmentItemRequestBuilder> {
    /**
     * Delete navigation property assignments for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TargetedManagedAppPolicyAssignment
     */
     get(requestConfiguration?: RequestConfiguration<TargetedManagedAppPolicyAssignmentItemRequestBuilderGetQueryParameters> | undefined) : Promise<TargetedManagedAppPolicyAssignment | undefined>;
    /**
     * Update the navigation property assignments in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TargetedManagedAppPolicyAssignment
     */
     patch(body: TargetedManagedAppPolicyAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TargetedManagedAppPolicyAssignment | undefined>;
    /**
     * Delete navigation property assignments for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TargetedManagedAppPolicyAssignmentItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property assignments in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: TargetedManagedAppPolicyAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
 */
export interface TargetedManagedAppPolicyAssignmentItemRequestBuilderGetQueryParameters {
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
const TargetedManagedAppPolicyAssignmentItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TargetedManagedAppPolicyAssignmentItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue,
        queryParametersMapper: TargetedManagedAppPolicyAssignmentItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTargetedManagedAppPolicyAssignment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const TargetedManagedAppPolicyAssignmentItemRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection%2Did}/assignments/{targetedManagedAppPolicyAssignment%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */