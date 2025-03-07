/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCertificateAuthorityPathFromDiscriminatorValue, serializeCertificateAuthorityPath, type CertificateAuthorityPath } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CertificateBasedApplicationConfigurationsRequestBuilderNavigationMetadata, CertificateBasedApplicationConfigurationsRequestBuilderRequestsMetadata, type CertificateBasedApplicationConfigurationsRequestBuilder } from './certificateBasedApplicationConfigurations/index.js';
// @ts-ignore
import { MutualTlsOauthConfigurationsRequestBuilderNavigationMetadata, MutualTlsOauthConfigurationsRequestBuilderRequestsMetadata, type MutualTlsOauthConfigurationsRequestBuilder } from './mutualTlsOauthConfigurations/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the certificateAuthorities property of the microsoft.graph.directory entity.
 */
export interface CertificateAuthoritiesRequestBuilder extends BaseRequestBuilder<CertificateAuthoritiesRequestBuilder> {
    /**
     * Provides operations to manage the certificateBasedApplicationConfigurations property of the microsoft.graph.certificateAuthorityPath entity.
     */
    get certificateBasedApplicationConfigurations(): CertificateBasedApplicationConfigurationsRequestBuilder;
    /**
     * Provides operations to manage the mutualTlsOauthConfigurations property of the microsoft.graph.certificateAuthorityPath entity.
     */
    get mutualTlsOauthConfigurations(): MutualTlsOauthConfigurationsRequestBuilder;
    /**
     * Delete navigation property certificateAuthorities for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Container for certificate authorities-related configurations for applications in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CertificateAuthorityPath>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<CertificateAuthoritiesRequestBuilderGetQueryParameters> | undefined) : Promise<CertificateAuthorityPath | undefined>;
    /**
     * Update the navigation property certificateAuthorities in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CertificateAuthorityPath>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: CertificateAuthorityPath, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CertificateAuthorityPath | undefined>;
    /**
     * Delete navigation property certificateAuthorities for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Container for certificate authorities-related configurations for applications in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CertificateAuthoritiesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property certificateAuthorities in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: CertificateAuthorityPath, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Container for certificate authorities-related configurations for applications in the tenant.
 */
export interface CertificateAuthoritiesRequestBuilderGetQueryParameters {
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
export const CertificateAuthoritiesRequestBuilderUriTemplate = "{+baseurl}/directory/certificateAuthorities{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CertificateAuthoritiesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CertificateAuthoritiesRequestBuilderNavigationMetadata: Record<Exclude<keyof CertificateAuthoritiesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    certificateBasedApplicationConfigurations: {
        requestsMetadata: CertificateBasedApplicationConfigurationsRequestBuilderRequestsMetadata,
        navigationMetadata: CertificateBasedApplicationConfigurationsRequestBuilderNavigationMetadata,
    },
    mutualTlsOauthConfigurations: {
        requestsMetadata: MutualTlsOauthConfigurationsRequestBuilderRequestsMetadata,
        navigationMetadata: MutualTlsOauthConfigurationsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CertificateAuthoritiesRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: CertificateAuthoritiesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: CertificateAuthoritiesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCertificateAuthorityPathFromDiscriminatorValue,
        queryParametersMapper: CertificateAuthoritiesRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: CertificateAuthoritiesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCertificateAuthorityPathFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCertificateAuthorityPath,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
