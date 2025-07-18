/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createConfigurationApplicationFromDiscriminatorValue, serializeConfigurationApplication, type ConfigurationApplication } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the configurationApplications property of the microsoft.graph.configurationManagement entity.
 */
export interface ConfigurationApplicationItemRequestBuilder extends BaseRequestBuilder<ConfigurationApplicationItemRequestBuilder> {
    /**
     * Delete navigation property configurationApplications for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get configurationApplications from admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ConfigurationApplication>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ConfigurationApplicationItemRequestBuilderGetQueryParameters> | undefined) : Promise<ConfigurationApplication | undefined>;
    /**
     * Update the navigation property configurationApplications in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ConfigurationApplication>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ConfigurationApplication, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ConfigurationApplication | undefined>;
    /**
     * Delete navigation property configurationApplications for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get configurationApplications from admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ConfigurationApplicationItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property configurationApplications in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ConfigurationApplication, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get configurationApplications from admin
 */
export interface ConfigurationApplicationItemRequestBuilderGetQueryParameters {
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
export const ConfigurationApplicationItemRequestBuilderUriTemplate = "{+baseurl}/admin/configurationManagement/configurationApplications/{configurationApplication%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ConfigurationApplicationItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ConfigurationApplicationItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ConfigurationApplicationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ConfigurationApplicationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createConfigurationApplicationFromDiscriminatorValue,
        queryParametersMapper: ConfigurationApplicationItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ConfigurationApplicationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createConfigurationApplicationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeConfigurationApplication,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
