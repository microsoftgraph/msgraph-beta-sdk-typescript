/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue, serializeManagedDeviceMobileAppConfigurationDeviceStatus, type ManagedDeviceMobileAppConfigurationDeviceStatus } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceStatuses property of the microsoft.graph.iosLobAppProvisioningConfiguration entity.
 */
export interface ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder extends BaseRequestBuilder<ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilder> {
    /**
     * Delete navigation property deviceStatuses for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The list of device installation states for this mobile app configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedDeviceMobileAppConfigurationDeviceStatus>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedDeviceMobileAppConfigurationDeviceStatus | undefined>;
    /**
     * Update the navigation property deviceStatuses in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedDeviceMobileAppConfigurationDeviceStatus>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ManagedDeviceMobileAppConfigurationDeviceStatus, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagedDeviceMobileAppConfigurationDeviceStatus | undefined>;
    /**
     * Delete navigation property deviceStatuses for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The list of device installation states for this mobile app configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property deviceStatuses in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ManagedDeviceMobileAppConfigurationDeviceStatus, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of device installation states for this mobile app configuration.
 */
export interface ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderGetQueryParameters {
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
export const ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration%2Did}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue,
        queryParametersMapper: ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ManagedDeviceMobileAppConfigurationDeviceStatusItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedDeviceMobileAppConfigurationDeviceStatusFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagedDeviceMobileAppConfigurationDeviceStatus,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
