/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createProviderTenantSettingFromDiscriminatorValue, serializeProviderTenantSetting, type ProviderTenantSetting } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the providerTenantSettings property of the microsoft.graph.security entity.
 */
export interface ProviderTenantSettingItemRequestBuilder extends BaseRequestBuilder<ProviderTenantSettingItemRequestBuilder> {
    /**
     * Delete navigation property providerTenantSettings for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get providerTenantSettings from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProviderTenantSetting
     */
     get(requestConfiguration?: RequestConfiguration<ProviderTenantSettingItemRequestBuilderGetQueryParameters> | undefined) : Promise<ProviderTenantSetting | undefined>;
    /**
     * Update the navigation property providerTenantSettings in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ProviderTenantSetting
     */
     patch(body: ProviderTenantSetting, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ProviderTenantSetting | undefined>;
    /**
     * Delete navigation property providerTenantSettings for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get providerTenantSettings from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ProviderTenantSettingItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property providerTenantSettings in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ProviderTenantSetting, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get providerTenantSettings from security
 */
export interface ProviderTenantSettingItemRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ProviderTenantSettingItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ProviderTenantSettingItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createProviderTenantSettingFromDiscriminatorValue,
        queryParametersMapper: ProviderTenantSettingItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createProviderTenantSettingFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeProviderTenantSetting,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ProviderTenantSettingItemRequestBuilderUriTemplate = "{+baseurl}/security/providerTenantSettings/{providerTenantSetting%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */