/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createItemCollectionResponseFromDiscriminatorValue, createItemFromDiscriminatorValue, serializeItem, type Item, type ItemCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { ItemItemRequestBuilderNavigationMetadata, ItemItemRequestBuilderRequestsMetadata, ItemItemRequestBuilderUriTemplate, type ItemItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
import { type Guid } from 'guid-typescript';

/**
 * Provides operations to manage the items property of the microsoft.graph.company entity.
 */
export interface ItemsRequestBuilder extends BaseRequestBuilder<ItemsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the items property of the microsoft.graph.company entity.
     * @param itemId The unique identifier of item
     * @returns a ItemItemRequestBuilder
     */
     byItemId(itemId: Guid) : ItemItemRequestBuilder;
    /**
     * Get items from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ItemCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<ItemsRequestBuilderGetQueryParameters> | undefined) : Promise<ItemCollectionResponse | undefined>;
    /**
     * Create new navigation property to items for financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Item
     */
     post(body: Item, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Item | undefined>;
    /**
     * Get items from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ItemsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to items for financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Item, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get items from financials
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
    byItemId: {
        uriTemplate: ItemItemRequestBuilderUriTemplate,
        requestsMetadata: ItemItemRequestBuilderRequestsMetadata,
        navigationMetadata: ItemItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["item%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ItemsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createItemCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ItemsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createItemFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeItem,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ItemsRequestBuilderUriTemplate = "{+baseurl}/financials/companies/{company%2Did}/items{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */