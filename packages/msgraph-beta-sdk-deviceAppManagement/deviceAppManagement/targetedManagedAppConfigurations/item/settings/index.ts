/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceManagementConfigurationSettingCollectionResponseFromDiscriminatorValue, createDeviceManagementConfigurationSettingFromDiscriminatorValue, serializeDeviceManagementConfigurationSetting, type DeviceManagementConfigurationSetting, type DeviceManagementConfigurationSettingCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { DeviceManagementConfigurationSettingItemRequestBuilderNavigationMetadata, DeviceManagementConfigurationSettingItemRequestBuilderRequestsMetadata, DeviceManagementConfigurationSettingItemRequestBuilderUriTemplate, type DeviceManagementConfigurationSettingItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the settings property of the microsoft.graph.managedAppConfiguration entity.
 */
export interface SettingsRequestBuilder extends BaseRequestBuilder<SettingsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the settings property of the microsoft.graph.managedAppConfiguration entity.
     * @param deviceManagementConfigurationSettingId The unique identifier of deviceManagementConfigurationSetting
     * @returns a DeviceManagementConfigurationSettingItemRequestBuilder
     */
     byDeviceManagementConfigurationSettingId(deviceManagementConfigurationSettingId: string) : DeviceManagementConfigurationSettingItemRequestBuilder;
    /**
     * List of settings contained in this App Configuration policy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementConfigurationSettingCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<SettingsRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceManagementConfigurationSettingCollectionResponse | undefined>;
    /**
     * Create new navigation property to settings for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementConfigurationSetting
     */
     post(body: DeviceManagementConfigurationSetting, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceManagementConfigurationSetting | undefined>;
    /**
     * List of settings contained in this App Configuration policy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SettingsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to settings for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: DeviceManagementConfigurationSetting, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List of settings contained in this App Configuration policy
 */
export interface SettingsRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SettingsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const SettingsRequestBuilderNavigationMetadata: Record<Exclude<keyof SettingsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDeviceManagementConfigurationSettingId: {
        uriTemplate: DeviceManagementConfigurationSettingItemRequestBuilderUriTemplate,
        requestsMetadata: DeviceManagementConfigurationSettingItemRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceManagementConfigurationSettingItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["deviceManagementConfigurationSetting%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SettingsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceManagementConfigurationSettingCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: SettingsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceManagementConfigurationSettingFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceManagementConfigurationSetting,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const SettingsRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration%2Did}/settings{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */