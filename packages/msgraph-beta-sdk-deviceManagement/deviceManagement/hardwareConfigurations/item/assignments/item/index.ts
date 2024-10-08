/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createHardwareConfigurationAssignmentFromDiscriminatorValue, serializeHardwareConfigurationAssignment, type HardwareConfigurationAssignment } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.hardwareConfiguration entity.
 */
export interface HardwareConfigurationAssignmentItemRequestBuilder extends BaseRequestBuilder<HardwareConfigurationAssignmentItemRequestBuilder> {
    /**
     * Delete navigation property assignments for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A list of the Entra user group ids that hardware configuration will be applied to. Only security groups and Office 365 Groups are supported. Optional.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HardwareConfigurationAssignment>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<HardwareConfigurationAssignmentItemRequestBuilderGetQueryParameters> | undefined) : Promise<HardwareConfigurationAssignment | undefined>;
    /**
     * Update the navigation property assignments in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HardwareConfigurationAssignment>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: HardwareConfigurationAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<HardwareConfigurationAssignment | undefined>;
    /**
     * Delete navigation property assignments for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A list of the Entra user group ids that hardware configuration will be applied to. Only security groups and Office 365 Groups are supported. Optional.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HardwareConfigurationAssignmentItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property assignments in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: HardwareConfigurationAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A list of the Entra user group ids that hardware configuration will be applied to. Only security groups and Office 365 Groups are supported. Optional.
 */
export interface HardwareConfigurationAssignmentItemRequestBuilderGetQueryParameters {
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
export const HardwareConfigurationAssignmentItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/hardwareConfigurations/{hardwareConfiguration%2Did}/assignments/{hardwareConfigurationAssignment%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const HardwareConfigurationAssignmentItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HardwareConfigurationAssignmentItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: HardwareConfigurationAssignmentItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: HardwareConfigurationAssignmentItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHardwareConfigurationAssignmentFromDiscriminatorValue,
        queryParametersMapper: HardwareConfigurationAssignmentItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: HardwareConfigurationAssignmentItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHardwareConfigurationAssignmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeHardwareConfigurationAssignment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
