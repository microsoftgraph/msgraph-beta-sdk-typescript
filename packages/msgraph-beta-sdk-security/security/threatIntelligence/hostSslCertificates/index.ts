/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createHostSslCertificateCollectionResponseFromDiscriminatorValue, createHostSslCertificateFromDiscriminatorValue, serializeHostSslCertificate, type HostSslCertificate, type HostSslCertificateCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/security/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { HostSslCertificateItemRequestBuilderNavigationMetadata, HostSslCertificateItemRequestBuilderRequestsMetadata, type HostSslCertificateItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hostSslCertificates property of the microsoft.graph.security.threatIntelligence entity.
 */
export interface HostSslCertificatesRequestBuilder extends BaseRequestBuilder<HostSslCertificatesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the hostSslCertificates property of the microsoft.graph.security.threatIntelligence entity.
     * @param hostSslCertificateId The unique identifier of hostSslCertificate
     * @returns {HostSslCertificateItemRequestBuilder}
     */
     byHostSslCertificateId(hostSslCertificateId: string) : HostSslCertificateItemRequestBuilder;
    /**
     * Get the properties and relationships of a hostSslCertificate object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HostSslCertificateCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<HostSslCertificatesRequestBuilderGetQueryParameters> | undefined) : Promise<HostSslCertificateCollectionResponse | undefined>;
    /**
     * Create new navigation property to hostSslCertificates for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<HostSslCertificate>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: HostSslCertificate, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<HostSslCertificate | undefined>;
    /**
     * Get the properties and relationships of a hostSslCertificate object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HostSslCertificatesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to hostSslCertificates for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: HostSslCertificate, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the properties and relationships of a hostSslCertificate object.
 */
export interface HostSslCertificatesRequestBuilderGetQueryParameters {
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
export const HostSslCertificatesRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/hostSslCertificates{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const HostSslCertificatesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const HostSslCertificatesRequestBuilderNavigationMetadata: Record<Exclude<keyof HostSslCertificatesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byHostSslCertificateId: {
        requestsMetadata: HostSslCertificateItemRequestBuilderRequestsMetadata,
        navigationMetadata: HostSslCertificateItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["hostSslCertificate%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HostSslCertificatesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: HostSslCertificatesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHostSslCertificateCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: HostSslCertificatesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: HostSslCertificatesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createHostSslCertificateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeHostSslCertificate,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
