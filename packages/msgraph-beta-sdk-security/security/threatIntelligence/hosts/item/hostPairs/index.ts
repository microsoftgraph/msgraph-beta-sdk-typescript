/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createHostPairCollectionResponseFromDiscriminatorValue, type HostPairCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/security/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { HostPairItemRequestBuilderRequestsMetadata, HostPairItemRequestBuilderUriTemplate, type HostPairItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hostPairs property of the microsoft.graph.security.host entity.
 */
export interface HostPairsRequestBuilder extends BaseRequestBuilder<HostPairsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the hostPairs property of the microsoft.graph.security.host entity.
     * @param hostPairId The unique identifier of hostPair
     * @returns a HostPairItemRequestBuilder
     */
     byHostPairId(hostPairId: string) : HostPairItemRequestBuilder;
    /**
     * Get the list of hostPair resources associated with a specified host, where that host is *either* the *parent* or the *child*.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostPairCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-host-list-hostpairs?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<HostPairsRequestBuilderGetQueryParameters> | undefined) : Promise<HostPairCollectionResponse | undefined>;
    /**
     * Get the list of hostPair resources associated with a specified host, where that host is *either* the *parent* or the *child*.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HostPairsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the list of hostPair resources associated with a specified host, where that host is *either* the *parent* or the *child*.
 */
export interface HostPairsRequestBuilderGetQueryParameters {
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
const HostPairsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const HostPairsRequestBuilderNavigationMetadata: Record<Exclude<keyof HostPairsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byHostPairId: {
        uriTemplate: HostPairItemRequestBuilderUriTemplate,
        requestsMetadata: HostPairItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["hostPair%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HostPairsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createHostPairCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: HostPairsRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const HostPairsRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/hosts/{host%2Did}/hostPairs{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */