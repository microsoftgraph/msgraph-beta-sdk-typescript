/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createOnenotePageCollectionResponseFromDiscriminatorValue, createOnenotePageFromDiscriminatorValue, serializeOnenotePage, type OnenotePage, type OnenotePageCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { OnenotePageItemRequestBuilderNavigationMetadata, OnenotePageItemRequestBuilderRequestsMetadata, type OnenotePageItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the pages property of the microsoft.graph.onenoteSection entity.
 */
export interface PagesRequestBuilder extends BaseRequestBuilder<PagesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the pages property of the microsoft.graph.onenoteSection entity.
     * @param onenotePageId The unique identifier of onenotePage
     * @returns {OnenotePageItemRequestBuilder}
     */
     byOnenotePageId(onenotePageId: string) : OnenotePageItemRequestBuilder;
    /**
     * The collection of pages in the section.  Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OnenotePageCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<PagesRequestBuilderGetQueryParameters> | undefined) : Promise<OnenotePageCollectionResponse | undefined>;
    /**
     * Create new navigation property to pages for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OnenotePage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: OnenotePage, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<OnenotePage | undefined>;
    /**
     * The collection of pages in the section.  Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PagesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to pages for sites
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: OnenotePage, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of pages in the section.  Read-only. Nullable.
 */
export interface PagesRequestBuilderGetQueryParameters {
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
export const PagesRequestBuilderUriTemplate = "{+baseurl}/sites/{site%2Did}/onenote/sections/{onenoteSection%2Did}/pages{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const PagesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const PagesRequestBuilderNavigationMetadata: Record<Exclude<keyof PagesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byOnenotePageId: {
        requestsMetadata: OnenotePageItemRequestBuilderRequestsMetadata,
        navigationMetadata: OnenotePageItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["onenotePage%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PagesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: PagesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOnenotePageCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: PagesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: PagesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOnenotePageFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeOnenotePage,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
