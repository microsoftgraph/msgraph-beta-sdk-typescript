/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCalendarCollectionResponseFromDiscriminatorValue, createCalendarFromDiscriminatorValue, serializeCalendar, type Calendar, type CalendarCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { CalendarItemRequestBuilderNavigationMetadata, CalendarItemRequestBuilderRequestsMetadata, CalendarItemRequestBuilderUriTemplate, type CalendarItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the calendars property of the microsoft.graph.user entity.
 */
export interface CalendarsRequestBuilder extends BaseRequestBuilder<CalendarsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the calendars property of the microsoft.graph.user entity.
     * @param calendarId The unique identifier of calendar
     * @returns a CalendarItemRequestBuilder
     */
     byCalendarId(calendarId: string) : CalendarItemRequestBuilder;
    /**
     * Get all the user's calendars (/calendars navigation property), get the calendars from the default calendar group or from a specific calendar group. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CalendarCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/user-list-calendars?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CalendarsRequestBuilderGetQueryParameters> | undefined) : Promise<CalendarCollectionResponse | undefined>;
    /**
     * Create a new calendar for a user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Calendar
     * @see {@link https://learn.microsoft.com/graph/api/user-post-calendars?view=graph-rest-1.0|Find more info here}
     */
     post(body: Calendar, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Calendar | undefined>;
    /**
     * Get all the user's calendars (/calendars navigation property), get the calendars from the default calendar group or from a specific calendar group. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CalendarsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new calendar for a user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Calendar, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get all the user's calendars (/calendars navigation property), get the calendars from the default calendar group or from a specific calendar group. 
 */
export interface CalendarsRequestBuilderGetQueryParameters {
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
const CalendarsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const CalendarsRequestBuilderNavigationMetadata: Record<Exclude<keyof CalendarsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCalendarId: {
        uriTemplate: CalendarItemRequestBuilderUriTemplate,
        requestsMetadata: CalendarItemRequestBuilderRequestsMetadata,
        navigationMetadata: CalendarItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["calendar%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CalendarsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCalendarCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CalendarsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCalendarFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCalendar,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CalendarsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/calendars{?%24top,%24skip,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */