/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceManagementIntentDeviceSettingStateSummaryFromDiscriminatorValue, serializeDeviceManagementIntentDeviceSettingStateSummary, type DeviceManagementIntentDeviceSettingStateSummary } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceSettingStateSummaries property of the microsoft.graph.deviceManagementIntent entity.
 */
export interface DeviceManagementIntentDeviceSettingStateSummaryItemRequestBuilder extends BaseRequestBuilder<DeviceManagementIntentDeviceSettingStateSummaryItemRequestBuilder> {
    /**
     * Delete navigation property deviceSettingStateSummaries for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Collection of settings and their states and counts of devices that belong to corresponding state for all settings within the intent
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementIntentDeviceSettingStateSummary
     */
     get(requestConfiguration?: RequestConfiguration<DeviceManagementIntentDeviceSettingStateSummaryItemRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceManagementIntentDeviceSettingStateSummary | undefined>;
    /**
     * Update the navigation property deviceSettingStateSummaries in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementIntentDeviceSettingStateSummary
     */
     patch(body: DeviceManagementIntentDeviceSettingStateSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceManagementIntentDeviceSettingStateSummary | undefined>;
    /**
     * Delete navigation property deviceSettingStateSummaries for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Collection of settings and their states and counts of devices that belong to corresponding state for all settings within the intent
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceManagementIntentDeviceSettingStateSummaryItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property deviceSettingStateSummaries in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: DeviceManagementIntentDeviceSettingStateSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Collection of settings and their states and counts of devices that belong to corresponding state for all settings within the intent
 */
export interface DeviceManagementIntentDeviceSettingStateSummaryItemRequestBuilderGetQueryParameters {
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
const DeviceManagementIntentDeviceSettingStateSummaryItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceManagementIntentDeviceSettingStateSummaryItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createDeviceManagementIntentDeviceSettingStateSummaryFromDiscriminatorValue,
        queryParametersMapper: DeviceManagementIntentDeviceSettingStateSummaryItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceManagementIntentDeviceSettingStateSummaryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceManagementIntentDeviceSettingStateSummary,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const DeviceManagementIntentDeviceSettingStateSummaryItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/intents/{deviceManagementIntent%2Did}/deviceSettingStateSummaries/{deviceManagementIntentDeviceSettingStateSummary%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */