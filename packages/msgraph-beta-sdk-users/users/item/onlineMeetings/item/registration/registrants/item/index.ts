/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMeetingRegistrantBaseFromDiscriminatorValue, serializeMeetingRegistrantBase, type MeetingRegistrantBase } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the registrants property of the microsoft.graph.meetingRegistrationBase entity.
 */
export interface MeetingRegistrantBaseItemRequestBuilder extends BaseRequestBuilder<MeetingRegistrantBaseItemRequestBuilder> {
    /**
     * Cancel an onlineMeeting registration for a meetingRegistrant on behalf of the registrant. Only use this method when the allowedRegistrant property of the meetingRegistration object has a value of organization and the registrant's delegated permission was used to enroll. When the allowedRegistrant value is everyone, registrants can only use the link in the email they receive to cancel their registration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The meetingRegistrationBase Entity is deprecated and will stop returning data on Dec 12th, 2024. Please use the new webinar APIs. as of 2024-04/meetingRegistrationDeprecation on 2024-04-01 and will be removed 2024-12-12
     * @see {@link https://learn.microsoft.com/graph/api/meetingregistrant-delete?view=graph-rest-beta|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Registrants of the online meeting.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MeetingRegistrantBase>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The meetingRegistrationBase Entity is deprecated and will stop returning data on Dec 12th, 2024. Please use the new webinar APIs. as of 2024-04/meetingRegistrationDeprecation on 2024-04-01 and will be removed 2024-12-12
     */
     get(requestConfiguration?: RequestConfiguration<MeetingRegistrantBaseItemRequestBuilderGetQueryParameters> | undefined) : Promise<MeetingRegistrantBase | undefined>;
    /**
     * Update the navigation property registrants in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MeetingRegistrantBase>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The meetingRegistrationBase Entity is deprecated and will stop returning data on Dec 12th, 2024. Please use the new webinar APIs. as of 2024-04/meetingRegistrationDeprecation on 2024-04-01 and will be removed 2024-12-12
     */
     patch(body: MeetingRegistrantBase, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MeetingRegistrantBase | undefined>;
    /**
     * Cancel an onlineMeeting registration for a meetingRegistrant on behalf of the registrant. Only use this method when the allowedRegistrant property of the meetingRegistration object has a value of organization and the registrant's delegated permission was used to enroll. When the allowedRegistrant value is everyone, registrants can only use the link in the email they receive to cancel their registration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The meetingRegistrationBase Entity is deprecated and will stop returning data on Dec 12th, 2024. Please use the new webinar APIs. as of 2024-04/meetingRegistrationDeprecation on 2024-04-01 and will be removed 2024-12-12
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Registrants of the online meeting.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The meetingRegistrationBase Entity is deprecated and will stop returning data on Dec 12th, 2024. Please use the new webinar APIs. as of 2024-04/meetingRegistrationDeprecation on 2024-04-01 and will be removed 2024-12-12
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MeetingRegistrantBaseItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property registrants in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The meetingRegistrationBase Entity is deprecated and will stop returning data on Dec 12th, 2024. Please use the new webinar APIs. as of 2024-04/meetingRegistrationDeprecation on 2024-04-01 and will be removed 2024-12-12
     */
     toPatchRequestInformation(body: MeetingRegistrantBase, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Registrants of the online meeting.
 */
export interface MeetingRegistrantBaseItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const MeetingRegistrantBaseItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/onlineMeetings/{onlineMeeting%2Did}/registration/registrants/{meetingRegistrantBase%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MeetingRegistrantBaseItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MeetingRegistrantBaseItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: MeetingRegistrantBaseItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: MeetingRegistrantBaseItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMeetingRegistrantBaseFromDiscriminatorValue,
        queryParametersMapper: MeetingRegistrantBaseItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: MeetingRegistrantBaseItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMeetingRegistrantBaseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMeetingRegistrantBase,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
