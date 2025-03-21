/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWindowsAutopilotDeploymentProfileFromDiscriminatorValue, type WindowsAutopilotDeploymentProfile } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deploymentProfile property of the microsoft.graph.windowsAutopilotDeviceIdentity entity.
 */
export interface DeploymentProfileRequestBuilder extends BaseRequestBuilder<DeploymentProfileRequestBuilder> {
    /**
     * Deployment profile currently assigned to the Windows autopilot device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WindowsAutopilotDeploymentProfile>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DeploymentProfileRequestBuilderGetQueryParameters> | undefined) : Promise<WindowsAutopilotDeploymentProfile | undefined>;
    /**
     * Deployment profile currently assigned to the Windows autopilot device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeploymentProfileRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Deployment profile currently assigned to the Windows autopilot device.
 */
export interface DeploymentProfileRequestBuilderGetQueryParameters {
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
export const DeploymentProfileRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile%2Did}/assignedDevices/{windowsAutopilotDeviceIdentity%2Did}/deploymentProfile{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeploymentProfileRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeploymentProfileRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DeploymentProfileRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWindowsAutopilotDeploymentProfileFromDiscriminatorValue,
        queryParametersMapper: DeploymentProfileRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
