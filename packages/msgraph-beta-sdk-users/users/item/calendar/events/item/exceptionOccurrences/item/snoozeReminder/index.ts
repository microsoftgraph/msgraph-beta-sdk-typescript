/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDateTimeTimeZoneFromDiscriminatorValue, serializeDateTimeTimeZone, type DateTimeTimeZone } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a snoozeReminderPostRequestBody
 */
export function createSnoozeReminderPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSnoozeReminderPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoSnoozeReminderPostRequestBody(snoozeReminderPostRequestBody: Partial<SnoozeReminderPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { snoozeReminderPostRequestBody.backingStoreEnabled = true; },
        "newReminderTime": n => { snoozeReminderPostRequestBody.newReminderTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeSnoozeReminderPostRequestBody(writer: SerializationWriter, snoozeReminderPostRequestBody: Partial<SnoozeReminderPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<DateTimeTimeZone>("NewReminderTime", snoozeReminderPostRequestBody.newReminderTime, serializeDateTimeTimeZone);
    writer.writeAdditionalData(snoozeReminderPostRequestBody.additionalData);
}
export interface SnoozeReminderPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The NewReminderTime property
     */
    newReminderTime?: DateTimeTimeZone;
}
/**
 * Provides operations to call the snoozeReminder method.
 */
export interface SnoozeReminderRequestBuilder extends BaseRequestBuilder<SnoozeReminderRequestBuilder> {
    /**
     * Postpone a reminder for an event in a user calendar until a new time.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/event-snoozereminder?view=graph-rest-1.0|Find more info here}
     */
     post(body: SnoozeReminderPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Postpone a reminder for an event in a user calendar until a new time.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: SnoozeReminderPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const SnoozeReminderRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSnoozeReminderPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const SnoozeReminderRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/calendar/events/{event%2Did}/exceptionOccurrences/{event%2Did1}/snoozeReminder";
/* tslint:enable */
/* eslint-enable */