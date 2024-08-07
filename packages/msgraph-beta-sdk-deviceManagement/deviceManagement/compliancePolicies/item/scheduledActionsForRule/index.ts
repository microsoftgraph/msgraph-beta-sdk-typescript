/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDeviceManagementComplianceScheduledActionForRuleCollectionResponseFromDiscriminatorValue, createDeviceManagementComplianceScheduledActionForRuleFromDiscriminatorValue, serializeDeviceManagementComplianceScheduledActionForRule, type DeviceManagementComplianceScheduledActionForRule, type DeviceManagementComplianceScheduledActionForRuleCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { DeviceManagementComplianceScheduledActionForRuleItemRequestBuilderNavigationMetadata, DeviceManagementComplianceScheduledActionForRuleItemRequestBuilderRequestsMetadata, type DeviceManagementComplianceScheduledActionForRuleItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the scheduledActionsForRule property of the microsoft.graph.deviceManagementCompliancePolicy entity.
 */
export interface ScheduledActionsForRuleRequestBuilder extends BaseRequestBuilder<ScheduledActionsForRuleRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the scheduledActionsForRule property of the microsoft.graph.deviceManagementCompliancePolicy entity.
     * @param deviceManagementComplianceScheduledActionForRuleId The unique identifier of deviceManagementComplianceScheduledActionForRule
     * @returns {DeviceManagementComplianceScheduledActionForRuleItemRequestBuilder}
     */
     byDeviceManagementComplianceScheduledActionForRuleId(deviceManagementComplianceScheduledActionForRuleId: string) : DeviceManagementComplianceScheduledActionForRuleItemRequestBuilder;
    /**
     * The list of scheduled action for this rule
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceManagementComplianceScheduledActionForRuleCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ScheduledActionsForRuleRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceManagementComplianceScheduledActionForRuleCollectionResponse | undefined>;
    /**
     * Create new navigation property to scheduledActionsForRule for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceManagementComplianceScheduledActionForRule>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: DeviceManagementComplianceScheduledActionForRule, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceManagementComplianceScheduledActionForRule | undefined>;
    /**
     * The list of scheduled action for this rule
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ScheduledActionsForRuleRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to scheduledActionsForRule for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DeviceManagementComplianceScheduledActionForRule, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of scheduled action for this rule
 */
export interface ScheduledActionsForRuleRequestBuilderGetQueryParameters {
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
export const ScheduledActionsForRuleRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/compliancePolicies/{deviceManagementCompliancePolicy%2Did}/scheduledActionsForRule{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ScheduledActionsForRuleRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ScheduledActionsForRuleRequestBuilderNavigationMetadata: Record<Exclude<keyof ScheduledActionsForRuleRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDeviceManagementComplianceScheduledActionForRuleId: {
        requestsMetadata: DeviceManagementComplianceScheduledActionForRuleItemRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceManagementComplianceScheduledActionForRuleItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["deviceManagementComplianceScheduledActionForRule%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ScheduledActionsForRuleRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ScheduledActionsForRuleRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceManagementComplianceScheduledActionForRuleCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ScheduledActionsForRuleRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ScheduledActionsForRuleRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceManagementComplianceScheduledActionForRuleFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceManagementComplianceScheduledActionForRule,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
