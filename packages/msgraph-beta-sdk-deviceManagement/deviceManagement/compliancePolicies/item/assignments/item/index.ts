/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDeviceManagementConfigurationPolicyAssignmentFromDiscriminatorValue, serializeDeviceManagementConfigurationPolicyAssignment, type DeviceManagementConfigurationPolicyAssignment } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.deviceManagementCompliancePolicy entity.
 */
export interface DeviceManagementConfigurationPolicyAssignmentItemRequestBuilder extends BaseRequestBuilder<DeviceManagementConfigurationPolicyAssignmentItemRequestBuilder> {
    /**
     * Delete navigation property assignments for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Policy assignments
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceManagementConfigurationPolicyAssignment>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DeviceManagementConfigurationPolicyAssignmentItemRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceManagementConfigurationPolicyAssignment | undefined>;
    /**
     * Update the navigation property assignments in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceManagementConfigurationPolicyAssignment>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: DeviceManagementConfigurationPolicyAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceManagementConfigurationPolicyAssignment | undefined>;
    /**
     * Delete navigation property assignments for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Policy assignments
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceManagementConfigurationPolicyAssignmentItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property assignments in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: DeviceManagementConfigurationPolicyAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Policy assignments
 */
export interface DeviceManagementConfigurationPolicyAssignmentItemRequestBuilderGetQueryParameters {
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
export const DeviceManagementConfigurationPolicyAssignmentItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy%2Did}/assignments/{deviceManagementConfigurationPolicyAssignment%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeviceManagementConfigurationPolicyAssignmentItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceManagementConfigurationPolicyAssignmentItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: DeviceManagementConfigurationPolicyAssignmentItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: DeviceManagementConfigurationPolicyAssignmentItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceManagementConfigurationPolicyAssignmentFromDiscriminatorValue,
        queryParametersMapper: DeviceManagementConfigurationPolicyAssignmentItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: DeviceManagementConfigurationPolicyAssignmentItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceManagementConfigurationPolicyAssignmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceManagementConfigurationPolicyAssignment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
