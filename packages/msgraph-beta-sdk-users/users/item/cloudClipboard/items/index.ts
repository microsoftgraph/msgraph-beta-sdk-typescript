/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCloudClipboardItemCollectionResponseFromDiscriminatorValue, createCloudClipboardItemFromDiscriminatorValue, serializeCloudClipboardItem, type CloudClipboardItem, type CloudClipboardItemCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/';
import { CloudClipboardItemItemRequestBuilderRequestsMetadata, type CloudClipboardItemItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the items property of the microsoft.graph.cloudClipboardRoot entity.
 */
export interface ItemsRequestBuilder extends BaseRequestBuilder<ItemsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the items property of the microsoft.graph.cloudClipboardRoot entity.
     * @param cloudClipboardItemId The unique identifier of cloudClipboardItem
     * @returns {CloudClipboardItemItemRequestBuilder}
     */
     byCloudClipboardItemId(cloudClipboardItemId: string) : CloudClipboardItemItemRequestBuilder;
    /**
     * Get items from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudClipboardItemCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ItemsRequestBuilderGetQueryParameters> | undefined) : Promise<CloudClipboardItemCollectionResponse | undefined>;
    /**
     * Create new navigation property to items for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudClipboardItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: CloudClipboardItem, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CloudClipboardItem | undefined>;
    /**
     * Get items from users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ItemsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to items for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CloudClipboardItem, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get items from users
 */
export interface ItemsRequestBuilderGetQueryParameters {
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
export const ItemsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/cloudClipboard/items{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ItemsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ItemsRequestBuilderNavigationMetadata: Record<Exclude<keyof ItemsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCloudClipboardItemId: {
        requestsMetadata: CloudClipboardItemItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["cloudClipboardItem%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ItemsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ItemsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudClipboardItemCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ItemsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ItemsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudClipboardItemFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCloudClipboardItem,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */