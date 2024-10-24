/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDeviceFromDiscriminatorValue, type Device } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the device property of the microsoft.graph.passwordlessMicrosoftAuthenticatorAuthenticationMethod entity.
 */
export interface DeviceRequestBuilder extends BaseRequestBuilder<DeviceRequestBuilder> {
    /**
     * Get device from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Device>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     get(requestConfiguration?: RequestConfiguration<DeviceRequestBuilderGetQueryParameters> | undefined) : Promise<Device | undefined>;
    /**
     * Get device from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get device from users
 */
export interface DeviceRequestBuilderGetQueryParameters {
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
export const DeviceRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/authentication/passwordlessMicrosoftAuthenticatorMethods/{passwordlessMicrosoftAuthenticatorAuthenticationMethod%2Did}/device{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeviceRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DeviceRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceFromDiscriminatorValue,
        queryParametersMapper: DeviceRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
