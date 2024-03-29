/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SlnPostRequestBody}
 */
export function createSlnPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSlnPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoSlnPostRequestBody(slnPostRequestBody: Partial<SlnPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { slnPostRequestBody.backingStoreEnabled = true; },
        "cost": n => { slnPostRequestBody.cost = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "life": n => { slnPostRequestBody.life = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "salvage": n => { slnPostRequestBody.salvage = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeSlnPostRequestBody(writer: SerializationWriter, slnPostRequestBody: Partial<SlnPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("cost", slnPostRequestBody.cost, serializeJson);
    writer.writeObjectValue<Json>("life", slnPostRequestBody.life, serializeJson);
    writer.writeObjectValue<Json>("salvage", slnPostRequestBody.salvage, serializeJson);
    writer.writeAdditionalData(slnPostRequestBody.additionalData);
}
export interface SlnPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The cost property
     */
    cost?: Json;
    /**
     * The life property
     */
    life?: Json;
    /**
     * The salvage property
     */
    salvage?: Json;
}
/**
 * Provides operations to call the sln method.
 */
export interface SlnRequestBuilder extends BaseRequestBuilder<SlnRequestBuilder> {
    /**
     * Invoke action sln
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: SlnPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action sln
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: SlnPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const SlnRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/sln";
/**
 * Metadata for all the requests in the request builder.
 */
export const SlnRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: SlnRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSlnPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
