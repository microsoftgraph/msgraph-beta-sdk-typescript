/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createActivityHistoryItemCollectionResponseFromDiscriminatorValue, createActivityHistoryItemFromDiscriminatorValue, serializeActivityHistoryItem, type ActivityHistoryItem, type ActivityHistoryItemCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { ActivityHistoryItemItemRequestBuilderNavigationMetadata, ActivityHistoryItemItemRequestBuilderRequestsMetadata, ActivityHistoryItemItemRequestBuilderUriTemplate, type ActivityHistoryItemItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the historyItems property of the microsoft.graph.userActivity entity.
 */
export interface HistoryItemsRequestBuilder extends BaseRequestBuilder<HistoryItemsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the historyItems property of the microsoft.graph.userActivity entity.
     * @param activityHistoryItemId The unique identifier of activityHistoryItem
     * @returns a ActivityHistoryItemItemRequestBuilder
     */
     byActivityHistoryItemId(activityHistoryItemId: string) : ActivityHistoryItemItemRequestBuilder;
    /**
     * Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ActivityHistoryItemCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<HistoryItemsRequestBuilderGetQueryParameters> | undefined) : Promise<ActivityHistoryItemCollectionResponse | undefined>;
    /**
     * Create new navigation property to historyItems for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ActivityHistoryItem
     */
     post(body: ActivityHistoryItem, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ActivityHistoryItem | undefined>;
    /**
     * Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HistoryItemsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to historyItems for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: ActivityHistoryItem, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Optional. NavigationProperty/Containment; navigation property to the activity's historyItems.
 */
export interface HistoryItemsRequestBuilderGetQueryParameters {
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
const HistoryItemsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const HistoryItemsRequestBuilderNavigationMetadata: Record<Exclude<keyof HistoryItemsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byActivityHistoryItemId: {
        uriTemplate: ActivityHistoryItemItemRequestBuilderUriTemplate,
        requestsMetadata: ActivityHistoryItemItemRequestBuilderRequestsMetadata,
        navigationMetadata: ActivityHistoryItemItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["activityHistoryItem%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HistoryItemsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createActivityHistoryItemCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: HistoryItemsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createActivityHistoryItemFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeActivityHistoryItem,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const HistoryItemsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/activities/{userActivity%2Did}/historyItems{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */