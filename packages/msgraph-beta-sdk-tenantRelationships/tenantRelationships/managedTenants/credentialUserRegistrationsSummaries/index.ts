/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCredentialUserRegistrationsSummaryCollectionResponseFromDiscriminatorValue, createCredentialUserRegistrationsSummaryFromDiscriminatorValue, serializeCredentialUserRegistrationsSummary, type CredentialUserRegistrationsSummary, type CredentialUserRegistrationsSummaryCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/managedTenants/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { CredentialUserRegistrationsSummaryItemRequestBuilderRequestsMetadata, CredentialUserRegistrationsSummaryItemRequestBuilderUriTemplate, type CredentialUserRegistrationsSummaryItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the credentialUserRegistrationsSummaries property of the microsoft.graph.managedTenants.managedTenant entity.
 */
export interface CredentialUserRegistrationsSummariesRequestBuilder extends BaseRequestBuilder<CredentialUserRegistrationsSummariesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the credentialUserRegistrationsSummaries property of the microsoft.graph.managedTenants.managedTenant entity.
     * @param credentialUserRegistrationsSummaryId The unique identifier of credentialUserRegistrationsSummary
     * @returns a CredentialUserRegistrationsSummaryItemRequestBuilder
     */
     byCredentialUserRegistrationsSummaryId(credentialUserRegistrationsSummaryId: string) : CredentialUserRegistrationsSummaryItemRequestBuilder;
    /**
     * Get a list of the credentialUserRegistrationsSummary objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CredentialUserRegistrationsSummaryCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/managedtenants-managedtenant-list-credentialuserregistrationssummaries?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CredentialUserRegistrationsSummariesRequestBuilderGetQueryParameters> | undefined) : Promise<CredentialUserRegistrationsSummaryCollectionResponse | undefined>;
    /**
     * Create new navigation property to credentialUserRegistrationsSummaries for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CredentialUserRegistrationsSummary
     */
     post(body: CredentialUserRegistrationsSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CredentialUserRegistrationsSummary | undefined>;
    /**
     * Get a list of the credentialUserRegistrationsSummary objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CredentialUserRegistrationsSummariesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to credentialUserRegistrationsSummaries for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: CredentialUserRegistrationsSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the credentialUserRegistrationsSummary objects and their properties.
 */
export interface CredentialUserRegistrationsSummariesRequestBuilderGetQueryParameters {
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
const CredentialUserRegistrationsSummariesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const CredentialUserRegistrationsSummariesRequestBuilderNavigationMetadata: Record<Exclude<keyof CredentialUserRegistrationsSummariesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCredentialUserRegistrationsSummaryId: {
        uriTemplate: CredentialUserRegistrationsSummaryItemRequestBuilderUriTemplate,
        requestsMetadata: CredentialUserRegistrationsSummaryItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["credentialUserRegistrationsSummary%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CredentialUserRegistrationsSummariesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCredentialUserRegistrationsSummaryCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CredentialUserRegistrationsSummariesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCredentialUserRegistrationsSummaryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCredentialUserRegistrationsSummary,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CredentialUserRegistrationsSummariesRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants/credentialUserRegistrationsSummaries{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */