/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAuthenticationStrengthPolicyCollectionResponseFromDiscriminatorValue, createAuthenticationStrengthPolicyFromDiscriminatorValue, serializeAuthenticationStrengthPolicy, type AuthenticationStrengthPolicy, type AuthenticationStrengthPolicyCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { FindByMethodModeWithAuthenticationMethodModesRequestBuilderRequestsMetadata, FindByMethodModeWithAuthenticationMethodModesRequestBuilderUriTemplate, type FindByMethodModeWithAuthenticationMethodModesRequestBuilder } from './findByMethodModeWithAuthenticationMethodModes/';
import { AuthenticationStrengthPolicyItemRequestBuilderNavigationMetadata, AuthenticationStrengthPolicyItemRequestBuilderRequestsMetadata, AuthenticationStrengthPolicyItemRequestBuilderUriTemplate, type AuthenticationStrengthPolicyItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the authenticationStrengthPolicies property of the microsoft.graph.policyRoot entity.
 */
export interface AuthenticationStrengthPoliciesRequestBuilder extends BaseRequestBuilder<AuthenticationStrengthPoliciesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the authenticationStrengthPolicies property of the microsoft.graph.policyRoot entity.
     * @param authenticationStrengthPolicyId The unique identifier of authenticationStrengthPolicy
     * @returns a AuthenticationStrengthPolicyItemRequestBuilder
     */
     byAuthenticationStrengthPolicyId(authenticationStrengthPolicyId: string) : AuthenticationStrengthPolicyItemRequestBuilder;
    /**
     * Provides operations to call the findByMethodMode method.
     * @param authenticationMethodModes Usage: authenticationMethodModes={authenticationMethodModes}
     * @returns a findByMethodModeWithAuthenticationMethodModesRequestBuilder
     * @deprecated The findByMethodMode function is deprecated. Please use OData filter query instead. as of 2023-02/FindByMethodModeRemove
     */
     findByMethodModeWithAuthenticationMethodModes(authenticationMethodModes: string | undefined) : FindByMethodModeWithAuthenticationMethodModesRequestBuilder;
    /**
     * Get a list of the authenticationStrengthPolicy objects and their properties. This API returns both built-in and custom policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationStrengthPolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/authenticationstrengthroot-list-policies?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AuthenticationStrengthPoliciesRequestBuilderGetQueryParameters> | undefined) : Promise<AuthenticationStrengthPolicyCollectionResponse | undefined>;
    /**
     * Create a new custom authenticationStrengthPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationStrengthPolicy
     * @see {@link https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies?view=graph-rest-1.0|Find more info here}
     */
     post(body: AuthenticationStrengthPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AuthenticationStrengthPolicy | undefined>;
    /**
     * Get a list of the authenticationStrengthPolicy objects and their properties. This API returns both built-in and custom policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AuthenticationStrengthPoliciesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new custom authenticationStrengthPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: AuthenticationStrengthPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the authenticationStrengthPolicy objects and their properties. This API returns both built-in and custom policies.
 */
export interface AuthenticationStrengthPoliciesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AuthenticationStrengthPoliciesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AuthenticationStrengthPoliciesRequestBuilderNavigationMetadata: Record<Exclude<keyof AuthenticationStrengthPoliciesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAuthenticationStrengthPolicyId: {
        uriTemplate: AuthenticationStrengthPolicyItemRequestBuilderUriTemplate,
        requestsMetadata: AuthenticationStrengthPolicyItemRequestBuilderRequestsMetadata,
        navigationMetadata: AuthenticationStrengthPolicyItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["authenticationStrengthPolicy%2Did"],
    },
    findByMethodModeWithAuthenticationMethodModes: {
        uriTemplate: FindByMethodModeWithAuthenticationMethodModesRequestBuilderUriTemplate,
        requestsMetadata: FindByMethodModeWithAuthenticationMethodModesRequestBuilderRequestsMetadata,
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AuthenticationStrengthPoliciesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAuthenticationStrengthPolicyCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AuthenticationStrengthPoliciesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAuthenticationStrengthPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAuthenticationStrengthPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AuthenticationStrengthPoliciesRequestBuilderUriTemplate = "{+baseurl}/policies/authenticationStrengthPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */