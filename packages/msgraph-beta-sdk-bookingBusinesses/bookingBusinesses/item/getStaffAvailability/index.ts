/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDateTimeTimeZoneFromDiscriminatorValue, createStaffAvailabilityItemFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeDateTimeTimeZone, serializeStaffAvailabilityItem, type BaseCollectionPaginationCountResponse, type DateTimeTimeZone, type StaffAvailabilityItem } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getStaffAvailabilityPostRequestBody
 */
export function createGetStaffAvailabilityPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetStaffAvailabilityPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getStaffAvailabilityPostResponse
 */
export function createGetStaffAvailabilityPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetStaffAvailabilityPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetStaffAvailabilityPostRequestBody(getStaffAvailabilityPostRequestBody: Partial<GetStaffAvailabilityPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getStaffAvailabilityPostRequestBody.backingStoreEnabled = true; },
        "endDateTime": n => { getStaffAvailabilityPostRequestBody.endDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "staffIds": n => { getStaffAvailabilityPostRequestBody.staffIds = n.getCollectionOfPrimitiveValues<string>(); },
        "startDateTime": n => { getStaffAvailabilityPostRequestBody.startDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetStaffAvailabilityPostResponse(getStaffAvailabilityPostResponse: Partial<GetStaffAvailabilityPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getStaffAvailabilityPostResponse),
        "value": n => { getStaffAvailabilityPostResponse.value = n.getCollectionOfObjectValues<StaffAvailabilityItem>(createStaffAvailabilityItemFromDiscriminatorValue); },
    }
}
export interface GetStaffAvailabilityPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The endDateTime property
     */
    endDateTime?: DateTimeTimeZone;
    /**
     * The staffIds property
     */
    staffIds?: string[];
    /**
     * The startDateTime property
     */
    startDateTime?: DateTimeTimeZone;
}
export interface GetStaffAvailabilityPostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: StaffAvailabilityItem[];
}
/**
 * Provides operations to call the getStaffAvailability method.
 */
export interface GetStaffAvailabilityRequestBuilder extends BaseRequestBuilder<GetStaffAvailabilityRequestBuilder> {
    /**
     * Get the availability information of staff members of a Microsoft Bookings calendar.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetStaffAvailabilityPostResponse
     * @see {@link https://learn.microsoft.com/graph/api/bookingbusiness-getstaffavailability?view=graph-rest-1.0|Find more info here}
     */
     post(body: GetStaffAvailabilityPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GetStaffAvailabilityPostResponse | undefined>;
    /**
     * Get the availability information of staff members of a Microsoft Bookings calendar.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: GetStaffAvailabilityPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetStaffAvailabilityPostRequestBody(writer: SerializationWriter, getStaffAvailabilityPostRequestBody: Partial<GetStaffAvailabilityPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<DateTimeTimeZone>("endDateTime", getStaffAvailabilityPostRequestBody.endDateTime, serializeDateTimeTimeZone);
    writer.writeCollectionOfPrimitiveValues<string>("staffIds", getStaffAvailabilityPostRequestBody.staffIds);
    writer.writeObjectValue<DateTimeTimeZone>("startDateTime", getStaffAvailabilityPostRequestBody.startDateTime, serializeDateTimeTimeZone);
    writer.writeAdditionalData(getStaffAvailabilityPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetStaffAvailabilityPostResponse(writer: SerializationWriter, getStaffAvailabilityPostResponse: Partial<GetStaffAvailabilityPostResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, getStaffAvailabilityPostResponse)
    writer.writeCollectionOfObjectValues<StaffAvailabilityItem>("value", getStaffAvailabilityPostResponse.value, serializeStaffAvailabilityItem);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const GetStaffAvailabilityRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createGetStaffAvailabilityPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetStaffAvailabilityPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const GetStaffAvailabilityRequestBuilderUriTemplate = "{+baseurl}/bookingBusinesses/{bookingBusiness%2Did}/getStaffAvailability";
/* tslint:enable */
/* eslint-enable */