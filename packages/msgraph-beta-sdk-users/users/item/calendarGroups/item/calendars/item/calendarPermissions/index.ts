/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCalendarPermissionCollectionResponseFromDiscriminatorValue, createCalendarPermissionFromDiscriminatorValue, serializeCalendarPermission, type CalendarPermission, type CalendarPermissionCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { CalendarPermissionItemRequestBuilderRequestsMetadata, CalendarPermissionItemRequestBuilderUriTemplate, type CalendarPermissionItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the calendarPermissions property of the microsoft.graph.calendar entity.
 */
export interface CalendarPermissionsRequestBuilder extends BaseRequestBuilder<CalendarPermissionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the calendarPermissions property of the microsoft.graph.calendar entity.
     * @param calendarPermissionId The unique identifier of calendarPermission
     * @returns a CalendarPermissionItemRequestBuilder
     */
     byCalendarPermissionId(calendarPermissionId: string) : CalendarPermissionItemRequestBuilder;
    /**
     * Get the specified permissions object of a user or group calendar that has been shared.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CalendarPermissionCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<CalendarPermissionsRequestBuilderGetQueryParameters> | undefined) : Promise<CalendarPermissionCollectionResponse | undefined>;
    /**
     * Create a calendarPermission resource to specify the identity and role of the user with whom the specified calendar is being shared or delegated.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CalendarPermission
     * @see {@link https://learn.microsoft.com/graph/api/calendar-post-calendarpermissions?view=graph-rest-1.0|Find more info here}
     */
     post(body: CalendarPermission, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CalendarPermission | undefined>;
    /**
     * Get the specified permissions object of a user or group calendar that has been shared.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CalendarPermissionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a calendarPermission resource to specify the identity and role of the user with whom the specified calendar is being shared or delegated.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: CalendarPermission, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the specified permissions object of a user or group calendar that has been shared.
 */
export interface CalendarPermissionsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
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
const CalendarPermissionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CalendarPermissionsRequestBuilderNavigationMetadata: Record<Exclude<keyof CalendarPermissionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCalendarPermissionId: {
        uriTemplate: CalendarPermissionItemRequestBuilderUriTemplate,
        requestsMetadata: CalendarPermissionItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["calendarPermission%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CalendarPermissionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCalendarPermissionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CalendarPermissionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCalendarPermissionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCalendarPermission,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CalendarPermissionsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/calendarGroups/{calendarGroup%2Did}/calendars/{calendar%2Did}/calendarPermissions{?%24top,%24skip,%24filter,%24count,%24orderby,%24select}";
/* tslint:enable */
/* eslint-enable */