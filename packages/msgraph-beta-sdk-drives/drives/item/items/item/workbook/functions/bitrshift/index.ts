/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface BitrshiftPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The number property
     */
    number?: Json;
    /**
     * The shiftAmount property
     */
    shiftAmount?: Json;
}
/**
 * Provides operations to call the bitrshift method.
 */
export interface BitrshiftRequestBuilder extends BaseRequestBuilder<BitrshiftRequestBuilder> {
    /**
     * Invoke action bitrshift
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
     post(body: BitrshiftPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action bitrshift
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: BitrshiftPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a bitrshiftPostRequestBody
 */
export function createBitrshiftPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoBitrshiftPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoBitrshiftPostRequestBody(bitrshiftPostRequestBody: Partial<BitrshiftPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { bitrshiftPostRequestBody.backingStoreEnabled = true; },
        "number": n => { bitrshiftPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "shiftAmount": n => { bitrshiftPostRequestBody.shiftAmount = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeBitrshiftPostRequestBody(writer: SerializationWriter, bitrshiftPostRequestBody: Partial<BitrshiftPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("number", bitrshiftPostRequestBody.number, serializeJson);
    writer.writeObjectValue<Json>("shiftAmount", bitrshiftPostRequestBody.shiftAmount, serializeJson);
    writer.writeAdditionalData(bitrshiftPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const BitrshiftRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeBitrshiftPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const BitrshiftRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/bitrshift";
/* tslint:enable */
/* eslint-enable */