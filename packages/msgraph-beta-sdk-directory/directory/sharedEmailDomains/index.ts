/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSharedEmailDomainCollectionResponseFromDiscriminatorValue, createSharedEmailDomainFromDiscriminatorValue, serializeSharedEmailDomain, type SharedEmailDomain, type SharedEmailDomainCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { SharedEmailDomainItemRequestBuilderRequestsMetadata, type SharedEmailDomainItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sharedEmailDomains property of the microsoft.graph.directory entity.
 */
export interface SharedEmailDomainsRequestBuilder extends BaseRequestBuilder<SharedEmailDomainsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the sharedEmailDomains property of the microsoft.graph.directory entity.
     * @param sharedEmailDomainId The unique identifier of sharedEmailDomain
     * @returns {SharedEmailDomainItemRequestBuilder}
     */
     bySharedEmailDomainId(sharedEmailDomainId: string) : SharedEmailDomainItemRequestBuilder;
    /**
     * Get sharedEmailDomains from directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SharedEmailDomainCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<SharedEmailDomainsRequestBuilderGetQueryParameters> | undefined) : Promise<SharedEmailDomainCollectionResponse | undefined>;
    /**
     * Create new navigation property to sharedEmailDomains for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SharedEmailDomain>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: SharedEmailDomain, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SharedEmailDomain | undefined>;
    /**
     * Get sharedEmailDomains from directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SharedEmailDomainsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to sharedEmailDomains for directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: SharedEmailDomain, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get sharedEmailDomains from directory
 */
export interface SharedEmailDomainsRequestBuilderGetQueryParameters {
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
export const SharedEmailDomainsRequestBuilderUriTemplate = "{+baseurl}/directory/sharedEmailDomains{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SharedEmailDomainsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const SharedEmailDomainsRequestBuilderNavigationMetadata: Record<Exclude<keyof SharedEmailDomainsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    bySharedEmailDomainId: {
        requestsMetadata: SharedEmailDomainItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["sharedEmailDomain%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SharedEmailDomainsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: SharedEmailDomainsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSharedEmailDomainCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: SharedEmailDomainsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: SharedEmailDomainsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSharedEmailDomainFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSharedEmailDomain,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
