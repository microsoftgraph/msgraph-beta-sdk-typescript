/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a seriesSumPostRequestBody
 */
export function createSeriesSumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSeriesSumPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoSeriesSumPostRequestBody(seriesSumPostRequestBody: Partial<SeriesSumPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { seriesSumPostRequestBody.backingStoreEnabled = true; },
        "coefficients": n => { seriesSumPostRequestBody.coefficients = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "m": n => { seriesSumPostRequestBody.m = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "n": n => { seriesSumPostRequestBody.n = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { seriesSumPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeSeriesSumPostRequestBody(writer: SerializationWriter, seriesSumPostRequestBody: Partial<SeriesSumPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("coefficients", seriesSumPostRequestBody.coefficients, serializeJson);
    writer.writeObjectValue<Json>("m", seriesSumPostRequestBody.m, serializeJson);
    writer.writeObjectValue<Json>("n", seriesSumPostRequestBody.n, serializeJson);
    writer.writeObjectValue<Json>("x", seriesSumPostRequestBody.x, serializeJson);
    writer.writeAdditionalData(seriesSumPostRequestBody.additionalData);
}
export interface SeriesSumPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The coefficients property
     */
    coefficients?: Json;
    /**
     * The m property
     */
    m?: Json;
    /**
     * The n property
     */
    n?: Json;
    /**
     * The x property
     */
    x?: Json;
}
/**
 * Provides operations to call the seriesSum method.
 */
export interface SeriesSumRequestBuilder extends BaseRequestBuilder<SeriesSumRequestBuilder> {
    /**
     * Invoke action seriesSum
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
     post(body: SeriesSumPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action seriesSum
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: SeriesSumPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const SeriesSumRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSeriesSumPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const SeriesSumRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/seriesSum";
/* tslint:enable */
/* eslint-enable */