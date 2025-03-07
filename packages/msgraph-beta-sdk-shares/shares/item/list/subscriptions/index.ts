/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSubscriptionCollectionResponseFromDiscriminatorValue, createSubscriptionFromDiscriminatorValue, serializeSubscription, type Subscription, type SubscriptionCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { SubscriptionItemRequestBuilderNavigationMetadata, SubscriptionItemRequestBuilderRequestsMetadata, type SubscriptionItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the subscriptions property of the microsoft.graph.list entity.
 */
export interface SubscriptionsRequestBuilder extends BaseRequestBuilder<SubscriptionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the subscriptions property of the microsoft.graph.list entity.
     * @param subscriptionId The unique identifier of subscription
     * @returns {SubscriptionItemRequestBuilder}
     */
     bySubscriptionId(subscriptionId: string) : SubscriptionItemRequestBuilder;
    /**
     * The set of subscriptions on the list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SubscriptionCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<SubscriptionsRequestBuilderGetQueryParameters> | undefined) : Promise<SubscriptionCollectionResponse | undefined>;
    /**
     * Create new navigation property to subscriptions for shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Subscription>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Subscription, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Subscription | undefined>;
    /**
     * The set of subscriptions on the list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SubscriptionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to subscriptions for shares
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Subscription, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The set of subscriptions on the list.
 */
export interface SubscriptionsRequestBuilderGetQueryParameters {
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
export const SubscriptionsRequestBuilderUriTemplate = "{+baseurl}/shares/{sharedDriveItem%2Did}/list/subscriptions{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SubscriptionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const SubscriptionsRequestBuilderNavigationMetadata: Record<Exclude<keyof SubscriptionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    bySubscriptionId: {
        requestsMetadata: SubscriptionItemRequestBuilderRequestsMetadata,
        navigationMetadata: SubscriptionItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["subscription%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SubscriptionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: SubscriptionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSubscriptionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: SubscriptionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: SubscriptionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSubscriptionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSubscription,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
