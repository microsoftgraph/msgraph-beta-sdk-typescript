/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a percentRank_ExcPostRequestBody
 */
export function createPercentRank_ExcPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoPercentRank_ExcPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoPercentRank_ExcPostRequestBody(percentRank_ExcPostRequestBody: Partial<PercentRank_ExcPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { percentRank_ExcPostRequestBody.array = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "backingStoreEnabled": n => { percentRank_ExcPostRequestBody.backingStoreEnabled = true; },
        "significance": n => { percentRank_ExcPostRequestBody.significance = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { percentRank_ExcPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface PercentRank_ExcPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The array property
     */
    array?: Json;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The significance property
     */
    significance?: Json;
    /**
     * The x property
     */
    x?: Json;
}
/**
 * Provides operations to call the percentRank_Exc method.
 */
export interface PercentRank_ExcRequestBuilder extends BaseRequestBuilder<PercentRank_ExcRequestBuilder> {
    /**
     * Invoke action percentRank_Exc
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
     post(body: PercentRank_ExcPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action percentRank_Exc
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: PercentRank_ExcPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializePercentRank_ExcPostRequestBody(writer: SerializationWriter, percentRank_ExcPostRequestBody: Partial<PercentRank_ExcPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("array", percentRank_ExcPostRequestBody.array, serializeJson);
    writer.writeObjectValue<Json>("significance", percentRank_ExcPostRequestBody.significance, serializeJson);
    writer.writeObjectValue<Json>("x", percentRank_ExcPostRequestBody.x, serializeJson);
    writer.writeAdditionalData(percentRank_ExcPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const PercentRank_ExcRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePercentRank_ExcPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const PercentRank_ExcRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/percentRank_Exc";
/* tslint:enable */
/* eslint-enable */