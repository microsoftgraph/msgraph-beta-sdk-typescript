/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceHealthScriptDeviceStateFromDiscriminatorValue, serializeDeviceHealthScriptDeviceState, type DeviceHealthScriptDeviceState } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { ManagedDeviceRequestBuilderRequestsMetadata, ManagedDeviceRequestBuilderUriTemplate, type ManagedDeviceRequestBuilder } from './managedDevice/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceRunStates property of the microsoft.graph.deviceHealthScript entity.
 */
export interface DeviceHealthScriptDeviceStateItemRequestBuilder extends BaseRequestBuilder<DeviceHealthScriptDeviceStateItemRequestBuilder> {
    /**
     * Provides operations to manage the managedDevice property of the microsoft.graph.deviceHealthScriptDeviceState entity.
     */
    get managedDevice(): ManagedDeviceRequestBuilder;
    /**
     * Delete navigation property deviceRunStates for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * List of run states for the device health script across all devices
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceHealthScriptDeviceState
     */
     get(requestConfiguration?: RequestConfiguration<DeviceHealthScriptDeviceStateItemRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceHealthScriptDeviceState | undefined>;
    /**
     * Update the navigation property deviceRunStates in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceHealthScriptDeviceState
     */
     patch(body: DeviceHealthScriptDeviceState, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceHealthScriptDeviceState | undefined>;
    /**
     * Delete navigation property deviceRunStates for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * List of run states for the device health script across all devices
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceHealthScriptDeviceStateItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property deviceRunStates in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: DeviceHealthScriptDeviceState, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List of run states for the device health script across all devices
 */
export interface DeviceHealthScriptDeviceStateItemRequestBuilderGetQueryParameters {
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
const DeviceHealthScriptDeviceStateItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DeviceHealthScriptDeviceStateItemRequestBuilderNavigationMetadata: Record<Exclude<keyof DeviceHealthScriptDeviceStateItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    managedDevice: {
        uriTemplate: ManagedDeviceRequestBuilderUriTemplate,
        requestsMetadata: ManagedDeviceRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceHealthScriptDeviceStateItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createDeviceHealthScriptDeviceStateFromDiscriminatorValue,
        queryParametersMapper: DeviceHealthScriptDeviceStateItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceHealthScriptDeviceStateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceHealthScriptDeviceState,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const DeviceHealthScriptDeviceStateItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceHealthScripts/{deviceHealthScript%2Did}/deviceRunStates/{deviceHealthScriptDeviceState%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */