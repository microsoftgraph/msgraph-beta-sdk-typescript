/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createTokenLifetimePolicyFromDiscriminatorValue, type TokenLifetimePolicy } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tokenLifetimePolicies property of the microsoft.graph.servicePrincipal entity.
 */
export interface TokenLifetimePolicyItemRequestBuilder extends BaseRequestBuilder<TokenLifetimePolicyItemRequestBuilder> {
    /**
     * The tokenLifetimePolicies assigned to this service principal. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TokenLifetimePolicy
     */
     get(requestConfiguration?: RequestConfiguration<TokenLifetimePolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<TokenLifetimePolicy | undefined>;
    /**
     * The tokenLifetimePolicies assigned to this service principal. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TokenLifetimePolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The tokenLifetimePolicies assigned to this service principal. Supports $expand.
 */
export interface TokenLifetimePolicyItemRequestBuilderGetQueryParameters {
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
const TokenLifetimePolicyItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TokenLifetimePolicyItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTokenLifetimePolicyFromDiscriminatorValue,
        queryParametersMapper: TokenLifetimePolicyItemRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const TokenLifetimePolicyItemRequestBuilderUriTemplate = "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/tokenLifetimePolicies/{tokenLifetimePolicy%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */