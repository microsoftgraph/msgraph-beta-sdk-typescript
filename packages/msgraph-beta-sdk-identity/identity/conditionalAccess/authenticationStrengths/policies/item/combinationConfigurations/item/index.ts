/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAuthenticationCombinationConfigurationFromDiscriminatorValue, serializeAuthenticationCombinationConfiguration, type AuthenticationCombinationConfiguration } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the combinationConfigurations property of the microsoft.graph.authenticationStrengthPolicy entity.
 */
export interface AuthenticationCombinationConfigurationItemRequestBuilder extends BaseRequestBuilder<AuthenticationCombinationConfigurationItemRequestBuilder> {
    /**
     * Delete navigation property combinationConfigurations for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The &apos;authenticationStrengths&apos; segment is deprecated. Please use &apos;authenticationStrength&apos; instead. as of 2023-02/AuthenticationStrengthsRemove on 2023-02-01 and will be removed 2023-03-31
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Settings that may be used to require specific types or instances of an authentication method to be used when authenticating with a specified combination of authentication methods.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AuthenticationCombinationConfiguration>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The &apos;authenticationStrengths&apos; segment is deprecated. Please use &apos;authenticationStrength&apos; instead. as of 2023-02/AuthenticationStrengthsRemove on 2023-02-01 and will be removed 2023-03-31
     */
     get(requestConfiguration?: RequestConfiguration<AuthenticationCombinationConfigurationItemRequestBuilderGetQueryParameters> | undefined) : Promise<AuthenticationCombinationConfiguration | undefined>;
    /**
     * Update the navigation property combinationConfigurations in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AuthenticationCombinationConfiguration>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The &apos;authenticationStrengths&apos; segment is deprecated. Please use &apos;authenticationStrength&apos; instead. as of 2023-02/AuthenticationStrengthsRemove on 2023-02-01 and will be removed 2023-03-31
     */
     patch(body: AuthenticationCombinationConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AuthenticationCombinationConfiguration | undefined>;
    /**
     * Delete navigation property combinationConfigurations for identity
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The &apos;authenticationStrengths&apos; segment is deprecated. Please use &apos;authenticationStrength&apos; instead. as of 2023-02/AuthenticationStrengthsRemove on 2023-02-01 and will be removed 2023-03-31
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Settings that may be used to require specific types or instances of an authentication method to be used when authenticating with a specified combination of authentication methods.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The &apos;authenticationStrengths&apos; segment is deprecated. Please use &apos;authenticationStrength&apos; instead. as of 2023-02/AuthenticationStrengthsRemove on 2023-02-01 and will be removed 2023-03-31
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AuthenticationCombinationConfigurationItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property combinationConfigurations in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The &apos;authenticationStrengths&apos; segment is deprecated. Please use &apos;authenticationStrength&apos; instead. as of 2023-02/AuthenticationStrengthsRemove on 2023-02-01 and will be removed 2023-03-31
     */
     toPatchRequestInformation(body: AuthenticationCombinationConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Settings that may be used to require specific types or instances of an authentication method to be used when authenticating with a specified combination of authentication methods.
 */
export interface AuthenticationCombinationConfigurationItemRequestBuilderGetQueryParameters {
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
 * Uri template for the request builder.
 */
export const AuthenticationCombinationConfigurationItemRequestBuilderUriTemplate = "{+baseurl}/identity/conditionalAccess/authenticationStrengths/policies/{authenticationStrengthPolicy%2Did}/combinationConfigurations/{authenticationCombinationConfiguration%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AuthenticationCombinationConfigurationItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AuthenticationCombinationConfigurationItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AuthenticationCombinationConfigurationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AuthenticationCombinationConfigurationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAuthenticationCombinationConfigurationFromDiscriminatorValue,
        queryParametersMapper: AuthenticationCombinationConfigurationItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AuthenticationCombinationConfigurationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAuthenticationCombinationConfigurationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAuthenticationCombinationConfiguration,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
