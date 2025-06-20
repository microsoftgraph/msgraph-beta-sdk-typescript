/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createLogsFromDiscriminatorValue, serializeLogs, type Logs } from '@microsoft/msgraph-beta-sdk/models/networkaccess/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ConnectionsRequestBuilderNavigationMetadata, ConnectionsRequestBuilderRequestsMetadata, type ConnectionsRequestBuilder } from './connections/index.js';
// @ts-ignore
import { RemoteNetworksRequestBuilderNavigationMetadata, RemoteNetworksRequestBuilderRequestsMetadata, type RemoteNetworksRequestBuilder } from './remoteNetworks/index.js';
// @ts-ignore
import { TrafficRequestBuilderNavigationMetadata, TrafficRequestBuilderRequestsMetadata, type TrafficRequestBuilder } from './traffic/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the logs property of the microsoft.graph.networkaccess.networkAccessRoot entity.
 */
export interface LogsRequestBuilder extends BaseRequestBuilder<LogsRequestBuilder> {
    /**
     * Provides operations to manage the connections property of the microsoft.graph.networkaccess.logs entity.
     */
    get connections(): ConnectionsRequestBuilder;
    /**
     * Provides operations to manage the remoteNetworks property of the microsoft.graph.networkaccess.logs entity.
     */
    get remoteNetworks(): RemoteNetworksRequestBuilder;
    /**
     * Provides operations to manage the traffic property of the microsoft.graph.networkaccess.logs entity.
     */
    get traffic(): TrafficRequestBuilder;
    /**
     * Delete navigation property logs for networkAccess
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Represents network connections that are routed through Global Secure Access.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Logs>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<LogsRequestBuilderGetQueryParameters> | undefined) : Promise<Logs | undefined>;
    /**
     * Update the navigation property logs in networkAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Logs>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: Logs, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Logs | undefined>;
    /**
     * Delete navigation property logs for networkAccess
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Represents network connections that are routed through Global Secure Access.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<LogsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property logs in networkAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Logs, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Represents network connections that are routed through Global Secure Access.
 */
export interface LogsRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const LogsRequestBuilderUriTemplate = "{+baseurl}/networkAccess/logs{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const LogsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const LogsRequestBuilderNavigationMetadata: Record<Exclude<keyof LogsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    connections: {
        requestsMetadata: ConnectionsRequestBuilderRequestsMetadata,
        navigationMetadata: ConnectionsRequestBuilderNavigationMetadata,
    },
    remoteNetworks: {
        requestsMetadata: RemoteNetworksRequestBuilderRequestsMetadata,
        navigationMetadata: RemoteNetworksRequestBuilderNavigationMetadata,
    },
    traffic: {
        requestsMetadata: TrafficRequestBuilderRequestsMetadata,
        navigationMetadata: TrafficRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const LogsRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: LogsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: LogsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createLogsFromDiscriminatorValue,
        queryParametersMapper: LogsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: LogsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createLogsFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeLogs,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
