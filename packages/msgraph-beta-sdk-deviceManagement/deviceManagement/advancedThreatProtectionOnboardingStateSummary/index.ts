/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAdvancedThreatProtectionOnboardingStateSummaryFromDiscriminatorValue, serializeAdvancedThreatProtectionOnboardingStateSummary, type AdvancedThreatProtectionOnboardingStateSummary } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilderNavigationMetadata, AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilderRequestsMetadata, type AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilder } from './advancedThreatProtectionOnboardingDeviceSettingStates/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the advancedThreatProtectionOnboardingStateSummary property of the microsoft.graph.deviceManagement entity.
 */
export interface AdvancedThreatProtectionOnboardingStateSummaryRequestBuilder extends BaseRequestBuilder<AdvancedThreatProtectionOnboardingStateSummaryRequestBuilder> {
    /**
     * Provides operations to manage the advancedThreatProtectionOnboardingDeviceSettingStates property of the microsoft.graph.advancedThreatProtectionOnboardingStateSummary entity.
     */
    get advancedThreatProtectionOnboardingDeviceSettingStates(): AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilder;
    /**
     * Delete navigation property advancedThreatProtectionOnboardingStateSummary for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The summary state of ATP onboarding state for this account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AdvancedThreatProtectionOnboardingStateSummary>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AdvancedThreatProtectionOnboardingStateSummaryRequestBuilderGetQueryParameters> | undefined) : Promise<AdvancedThreatProtectionOnboardingStateSummary | undefined>;
    /**
     * Update the navigation property advancedThreatProtectionOnboardingStateSummary in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AdvancedThreatProtectionOnboardingStateSummary>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: AdvancedThreatProtectionOnboardingStateSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AdvancedThreatProtectionOnboardingStateSummary | undefined>;
    /**
     * Delete navigation property advancedThreatProtectionOnboardingStateSummary for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The summary state of ATP onboarding state for this account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AdvancedThreatProtectionOnboardingStateSummaryRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property advancedThreatProtectionOnboardingStateSummary in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: AdvancedThreatProtectionOnboardingStateSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The summary state of ATP onboarding state for this account.
 */
export interface AdvancedThreatProtectionOnboardingStateSummaryRequestBuilderGetQueryParameters {
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
export const AdvancedThreatProtectionOnboardingStateSummaryRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/advancedThreatProtectionOnboardingStateSummary{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AdvancedThreatProtectionOnboardingStateSummaryRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AdvancedThreatProtectionOnboardingStateSummaryRequestBuilderNavigationMetadata: Record<Exclude<keyof AdvancedThreatProtectionOnboardingStateSummaryRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    advancedThreatProtectionOnboardingDeviceSettingStates: {
        requestsMetadata: AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilderRequestsMetadata,
        navigationMetadata: AdvancedThreatProtectionOnboardingDeviceSettingStatesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AdvancedThreatProtectionOnboardingStateSummaryRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AdvancedThreatProtectionOnboardingStateSummaryRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AdvancedThreatProtectionOnboardingStateSummaryRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAdvancedThreatProtectionOnboardingStateSummaryFromDiscriminatorValue,
        queryParametersMapper: AdvancedThreatProtectionOnboardingStateSummaryRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AdvancedThreatProtectionOnboardingStateSummaryRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAdvancedThreatProtectionOnboardingStateSummaryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAdvancedThreatProtectionOnboardingStateSummary,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
