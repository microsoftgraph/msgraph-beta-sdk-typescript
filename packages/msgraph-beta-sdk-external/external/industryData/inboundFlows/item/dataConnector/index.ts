/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createIndustryDataConnectorFromDiscriminatorValue, type IndustryDataConnector } from '@microsoft/msgraph-beta-sdk/models/industryData/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the dataConnector property of the microsoft.graph.industryData.inboundFlow entity.
 */
export interface DataConnectorRequestBuilder extends BaseRequestBuilder<DataConnectorRequestBuilder> {
    /**
     * The data connector in the context of which this flow pulls in data from a source system.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IndustryDataConnector
     */
     get(requestConfiguration?: RequestConfiguration<DataConnectorRequestBuilderGetQueryParameters> | undefined) : Promise<IndustryDataConnector | undefined>;
    /**
     * The data connector in the context of which this flow pulls in data from a source system.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DataConnectorRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The data connector in the context of which this flow pulls in data from a source system.
 */
export interface DataConnectorRequestBuilderGetQueryParameters {
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
const DataConnectorRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DataConnectorRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createIndustryDataConnectorFromDiscriminatorValue,
        queryParametersMapper: DataConnectorRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const DataConnectorRequestBuilderUriTemplate = "{+baseurl}/external/industryData/inboundFlows/{inboundFlow%2Did}/dataConnector{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */