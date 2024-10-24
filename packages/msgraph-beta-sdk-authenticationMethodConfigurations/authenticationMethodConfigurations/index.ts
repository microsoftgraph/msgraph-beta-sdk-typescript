/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAuthenticationMethodConfigurationCollectionResponseFromDiscriminatorValue, createAuthenticationMethodConfigurationFromDiscriminatorValue, serializeAuthenticationMethodConfiguration, type AuthenticationMethodConfiguration, type AuthenticationMethodConfigurationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { AuthenticationMethodConfigurationItemRequestBuilderRequestsMetadata, type AuthenticationMethodConfigurationItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of authenticationMethodConfiguration entities.
 */
export interface AuthenticationMethodConfigurationsRequestBuilder extends BaseRequestBuilder<AuthenticationMethodConfigurationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the collection of authenticationMethodConfiguration entities.
     * @param authenticationMethodConfigurationId The unique identifier of authenticationMethodConfiguration
     * @returns {AuthenticationMethodConfigurationItemRequestBuilder}
     */
     byAuthenticationMethodConfigurationId(authenticationMethodConfigurationId: string) : AuthenticationMethodConfigurationItemRequestBuilder;
    /**
     * Get entities from authenticationMethodConfigurations
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AuthenticationMethodConfigurationCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AuthenticationMethodConfigurationsRequestBuilderGetQueryParameters> | undefined) : Promise<AuthenticationMethodConfigurationCollectionResponse | undefined>;
    /**
     * Add new entity to authenticationMethodConfigurations
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AuthenticationMethodConfiguration>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: AuthenticationMethodConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AuthenticationMethodConfiguration | undefined>;
    /**
     * Get entities from authenticationMethodConfigurations
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AuthenticationMethodConfigurationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Add new entity to authenticationMethodConfigurations
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AuthenticationMethodConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get entities from authenticationMethodConfigurations
 */
export interface AuthenticationMethodConfigurationsRequestBuilderGetQueryParameters {
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
 * Uri template for the request builder.
 */
export const AuthenticationMethodConfigurationsRequestBuilderUriTemplate = "{+baseurl}/authenticationMethodConfigurations{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AuthenticationMethodConfigurationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AuthenticationMethodConfigurationsRequestBuilderNavigationMetadata: Record<Exclude<keyof AuthenticationMethodConfigurationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAuthenticationMethodConfigurationId: {
        requestsMetadata: AuthenticationMethodConfigurationItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["authenticationMethodConfiguration%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AuthenticationMethodConfigurationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AuthenticationMethodConfigurationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAuthenticationMethodConfigurationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AuthenticationMethodConfigurationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: AuthenticationMethodConfigurationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAuthenticationMethodConfigurationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAuthenticationMethodConfiguration,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
