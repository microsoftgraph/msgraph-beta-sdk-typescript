/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAttendeeNotificationInfoFromDiscriminatorValue, serializeAttendeeNotificationInfo, type AttendeeNotificationInfo, VirtualAppointmentMessageType, VirtualAppointmentMessageTypeObject } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a sendVirtualAppointmentSmsPostRequestBody
 */
export function createSendVirtualAppointmentSmsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSendVirtualAppointmentSmsPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoSendVirtualAppointmentSmsPostRequestBody(sendVirtualAppointmentSmsPostRequestBody: Partial<SendVirtualAppointmentSmsPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "attendees": n => { sendVirtualAppointmentSmsPostRequestBody.attendees = n.getCollectionOfObjectValues<AttendeeNotificationInfo>(createAttendeeNotificationInfoFromDiscriminatorValue); },
        "backingStoreEnabled": n => { sendVirtualAppointmentSmsPostRequestBody.backingStoreEnabled = true; },
        "messageType": n => { sendVirtualAppointmentSmsPostRequestBody.messageType = n.getEnumValue<VirtualAppointmentMessageType>(VirtualAppointmentMessageTypeObject); },
    }
}
export interface SendVirtualAppointmentSmsPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The attendees property
     */
    attendees?: AttendeeNotificationInfo[];
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The messageType property
     */
    messageType?: VirtualAppointmentMessageType;
}
/**
 * Provides operations to call the sendVirtualAppointmentSms method.
 */
export interface SendVirtualAppointmentSmsRequestBuilder extends BaseRequestBuilder<SendVirtualAppointmentSmsRequestBuilder> {
    /**
     * Send an SMS notification to external attendees when a Teams Virtual Appointment is confirmed, rescheduled, or canceled. This feature requires Teams Premium. Attendees must have a valid United States phone number to receive these SMS notifications.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/virtualappointment-sendvirtualappointmentsms?view=graph-rest-1.0|Find more info here}
     */
     post(body: SendVirtualAppointmentSmsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Send an SMS notification to external attendees when a Teams Virtual Appointment is confirmed, rescheduled, or canceled. This feature requires Teams Premium. Attendees must have a valid United States phone number to receive these SMS notifications.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: SendVirtualAppointmentSmsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeSendVirtualAppointmentSmsPostRequestBody(writer: SerializationWriter, sendVirtualAppointmentSmsPostRequestBody: Partial<SendVirtualAppointmentSmsPostRequestBody> | undefined = {}) : void {
    writer.writeCollectionOfObjectValues<AttendeeNotificationInfo>("attendees", sendVirtualAppointmentSmsPostRequestBody.attendees, serializeAttendeeNotificationInfo);
    writer.writeEnumValue<VirtualAppointmentMessageType>("messageType", sendVirtualAppointmentSmsPostRequestBody.messageType);
    writer.writeAdditionalData(sendVirtualAppointmentSmsPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const SendVirtualAppointmentSmsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSendVirtualAppointmentSmsPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const SendVirtualAppointmentSmsRequestBuilderUriTemplate = "{+baseurl}/communications/onlineMeetings(joinWebUrl='{joinWebUrl}')/sendVirtualAppointmentSms";
/* tslint:enable */
/* eslint-enable */