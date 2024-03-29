/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createHostSecurityProfileFromDiscriminatorValue, serializeHostSecurityProfile, type HostSecurityProfile } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hostSecurityProfiles property of the microsoft.graph.security entity.
 */
export interface HostSecurityProfileItemRequestBuilder extends BaseRequestBuilder<HostSecurityProfileItemRequestBuilder> {
    /**
     * Delete navigation property hostSecurityProfiles for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get hostSecurityProfiles from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HostSecurityProfile>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<HostSecurityProfileItemRequestBuilderGetQueryParameters> | undefined) : Promise<HostSecurityProfile | undefined>;
    /**
     * Update the navigation property hostSecurityProfiles in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HostSecurityProfile>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: HostSecurityProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<HostSecurityProfile | undefined>;
    /**
     * Delete navigation property hostSecurityProfiles for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get hostSecurityProfiles from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HostSecurityProfileItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property hostSecurityProfiles in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: HostSecurityProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get hostSecurityProfiles from security
 */
export interface HostSecurityProfileItemRequestBuilderGetQueryParameters {
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
export const HostSecurityProfileItemRequestBuilderUriTemplate = "{+baseurl}/security/hostSecurityProfiles/{hostSecurityProfile%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const HostSecurityProfileItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HostSecurityProfileItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: HostSecurityProfileItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: HostSecurityProfileItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHostSecurityProfileFromDiscriminatorValue,
        queryParametersMapper: HostSecurityProfileItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: HostSecurityProfileItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHostSecurityProfileFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeHostSecurityProfile,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
