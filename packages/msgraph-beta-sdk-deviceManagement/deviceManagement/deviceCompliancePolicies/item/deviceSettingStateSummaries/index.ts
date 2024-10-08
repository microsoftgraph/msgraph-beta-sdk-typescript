/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSettingStateDeviceSummaryCollectionResponseFromDiscriminatorValue, createSettingStateDeviceSummaryFromDiscriminatorValue, serializeSettingStateDeviceSummary, type SettingStateDeviceSummary, type SettingStateDeviceSummaryCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { SettingStateDeviceSummaryItemRequestBuilderRequestsMetadata, type SettingStateDeviceSummaryItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceSettingStateSummaries property of the microsoft.graph.deviceCompliancePolicy entity.
 */
export interface DeviceSettingStateSummariesRequestBuilder extends BaseRequestBuilder<DeviceSettingStateSummariesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the deviceSettingStateSummaries property of the microsoft.graph.deviceCompliancePolicy entity.
     * @param settingStateDeviceSummaryId The unique identifier of settingStateDeviceSummary
     * @returns {SettingStateDeviceSummaryItemRequestBuilder}
     */
     bySettingStateDeviceSummaryId(settingStateDeviceSummaryId: string) : SettingStateDeviceSummaryItemRequestBuilder;
    /**
     * Compliance Setting State Device Summary
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SettingStateDeviceSummaryCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DeviceSettingStateSummariesRequestBuilderGetQueryParameters> | undefined) : Promise<SettingStateDeviceSummaryCollectionResponse | undefined>;
    /**
     * Create new navigation property to deviceSettingStateSummaries for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SettingStateDeviceSummary>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: SettingStateDeviceSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SettingStateDeviceSummary | undefined>;
    /**
     * Compliance Setting State Device Summary
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceSettingStateSummariesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to deviceSettingStateSummaries for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: SettingStateDeviceSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Compliance Setting State Device Summary
 */
export interface DeviceSettingStateSummariesRequestBuilderGetQueryParameters {
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
export const DeviceSettingStateSummariesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceCompliancePolicies/{deviceCompliancePolicy%2Did}/deviceSettingStateSummaries{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeviceSettingStateSummariesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const DeviceSettingStateSummariesRequestBuilderNavigationMetadata: Record<Exclude<keyof DeviceSettingStateSummariesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    bySettingStateDeviceSummaryId: {
        requestsMetadata: SettingStateDeviceSummaryItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["settingStateDeviceSummary%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceSettingStateSummariesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DeviceSettingStateSummariesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSettingStateDeviceSummaryCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DeviceSettingStateSummariesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: DeviceSettingStateSummariesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSettingStateDeviceSummaryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSettingStateDeviceSummary,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
