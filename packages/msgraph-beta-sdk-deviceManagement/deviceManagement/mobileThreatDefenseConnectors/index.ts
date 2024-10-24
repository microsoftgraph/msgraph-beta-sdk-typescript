/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMobileThreatDefenseConnectorCollectionResponseFromDiscriminatorValue, createMobileThreatDefenseConnectorFromDiscriminatorValue, serializeMobileThreatDefenseConnector, type MobileThreatDefenseConnector, type MobileThreatDefenseConnectorCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { MobileThreatDefenseConnectorItemRequestBuilderRequestsMetadata, type MobileThreatDefenseConnectorItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mobileThreatDefenseConnectors property of the microsoft.graph.deviceManagement entity.
 */
export interface MobileThreatDefenseConnectorsRequestBuilder extends BaseRequestBuilder<MobileThreatDefenseConnectorsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the mobileThreatDefenseConnectors property of the microsoft.graph.deviceManagement entity.
     * @param mobileThreatDefenseConnectorId The unique identifier of mobileThreatDefenseConnector
     * @returns {MobileThreatDefenseConnectorItemRequestBuilder}
     */
     byMobileThreatDefenseConnectorId(mobileThreatDefenseConnectorId: string) : MobileThreatDefenseConnectorItemRequestBuilder;
    /**
     * The list of Mobile threat Defense connectors configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MobileThreatDefenseConnectorCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<MobileThreatDefenseConnectorsRequestBuilderGetQueryParameters> | undefined) : Promise<MobileThreatDefenseConnectorCollectionResponse | undefined>;
    /**
     * Create new navigation property to mobileThreatDefenseConnectors for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MobileThreatDefenseConnector>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: MobileThreatDefenseConnector, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MobileThreatDefenseConnector | undefined>;
    /**
     * The list of Mobile threat Defense connectors configured by the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MobileThreatDefenseConnectorsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to mobileThreatDefenseConnectors for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: MobileThreatDefenseConnector, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of Mobile threat Defense connectors configured by the tenant.
 */
export interface MobileThreatDefenseConnectorsRequestBuilderGetQueryParameters {
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
export const MobileThreatDefenseConnectorsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/mobileThreatDefenseConnectors{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MobileThreatDefenseConnectorsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const MobileThreatDefenseConnectorsRequestBuilderNavigationMetadata: Record<Exclude<keyof MobileThreatDefenseConnectorsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMobileThreatDefenseConnectorId: {
        requestsMetadata: MobileThreatDefenseConnectorItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["mobileThreatDefenseConnector%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MobileThreatDefenseConnectorsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: MobileThreatDefenseConnectorsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMobileThreatDefenseConnectorCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: MobileThreatDefenseConnectorsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: MobileThreatDefenseConnectorsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMobileThreatDefenseConnectorFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMobileThreatDefenseConnector,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
