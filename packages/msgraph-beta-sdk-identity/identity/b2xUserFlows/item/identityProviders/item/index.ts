/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createIdentityProviderFromDiscriminatorValue, type IdentityProvider } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the identityProviders property of the microsoft.graph.b2xIdentityUserFlow entity.
 */
export interface IdentityProviderItemRequestBuilder extends BaseRequestBuilder<IdentityProviderItemRequestBuilder> {
    /**
     * Delete an identity provider from a b2xIdentityUserFlow object. For self-service sign-up user flows, the values can be Google-OAUTH or Facebook-OAUTH.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider
     * @see {@link https://learn.microsoft.com/graph/api/b2xidentityuserflow-delete-identityproviders?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get identityProviders from identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityProvider
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider
     */
     get(requestConfiguration?: RequestConfiguration<IdentityProviderItemRequestBuilderGetQueryParameters> | undefined) : Promise<IdentityProvider | undefined>;
    /**
     * Delete an identity provider from a b2xIdentityUserFlow object. For self-service sign-up user flows, the values can be Google-OAUTH or Facebook-OAUTH.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get identityProviders from identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The identityProvider API is deprecated and will stop returning data on March 2023. Please use the new identityProviderBase API. as of 2021-05/identityProvider
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<IdentityProviderItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get identityProviders from identity
 */
export interface IdentityProviderItemRequestBuilderGetQueryParameters {
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
const IdentityProviderItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const IdentityProviderItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createIdentityProviderFromDiscriminatorValue,
        queryParametersMapper: IdentityProviderItemRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const IdentityProviderItemRequestBuilderUriTemplate = "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/identityProviders/{identityProvider%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */