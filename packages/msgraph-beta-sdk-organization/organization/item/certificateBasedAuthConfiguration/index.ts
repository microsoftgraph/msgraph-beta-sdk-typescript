/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCertificateBasedAuthConfigurationCollectionResponseFromDiscriminatorValue, createCertificateBasedAuthConfigurationFromDiscriminatorValue, serializeCertificateBasedAuthConfiguration, type CertificateBasedAuthConfiguration, type CertificateBasedAuthConfigurationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { CertificateBasedAuthConfigurationItemRequestBuilderRequestsMetadata, type CertificateBasedAuthConfigurationItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the certificateBasedAuthConfiguration property of the microsoft.graph.organization entity.
 */
export interface CertificateBasedAuthConfigurationRequestBuilder extends BaseRequestBuilder<CertificateBasedAuthConfigurationRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the certificateBasedAuthConfiguration property of the microsoft.graph.organization entity.
     * @param certificateBasedAuthConfigurationId The unique identifier of certificateBasedAuthConfiguration
     * @returns {CertificateBasedAuthConfigurationItemRequestBuilder}
     */
     byCertificateBasedAuthConfigurationId(certificateBasedAuthConfigurationId: string) : CertificateBasedAuthConfigurationItemRequestBuilder;
    /**
     * Get a list of certificateBasedAuthConfiguration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CertificateBasedAuthConfigurationCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/certificatebasedauthconfiguration-list?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CertificateBasedAuthConfigurationRequestBuilderGetQueryParameters> | undefined) : Promise<CertificateBasedAuthConfigurationCollectionResponse | undefined>;
    /**
     * Create a new certificateBasedAuthConfiguration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CertificateBasedAuthConfiguration>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/certificatebasedauthconfiguration-post-certificatebasedauthconfiguration?view=graph-rest-beta|Find more info here}
     */
     post(body: CertificateBasedAuthConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CertificateBasedAuthConfiguration | undefined>;
    /**
     * Get a list of certificateBasedAuthConfiguration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CertificateBasedAuthConfigurationRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new certificateBasedAuthConfiguration object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CertificateBasedAuthConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of certificateBasedAuthConfiguration objects.
 */
export interface CertificateBasedAuthConfigurationRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const CertificateBasedAuthConfigurationRequestBuilderUriTemplate = "{+baseurl}/organization/{organization%2Did}/certificateBasedAuthConfiguration{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CertificateBasedAuthConfigurationRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CertificateBasedAuthConfigurationRequestBuilderNavigationMetadata: Record<Exclude<keyof CertificateBasedAuthConfigurationRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCertificateBasedAuthConfigurationId: {
        requestsMetadata: CertificateBasedAuthConfigurationItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["certificateBasedAuthConfiguration%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CertificateBasedAuthConfigurationRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: CertificateBasedAuthConfigurationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCertificateBasedAuthConfigurationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CertificateBasedAuthConfigurationRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: CertificateBasedAuthConfigurationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCertificateBasedAuthConfigurationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCertificateBasedAuthConfiguration,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
