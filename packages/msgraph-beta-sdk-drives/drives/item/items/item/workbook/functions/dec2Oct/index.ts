/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Dec2OctPostRequestBody}
 */
export function createDec2OctPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDec2OctPostRequestBody;
}
export interface Dec2OctPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
     * The places property
     */
    places?: Json;
}
/**
 * Provides operations to call the dec2Oct method.
 */
export interface Dec2OctRequestBuilder extends BaseRequestBuilder<Dec2OctRequestBuilder> {
    /**
     * Invoke action dec2Oct
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Dec2OctPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action dec2Oct
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Dec2OctPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoDec2OctPostRequestBody(dec2OctPostRequestBody: Partial<Dec2OctPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { dec2OctPostRequestBody.backingStoreEnabled = true; },
        "number": n => { dec2OctPostRequestBody.number = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "places": n => { dec2OctPostRequestBody.places = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeDec2OctPostRequestBody(writer: SerializationWriter, dec2OctPostRequestBody: Partial<Dec2OctPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("number", dec2OctPostRequestBody.number, serializeJson);
    writer.writeObjectValue<Json>("places", dec2OctPostRequestBody.places, serializeJson);
    writer.writeAdditionalData(dec2OctPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const Dec2OctRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/dec2Oct";
/**
 * Metadata for all the requests in the request builder.
 */
export const Dec2OctRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: Dec2OctRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDec2OctPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
