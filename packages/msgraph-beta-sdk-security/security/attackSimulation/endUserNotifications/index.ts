/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createEndUserNotificationCollectionResponseFromDiscriminatorValue, createEndUserNotificationFromDiscriminatorValue, serializeEndUserNotification, type EndUserNotification, type EndUserNotificationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { EndUserNotificationItemRequestBuilderNavigationMetadata, EndUserNotificationItemRequestBuilderRequestsMetadata, EndUserNotificationItemRequestBuilderUriTemplate, type EndUserNotificationItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the endUserNotifications property of the microsoft.graph.attackSimulationRoot entity.
 */
export interface EndUserNotificationsRequestBuilder extends BaseRequestBuilder<EndUserNotificationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the endUserNotifications property of the microsoft.graph.attackSimulationRoot entity.
     * @param endUserNotificationId The unique identifier of endUserNotification
     * @returns a EndUserNotificationItemRequestBuilder
     */
     byEndUserNotificationId(endUserNotificationId: string) : EndUserNotificationItemRequestBuilder;
    /**
     * Get a list of endUserNotification objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EndUserNotificationCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/attacksimulationroot-list-endusernotifications?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<EndUserNotificationsRequestBuilderGetQueryParameters> | undefined) : Promise<EndUserNotificationCollectionResponse | undefined>;
    /**
     * Create new navigation property to endUserNotifications for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EndUserNotification
     */
     post(body: EndUserNotification, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EndUserNotification | undefined>;
    /**
     * Get a list of endUserNotification objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EndUserNotificationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to endUserNotifications for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: EndUserNotification, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of endUserNotification objects and their properties.
 */
export interface EndUserNotificationsRequestBuilderGetQueryParameters {
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
const EndUserNotificationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const EndUserNotificationsRequestBuilderNavigationMetadata: Record<Exclude<keyof EndUserNotificationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byEndUserNotificationId: {
        uriTemplate: EndUserNotificationItemRequestBuilderUriTemplate,
        requestsMetadata: EndUserNotificationItemRequestBuilderRequestsMetadata,
        navigationMetadata: EndUserNotificationItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["endUserNotification%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EndUserNotificationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEndUserNotificationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: EndUserNotificationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEndUserNotificationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEndUserNotification,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const EndUserNotificationsRequestBuilderUriTemplate = "{+baseurl}/security/attackSimulation/endUserNotifications{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */