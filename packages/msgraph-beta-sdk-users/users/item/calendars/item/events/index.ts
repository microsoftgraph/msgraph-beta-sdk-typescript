/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createEventCollectionResponseFromDiscriminatorValue, createEventFromDiscriminatorValue, serializeEvent, type Event, type EventCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { DeltaRequestBuilderRequestsMetadata, DeltaRequestBuilderUriTemplate, type DeltaRequestBuilder } from './delta/';
import { EventItemRequestBuilderNavigationMetadata, EventItemRequestBuilderRequestsMetadata, EventItemRequestBuilderUriTemplate, type EventItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the events property of the microsoft.graph.calendar entity.
 */
export interface EventsRequestBuilder extends BaseRequestBuilder<EventsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the delta method.
     */
    get delta(): DeltaRequestBuilder;
    /**
     * Provides operations to manage the events property of the microsoft.graph.calendar entity.
     * @param eventId The unique identifier of event
     * @returns a EventItemRequestBuilder
     */
     byEventId(eventId: string) : EventItemRequestBuilder;
    /**
     * Retrieve a list of events in a calendar.  The calendar can be one for a user, or the default calendar of a Microsoft 365 group. The list of events contains single instance meetings and series masters. To get expanded event instances, you can get the calendar view, orget the instances of an event.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EventCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/calendar-list-events?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<EventsRequestBuilderGetQueryParameters> | undefined) : Promise<EventCollectionResponse | undefined>;
    /**
     * Use this API to create a new event in a calendar. The calendar can be one for a user, or the default calendar of a Microsoft 365 group. 
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Event
     * @see {@link https://learn.microsoft.com/graph/api/calendar-post-events?view=graph-rest-1.0|Find more info here}
     */
     post(body: Event, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Event | undefined>;
    /**
     * Retrieve a list of events in a calendar.  The calendar can be one for a user, or the default calendar of a Microsoft 365 group. The list of events contains single instance meetings and series masters. To get expanded event instances, you can get the calendar view, orget the instances of an event.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EventsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Use this API to create a new event in a calendar. The calendar can be one for a user, or the default calendar of a Microsoft 365 group. 
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Event, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of events in a calendar.  The calendar can be one for a user, or the default calendar of a Microsoft 365 group. The list of events contains single instance meetings and series masters. To get expanded event instances, you can get the calendar view, orget the instances of an event.
 */
export interface EventsRequestBuilderGetQueryParameters {
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
const EventsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const EventsRequestBuilderNavigationMetadata: Record<Exclude<keyof EventsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byEventId: {
        uriTemplate: EventItemRequestBuilderUriTemplate,
        requestsMetadata: EventItemRequestBuilderRequestsMetadata,
        navigationMetadata: EventItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["event%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    delta: {
        uriTemplate: DeltaRequestBuilderUriTemplate,
        requestsMetadata: DeltaRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EventsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEventCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: EventsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEventFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEvent,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const EventsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/calendars/{calendar%2Did}/events{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */