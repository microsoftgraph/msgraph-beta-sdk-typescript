/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createSecurityBaselineStateFromDiscriminatorValue, serializeSecurityBaselineState, type SecurityBaselineState } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { SettingStatesRequestBuilderNavigationMetadata, SettingStatesRequestBuilderRequestsMetadata, SettingStatesRequestBuilderUriTemplate, type SettingStatesRequestBuilder } from './settingStates/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the securityBaselineStates property of the microsoft.graph.managedDevice entity.
 */
export interface SecurityBaselineStateItemRequestBuilder extends BaseRequestBuilder<SecurityBaselineStateItemRequestBuilder> {
    /**
     * Provides operations to manage the settingStates property of the microsoft.graph.securityBaselineState entity.
     */
    get settingStates(): SettingStatesRequestBuilder;
    /**
     * Delete navigation property securityBaselineStates for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Security baseline states for this device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SecurityBaselineState
     */
     get(requestConfiguration?: RequestConfiguration<SecurityBaselineStateItemRequestBuilderGetQueryParameters> | undefined) : Promise<SecurityBaselineState | undefined>;
    /**
     * Update the navigation property securityBaselineStates in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SecurityBaselineState
     */
     patch(body: SecurityBaselineState, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SecurityBaselineState | undefined>;
    /**
     * Delete navigation property securityBaselineStates for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Security baseline states for this device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SecurityBaselineStateItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property securityBaselineStates in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: SecurityBaselineState, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Security baseline states for this device.
 */
export interface SecurityBaselineStateItemRequestBuilderGetQueryParameters {
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
const SecurityBaselineStateItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const SecurityBaselineStateItemRequestBuilderNavigationMetadata: Record<Exclude<keyof SecurityBaselineStateItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    settingStates: {
        uriTemplate: SettingStatesRequestBuilderUriTemplate,
        requestsMetadata: SettingStatesRequestBuilderRequestsMetadata,
        navigationMetadata: SettingStatesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SecurityBaselineStateItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createSecurityBaselineStateFromDiscriminatorValue,
        queryParametersMapper: SecurityBaselineStateItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSecurityBaselineStateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSecurityBaselineState,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const SecurityBaselineStateItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/managedDevices/{managedDevice%2Did}/securityBaselineStates/{securityBaselineState%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */