/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDirectoryObjectCollectionResponseFromDiscriminatorValue, type DirectoryObjectCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { GraphOrgContactRequestBuilderNavigationMetadata, GraphOrgContactRequestBuilderRequestsMetadata, type GraphOrgContactRequestBuilder } from './graphOrgContact/index.js';
// @ts-ignore
import { GraphUserRequestBuilderNavigationMetadata, GraphUserRequestBuilderRequestsMetadata, type GraphUserRequestBuilder } from './graphUser/index.js';
// @ts-ignore
import { DirectoryObjectItemRequestBuilderNavigationMetadata, DirectoryObjectItemRequestBuilderRequestsMetadata, type DirectoryObjectItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the directReports property of the microsoft.graph.user entity.
 */
export interface DirectReportsRequestBuilder extends BaseRequestBuilder<DirectReportsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Casts the previous resource to orgContact.
     */
    get graphOrgContact(): GraphOrgContactRequestBuilder;
    /**
     * Casts the previous resource to user.
     */
    get graphUser(): GraphUserRequestBuilder;
    /**
     * Provides operations to manage the directReports property of the microsoft.graph.user entity.
     * @param directoryObjectId The unique identifier of directoryObject
     * @returns {DirectoryObjectItemRequestBuilder}
     */
     byDirectoryObjectId(directoryObjectId: string) : DirectoryObjectItemRequestBuilder;
    /**
     * The users and contacts that report to the user. (The users and contacts with their manager property set to this user.) Read-only. Nullable. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DirectoryObjectCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DirectReportsRequestBuilderGetQueryParameters> | undefined) : Promise<DirectoryObjectCollectionResponse | undefined>;
    /**
     * The users and contacts that report to the user. (The users and contacts with their manager property set to this user.) Read-only. Nullable. Supports $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DirectReportsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The users and contacts that report to the user. (The users and contacts with their manager property set to this user.) Read-only. Nullable. Supports $expand.
 */
export interface DirectReportsRequestBuilderGetQueryParameters {
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
export const DirectReportsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/directReports{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DirectReportsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const DirectReportsRequestBuilderNavigationMetadata: Record<Exclude<keyof DirectReportsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDirectoryObjectId: {
        requestsMetadata: DirectoryObjectItemRequestBuilderRequestsMetadata,
        navigationMetadata: DirectoryObjectItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["directoryObject%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    graphOrgContact: {
        requestsMetadata: GraphOrgContactRequestBuilderRequestsMetadata,
        navigationMetadata: GraphOrgContactRequestBuilderNavigationMetadata,
    },
    graphUser: {
        requestsMetadata: GraphUserRequestBuilderRequestsMetadata,
        navigationMetadata: GraphUserRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DirectReportsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DirectReportsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDirectoryObjectCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DirectReportsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
