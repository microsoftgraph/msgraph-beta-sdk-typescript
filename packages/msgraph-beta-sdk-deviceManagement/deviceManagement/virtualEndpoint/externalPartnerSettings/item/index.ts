/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCloudPcExternalPartnerSettingFromDiscriminatorValue, serializeCloudPcExternalPartnerSetting, type CloudPcExternalPartnerSetting } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the externalPartnerSettings property of the microsoft.graph.virtualEndpoint entity.
 */
export interface CloudPcExternalPartnerSettingItemRequestBuilder extends BaseRequestBuilder<CloudPcExternalPartnerSettingItemRequestBuilder> {
    /**
     * Delete navigation property externalPartnerSettings for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a cloudPcExternalPartnerSetting object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudPcExternalPartnerSetting>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/cloudpcexternalpartnersetting-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CloudPcExternalPartnerSettingItemRequestBuilderGetQueryParameters> | undefined) : Promise<CloudPcExternalPartnerSetting | undefined>;
    /**
     * Update the properties of a cloudPcExternalPartnerSetting object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudPcExternalPartnerSetting>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/cloudpcexternalpartnersetting-update?view=graph-rest-beta|Find more info here}
     */
     patch(body: CloudPcExternalPartnerSetting, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CloudPcExternalPartnerSetting | undefined>;
    /**
     * Delete navigation property externalPartnerSettings for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a cloudPcExternalPartnerSetting object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CloudPcExternalPartnerSettingItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a cloudPcExternalPartnerSetting object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: CloudPcExternalPartnerSetting, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a cloudPcExternalPartnerSetting object.
 */
export interface CloudPcExternalPartnerSettingItemRequestBuilderGetQueryParameters {
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
export const CloudPcExternalPartnerSettingItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/virtualEndpoint/externalPartnerSettings/{cloudPcExternalPartnerSetting%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CloudPcExternalPartnerSettingItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CloudPcExternalPartnerSettingItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: CloudPcExternalPartnerSettingItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: CloudPcExternalPartnerSettingItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudPcExternalPartnerSettingFromDiscriminatorValue,
        queryParametersMapper: CloudPcExternalPartnerSettingItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: CloudPcExternalPartnerSettingItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudPcExternalPartnerSettingFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCloudPcExternalPartnerSetting,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
