/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue, type EdiscoveryNoncustodialDataSource } from '@microsoft/msgraph-beta-sdk/models/security/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the noncustodialSources property of the microsoft.graph.security.ediscoverySearch entity.
 */
export interface EdiscoveryNoncustodialDataSourceItemRequestBuilder extends BaseRequestBuilder<EdiscoveryNoncustodialDataSourceItemRequestBuilder> {
    /**
     * Remove an ediscoveryNoncustodialDataSource object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/security-ediscoverysearch-delete-noncustodialsources?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * noncustodialDataSource sources that are included in the eDiscovery search
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryNoncustodialDataSource
     */
     get(requestConfiguration?: RequestConfiguration<EdiscoveryNoncustodialDataSourceItemRequestBuilderGetQueryParameters> | undefined) : Promise<EdiscoveryNoncustodialDataSource | undefined>;
    /**
     * Remove an ediscoveryNoncustodialDataSource object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * noncustodialDataSource sources that are included in the eDiscovery search
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EdiscoveryNoncustodialDataSourceItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * noncustodialDataSource sources that are included in the eDiscovery search
 */
export interface EdiscoveryNoncustodialDataSourceItemRequestBuilderGetQueryParameters {
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
const EdiscoveryNoncustodialDataSourceItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EdiscoveryNoncustodialDataSourceItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue,
        queryParametersMapper: EdiscoveryNoncustodialDataSourceItemRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const EdiscoveryNoncustodialDataSourceItemRequestBuilderUriTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/searches/{ediscoverySearch%2Did}/noncustodialSources/{ediscoveryNoncustodialDataSource%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */