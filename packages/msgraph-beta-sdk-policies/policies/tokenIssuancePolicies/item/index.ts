/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createTokenIssuancePolicyFromDiscriminatorValue, serializeTokenIssuancePolicy, type TokenIssuancePolicy } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AppliesToRequestBuilderNavigationMetadata, AppliesToRequestBuilderRequestsMetadata, AppliesToRequestBuilderUriTemplate, type AppliesToRequestBuilder } from './appliesTo/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tokenIssuancePolicies property of the microsoft.graph.policyRoot entity.
 */
export interface TokenIssuancePolicyItemRequestBuilder extends BaseRequestBuilder<TokenIssuancePolicyItemRequestBuilder> {
    /**
     * Provides operations to manage the appliesTo property of the microsoft.graph.stsPolicy entity.
     */
    get appliesTo(): AppliesToRequestBuilder;
    /**
     * Delete a tokenIssuancePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/tokenissuancepolicy-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties and relationships of a tokenIssuancePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TokenIssuancePolicy
     * @see {@link https://learn.microsoft.com/graph/api/tokenissuancepolicy-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TokenIssuancePolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<TokenIssuancePolicy | undefined>;
    /**
     * Update the properties of a tokenIssuancePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TokenIssuancePolicy
     * @see {@link https://learn.microsoft.com/graph/api/tokenissuancepolicy-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: TokenIssuancePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TokenIssuancePolicy | undefined>;
    /**
     * Delete a tokenIssuancePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties and relationships of a tokenIssuancePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TokenIssuancePolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a tokenIssuancePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: TokenIssuancePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and relationships of a tokenIssuancePolicy object.
 */
export interface TokenIssuancePolicyItemRequestBuilderGetQueryParameters {
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
const TokenIssuancePolicyItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TokenIssuancePolicyItemRequestBuilderNavigationMetadata: Record<Exclude<keyof TokenIssuancePolicyItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    appliesTo: {
        uriTemplate: AppliesToRequestBuilderUriTemplate,
        requestsMetadata: AppliesToRequestBuilderRequestsMetadata,
        navigationMetadata: AppliesToRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TokenIssuancePolicyItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createTokenIssuancePolicyFromDiscriminatorValue,
        queryParametersMapper: TokenIssuancePolicyItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTokenIssuancePolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTokenIssuancePolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const TokenIssuancePolicyItemRequestBuilderUriTemplate = "{+baseurl}/policies/tokenIssuancePolicies/{tokenIssuancePolicy%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */