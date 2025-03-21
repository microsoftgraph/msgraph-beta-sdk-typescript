/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue, serializeDeviceComplianceScheduledActionForRule, type DeviceComplianceScheduledActionForRule } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ScheduledActionConfigurationsRequestBuilderNavigationMetadata, ScheduledActionConfigurationsRequestBuilderRequestsMetadata, type ScheduledActionConfigurationsRequestBuilder } from './scheduledActionConfigurations/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the scheduledActionsForRule property of the microsoft.graph.deviceCompliancePolicy entity.
 */
export interface DeviceComplianceScheduledActionForRuleItemRequestBuilder extends BaseRequestBuilder<DeviceComplianceScheduledActionForRuleItemRequestBuilder> {
    /**
     * Provides operations to manage the scheduledActionConfigurations property of the microsoft.graph.deviceComplianceScheduledActionForRule entity.
     */
    get scheduledActionConfigurations(): ScheduledActionConfigurationsRequestBuilder;
    /**
     * Delete navigation property scheduledActionsForRule for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The list of scheduled action per rule for this compliance policy. This is a required property when creating any individual per-platform compliance policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceComplianceScheduledActionForRule>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DeviceComplianceScheduledActionForRuleItemRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceComplianceScheduledActionForRule | undefined>;
    /**
     * Update the navigation property scheduledActionsForRule in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceComplianceScheduledActionForRule>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: DeviceComplianceScheduledActionForRule, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceComplianceScheduledActionForRule | undefined>;
    /**
     * Delete navigation property scheduledActionsForRule for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The list of scheduled action per rule for this compliance policy. This is a required property when creating any individual per-platform compliance policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceComplianceScheduledActionForRuleItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property scheduledActionsForRule in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: DeviceComplianceScheduledActionForRule, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of scheduled action per rule for this compliance policy. This is a required property when creating any individual per-platform compliance policies.
 */
export interface DeviceComplianceScheduledActionForRuleItemRequestBuilderGetQueryParameters {
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
export const DeviceComplianceScheduledActionForRuleItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeviceComplianceScheduledActionForRuleItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DeviceComplianceScheduledActionForRuleItemRequestBuilderNavigationMetadata: Record<Exclude<keyof DeviceComplianceScheduledActionForRuleItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    scheduledActionConfigurations: {
        requestsMetadata: ScheduledActionConfigurationsRequestBuilderRequestsMetadata,
        navigationMetadata: ScheduledActionConfigurationsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceComplianceScheduledActionForRuleItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: DeviceComplianceScheduledActionForRuleItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: DeviceComplianceScheduledActionForRuleItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue,
        queryParametersMapper: DeviceComplianceScheduledActionForRuleItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: DeviceComplianceScheduledActionForRuleItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceComplianceScheduledActionForRuleFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceComplianceScheduledActionForRule,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
