/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createConnectorGroupCollectionResponseFromDiscriminatorValue, createConnectorGroupFromDiscriminatorValue, serializeConnectorGroup, type ConnectorGroup, type ConnectorGroupCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ConnectorGroupItemRequestBuilderNavigationMetadata, ConnectorGroupItemRequestBuilderRequestsMetadata, type ConnectorGroupItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the connectorGroups property of the microsoft.graph.onPremisesPublishingProfile entity.
 */
export interface ConnectorGroupsRequestBuilder extends BaseRequestBuilder<ConnectorGroupsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the connectorGroups property of the microsoft.graph.onPremisesPublishingProfile entity.
     * @param connectorGroupId The unique identifier of connectorGroup
     * @returns {ConnectorGroupItemRequestBuilder}
     */
     byConnectorGroupId(connectorGroupId: string) : ConnectorGroupItemRequestBuilder;
    /**
     * List of existing connectorGroup objects for applications published through Application Proxy. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ConnectorGroupCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ConnectorGroupsRequestBuilderGetQueryParameters> | undefined) : Promise<ConnectorGroupCollectionResponse | undefined>;
    /**
     * Create new navigation property to connectorGroups for onPremisesPublishingProfiles
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ConnectorGroup>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ConnectorGroup, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ConnectorGroup | undefined>;
    /**
     * List of existing connectorGroup objects for applications published through Application Proxy. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ConnectorGroupsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to connectorGroups for onPremisesPublishingProfiles
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ConnectorGroup, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List of existing connectorGroup objects for applications published through Application Proxy. Read-only. Nullable.
 */
export interface ConnectorGroupsRequestBuilderGetQueryParameters {
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
export const ConnectorGroupsRequestBuilderUriTemplate = "{+baseurl}/onPremisesPublishingProfiles/{onPremisesPublishingProfile%2Did}/connectorGroups{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ConnectorGroupsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ConnectorGroupsRequestBuilderNavigationMetadata: Record<Exclude<keyof ConnectorGroupsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byConnectorGroupId: {
        requestsMetadata: ConnectorGroupItemRequestBuilderRequestsMetadata,
        navigationMetadata: ConnectorGroupItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["connectorGroup%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ConnectorGroupsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ConnectorGroupsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createConnectorGroupCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ConnectorGroupsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ConnectorGroupsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createConnectorGroupFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeConnectorGroup,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
