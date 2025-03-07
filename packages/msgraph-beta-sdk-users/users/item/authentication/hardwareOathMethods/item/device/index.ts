/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createHardwareOathTokenAuthenticationMethodDeviceFromDiscriminatorValue, serializeHardwareOathTokenAuthenticationMethodDevice, type HardwareOathTokenAuthenticationMethodDevice } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AssignToRequestBuilderNavigationMetadata, AssignToRequestBuilderRequestsMetadata, type AssignToRequestBuilder } from './assignTo/index.js';
// @ts-ignore
import { HardwareOathDevicesRequestBuilderNavigationMetadata, HardwareOathDevicesRequestBuilderRequestsMetadata, type HardwareOathDevicesRequestBuilder } from './hardwareOathDevices/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the device property of the microsoft.graph.hardwareOathAuthenticationMethod entity.
 */
export interface DeviceRequestBuilder extends BaseRequestBuilder<DeviceRequestBuilder> {
    /**
     * Provides operations to manage the assignTo property of the microsoft.graph.hardwareOathTokenAuthenticationMethodDevice entity.
     */
    get assignTo(): AssignToRequestBuilder;
    /**
     * Provides operations to manage the hardwareOathDevices property of the microsoft.graph.authenticationMethodDevice entity.
     */
    get hardwareOathDevices(): HardwareOathDevicesRequestBuilder;
    /**
     * Delete navigation property device for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Exposes the hardware OATH method in the directory.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HardwareOathTokenAuthenticationMethodDevice>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DeviceRequestBuilderGetQueryParameters> | undefined) : Promise<HardwareOathTokenAuthenticationMethodDevice | undefined>;
    /**
     * Update the navigation property device in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HardwareOathTokenAuthenticationMethodDevice>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: HardwareOathTokenAuthenticationMethodDevice, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<HardwareOathTokenAuthenticationMethodDevice | undefined>;
    /**
     * Delete navigation property device for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Exposes the hardware OATH method in the directory.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property device in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: HardwareOathTokenAuthenticationMethodDevice, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Exposes the hardware OATH method in the directory.
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
export const DeviceRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod%2Did}/device{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeviceRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DeviceRequestBuilderNavigationMetadata: Record<Exclude<keyof DeviceRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    assignTo: {
        requestsMetadata: AssignToRequestBuilderRequestsMetadata,
        navigationMetadata: AssignToRequestBuilderNavigationMetadata,
    },
    hardwareOathDevices: {
        requestsMetadata: HardwareOathDevicesRequestBuilderRequestsMetadata,
        navigationMetadata: HardwareOathDevicesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: DeviceRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: DeviceRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHardwareOathTokenAuthenticationMethodDeviceFromDiscriminatorValue,
        queryParametersMapper: DeviceRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: DeviceRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHardwareOathTokenAuthenticationMethodDeviceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeHardwareOathTokenAuthenticationMethodDevice,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
