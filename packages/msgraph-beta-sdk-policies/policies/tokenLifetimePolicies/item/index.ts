/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createTokenLifetimePolicyFromDiscriminatorValue, serializeTokenLifetimePolicy, type TokenLifetimePolicy } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AppliesToRequestBuilderNavigationMetadata, AppliesToRequestBuilderRequestsMetadata, AppliesToRequestBuilderUriTemplate, type AppliesToRequestBuilder } from './appliesTo/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tokenLifetimePolicies property of the microsoft.graph.policyRoot entity.
 */
export interface TokenLifetimePolicyItemRequestBuilder extends BaseRequestBuilder<TokenLifetimePolicyItemRequestBuilder> {
    /**
     * Provides operations to manage the appliesTo property of the microsoft.graph.stsPolicy entity.
     */
    get appliesTo(): AppliesToRequestBuilder;
    /**
     * Delete a tokenLifetimePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/tokenlifetimepolicy-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties and relationships of a tokenLifetimePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TokenLifetimePolicy
     * @see {@link https://learn.microsoft.com/graph/api/tokenlifetimepolicy-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TokenLifetimePolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<TokenLifetimePolicy | undefined>;
    /**
     * Update the properties of a tokenLifetimePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TokenLifetimePolicy
     * @see {@link https://learn.microsoft.com/graph/api/tokenlifetimepolicy-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: TokenLifetimePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TokenLifetimePolicy | undefined>;
    /**
     * Delete a tokenLifetimePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties and relationships of a tokenLifetimePolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TokenLifetimePolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a tokenLifetimePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: TokenLifetimePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and relationships of a tokenLifetimePolicy object.
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
 * Metadata for all the navigation properties in the request builder.
 */
export const TokenLifetimePolicyItemRequestBuilderNavigationMetadata: Record<Exclude<keyof TokenLifetimePolicyItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    appliesTo: {
        uriTemplate: AppliesToRequestBuilderUriTemplate,
        requestsMetadata: AppliesToRequestBuilderRequestsMetadata,
        navigationMetadata: AppliesToRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TokenLifetimePolicyItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createTokenLifetimePolicyFromDiscriminatorValue,
        queryParametersMapper: TokenLifetimePolicyItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTokenLifetimePolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTokenLifetimePolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const TokenLifetimePolicyItemRequestBuilderUriTemplate = "{+baseurl}/policies/tokenLifetimePolicies/{tokenLifetimePolicy%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */