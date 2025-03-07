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
     * Delete navigation property registrants for app
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The meetingRegistrationBase Entity is deprecated and will stop returning data on Dec 12th, 2024. Please use the new webinar APIs. as of 2024-04/meetingRegistrationDeprecation on 2024-04-01 and will be removed 2024-12-12
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
     * Update the navigation property registrants in app
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MeetingRegistrantBase>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The meetingRegistrationBase Entity is deprecated and will stop returning data on Dec 12th, 2024. Please use the new webinar APIs. as of 2024-04/meetingRegistrationDeprecation on 2024-04-01 and will be removed 2024-12-12
     */
     patch(body: MeetingRegistrantBase, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MeetingRegistrantBase | undefined>;
    /**
     * Delete navigation property registrants for app
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
     * Update the navigation property registrants in app
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
export const MeetingRegistrantBaseItemRequestBuilderUriTemplate = "{+baseurl}/app/onlineMeetings/{onlineMeeting%2Did}/registration/registrants/{meetingRegistrantBase%2Did}{?%24expand,%24select}";
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
