/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createEdiscoveryCustodianFromDiscriminatorValue, type EdiscoveryCustodian } from '@microsoft/msgraph-beta-sdk/models/security/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the custodian property of the microsoft.graph.security.ediscoveryFile entity.
 */
export interface CustodianRequestBuilder extends BaseRequestBuilder<CustodianRequestBuilder> {
    /**
     * Custodians associated with the file.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EdiscoveryCustodian
     */
     get(requestConfiguration?: RequestConfiguration<CustodianRequestBuilderGetQueryParameters> | undefined) : Promise<EdiscoveryCustodian | undefined>;
    /**
     * Custodians associated with the file.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CustodianRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Custodians associated with the file.
 */
export interface CustodianRequestBuilderGetQueryParameters {
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
const CustodianRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CustodianRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEdiscoveryCustodianFromDiscriminatorValue,
        queryParametersMapper: CustodianRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const CustodianRequestBuilderUriTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/reviewSets/{ediscoveryReviewSet%2Did}/files/{ediscoveryFile%2Did}/custodian{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */