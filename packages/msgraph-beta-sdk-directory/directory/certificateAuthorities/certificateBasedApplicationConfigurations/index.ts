/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCertificateBasedApplicationConfigurationCollectionResponseFromDiscriminatorValue, createCertificateBasedApplicationConfigurationFromDiscriminatorValue, serializeCertificateBasedApplicationConfiguration, type CertificateBasedApplicationConfiguration, type CertificateBasedApplicationConfigurationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { CertificateBasedApplicationConfigurationItemRequestBuilderNavigationMetadata, CertificateBasedApplicationConfigurationItemRequestBuilderRequestsMetadata, CertificateBasedApplicationConfigurationItemRequestBuilderUriTemplate, type CertificateBasedApplicationConfigurationItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the certificateBasedApplicationConfigurations property of the microsoft.graph.certificateAuthorityPath entity.
 */
export interface CertificateBasedApplicationConfigurationsRequestBuilder extends BaseRequestBuilder<CertificateBasedApplicationConfigurationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the certificateBasedApplicationConfigurations property of the microsoft.graph.certificateAuthorityPath entity.
     * @param certificateBasedApplicationConfigurationId The unique identifier of certificateBasedApplicationConfiguration
     * @returns a CertificateBasedApplicationConfigurationItemRequestBuilder
     */
     byCertificateBasedApplicationConfigurationId(certificateBasedApplicationConfigurationId: string) : CertificateBasedApplicationConfigurationItemRequestBuilder;
    /**
     * Get a list of certificateBasedApplicationConfiguration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CertificateBasedApplicationConfigurationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/certificateauthoritypath-list-certificatebasedapplicationconfigurations?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CertificateBasedApplicationConfigurationsRequestBuilderGetQueryParameters> | undefined) : Promise<CertificateBasedApplicationConfigurationCollectionResponse | undefined>;
    /**
     * Create new navigation property to certificateBasedApplicationConfigurations for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CertificateBasedApplicationConfiguration
     */
     post(body: CertificateBasedApplicationConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CertificateBasedApplicationConfiguration | undefined>;
    /**
     * Get a list of certificateBasedApplicationConfiguration objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CertificateBasedApplicationConfigurationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to certificateBasedApplicationConfigurations for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: CertificateBasedApplicationConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of certificateBasedApplicationConfiguration objects.
 */
export interface CertificateBasedApplicationConfigurationsRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CertificateBasedApplicationConfigurationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const CertificateBasedApplicationConfigurationsRequestBuilderNavigationMetadata: Record<Exclude<keyof CertificateBasedApplicationConfigurationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCertificateBasedApplicationConfigurationId: {
        uriTemplate: CertificateBasedApplicationConfigurationItemRequestBuilderUriTemplate,
        requestsMetadata: CertificateBasedApplicationConfigurationItemRequestBuilderRequestsMetadata,
        navigationMetadata: CertificateBasedApplicationConfigurationItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["certificateBasedApplicationConfiguration%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CertificateBasedApplicationConfigurationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCertificateBasedApplicationConfigurationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CertificateBasedApplicationConfigurationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCertificateBasedApplicationConfigurationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCertificateBasedApplicationConfiguration,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CertificateBasedApplicationConfigurationsRequestBuilderUriTemplate = "{+baseurl}/directory/certificateAuthorities/certificateBasedApplicationConfigurations{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */