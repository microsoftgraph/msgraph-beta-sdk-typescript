/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a tbillYieldPostRequestBody
 */
export function createTbillYieldPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTbillYieldPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoTbillYieldPostRequestBody(tbillYieldPostRequestBody: Partial<TbillYieldPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { tbillYieldPostRequestBody.backingStoreEnabled = true; },
        "maturity": n => { tbillYieldPostRequestBody.maturity = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pr": n => { tbillYieldPostRequestBody.pr = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "settlement": n => { tbillYieldPostRequestBody.settlement = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeTbillYieldPostRequestBody(writer: SerializationWriter, tbillYieldPostRequestBody: Partial<TbillYieldPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("maturity", tbillYieldPostRequestBody.maturity, serializeJson);
    writer.writeObjectValue<Json>("pr", tbillYieldPostRequestBody.pr, serializeJson);
    writer.writeObjectValue<Json>("settlement", tbillYieldPostRequestBody.settlement, serializeJson);
    writer.writeAdditionalData(tbillYieldPostRequestBody.additionalData);
}
export interface TbillYieldPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The maturity property
     */
    maturity?: Json;
    /**
     * The pr property
     */
    pr?: Json;
    /**
     * The settlement property
     */
    settlement?: Json;
}
/**
 * Provides operations to call the tbillYield method.
 */
export interface TbillYieldRequestBuilder extends BaseRequestBuilder<TbillYieldRequestBuilder> {
    /**
     * Invoke action tbillYield
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
     post(body: TbillYieldPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action tbillYield
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: TbillYieldPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const TbillYieldRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTbillYieldPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const TbillYieldRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/tbillYield";
/* tslint:enable */
/* eslint-enable */