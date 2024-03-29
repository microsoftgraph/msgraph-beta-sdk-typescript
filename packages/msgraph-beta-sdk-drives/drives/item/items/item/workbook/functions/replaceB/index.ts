/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ReplaceBPostRequestBody}
 */
export function createReplaceBPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoReplaceBPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoReplaceBPostRequestBody(replaceBPostRequestBody: Partial<ReplaceBPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { replaceBPostRequestBody.backingStoreEnabled = true; },
        "newText": n => { replaceBPostRequestBody.newText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numBytes": n => { replaceBPostRequestBody.numBytes = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "oldText": n => { replaceBPostRequestBody.oldText = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startNum": n => { replaceBPostRequestBody.startNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface ReplaceBPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The newText property
     */
    newText?: Json;
    /**
     * The numBytes property
     */
    numBytes?: Json;
    /**
     * The oldText property
     */
    oldText?: Json;
    /**
     * The startNum property
     */
    startNum?: Json;
}
/**
 * Provides operations to call the replaceB method.
 */
export interface ReplaceBRequestBuilder extends BaseRequestBuilder<ReplaceBRequestBuilder> {
    /**
     * Invoke action replaceB
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ReplaceBPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action replaceB
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ReplaceBPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeReplaceBPostRequestBody(writer: SerializationWriter, replaceBPostRequestBody: Partial<ReplaceBPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("newText", replaceBPostRequestBody.newText, serializeJson);
    writer.writeObjectValue<Json>("numBytes", replaceBPostRequestBody.numBytes, serializeJson);
    writer.writeObjectValue<Json>("oldText", replaceBPostRequestBody.oldText, serializeJson);
    writer.writeObjectValue<Json>("startNum", replaceBPostRequestBody.startNum, serializeJson);
    writer.writeAdditionalData(replaceBPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ReplaceBRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/replaceB";
/**
 * Metadata for all the requests in the request builder.
 */
export const ReplaceBRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ReplaceBRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeReplaceBPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
