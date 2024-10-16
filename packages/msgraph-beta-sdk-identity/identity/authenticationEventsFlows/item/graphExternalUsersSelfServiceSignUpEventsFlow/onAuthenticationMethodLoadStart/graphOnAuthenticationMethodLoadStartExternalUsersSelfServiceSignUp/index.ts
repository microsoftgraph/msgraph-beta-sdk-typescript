/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUpFromDiscriminatorValue, type OnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUp } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { IdentityProvidersRequestBuilderNavigationMetadata, IdentityProvidersRequestBuilderRequestsMetadata, type IdentityProvidersRequestBuilder } from './identityProviders/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Casts the previous resource to onAuthenticationMethodLoadStartExternalUsersSelfServiceSignUp.
 */
export interface GraphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUpRequestBuilder extends BaseRequestBuilder<GraphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUpRequestBuilder> {
    /**
     * Provides operations to manage the identityProviders property of the microsoft.graph.onAuthenticationMethodLoadStartExternalUsersSelfServiceSignUp entity.
     */
    get identityProviders(): IdentityProvidersRequestBuilder;
    /**
     * Get the item of type microsoft.graph.onAuthenticationMethodLoadStartHandler as microsoft.graph.onAuthenticationMethodLoadStartExternalUsersSelfServiceSignUp
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUp>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<OnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUp | undefined>;
    /**
     * Get the item of type microsoft.graph.onAuthenticationMethodLoadStartHandler as microsoft.graph.onAuthenticationMethodLoadStartExternalUsersSelfServiceSignUp
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const GraphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUpRequestBuilderUriTemplate = "{+baseurl}/identity/authenticationEventsFlows/{authenticationEventsFlow%2Did}/graph.externalUsersSelfServiceSignUpEventsFlow/onAuthenticationMethodLoadStart/graph.onAuthenticationMethodLoadStartExternalUsersSelfServiceSignUp";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const GraphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUpRequestBuilderNavigationMetadata: Record<Exclude<keyof GraphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUpRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    identityProviders: {
        requestsMetadata: IdentityProvidersRequestBuilderRequestsMetadata,
        navigationMetadata: IdentityProvidersRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GraphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUpRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GraphOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUpRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOnAuthenticationMethodLoadStartExternalUsersSelfServiceSignUpFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
