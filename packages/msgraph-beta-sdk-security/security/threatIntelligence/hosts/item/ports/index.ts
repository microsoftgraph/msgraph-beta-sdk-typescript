/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createHostPortCollectionResponseFromDiscriminatorValue, type HostPortCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/security/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { HostPortItemRequestBuilderRequestsMetadata, HostPortItemRequestBuilderUriTemplate, type HostPortItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the ports property of the microsoft.graph.security.host entity.
 */
export interface PortsRequestBuilder extends BaseRequestBuilder<PortsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the ports property of the microsoft.graph.security.host entity.
     * @param hostPortId The unique identifier of hostPort
     * @returns a HostPortItemRequestBuilder
     */
     byHostPortId(hostPortId: string) : HostPortItemRequestBuilder;
    /**
     * Get the list of hostPort resources associated with a host.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostPortCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-host-list-ports?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<PortsRequestBuilderGetQueryParameters> | undefined) : Promise<HostPortCollectionResponse | undefined>;
    /**
     * Get the list of hostPort resources associated with a host.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PortsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the list of hostPort resources associated with a host.
 */
export interface PortsRequestBuilderGetQueryParameters {
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
const PortsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const PortsRequestBuilderNavigationMetadata: Record<Exclude<keyof PortsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byHostPortId: {
        uriTemplate: HostPortItemRequestBuilderUriTemplate,
        requestsMetadata: HostPortItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["hostPort%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PortsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createHostPortCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: PortsRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const PortsRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/hosts/{host%2Did}/ports{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */