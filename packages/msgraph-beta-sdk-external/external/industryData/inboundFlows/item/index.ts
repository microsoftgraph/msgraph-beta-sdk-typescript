/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createInboundFlowFromDiscriminatorValue, serializeInboundFlow, type InboundFlow } from '@microsoft/msgraph-beta-sdk/models/industryData/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { DataConnectorRequestBuilderRequestsMetadata, DataConnectorRequestBuilderUriTemplate, type DataConnectorRequestBuilder } from './dataConnector/';
import { type YearRequestBuilder, YearRequestBuilderRequestsMetadata, YearRequestBuilderUriTemplate } from './year/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the inboundFlows property of the microsoft.graph.industryData.industryDataRoot entity.
 */
export interface InboundFlowItemRequestBuilder extends BaseRequestBuilder<InboundFlowItemRequestBuilder> {
    /**
     * Provides operations to manage the dataConnector property of the microsoft.graph.industryData.inboundFlow entity.
     */
    get dataConnector(): DataConnectorRequestBuilder;
    /**
     * Provides operations to manage the year property of the microsoft.graph.industryData.inboundFlow entity.
     */
    get year(): YearRequestBuilder;
    /**
     * Delete an inboundFileFlow object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/industrydata-inboundfileflow-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of an inboundFlow object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InboundFlow
     * @see {@link https://learn.microsoft.com/graph/api/industrydata-inboundflow-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<InboundFlowItemRequestBuilderGetQueryParameters> | undefined) : Promise<InboundFlow | undefined>;
    /**
     * Update the properties of an inboundFlow object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of InboundFlow
     * @see {@link https://learn.microsoft.com/graph/api/industrydata-inboundflow-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: InboundFlow, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<InboundFlow | undefined>;
    /**
     * Delete an inboundFileFlow object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of an inboundFlow object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<InboundFlowItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of an inboundFlow object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: InboundFlow, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of an inboundFlow object.
 */
export interface InboundFlowItemRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const InboundFlowItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const InboundFlowItemRequestBuilderNavigationMetadata: Record<Exclude<keyof InboundFlowItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    dataConnector: {
        uriTemplate: DataConnectorRequestBuilderUriTemplate,
        requestsMetadata: DataConnectorRequestBuilderRequestsMetadata,
    },
    year: {
        uriTemplate: YearRequestBuilderUriTemplate,
        requestsMetadata: YearRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const InboundFlowItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createInboundFlowFromDiscriminatorValue,
        queryParametersMapper: InboundFlowItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createInboundFlowFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeInboundFlow,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const InboundFlowItemRequestBuilderUriTemplate = "{+baseurl}/external/industryData/inboundFlows/{inboundFlow%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */