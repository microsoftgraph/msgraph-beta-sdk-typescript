/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceManagementConfigurationSettingTemplateFromDiscriminatorValue, serializeDeviceManagementConfigurationSettingTemplate, type DeviceManagementConfigurationSettingTemplate } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { SettingDefinitionsRequestBuilderNavigationMetadata, SettingDefinitionsRequestBuilderRequestsMetadata, SettingDefinitionsRequestBuilderUriTemplate, type SettingDefinitionsRequestBuilder } from './settingDefinitions/';
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
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * List of all TemplateSettings
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementConfigurationSettingTemplate
     */
     get(requestConfiguration?: RequestConfiguration<DeviceManagementConfigurationSettingTemplateItemRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceManagementConfigurationSettingTemplate | undefined>;
    /**
     * Update the navigation property templateSettings in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceManagementConfigurationSettingTemplate
     */
     patch(body: DeviceManagementConfigurationSettingTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceManagementConfigurationSettingTemplate | undefined>;
    /**
     * Delete navigation property templateSettings for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * List of all TemplateSettings
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceManagementConfigurationSettingTemplateItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property templateSettings in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
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
        uriTemplate: SettingDefinitionsRequestBuilderUriTemplate,
        requestsMetadata: SettingDefinitionsRequestBuilderRequestsMetadata,
        navigationMetadata: SettingDefinitionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceManagementConfigurationSettingTemplateItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createDeviceManagementConfigurationSettingTemplateFromDiscriminatorValue,
        queryParametersMapper: DeviceManagementConfigurationSettingTemplateItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceManagementConfigurationSettingTemplateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceManagementConfigurationSettingTemplate,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const DeviceManagementConfigurationSettingTemplateItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/templateSettings/{deviceManagementConfigurationSettingTemplate%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */