/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCalendarFromDiscriminatorValue, serializeCalendar, type Calendar } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AllowedCalendarSharingRolesWithUserRequestBuilderRequestsMetadata, AllowedCalendarSharingRolesWithUserRequestBuilderUriTemplate, type AllowedCalendarSharingRolesWithUserRequestBuilder } from './allowedCalendarSharingRolesWithUser/';
import { CalendarPermissionsRequestBuilderNavigationMetadata, CalendarPermissionsRequestBuilderRequestsMetadata, CalendarPermissionsRequestBuilderUriTemplate, type CalendarPermissionsRequestBuilder } from './calendarPermissions/';
import { CalendarViewRequestBuilderNavigationMetadata, CalendarViewRequestBuilderRequestsMetadata, CalendarViewRequestBuilderUriTemplate, type CalendarViewRequestBuilder } from './calendarView/';
import { EventsRequestBuilderNavigationMetadata, EventsRequestBuilderRequestsMetadata, EventsRequestBuilderUriTemplate, type EventsRequestBuilder } from './events/';
import { GetScheduleRequestBuilderRequestsMetadata, GetScheduleRequestBuilderUriTemplate, type GetScheduleRequestBuilder } from './getSchedule/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the calendar property of the microsoft.graph.user entity.
 */
export interface CalendarRequestBuilder extends BaseRequestBuilder<CalendarRequestBuilder> {
    /**
     * Provides operations to manage the calendarPermissions property of the microsoft.graph.calendar entity.
     */
    get calendarPermissions(): CalendarPermissionsRequestBuilder;
    /**
     * Provides operations to manage the calendarView property of the microsoft.graph.calendar entity.
     */
    get calendarView(): CalendarViewRequestBuilder;
    /**
     * Provides operations to manage the events property of the microsoft.graph.calendar entity.
     */
    get events(): EventsRequestBuilder;
    /**
     * Provides operations to call the getSchedule method.
     */
    get getSchedule(): GetScheduleRequestBuilder;
    /**
     * Provides operations to call the allowedCalendarSharingRoles method.
     * @param User Usage: User='{User}'
     * @returns a allowedCalendarSharingRolesWithUserRequestBuilder
     */
     allowedCalendarSharingRolesWithUser(user: string | undefined) : AllowedCalendarSharingRolesWithUserRequestBuilder;
    /**
     * Delete a calendar other than the default calendar.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/calendar-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get the properties and relationships of a calendar object. The calendar can be one for a user, or the default calendar of a Microsoft 365 group. There are two scenarios where an app can get another user's calendar:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Calendar
     * @see {@link https://learn.microsoft.com/graph/api/calendar-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CalendarRequestBuilderGetQueryParameters> | undefined) : Promise<Calendar | undefined>;
    /**
     * Update the properties of a calendar object. The calendar can be one for a user, or the default calendar of a Microsoft 365 group.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Calendar
     * @see {@link https://learn.microsoft.com/graph/api/calendar-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: Calendar, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Calendar | undefined>;
    /**
     * Delete a calendar other than the default calendar.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get the properties and relationships of a calendar object. The calendar can be one for a user, or the default calendar of a Microsoft 365 group. There are two scenarios where an app can get another user's calendar:
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CalendarRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a calendar object. The calendar can be one for a user, or the default calendar of a Microsoft 365 group.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: Calendar, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the properties and relationships of a calendar object. The calendar can be one for a user, or the default calendar of a Microsoft 365 group. There are two scenarios where an app can get another user's calendar:
 */
export interface CalendarRequestBuilderGetQueryParameters {
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CalendarRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CalendarRequestBuilderNavigationMetadata: Record<Exclude<keyof CalendarRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    allowedCalendarSharingRolesWithUser: {
        uriTemplate: AllowedCalendarSharingRolesWithUserRequestBuilderUriTemplate,
        requestsMetadata: AllowedCalendarSharingRolesWithUserRequestBuilderRequestsMetadata,
    },
    calendarPermissions: {
        uriTemplate: CalendarPermissionsRequestBuilderUriTemplate,
        requestsMetadata: CalendarPermissionsRequestBuilderRequestsMetadata,
        navigationMetadata: CalendarPermissionsRequestBuilderNavigationMetadata,
    },
    calendarView: {
        uriTemplate: CalendarViewRequestBuilderUriTemplate,
        requestsMetadata: CalendarViewRequestBuilderRequestsMetadata,
        navigationMetadata: CalendarViewRequestBuilderNavigationMetadata,
    },
    events: {
        uriTemplate: EventsRequestBuilderUriTemplate,
        requestsMetadata: EventsRequestBuilderRequestsMetadata,
        navigationMetadata: EventsRequestBuilderNavigationMetadata,
    },
    getSchedule: {
        uriTemplate: GetScheduleRequestBuilderUriTemplate,
        requestsMetadata: GetScheduleRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CalendarRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCalendarFromDiscriminatorValue,
        queryParametersMapper: CalendarRequestBuilderGetQueryParametersMapper,
    },
    patch: {
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
export const CalendarRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/calendar{?%24select}";
/* tslint:enable */
/* eslint-enable */