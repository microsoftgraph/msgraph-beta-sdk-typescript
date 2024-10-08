/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSignInPreferencesFromDiscriminatorValue, serializeSignInPreferences, type SignInPreferences } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/authentication/signInPreferences
 */
export interface SignInPreferencesRequestBuilder extends BaseRequestBuilder<SignInPreferencesRequestBuilder> {
    /**
     * Read the properties of a user's authentication states. Use this API to retrieve the following information:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SignInPreferences>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     * @see {@link https://learn.microsoft.com/graph/api/authentication-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<SignInPreferencesRequestBuilderGetQueryParameters> | undefined) : Promise<SignInPreferences | undefined>;
    /**
     * Update the properties of a user's authentication method states. Use this API to update the following information:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SignInPreferences>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     * @see {@link https://learn.microsoft.com/graph/api/authentication-update?view=graph-rest-beta|Find more info here}
     */
     patch(body: SignInPreferences, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SignInPreferences | undefined>;
    /**
     * Read the properties of a user's authentication states. Use this API to retrieve the following information:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SignInPreferencesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a user's authentication method states. Use this API to update the following information:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toPatchRequestInformation(body: SignInPreferences, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties of a user's authentication states. Use this API to retrieve the following information:
 */
export interface SignInPreferencesRequestBuilderGetQueryParameters {
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
export const SignInPreferencesRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/authentication/signInPreferences{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SignInPreferencesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SignInPreferencesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: SignInPreferencesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSignInPreferencesFromDiscriminatorValue,
        queryParametersMapper: SignInPreferencesRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: SignInPreferencesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSignInPreferencesFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSignInPreferences,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
