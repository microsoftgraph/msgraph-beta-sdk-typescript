/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDeviceManagementIntentUserStateSummaryFromDiscriminatorValue, serializeDeviceManagementIntentUserStateSummary, type DeviceManagementIntentUserStateSummary } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userStateSummary property of the microsoft.graph.deviceManagementIntent entity.
 */
export interface UserStateSummaryRequestBuilder extends BaseRequestBuilder<UserStateSummaryRequestBuilder> {
    /**
     * Delete navigation property userStateSummary for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A summary of user states and counts of users that belong to corresponding state for all users that the intent is applied to
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceManagementIntentUserStateSummary>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<UserStateSummaryRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceManagementIntentUserStateSummary | undefined>;
    /**
     * Update the navigation property userStateSummary in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DeviceManagementIntentUserStateSummary>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: DeviceManagementIntentUserStateSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceManagementIntentUserStateSummary | undefined>;
    /**
     * Delete navigation property userStateSummary for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A summary of user states and counts of users that belong to corresponding state for all users that the intent is applied to
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserStateSummaryRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property userStateSummary in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: DeviceManagementIntentUserStateSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A summary of user states and counts of users that belong to corresponding state for all users that the intent is applied to
 */
export interface UserStateSummaryRequestBuilderGetQueryParameters {
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
export const UserStateSummaryRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/intents/{deviceManagementIntent%2Did}/userStateSummary{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UserStateSummaryRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserStateSummaryRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: UserStateSummaryRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: UserStateSummaryRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceManagementIntentUserStateSummaryFromDiscriminatorValue,
        queryParametersMapper: UserStateSummaryRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: UserStateSummaryRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDeviceManagementIntentUserStateSummaryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceManagementIntentUserStateSummary,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
