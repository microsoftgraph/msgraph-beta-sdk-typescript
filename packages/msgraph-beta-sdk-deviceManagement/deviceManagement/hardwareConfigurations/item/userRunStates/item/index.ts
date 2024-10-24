/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createHardwareConfigurationUserStateFromDiscriminatorValue, serializeHardwareConfigurationUserState, type HardwareConfigurationUserState } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userRunStates property of the microsoft.graph.hardwareConfiguration entity.
 */
export interface HardwareConfigurationUserStateItemRequestBuilder extends BaseRequestBuilder<HardwareConfigurationUserStateItemRequestBuilder> {
    /**
     * Delete navigation property userRunStates for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * List of run states for the hardware configuration across all users. Read-Only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HardwareConfigurationUserState>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<HardwareConfigurationUserStateItemRequestBuilderGetQueryParameters> | undefined) : Promise<HardwareConfigurationUserState | undefined>;
    /**
     * Update the navigation property userRunStates in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HardwareConfigurationUserState>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: HardwareConfigurationUserState, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<HardwareConfigurationUserState | undefined>;
    /**
     * Delete navigation property userRunStates for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * List of run states for the hardware configuration across all users. Read-Only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HardwareConfigurationUserStateItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property userRunStates in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: HardwareConfigurationUserState, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List of run states for the hardware configuration across all users. Read-Only.
 */
export interface HardwareConfigurationUserStateItemRequestBuilderGetQueryParameters {
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
export const HardwareConfigurationUserStateItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/hardwareConfigurations/{hardwareConfiguration%2Did}/userRunStates/{hardwareConfigurationUserState%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const HardwareConfigurationUserStateItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HardwareConfigurationUserStateItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: HardwareConfigurationUserStateItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: HardwareConfigurationUserStateItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHardwareConfigurationUserStateFromDiscriminatorValue,
        queryParametersMapper: HardwareConfigurationUserStateItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: HardwareConfigurationUserStateItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHardwareConfigurationUserStateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeHardwareConfigurationUserState,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
