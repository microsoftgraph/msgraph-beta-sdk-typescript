/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserExperienceAnalyticsDeviceTimelineEventCollectionResponseFromDiscriminatorValue, createUserExperienceAnalyticsDeviceTimelineEventFromDiscriminatorValue, serializeUserExperienceAnalyticsDeviceTimelineEvent, type UserExperienceAnalyticsDeviceTimelineEvent, type UserExperienceAnalyticsDeviceTimelineEventCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { type UserExperienceAnalyticsDeviceTimelineEventItemRequestBuilder, UserExperienceAnalyticsDeviceTimelineEventItemRequestBuilderRequestsMetadata } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsDeviceTimelineEvent property of the microsoft.graph.deviceManagement entity.
 */
export interface UserExperienceAnalyticsDeviceTimelineEventRequestBuilder extends BaseRequestBuilder<UserExperienceAnalyticsDeviceTimelineEventRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the userExperienceAnalyticsDeviceTimelineEvent property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsDeviceTimelineEventId The unique identifier of userExperienceAnalyticsDeviceTimelineEvent
     * @returns {UserExperienceAnalyticsDeviceTimelineEventItemRequestBuilder}
     */
     byUserExperienceAnalyticsDeviceTimelineEventId(userExperienceAnalyticsDeviceTimelineEventId: string) : UserExperienceAnalyticsDeviceTimelineEventItemRequestBuilder;
    /**
     * The user experience analytics device events entity contains NRT device timeline event details.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserExperienceAnalyticsDeviceTimelineEventCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsDeviceTimelineEventRequestBuilderGetQueryParameters> | undefined) : Promise<UserExperienceAnalyticsDeviceTimelineEventCollectionResponse | undefined>;
    /**
     * Create new navigation property to userExperienceAnalyticsDeviceTimelineEvent for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserExperienceAnalyticsDeviceTimelineEvent>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: UserExperienceAnalyticsDeviceTimelineEvent, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UserExperienceAnalyticsDeviceTimelineEvent | undefined>;
    /**
     * The user experience analytics device events entity contains NRT device timeline event details.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsDeviceTimelineEventRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to userExperienceAnalyticsDeviceTimelineEvent for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: UserExperienceAnalyticsDeviceTimelineEvent, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The user experience analytics device events entity contains NRT device timeline event details.
 */
export interface UserExperienceAnalyticsDeviceTimelineEventRequestBuilderGetQueryParameters {
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
export const UserExperienceAnalyticsDeviceTimelineEventRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/userExperienceAnalyticsDeviceTimelineEvent{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UserExperienceAnalyticsDeviceTimelineEventRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const UserExperienceAnalyticsDeviceTimelineEventRequestBuilderNavigationMetadata: Record<Exclude<keyof UserExperienceAnalyticsDeviceTimelineEventRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUserExperienceAnalyticsDeviceTimelineEventId: {
        requestsMetadata: UserExperienceAnalyticsDeviceTimelineEventItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["userExperienceAnalyticsDeviceTimelineEvent%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserExperienceAnalyticsDeviceTimelineEventRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: UserExperienceAnalyticsDeviceTimelineEventRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserExperienceAnalyticsDeviceTimelineEventCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UserExperienceAnalyticsDeviceTimelineEventRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: UserExperienceAnalyticsDeviceTimelineEventRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserExperienceAnalyticsDeviceTimelineEventFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUserExperienceAnalyticsDeviceTimelineEvent,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
