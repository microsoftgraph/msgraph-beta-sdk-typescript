/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
// @ts-ignore
import { createKnownIssueCollectionResponseFromDiscriminatorValue, createKnownIssueFromDiscriminatorValue, serializeKnownIssue, type KnownIssue, type KnownIssueCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/windowsUpdates/';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/';
// @ts-ignore
import { KnownIssueItemRequestBuilderNavigationMetadata, KnownIssueItemRequestBuilderRequestsMetadata, type KnownIssueItemRequestBuilder } from './item/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the knownIssues property of the microsoft.graph.windowsUpdates.product entity.
 */
export interface KnownIssuesRequestBuilder extends BaseRequestBuilder<KnownIssuesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the knownIssues property of the microsoft.graph.windowsUpdates.product entity.
     * @param knownIssueId The unique identifier of knownIssue
     * @returns {KnownIssueItemRequestBuilder}
     */
     byKnownIssueId(knownIssueId: string) : KnownIssueItemRequestBuilder;
    /**
     * Represents a known issue related to a Windows product.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<KnownIssueCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<KnownIssuesRequestBuilderGetQueryParameters> | undefined) : Promise<KnownIssueCollectionResponse | undefined>;
    /**
     * Create new navigation property to knownIssues for admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<KnownIssue>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: KnownIssue, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<KnownIssue | undefined>;
    /**
     * Represents a known issue related to a Windows product.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<KnownIssuesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to knownIssues for admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: KnownIssue, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Represents a known issue related to a Windows product.
 */
export interface KnownIssuesRequestBuilderGetQueryParameters {
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
export const KnownIssuesRequestBuilderUriTemplate = "{+baseurl}/admin/windows/updates/products/{product%2Did}/knownIssues{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const KnownIssuesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const KnownIssuesRequestBuilderNavigationMetadata: Record<Exclude<keyof KnownIssuesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byKnownIssueId: {
        requestsMetadata: KnownIssueItemRequestBuilderRequestsMetadata,
        navigationMetadata: KnownIssueItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["knownIssue%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const KnownIssuesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: KnownIssuesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createKnownIssueCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: KnownIssuesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: KnownIssuesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createKnownIssueFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeKnownIssue,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */