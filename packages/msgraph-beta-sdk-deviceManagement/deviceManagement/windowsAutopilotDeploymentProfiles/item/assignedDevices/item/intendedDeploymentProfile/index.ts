/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createWindowsAutopilotDeploymentProfileFromDiscriminatorValue, type WindowsAutopilotDeploymentProfile } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the intendedDeploymentProfile property of the microsoft.graph.windowsAutopilotDeviceIdentity entity.
 */
export interface IntendedDeploymentProfileRequestBuilder extends BaseRequestBuilder<IntendedDeploymentProfileRequestBuilder> {
    /**
     * Deployment profile intended to be assigned to the Windows autopilot device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsAutopilotDeploymentProfile
     */
     get(requestConfiguration?: RequestConfiguration<IntendedDeploymentProfileRequestBuilderGetQueryParameters> | undefined) : Promise<WindowsAutopilotDeploymentProfile | undefined>;
    /**
     * Deployment profile intended to be assigned to the Windows autopilot device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<IntendedDeploymentProfileRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Deployment profile intended to be assigned to the Windows autopilot device.
 */
export interface IntendedDeploymentProfileRequestBuilderGetQueryParameters {
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
const IntendedDeploymentProfileRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const IntendedDeploymentProfileRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWindowsAutopilotDeploymentProfileFromDiscriminatorValue,
        queryParametersMapper: IntendedDeploymentProfileRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const IntendedDeploymentProfileRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile%2Did}/assignedDevices/{windowsAutopilotDeviceIdentity%2Did}/intendedDeploymentProfile{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */