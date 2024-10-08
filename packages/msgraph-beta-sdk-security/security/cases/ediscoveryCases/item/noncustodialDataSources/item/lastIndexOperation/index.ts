/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createEdiscoveryIndexOperationFromDiscriminatorValue, type EdiscoveryIndexOperation } from '@microsoft/msgraph-beta-sdk/models/security/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the lastIndexOperation property of the microsoft.graph.security.ediscoveryNoncustodialDataSource entity.
 */
export interface LastIndexOperationRequestBuilder extends BaseRequestBuilder<LastIndexOperationRequestBuilder> {
    /**
     * Operation entity that represents the latest indexing for the non-custodial data source.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EdiscoveryIndexOperation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<LastIndexOperationRequestBuilderGetQueryParameters> | undefined) : Promise<EdiscoveryIndexOperation | undefined>;
    /**
     * Operation entity that represents the latest indexing for the non-custodial data source.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<LastIndexOperationRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Operation entity that represents the latest indexing for the non-custodial data source.
 */
export interface LastIndexOperationRequestBuilderGetQueryParameters {
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
export const LastIndexOperationRequestBuilderUriTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/noncustodialDataSources/{ediscoveryNoncustodialDataSource%2Did}/lastIndexOperation{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const LastIndexOperationRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const LastIndexOperationRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: LastIndexOperationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEdiscoveryIndexOperationFromDiscriminatorValue,
        queryParametersMapper: LastIndexOperationRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
