/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface CoupNumPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
}
/**
 * Provides operations to call the coupNum method.
 */
export interface CoupNumRequestBuilder extends BaseRequestBuilder<CoupNumRequestBuilder> {
    /**
     * Invoke action coupNum
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: CoupNumPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action coupNum
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CoupNumPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CoupNumPostRequestBody}
 */
export function createCoupNumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCoupNumPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoCoupNumPostRequestBody(coupNumPostRequestBody: Partial<CoupNumPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { coupNumPostRequestBody.backingStoreEnabled = true; },
        "basis": n => { coupNumPostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { coupNumPostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { coupNumPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { coupNumPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCoupNumPostRequestBody(writer: SerializationWriter, coupNumPostRequestBody: Partial<CoupNumPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("basis", coupNumPostRequestBody.basis, serializeJson);
    writer.writeObjectValue<Json>("frequency", coupNumPostRequestBody.frequency, serializeJson);
    writer.writeObjectValue<Json>("maturity", coupNumPostRequestBody.maturity, serializeJson);
    writer.writeObjectValue<Json>("settlement", coupNumPostRequestBody.settlement, serializeJson);
    writer.writeAdditionalData(coupNumPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const CoupNumRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/coupNum";
/**
 * Metadata for all the requests in the request builder.
 */
export const CoupNumRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: CoupNumRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCoupNumPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
