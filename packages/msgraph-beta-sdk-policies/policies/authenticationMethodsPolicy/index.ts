/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAuthenticationMethodsPolicyFromDiscriminatorValue, serializeAuthenticationMethodsPolicy, type AuthenticationMethodsPolicy } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AuthenticationMethodConfigurationsRequestBuilderNavigationMetadata, AuthenticationMethodConfigurationsRequestBuilderRequestsMetadata, AuthenticationMethodConfigurationsRequestBuilderUriTemplate, type AuthenticationMethodConfigurationsRequestBuilder } from './authenticationMethodConfigurations/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the authenticationMethodsPolicy property of the microsoft.graph.policyRoot entity.
 */
export interface AuthenticationMethodsPolicyRequestBuilder extends BaseRequestBuilder<AuthenticationMethodsPolicyRequestBuilder> {
    /**
     * Provides operations to manage the authenticationMethodConfigurations property of the microsoft.graph.authenticationMethodsPolicy entity.
     */
    get authenticationMethodConfigurations(): AuthenticationMethodConfigurationsRequestBuilder;
    /**
     * Delete navigation property authenticationMethodsPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of an authenticationMethodsPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationMethodsPolicy
     * @see {@link https://learn.microsoft.com/graph/api/authenticationmethodspolicy-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AuthenticationMethodsPolicyRequestBuilderGetQueryParameters> | undefined) : Promise<AuthenticationMethodsPolicy | undefined>;
    /**
     * Update the properties of an authenticationMethodsPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthenticationMethodsPolicy
     * @see {@link https://learn.microsoft.com/graph/api/authenticationmethodspolicy-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: AuthenticationMethodsPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AuthenticationMethodsPolicy | undefined>;
    /**
     * Delete navigation property authenticationMethodsPolicy for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of an authenticationMethodsPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AuthenticationMethodsPolicyRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of an authenticationMethodsPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: AuthenticationMethodsPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of an authenticationMethodsPolicy object.
 */
export interface AuthenticationMethodsPolicyRequestBuilderGetQueryParameters {
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
const AuthenticationMethodsPolicyRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AuthenticationMethodsPolicyRequestBuilderNavigationMetadata: Record<Exclude<keyof AuthenticationMethodsPolicyRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    authenticationMethodConfigurations: {
        uriTemplate: AuthenticationMethodConfigurationsRequestBuilderUriTemplate,
        requestsMetadata: AuthenticationMethodConfigurationsRequestBuilderRequestsMetadata,
        navigationMetadata: AuthenticationMethodConfigurationsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AuthenticationMethodsPolicyRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createAuthenticationMethodsPolicyFromDiscriminatorValue,
        queryParametersMapper: AuthenticationMethodsPolicyRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAuthenticationMethodsPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAuthenticationMethodsPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AuthenticationMethodsPolicyRequestBuilderUriTemplate = "{+baseurl}/policies/authenticationMethodsPolicy{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */