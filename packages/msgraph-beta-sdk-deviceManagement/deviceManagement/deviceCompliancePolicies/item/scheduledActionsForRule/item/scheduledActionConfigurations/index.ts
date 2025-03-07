/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDeviceComplianceActionItemCollectionResponseFromDiscriminatorValue, createDeviceComplianceActionItemFromDiscriminatorValue, serializeDeviceComplianceActionItem, type DeviceComplianceActionItem, type DeviceComplianceActionItemCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { DeviceComplianceActionItemItemRequestBuilderRequestsMetadata, type DeviceComplianceActionItemItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the scheduledActionConfigurations property of the microsoft.graph.deviceComplianceScheduledActionForRule entity.
 */
export interface ScheduledActionConfigurationsRequestBuilder extends BaseRequestBuilder<ScheduledActionConfigurationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the scheduledActionConfigurations property of the microsoft.graph.deviceComplianceScheduledActionForRule entity.
     * @param deviceComplianceActionItemId The unique identifier of deviceComplianceActionItem
     * @returns {DeviceComplianceActionItemItemRequestBuilder}
     */
     byDeviceComplianceActionItemId(deviceComplianceActionItemId: string) : DeviceComplianceActionItemItemRequestBuilder;
    /**
     * The list of scheduled action configurations for this compliance policy. Compliance policy must have one and only one block scheduled action.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceComplianceActionItemCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ScheduledActionConfigurationsRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceComplianceActionItemCollectionResponse | undefined>;
    /**
     * Create new navigation property to scheduledActionConfigurations for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceComplianceActionItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: DeviceComplianceActionItem, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceComplianceActionItem | undefined>;
    /**
     * The list of scheduled action configurations for this compliance policy. Compliance policy must have one and only one block scheduled action.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ScheduledActionConfigurationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to scheduledActionConfigurations for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DeviceComplianceActionItem, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of scheduled action configurations for this compliance policy. Compliance policy must have one and only one block scheduled action.
 */
export interface ScheduledActionConfigurationsRequestBuilderGetQueryParameters {
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
export const ScheduledActionConfigurationsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}/scheduledActionsForRule/{deviceComplianceScheduledActionForRule%2Did}/scheduledActionConfigurations{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ScheduledActionConfigurationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ScheduledActionConfigurationsRequestBuilderNavigationMetadata: Record<Exclude<keyof ScheduledActionConfigurationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDeviceComplianceActionItemId: {
        requestsMetadata: DeviceComplianceActionItemItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["deviceComplianceActionItem%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ScheduledActionConfigurationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ScheduledActionConfigurationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceComplianceActionItemCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ScheduledActionConfigurationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ScheduledActionConfigurationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceComplianceActionItemFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceComplianceActionItem,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
