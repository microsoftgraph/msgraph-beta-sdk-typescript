/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createLocalizedNotificationMessageCollectionResponseFromDiscriminatorValue, createLocalizedNotificationMessageFromDiscriminatorValue, serializeLocalizedNotificationMessage, type LocalizedNotificationMessage, type LocalizedNotificationMessageCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { LocalizedNotificationMessageItemRequestBuilderRequestsMetadata, LocalizedNotificationMessageItemRequestBuilderUriTemplate, type LocalizedNotificationMessageItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the localizedNotificationMessages property of the microsoft.graph.notificationMessageTemplate entity.
 */
export interface LocalizedNotificationMessagesRequestBuilder extends BaseRequestBuilder<LocalizedNotificationMessagesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the localizedNotificationMessages property of the microsoft.graph.notificationMessageTemplate entity.
     * @param localizedNotificationMessageId The unique identifier of localizedNotificationMessage
     * @returns a LocalizedNotificationMessageItemRequestBuilder
     */
     byLocalizedNotificationMessageId(localizedNotificationMessageId: string) : LocalizedNotificationMessageItemRequestBuilder;
    /**
     * The list of localized messages for this Notification Message Template.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LocalizedNotificationMessageCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<LocalizedNotificationMessagesRequestBuilderGetQueryParameters> | undefined) : Promise<LocalizedNotificationMessageCollectionResponse | undefined>;
    /**
     * Create new navigation property to localizedNotificationMessages for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LocalizedNotificationMessage
     */
     post(body: LocalizedNotificationMessage, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<LocalizedNotificationMessage | undefined>;
    /**
     * The list of localized messages for this Notification Message Template.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<LocalizedNotificationMessagesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to localizedNotificationMessages for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: LocalizedNotificationMessage, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of localized messages for this Notification Message Template.
 */
export interface LocalizedNotificationMessagesRequestBuilderGetQueryParameters {
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
const LocalizedNotificationMessagesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const LocalizedNotificationMessagesRequestBuilderNavigationMetadata: Record<Exclude<keyof LocalizedNotificationMessagesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byLocalizedNotificationMessageId: {
        uriTemplate: LocalizedNotificationMessageItemRequestBuilderUriTemplate,
        requestsMetadata: LocalizedNotificationMessageItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["localizedNotificationMessage%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const LocalizedNotificationMessagesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createLocalizedNotificationMessageCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: LocalizedNotificationMessagesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createLocalizedNotificationMessageFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeLocalizedNotificationMessage,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const LocalizedNotificationMessagesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/notificationMessageTemplates/{notificationMessageTemplate%2Did}/localizedNotificationMessages{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */