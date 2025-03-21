/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCustomAuthenticationExtensionFromDiscriminatorValue, serializeCustomAuthenticationExtension, type CustomAuthenticationExtension } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type ValidateAuthenticationConfigurationRequestBuilder, ValidateAuthenticationConfigurationRequestBuilderRequestsMetadata } from './validateAuthenticationConfiguration/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customAuthenticationExtensions property of the microsoft.graph.identityContainer entity.
 */
export interface CustomAuthenticationExtensionItemRequestBuilder extends BaseRequestBuilder<CustomAuthenticationExtensionItemRequestBuilder> {
    /**
     * Provides operations to call the validateAuthenticationConfiguration method.
     */
    get validateAuthenticationConfiguration(): ValidateAuthenticationConfigurationRequestBuilder;
    /**
     * Delete a customAuthenticationExtension object. The following derived types are currently supported.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/customauthenticationextension-delete?view=graph-rest-beta|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of an authenticationEventListener object. The @odata.type property in the response object indicates the type of the authenticationEventListener object. The following derived types are currently supported.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CustomAuthenticationExtension>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/authenticationeventlistener-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CustomAuthenticationExtensionItemRequestBuilderGetQueryParameters> | undefined) : Promise<CustomAuthenticationExtension | undefined>;
    /**
     * Update the navigation property customAuthenticationExtensions in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CustomAuthenticationExtension>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: CustomAuthenticationExtension, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CustomAuthenticationExtension | undefined>;
    /**
     * Delete a customAuthenticationExtension object. The following derived types are currently supported.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of an authenticationEventListener object. The @odata.type property in the response object indicates the type of the authenticationEventListener object. The following derived types are currently supported.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CustomAuthenticationExtensionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property customAuthenticationExtensions in identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: CustomAuthenticationExtension, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of an authenticationEventListener object. The @odata.type property in the response object indicates the type of the authenticationEventListener object. The following derived types are currently supported.
 */
export interface CustomAuthenticationExtensionItemRequestBuilderGetQueryParameters {
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
export const CustomAuthenticationExtensionItemRequestBuilderUriTemplate = "{+baseurl}/identity/customAuthenticationExtensions/{customAuthenticationExtension%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CustomAuthenticationExtensionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CustomAuthenticationExtensionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof CustomAuthenticationExtensionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    validateAuthenticationConfiguration: {
        requestsMetadata: ValidateAuthenticationConfigurationRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CustomAuthenticationExtensionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: CustomAuthenticationExtensionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: CustomAuthenticationExtensionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCustomAuthenticationExtensionFromDiscriminatorValue,
        queryParametersMapper: CustomAuthenticationExtensionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: CustomAuthenticationExtensionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCustomAuthenticationExtensionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCustomAuthenticationExtension,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
