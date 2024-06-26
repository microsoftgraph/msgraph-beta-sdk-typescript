/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTeamworkDeviceHealthFromDiscriminatorValue, serializeTeamworkDeviceHealth, type TeamworkDeviceHealth } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the health property of the microsoft.graph.teamworkDevice entity.
 */
export interface HealthRequestBuilder extends BaseRequestBuilder<HealthRequestBuilder> {
    /**
     * Delete navigation property health for teamwork
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get the health details of a Microsoft Teams-enabled device. Device health is calculated based on the device configuration and other device parameters.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TeamworkDeviceHealth>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/teamworkdevicehealth-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<HealthRequestBuilderGetQueryParameters> | undefined) : Promise<TeamworkDeviceHealth | undefined>;
    /**
     * Update the navigation property health in teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TeamworkDeviceHealth>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: TeamworkDeviceHealth, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TeamworkDeviceHealth | undefined>;
    /**
     * Delete navigation property health for teamwork
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get the health details of a Microsoft Teams-enabled device. Device health is calculated based on the device configuration and other device parameters.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HealthRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property health in teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: TeamworkDeviceHealth, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the health details of a Microsoft Teams-enabled device. Device health is calculated based on the device configuration and other device parameters.
 */
export interface HealthRequestBuilderGetQueryParameters {
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
export const HealthRequestBuilderUriTemplate = "{+baseurl}/teamwork/devices/{teamworkDevice%2Did}/health{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const HealthRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HealthRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: HealthRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: HealthRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTeamworkDeviceHealthFromDiscriminatorValue,
        queryParametersMapper: HealthRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: HealthRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTeamworkDeviceHealthFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTeamworkDeviceHealth,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
