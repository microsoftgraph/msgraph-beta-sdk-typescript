/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a oddLPricePostRequestBody
 */
export function createOddLPricePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoOddLPricePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoOddLPricePostRequestBody(oddLPricePostRequestBody: Partial<OddLPricePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { oddLPricePostRequestBody.backingStoreEnabled = true; },
        "basis": n => { oddLPricePostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { oddLPricePostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "lastInterest": n => { oddLPricePostRequestBody.lastInterest = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { oddLPricePostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { oddLPricePostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "redemption": n => { oddLPricePostRequestBody.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { oddLPricePostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "yld": n => { oddLPricePostRequestBody.yld = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface OddLPricePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
     * The lastInterest property
     */
    lastInterest?: Json;
    /**
     * The maturity property
     */
    maturity?: Json;
    /**
     * The rate property
     */
    rate?: Json;
    /**
     * The redemption property
     */
    redemption?: Json;
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
 * Provides operations to call the oddLPrice method.
 */
export interface OddLPriceRequestBuilder extends BaseRequestBuilder<OddLPriceRequestBuilder> {
    /**
     * Invoke action oddLPrice
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
     post(body: OddLPricePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action oddLPrice
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: OddLPricePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeOddLPricePostRequestBody(writer: SerializationWriter, oddLPricePostRequestBody: Partial<OddLPricePostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("basis", oddLPricePostRequestBody.basis, serializeJson);
    writer.writeObjectValue<Json>("frequency", oddLPricePostRequestBody.frequency, serializeJson);
    writer.writeObjectValue<Json>("lastInterest", oddLPricePostRequestBody.lastInterest, serializeJson);
    writer.writeObjectValue<Json>("maturity", oddLPricePostRequestBody.maturity, serializeJson);
    writer.writeObjectValue<Json>("rate", oddLPricePostRequestBody.rate, serializeJson);
    writer.writeObjectValue<Json>("redemption", oddLPricePostRequestBody.redemption, serializeJson);
    writer.writeObjectValue<Json>("settlement", oddLPricePostRequestBody.settlement, serializeJson);
    writer.writeObjectValue<Json>("yld", oddLPricePostRequestBody.yld, serializeJson);
    writer.writeAdditionalData(oddLPricePostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const OddLPriceRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeOddLPricePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const OddLPriceRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/oddLPrice";
/* tslint:enable */
/* eslint-enable */