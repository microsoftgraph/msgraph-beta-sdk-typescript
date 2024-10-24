/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTrendingFromDiscriminatorValue, serializeTrending, type Trending } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ResourceRequestBuilderRequestsMetadata, type ResourceRequestBuilder } from './resource/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the trending property of the microsoft.graph.officeGraphInsights entity.
 */
export interface TrendingItemRequestBuilder extends BaseRequestBuilder<TrendingItemRequestBuilder> {
    /**
     * Provides operations to manage the resource property of the microsoft.graph.trending entity.
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
    get resource(): ResourceRequestBuilder;
    /**
     * Delete navigation property trending for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Access this property from the derived type itemInsights.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Trending>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     get(requestConfiguration?: RequestConfiguration<TrendingItemRequestBuilderGetQueryParameters> | undefined) : Promise<Trending | undefined>;
    /**
     * Update the navigation property trending in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Trending>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     patch(body: Trending, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Trending | undefined>;
    /**
     * Delete navigation property trending for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Access this property from the derived type itemInsights.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TrendingItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property trending in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toPatchRequestInformation(body: Trending, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Access this property from the derived type itemInsights.
 */
export interface TrendingItemRequestBuilderGetQueryParameters {
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
export const TrendingItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/insights/trending/{trending%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TrendingItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TrendingItemRequestBuilderNavigationMetadata: Record<Exclude<keyof TrendingItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    resource: {
        requestsMetadata: ResourceRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TrendingItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: TrendingItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: TrendingItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTrendingFromDiscriminatorValue,
        queryParametersMapper: TrendingItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: TrendingItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTrendingFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTrending,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
