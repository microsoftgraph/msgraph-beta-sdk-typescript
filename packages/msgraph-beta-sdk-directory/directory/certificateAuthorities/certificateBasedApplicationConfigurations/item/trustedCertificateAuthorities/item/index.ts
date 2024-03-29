/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCertificateAuthorityAsEntityFromDiscriminatorValue, serializeCertificateAuthorityAsEntity, type CertificateAuthorityAsEntity } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the trustedCertificateAuthorities property of the microsoft.graph.trustedCertificateAuthorityAsEntityBase entity.
 */
export interface CertificateAuthorityAsEntityItemRequestBuilder extends BaseRequestBuilder<CertificateAuthorityAsEntityItemRequestBuilder> {
    /**
     * Delete navigation property trustedCertificateAuthorities for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Collection of trusted certificate authorities.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CertificateAuthorityAsEntity>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<CertificateAuthorityAsEntityItemRequestBuilderGetQueryParameters> | undefined) : Promise<CertificateAuthorityAsEntity | undefined>;
    /**
     * Update the navigation property trustedCertificateAuthorities in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CertificateAuthorityAsEntity>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: CertificateAuthorityAsEntity, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CertificateAuthorityAsEntity | undefined>;
    /**
     * Delete navigation property trustedCertificateAuthorities for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Collection of trusted certificate authorities.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CertificateAuthorityAsEntityItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property trustedCertificateAuthorities in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: CertificateAuthorityAsEntity, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Collection of trusted certificate authorities.
 */
export interface CertificateAuthorityAsEntityItemRequestBuilderGetQueryParameters {
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
export const CertificateAuthorityAsEntityItemRequestBuilderUriTemplate = "{+baseurl}/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration%2Did}/trustedCertificateAuthorities/{certificateAuthorityAsEntity%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CertificateAuthorityAsEntityItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CertificateAuthorityAsEntityItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: CertificateAuthorityAsEntityItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: CertificateAuthorityAsEntityItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCertificateAuthorityAsEntityFromDiscriminatorValue,
        queryParametersMapper: CertificateAuthorityAsEntityItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: CertificateAuthorityAsEntityItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCertificateAuthorityAsEntityFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCertificateAuthorityAsEntity,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
