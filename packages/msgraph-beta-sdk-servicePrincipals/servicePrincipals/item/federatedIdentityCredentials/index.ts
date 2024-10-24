/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createFederatedIdentityCredentialCollectionResponseFromDiscriminatorValue, createFederatedIdentityCredentialFromDiscriminatorValue, serializeFederatedIdentityCredential, type FederatedIdentityCredential, type FederatedIdentityCredentialCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { FederatedIdentityCredentialItemRequestBuilderRequestsMetadata, type FederatedIdentityCredentialItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.servicePrincipal entity.
 */
export interface FederatedIdentityCredentialsRequestBuilder extends BaseRequestBuilder<FederatedIdentityCredentialsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.servicePrincipal entity.
     * @param federatedIdentityCredentialId The unique identifier of federatedIdentityCredential
     * @returns {FederatedIdentityCredentialItemRequestBuilder}
     */
     byFederatedIdentityCredentialId(federatedIdentityCredentialId: string) : FederatedIdentityCredentialItemRequestBuilder;
    /**
     * Get federatedIdentityCredentials from servicePrincipals
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FederatedIdentityCredentialCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<FederatedIdentityCredentialsRequestBuilderGetQueryParameters> | undefined) : Promise<FederatedIdentityCredentialCollectionResponse | undefined>;
    /**
     * Create new navigation property to federatedIdentityCredentials for servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FederatedIdentityCredential>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: FederatedIdentityCredential, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<FederatedIdentityCredential | undefined>;
    /**
     * Get federatedIdentityCredentials from servicePrincipals
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FederatedIdentityCredentialsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to federatedIdentityCredentials for servicePrincipals
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: FederatedIdentityCredential, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get federatedIdentityCredentials from servicePrincipals
 */
export interface FederatedIdentityCredentialsRequestBuilderGetQueryParameters {
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
export const FederatedIdentityCredentialsRequestBuilderUriTemplate = "{+baseurl}/servicePrincipals/{servicePrincipal%2Did}/federatedIdentityCredentials{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FederatedIdentityCredentialsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const FederatedIdentityCredentialsRequestBuilderNavigationMetadata: Record<Exclude<keyof FederatedIdentityCredentialsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byFederatedIdentityCredentialId: {
        requestsMetadata: FederatedIdentityCredentialItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["federatedIdentityCredential%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FederatedIdentityCredentialsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: FederatedIdentityCredentialsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFederatedIdentityCredentialCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: FederatedIdentityCredentialsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: FederatedIdentityCredentialsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFederatedIdentityCredentialFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeFederatedIdentityCredential,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
