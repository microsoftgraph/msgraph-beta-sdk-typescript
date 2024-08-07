/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDeviceCompliancePolicySettingStateSummaryCollectionResponseFromDiscriminatorValue, createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue, serializeDeviceCompliancePolicySettingStateSummary, type DeviceCompliancePolicySettingStateSummary, type DeviceCompliancePolicySettingStateSummaryCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { DeviceCompliancePolicySettingStateSummaryItemRequestBuilderNavigationMetadata, DeviceCompliancePolicySettingStateSummaryItemRequestBuilderRequestsMetadata, type DeviceCompliancePolicySettingStateSummaryItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceCompliancePolicySettingStateSummaries property of the microsoft.graph.deviceManagement entity.
 */
export interface DeviceCompliancePolicySettingStateSummariesRequestBuilder extends BaseRequestBuilder<DeviceCompliancePolicySettingStateSummariesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the deviceCompliancePolicySettingStateSummaries property of the microsoft.graph.deviceManagement entity.
     * @param deviceCompliancePolicySettingStateSummaryId The unique identifier of deviceCompliancePolicySettingStateSummary
     * @returns {DeviceCompliancePolicySettingStateSummaryItemRequestBuilder}
     */
     byDeviceCompliancePolicySettingStateSummaryId(deviceCompliancePolicySettingStateSummaryId: string) : DeviceCompliancePolicySettingStateSummaryItemRequestBuilder;
    /**
     * The summary states of compliance policy settings for this account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceCompliancePolicySettingStateSummaryCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DeviceCompliancePolicySettingStateSummariesRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceCompliancePolicySettingStateSummaryCollectionResponse | undefined>;
    /**
     * Create new navigation property to deviceCompliancePolicySettingStateSummaries for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceCompliancePolicySettingStateSummary>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: DeviceCompliancePolicySettingStateSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceCompliancePolicySettingStateSummary | undefined>;
    /**
     * The summary states of compliance policy settings for this account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceCompliancePolicySettingStateSummariesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to deviceCompliancePolicySettingStateSummaries for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DeviceCompliancePolicySettingStateSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The summary states of compliance policy settings for this account.
 */
export interface DeviceCompliancePolicySettingStateSummariesRequestBuilderGetQueryParameters {
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
export const DeviceCompliancePolicySettingStateSummariesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceCompliancePolicySettingStateSummaries{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DeviceCompliancePolicySettingStateSummariesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const DeviceCompliancePolicySettingStateSummariesRequestBuilderNavigationMetadata: Record<Exclude<keyof DeviceCompliancePolicySettingStateSummariesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDeviceCompliancePolicySettingStateSummaryId: {
        requestsMetadata: DeviceCompliancePolicySettingStateSummaryItemRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceCompliancePolicySettingStateSummaryItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["deviceCompliancePolicySettingStateSummary%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceCompliancePolicySettingStateSummariesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DeviceCompliancePolicySettingStateSummariesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceCompliancePolicySettingStateSummaryCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DeviceCompliancePolicySettingStateSummariesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: DeviceCompliancePolicySettingStateSummariesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceCompliancePolicySettingStateSummaryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceCompliancePolicySettingStateSummary,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
