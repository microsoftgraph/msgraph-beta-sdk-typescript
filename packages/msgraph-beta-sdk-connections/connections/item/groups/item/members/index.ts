/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createIdentityCollectionResponseFromDiscriminatorValue, createIdentityFromDiscriminatorValue, serializeIdentity, type Identity, type IdentityCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/externalConnectors/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { IdentityItemRequestBuilderRequestsMetadata, IdentityItemRequestBuilderUriTemplate, type IdentityItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the members property of the microsoft.graph.externalConnectors.externalGroup entity.
 */
export interface MembersRequestBuilder extends BaseRequestBuilder<MembersRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the members property of the microsoft.graph.externalConnectors.externalGroup entity.
     * @param identityId The unique identifier of identity
     * @returns a IdentityItemRequestBuilder
     */
     byIdentityId(identityId: string) : IdentityItemRequestBuilder;
    /**
     * A member added to an externalGroup. You can add Microsoft Entra users, Microsoft Entra groups, or other externalGroups as members.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<MembersRequestBuilderGetQueryParameters> | undefined) : Promise<IdentityCollectionResponse | undefined>;
    /**
     * Create a new externalGroupMember object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Identity
     * @see {@link https://learn.microsoft.com/graph/api/externalconnectors-externalgroup-post-members?view=graph-rest-1.0|Find more info here}
     */
     post(body: Identity, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Identity | undefined>;
    /**
     * A member added to an externalGroup. You can add Microsoft Entra users, Microsoft Entra groups, or other externalGroups as members.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MembersRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new externalGroupMember object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Identity, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A member added to an externalGroup. You can add Microsoft Entra users, Microsoft Entra groups, or other externalGroups as members.
 */
export interface MembersRequestBuilderGetQueryParameters {
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
const MembersRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const MembersRequestBuilderNavigationMetadata: Record<Exclude<keyof MembersRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byIdentityId: {
        uriTemplate: IdentityItemRequestBuilderUriTemplate,
        requestsMetadata: IdentityItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["identity%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MembersRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createIdentityCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: MembersRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createIdentityFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeIdentity,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const MembersRequestBuilderUriTemplate = "{+baseurl}/connections/{externalConnection%2Did}/groups/{externalGroup%2Did}/members{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */