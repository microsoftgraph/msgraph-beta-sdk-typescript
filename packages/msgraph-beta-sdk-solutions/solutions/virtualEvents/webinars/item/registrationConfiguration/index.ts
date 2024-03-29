/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createVirtualEventWebinarRegistrationConfigurationFromDiscriminatorValue, type VirtualEventWebinarRegistrationConfiguration } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the registrationConfiguration property of the microsoft.graph.virtualEventWebinar entity.
 */
export interface RegistrationConfigurationRequestBuilder extends BaseRequestBuilder<RegistrationConfigurationRequestBuilder> {
    /**
     * Get registrationConfiguration from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<VirtualEventWebinarRegistrationConfiguration>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<RegistrationConfigurationRequestBuilderGetQueryParameters> | undefined) : Promise<VirtualEventWebinarRegistrationConfiguration | undefined>;
    /**
     * Get registrationConfiguration from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RegistrationConfigurationRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get registrationConfiguration from solutions
 */
export interface RegistrationConfigurationRequestBuilderGetQueryParameters {
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
export const RegistrationConfigurationRequestBuilderUriTemplate = "{+baseurl}/solutions/virtualEvents/webinars/{virtualEventWebinar%2Did}/registrationConfiguration{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RegistrationConfigurationRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RegistrationConfigurationRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: RegistrationConfigurationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createVirtualEventWebinarRegistrationConfigurationFromDiscriminatorValue,
        queryParametersMapper: RegistrationConfigurationRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
