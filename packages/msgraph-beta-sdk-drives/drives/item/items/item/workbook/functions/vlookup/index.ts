/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a vlookupPostRequestBody
 */
export function createVlookupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoVlookupPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoVlookupPostRequestBody(vlookupPostRequestBody: Partial<VlookupPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { vlookupPostRequestBody.backingStoreEnabled = true; },
        "colIndexNum": n => { vlookupPostRequestBody.colIndexNum = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "lookupValue": n => { vlookupPostRequestBody.lookupValue = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rangeLookup": n => { vlookupPostRequestBody.rangeLookup = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "tableArray": n => { vlookupPostRequestBody.tableArray = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeVlookupPostRequestBody(writer: SerializationWriter, vlookupPostRequestBody: Partial<VlookupPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("colIndexNum", vlookupPostRequestBody.colIndexNum, serializeJson);
    writer.writeObjectValue<Json>("lookupValue", vlookupPostRequestBody.lookupValue, serializeJson);
    writer.writeObjectValue<Json>("rangeLookup", vlookupPostRequestBody.rangeLookup, serializeJson);
    writer.writeObjectValue<Json>("tableArray", vlookupPostRequestBody.tableArray, serializeJson);
    writer.writeAdditionalData(vlookupPostRequestBody.additionalData);
}
export interface VlookupPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The colIndexNum property
     */
    colIndexNum?: Json;
    /**
     * The lookupValue property
     */
    lookupValue?: Json;
    /**
     * The rangeLookup property
     */
    rangeLookup?: Json;
    /**
     * The tableArray property
     */
    tableArray?: Json;
}
/**
 * Provides operations to call the vlookup method.
 */
export interface VlookupRequestBuilder extends BaseRequestBuilder<VlookupRequestBuilder> {
    /**
     * Invoke action vlookup
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
     post(body: VlookupPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action vlookup
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: VlookupPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const VlookupRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeVlookupPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const VlookupRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/vlookup";
/* tslint:enable */
/* eslint-enable */