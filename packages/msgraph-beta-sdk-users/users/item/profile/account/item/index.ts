/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserAccountInformationFromDiscriminatorValue, serializeUserAccountInformation, type UserAccountInformation } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the account property of the microsoft.graph.profile entity.
 */
export interface UserAccountInformationItemRequestBuilder extends BaseRequestBuilder<UserAccountInformationItemRequestBuilder> {
    /**
     * Delete navigation property account for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get account from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserAccountInformation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<UserAccountInformationItemRequestBuilderGetQueryParameters> | undefined) : Promise<UserAccountInformation | undefined>;
    /**
     * Update the navigation property account in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserAccountInformation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: UserAccountInformation, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UserAccountInformation | undefined>;
    /**
     * Delete navigation property account for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get account from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserAccountInformationItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property account in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: UserAccountInformation, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get account from users
 */
export interface UserAccountInformationItemRequestBuilderGetQueryParameters {
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
export const UserAccountInformationItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/profile/account/{userAccountInformation%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UserAccountInformationItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserAccountInformationItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: UserAccountInformationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: UserAccountInformationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserAccountInformationFromDiscriminatorValue,
        queryParametersMapper: UserAccountInformationItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: UserAccountInformationItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserAccountInformationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUserAccountInformation,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
