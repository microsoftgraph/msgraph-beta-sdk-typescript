/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a pricePostRequestBody
 */
export function createPricePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoPricePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoPricePostRequestBody(pricePostRequestBody: Partial<PricePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { pricePostRequestBody.backingStoreEnabled = true; },
        "basis": n => { pricePostRequestBody.basis = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "frequency": n => { pricePostRequestBody.frequency = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "maturity": n => { pricePostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { pricePostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "redemption": n => { pricePostRequestBody.redemption = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { pricePostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "yld": n => { pricePostRequestBody.yld = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface PricePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the price method.
 */
export interface PriceRequestBuilder extends BaseRequestBuilder<PriceRequestBuilder> {
    /**
     * Invoke action price
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
     post(body: PricePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action price
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: PricePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializePricePostRequestBody(writer: SerializationWriter, pricePostRequestBody: Partial<PricePostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("basis", pricePostRequestBody.basis, serializeJson);
    writer.writeObjectValue<Json>("frequency", pricePostRequestBody.frequency, serializeJson);
    writer.writeObjectValue<Json>("maturity", pricePostRequestBody.maturity, serializeJson);
    writer.writeObjectValue<Json>("rate", pricePostRequestBody.rate, serializeJson);
    writer.writeObjectValue<Json>("redemption", pricePostRequestBody.redemption, serializeJson);
    writer.writeObjectValue<Json>("settlement", pricePostRequestBody.settlement, serializeJson);
    writer.writeObjectValue<Json>("yld", pricePostRequestBody.yld, serializeJson);
    writer.writeAdditionalData(pricePostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const PriceRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePricePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const PriceRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/price";
/* tslint:enable */
/* eslint-enable */