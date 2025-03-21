/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSecurityBaselineSettingStateFromDiscriminatorValue, serializeSecurityBaselineSettingState, type SecurityBaselineSettingState } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the settingStates property of the microsoft.graph.securityBaselineState entity.
 */
export interface SecurityBaselineSettingStateItemRequestBuilder extends BaseRequestBuilder<SecurityBaselineSettingStateItemRequestBuilder> {
    /**
     * Delete navigation property settingStates for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The security baseline state for different settings for a device
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SecurityBaselineSettingState>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<SecurityBaselineSettingStateItemRequestBuilderGetQueryParameters> | undefined) : Promise<SecurityBaselineSettingState | undefined>;
    /**
     * Update the navigation property settingStates in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SecurityBaselineSettingState>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: SecurityBaselineSettingState, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SecurityBaselineSettingState | undefined>;
    /**
     * Delete navigation property settingStates for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The security baseline state for different settings for a device
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SecurityBaselineSettingStateItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property settingStates in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: SecurityBaselineSettingState, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The security baseline state for different settings for a device
 */
export interface SecurityBaselineSettingStateItemRequestBuilderGetQueryParameters {
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
export const SecurityBaselineSettingStateItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/comanagedDevices/{managedDevice%2Did}/securityBaselineStates/{securityBaselineState%2Did}/settingStates/{securityBaselineSettingState%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SecurityBaselineSettingStateItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SecurityBaselineSettingStateItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: SecurityBaselineSettingStateItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: SecurityBaselineSettingStateItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSecurityBaselineSettingStateFromDiscriminatorValue,
        queryParametersMapper: SecurityBaselineSettingStateItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: SecurityBaselineSettingStateItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSecurityBaselineSettingStateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSecurityBaselineSettingState,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
