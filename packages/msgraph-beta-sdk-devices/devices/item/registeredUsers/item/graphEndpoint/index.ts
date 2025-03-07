/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEndpointFromDiscriminatorValue, type Endpoint } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Casts the previous resource to endpoint.
 */
export interface GraphEndpointRequestBuilder extends BaseRequestBuilder<GraphEndpointRequestBuilder> {
    /**
     * Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Endpoint>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<GraphEndpointRequestBuilderGetQueryParameters> | undefined) : Promise<Endpoint | undefined>;
    /**
     * Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GraphEndpointRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the item of type microsoft.graph.directoryObject as microsoft.graph.endpoint
 */
export interface GraphEndpointRequestBuilderGetQueryParameters {
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
export const GraphEndpointRequestBuilderUriTemplate = "{+baseurl}/devices/{device%2Did}/registeredUsers/{directoryObject%2Did}/graph.endpoint{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GraphEndpointRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GraphEndpointRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GraphEndpointRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEndpointFromDiscriminatorValue,
        queryParametersMapper: GraphEndpointRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
