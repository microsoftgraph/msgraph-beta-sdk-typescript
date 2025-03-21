/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDeviceConfigurationDeviceStatusCollectionResponseFromDiscriminatorValue, createDeviceConfigurationDeviceStatusFromDiscriminatorValue, serializeDeviceConfigurationDeviceStatus, type DeviceConfigurationDeviceStatus, type DeviceConfigurationDeviceStatusCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { DeviceConfigurationDeviceStatusItemRequestBuilderRequestsMetadata, type DeviceConfigurationDeviceStatusItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceStatuses property of the microsoft.graph.deviceConfiguration entity.
 */
export interface DeviceStatusesRequestBuilder extends BaseRequestBuilder<DeviceStatusesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the deviceStatuses property of the microsoft.graph.deviceConfiguration entity.
     * @param deviceConfigurationDeviceStatusId The unique identifier of deviceConfigurationDeviceStatus
     * @returns {DeviceConfigurationDeviceStatusItemRequestBuilder}
     */
     byDeviceConfigurationDeviceStatusId(deviceConfigurationDeviceStatusId: string) : DeviceConfigurationDeviceStatusItemRequestBuilder;
    /**
     * Device configuration installation status by device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceConfigurationDeviceStatusCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DeviceStatusesRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceConfigurationDeviceStatusCollectionResponse | undefined>;
    /**
     * Create new navigation property to deviceStatuses for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceConfigurationDeviceStatus>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: DeviceConfigurationDeviceStatus, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceConfigurationDeviceStatus | undefined>;
    /**
     * Device configuration installation status by device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceStatusesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to deviceStatuses for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DeviceConfigurationDeviceStatus, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Device configuration installation status by device.
 */
export interface DeviceStatusesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const DeviceStatusesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/deviceStatuses{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeviceStatusesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DeviceStatusesRequestBuilderNavigationMetadata: Record<Exclude<keyof DeviceStatusesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDeviceConfigurationDeviceStatusId: {
        requestsMetadata: DeviceConfigurationDeviceStatusItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["deviceConfigurationDeviceStatus%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceStatusesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DeviceStatusesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceConfigurationDeviceStatusCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DeviceStatusesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: DeviceStatusesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceConfigurationDeviceStatusFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceConfigurationDeviceStatus,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
