/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createConnectorCollectionResponseFromDiscriminatorValue, createConnectorFromDiscriminatorValue, serializeConnector, type Connector, type ConnectorCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ConnectorItemRequestBuilderNavigationMetadata, ConnectorItemRequestBuilderRequestsMetadata, type ConnectorItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the connectors property of the microsoft.graph.onPremisesPublishingProfile entity.
 */
export interface ConnectorsRequestBuilder extends BaseRequestBuilder<ConnectorsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the connectors property of the microsoft.graph.onPremisesPublishingProfile entity.
     * @param connectorId The unique identifier of connector
     * @returns {ConnectorItemRequestBuilder}
     */
     byConnectorId(connectorId: string) : ConnectorItemRequestBuilder;
    /**
     * List of existing connector objects for applications published through Application Proxy. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ConnectorCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ConnectorsRequestBuilderGetQueryParameters> | undefined) : Promise<ConnectorCollectionResponse | undefined>;
    /**
     * Create new navigation property to connectors for onPremisesPublishingProfiles
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Connector>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Connector, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Connector | undefined>;
    /**
     * List of existing connector objects for applications published through Application Proxy. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ConnectorsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to connectors for onPremisesPublishingProfiles
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Connector, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List of existing connector objects for applications published through Application Proxy. Read-only. Nullable.
 */
export interface ConnectorsRequestBuilderGetQueryParameters {
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
export const ConnectorsRequestBuilderUriTemplate = "{+baseurl}/onPremisesPublishingProfiles/{onPremisesPublishingProfile%2Did}/connectors{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ConnectorsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ConnectorsRequestBuilderNavigationMetadata: Record<Exclude<keyof ConnectorsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byConnectorId: {
        requestsMetadata: ConnectorItemRequestBuilderRequestsMetadata,
        navigationMetadata: ConnectorItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["connector%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ConnectorsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ConnectorsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createConnectorCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ConnectorsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ConnectorsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createConnectorFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeConnector,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
