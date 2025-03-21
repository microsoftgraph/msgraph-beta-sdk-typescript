/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDeviceManagementConfigurationSettingTemplateFromDiscriminatorValue, serializeDeviceManagementConfigurationSettingTemplate, type DeviceManagementConfigurationSettingTemplate } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { SettingDefinitionsRequestBuilderNavigationMetadata, SettingDefinitionsRequestBuilderRequestsMetadata, type SettingDefinitionsRequestBuilder } from './settingDefinitions/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the templateSettings property of the microsoft.graph.deviceManagement entity.
 */
export interface DeviceManagementConfigurationSettingTemplateItemRequestBuilder extends BaseRequestBuilder<DeviceManagementConfigurationSettingTemplateItemRequestBuilder> {
    /**
     * Provides operations to manage the settingDefinitions property of the microsoft.graph.deviceManagementConfigurationSettingTemplate entity.
     */
    get settingDefinitions(): SettingDefinitionsRequestBuilder;
    /**
     * Delete navigation property templateSettings for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * List of all TemplateSettings
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceManagementConfigurationSettingTemplate>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DeviceManagementConfigurationSettingTemplateItemRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceManagementConfigurationSettingTemplate | undefined>;
    /**
     * Update the navigation property templateSettings in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceManagementConfigurationSettingTemplate>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: DeviceManagementConfigurationSettingTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceManagementConfigurationSettingTemplate | undefined>;
    /**
     * Delete navigation property templateSettings for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * List of all TemplateSettings
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceManagementConfigurationSettingTemplateItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property templateSettings in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: DeviceManagementConfigurationSettingTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List of all TemplateSettings
 */
export interface DeviceManagementConfigurationSettingTemplateItemRequestBuilderGetQueryParameters {
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
export const DeviceManagementConfigurationSettingTemplateItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeviceManagementConfigurationSettingTemplateItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DeviceManagementConfigurationSettingTemplateItemRequestBuilderNavigationMetadata: Record<Exclude<keyof DeviceManagementConfigurationSettingTemplateItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    settingDefinitions: {
        requestsMetadata: SettingDefinitionsRequestBuilderRequestsMetadata,
        navigationMetadata: SettingDefinitionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceManagementConfigurationSettingTemplateItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: DeviceManagementConfigurationSettingTemplateItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: DeviceManagementConfigurationSettingTemplateItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceManagementConfigurationSettingTemplateFromDiscriminatorValue,
        queryParametersMapper: DeviceManagementConfigurationSettingTemplateItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: DeviceManagementConfigurationSettingTemplateItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceManagementConfigurationSettingTemplateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceManagementConfigurationSettingTemplate,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
