/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createOnlineMeetingFromDiscriminatorValue, serializeOnlineMeeting, type OnlineMeeting } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AlternativeRecordingRequestBuilderRequestsMetadata, AlternativeRecordingRequestBuilderUriTemplate, type AlternativeRecordingRequestBuilder } from './alternativeRecording/';
import { AttendanceReportsRequestBuilderNavigationMetadata, AttendanceReportsRequestBuilderRequestsMetadata, AttendanceReportsRequestBuilderUriTemplate, type AttendanceReportsRequestBuilder } from './attendanceReports/';
import { AttendeeReportRequestBuilderRequestsMetadata, AttendeeReportRequestBuilderUriTemplate, type AttendeeReportRequestBuilder } from './attendeeReport/';
import { BroadcastRecordingRequestBuilderRequestsMetadata, BroadcastRecordingRequestBuilderUriTemplate, type BroadcastRecordingRequestBuilder } from './broadcastRecording/';
import { GetVirtualAppointmentJoinWebUrlRequestBuilderRequestsMetadata, GetVirtualAppointmentJoinWebUrlRequestBuilderUriTemplate, type GetVirtualAppointmentJoinWebUrlRequestBuilder } from './getVirtualAppointmentJoinWebUrl/';
import { MeetingAttendanceReportRequestBuilderNavigationMetadata, MeetingAttendanceReportRequestBuilderRequestsMetadata, MeetingAttendanceReportRequestBuilderUriTemplate, type MeetingAttendanceReportRequestBuilder } from './meetingAttendanceReport/';
import { RecordingRequestBuilderRequestsMetadata, RecordingRequestBuilderUriTemplate, type RecordingRequestBuilder } from './recording/';
import { RecordingsRequestBuilderNavigationMetadata, RecordingsRequestBuilderRequestsMetadata, RecordingsRequestBuilderUriTemplate, type RecordingsRequestBuilder } from './recordings/';
import { RegistrationRequestBuilderNavigationMetadata, RegistrationRequestBuilderRequestsMetadata, RegistrationRequestBuilderUriTemplate, type RegistrationRequestBuilder } from './registration/';
import { SendVirtualAppointmentReminderSmsRequestBuilderRequestsMetadata, SendVirtualAppointmentReminderSmsRequestBuilderUriTemplate, type SendVirtualAppointmentReminderSmsRequestBuilder } from './sendVirtualAppointmentReminderSms/';
import { SendVirtualAppointmentSmsRequestBuilderRequestsMetadata, SendVirtualAppointmentSmsRequestBuilderUriTemplate, type SendVirtualAppointmentSmsRequestBuilder } from './sendVirtualAppointmentSms/';
import { TranscriptsRequestBuilderNavigationMetadata, TranscriptsRequestBuilderRequestsMetadata, TranscriptsRequestBuilderUriTemplate, type TranscriptsRequestBuilder } from './transcripts/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the onlineMeetings property of the microsoft.graph.commsApplication entity.
 */
export interface OnlineMeetingItemRequestBuilder extends BaseRequestBuilder<OnlineMeetingItemRequestBuilder> {
    /**
     * Provides operations to manage the media for the commsApplication entity.
     */
    get alternativeRecording(): AlternativeRecordingRequestBuilder;
    /**
     * Provides operations to manage the attendanceReports property of the microsoft.graph.onlineMeetingBase entity.
     */
    get attendanceReports(): AttendanceReportsRequestBuilder;
    /**
     * Provides operations to manage the media for the commsApplication entity.
     */
    get attendeeReport(): AttendeeReportRequestBuilder;
    /**
     * Provides operations to manage the media for the commsApplication entity.
     */
    get broadcastRecording(): BroadcastRecordingRequestBuilder;
    /**
     * Provides operations to call the getVirtualAppointmentJoinWebUrl method.
     */
    get getVirtualAppointmentJoinWebUrl(): GetVirtualAppointmentJoinWebUrlRequestBuilder;
    /**
     * Provides operations to manage the meetingAttendanceReport property of the microsoft.graph.onlineMeeting entity.
     */
    get meetingAttendanceReport(): MeetingAttendanceReportRequestBuilder;
    /**
     * Provides operations to manage the media for the commsApplication entity.
     */
    get recording(): RecordingRequestBuilder;
    /**
     * Provides operations to manage the recordings property of the microsoft.graph.onlineMeeting entity.
     */
    get recordings(): RecordingsRequestBuilder;
    /**
     * Provides operations to manage the registration property of the microsoft.graph.onlineMeeting entity.
     */
    get registration(): RegistrationRequestBuilder;
    /**
     * Provides operations to call the sendVirtualAppointmentReminderSms method.
     */
    get sendVirtualAppointmentReminderSms(): SendVirtualAppointmentReminderSmsRequestBuilder;
    /**
     * Provides operations to call the sendVirtualAppointmentSms method.
     */
    get sendVirtualAppointmentSms(): SendVirtualAppointmentSmsRequestBuilder;
    /**
     * Provides operations to manage the transcripts property of the microsoft.graph.onlineMeeting entity.
     */
    get transcripts(): TranscriptsRequestBuilder;
    /**
     * Delete navigation property onlineMeetings for app
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get onlineMeetings from app
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnlineMeeting
     */
     get(requestConfiguration?: RequestConfiguration<OnlineMeetingItemRequestBuilderGetQueryParameters> | undefined) : Promise<OnlineMeeting | undefined>;
    /**
     * Update the navigation property onlineMeetings in app
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnlineMeeting
     */
     patch(body: OnlineMeeting, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<OnlineMeeting | undefined>;
    /**
     * Delete navigation property onlineMeetings for app
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get onlineMeetings from app
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OnlineMeetingItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property onlineMeetings in app
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: OnlineMeeting, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get onlineMeetings from app
 */
export interface OnlineMeetingItemRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const OnlineMeetingItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const OnlineMeetingItemRequestBuilderNavigationMetadata: Record<Exclude<keyof OnlineMeetingItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    alternativeRecording: {
        uriTemplate: AlternativeRecordingRequestBuilderUriTemplate,
        requestsMetadata: AlternativeRecordingRequestBuilderRequestsMetadata,
    },
    attendanceReports: {
        uriTemplate: AttendanceReportsRequestBuilderUriTemplate,
        requestsMetadata: AttendanceReportsRequestBuilderRequestsMetadata,
        navigationMetadata: AttendanceReportsRequestBuilderNavigationMetadata,
    },
    attendeeReport: {
        uriTemplate: AttendeeReportRequestBuilderUriTemplate,
        requestsMetadata: AttendeeReportRequestBuilderRequestsMetadata,
    },
    broadcastRecording: {
        uriTemplate: BroadcastRecordingRequestBuilderUriTemplate,
        requestsMetadata: BroadcastRecordingRequestBuilderRequestsMetadata,
    },
    getVirtualAppointmentJoinWebUrl: {
        uriTemplate: GetVirtualAppointmentJoinWebUrlRequestBuilderUriTemplate,
        requestsMetadata: GetVirtualAppointmentJoinWebUrlRequestBuilderRequestsMetadata,
    },
    meetingAttendanceReport: {
        uriTemplate: MeetingAttendanceReportRequestBuilderUriTemplate,
        requestsMetadata: MeetingAttendanceReportRequestBuilderRequestsMetadata,
        navigationMetadata: MeetingAttendanceReportRequestBuilderNavigationMetadata,
    },
    recording: {
        uriTemplate: RecordingRequestBuilderUriTemplate,
        requestsMetadata: RecordingRequestBuilderRequestsMetadata,
    },
    recordings: {
        uriTemplate: RecordingsRequestBuilderUriTemplate,
        requestsMetadata: RecordingsRequestBuilderRequestsMetadata,
        navigationMetadata: RecordingsRequestBuilderNavigationMetadata,
    },
    registration: {
        uriTemplate: RegistrationRequestBuilderUriTemplate,
        requestsMetadata: RegistrationRequestBuilderRequestsMetadata,
        navigationMetadata: RegistrationRequestBuilderNavigationMetadata,
    },
    sendVirtualAppointmentReminderSms: {
        uriTemplate: SendVirtualAppointmentReminderSmsRequestBuilderUriTemplate,
        requestsMetadata: SendVirtualAppointmentReminderSmsRequestBuilderRequestsMetadata,
    },
    sendVirtualAppointmentSms: {
        uriTemplate: SendVirtualAppointmentSmsRequestBuilderUriTemplate,
        requestsMetadata: SendVirtualAppointmentSmsRequestBuilderRequestsMetadata,
    },
    transcripts: {
        uriTemplate: TranscriptsRequestBuilderUriTemplate,
        requestsMetadata: TranscriptsRequestBuilderRequestsMetadata,
        navigationMetadata: TranscriptsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const OnlineMeetingItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createOnlineMeetingFromDiscriminatorValue,
        queryParametersMapper: OnlineMeetingItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createOnlineMeetingFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeOnlineMeeting,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const OnlineMeetingItemRequestBuilderUriTemplate = "{+baseurl}/app/onlineMeetings/{onlineMeeting%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */