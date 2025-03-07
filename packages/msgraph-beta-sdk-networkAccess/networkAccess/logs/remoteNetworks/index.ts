/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createRemoteNetworkHealthEventCollectionResponseFromDiscriminatorValue, createRemoteNetworkHealthEventFromDiscriminatorValue, serializeRemoteNetworkHealthEvent, type RemoteNetworkHealthEvent, type RemoteNetworkHealthEventCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/networkaccess/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { RemoteNetworkHealthEventItemRequestBuilderRequestsMetadata, type RemoteNetworkHealthEventItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the remoteNetworks property of the microsoft.graph.networkaccess.logs entity.
 */
export interface RemoteNetworksRequestBuilder extends BaseRequestBuilder<RemoteNetworksRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the remoteNetworks property of the microsoft.graph.networkaccess.logs entity.
     * @param remoteNetworkHealthEventId The unique identifier of remoteNetworkHealthEvent
     * @returns {RemoteNetworkHealthEventItemRequestBuilder}
     */
     byRemoteNetworkHealthEventId(remoteNetworkHealthEventId: string) : RemoteNetworkHealthEventItemRequestBuilder;
    /**
     * A collection of remote network health events.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RemoteNetworkHealthEventCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<RemoteNetworksRequestBuilderGetQueryParameters> | undefined) : Promise<RemoteNetworkHealthEventCollectionResponse | undefined>;
    /**
     * Create new navigation property to remoteNetworks for networkAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RemoteNetworkHealthEvent>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: RemoteNetworkHealthEvent, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<RemoteNetworkHealthEvent | undefined>;
    /**
     * A collection of remote network health events.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RemoteNetworksRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to remoteNetworks for networkAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: RemoteNetworkHealthEvent, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A collection of remote network health events.
 */
export interface RemoteNetworksRequestBuilderGetQueryParameters {
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
export const RemoteNetworksRequestBuilderUriTemplate = "{+baseurl}/networkAccess/logs/remoteNetworks{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RemoteNetworksRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const RemoteNetworksRequestBuilderNavigationMetadata: Record<Exclude<keyof RemoteNetworksRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byRemoteNetworkHealthEventId: {
        requestsMetadata: RemoteNetworkHealthEventItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["remoteNetworkHealthEvent%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RemoteNetworksRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: RemoteNetworksRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createRemoteNetworkHealthEventCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: RemoteNetworksRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: RemoteNetworksRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createRemoteNetworkHealthEventFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRemoteNetworkHealthEvent,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
