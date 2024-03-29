/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {DurationPostRequestBody}
 */
export function createDurationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDurationPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoDurationPostRequestBody(durationPostRequestBody: Partial<DurationPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { durationPostRequestBody.backingStoreEnabled = true; },
        "basis": n => { durationPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "coupon": n => { durationPostRequestBody.coupon = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { durationPostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { durationPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { durationPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "yld": n => { durationPostRequestBody.yld = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface DurationPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The basis property
     */
    basis?: Json;
    /**
     * The coupon property
     */
    coupon?: Json;
    /**
     * The frequency property
     */
    frequency?: Json;
    /**
     * The maturity property
     */
    maturity?: Json;
    /**
     * The settlement property
     */
    settlement?: Json;
    /**
     * The yld property
     */
    yld?: Json;
}
/**
 * Provides operations to call the duration method.
 */
export interface DurationRequestBuilder extends BaseRequestBuilder<DurationRequestBuilder> {
    /**
     * Invoke action duration
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: DurationPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action duration
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DurationPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeDurationPostRequestBody(writer: SerializationWriter, durationPostRequestBody: Partial<DurationPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("basis", durationPostRequestBody.basis, serializeJson);
    writer.writeObjectValue<Json>("coupon", durationPostRequestBody.coupon, serializeJson);
    writer.writeObjectValue<Json>("frequency", durationPostRequestBody.frequency, serializeJson);
    writer.writeObjectValue<Json>("maturity", durationPostRequestBody.maturity, serializeJson);
    writer.writeObjectValue<Json>("settlement", durationPostRequestBody.settlement, serializeJson);
    writer.writeObjectValue<Json>("yld", durationPostRequestBody.yld, serializeJson);
    writer.writeAdditionalData(durationPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const DurationRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/duration";
/**
 * Metadata for all the requests in the request builder.
 */
export const DurationRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: DurationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDurationPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
