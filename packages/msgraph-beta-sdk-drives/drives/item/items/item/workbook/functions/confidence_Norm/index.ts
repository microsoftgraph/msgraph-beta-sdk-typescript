/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface Confidence_NormPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The alpha property
     */
    alpha?: Json;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The size property
     */
    size?: Json;
    /**
     * The standardDev property
     */
    standardDev?: Json;
}
/**
 * Provides operations to call the confidence_Norm method.
 */
export interface Confidence_NormRequestBuilder extends BaseRequestBuilder<Confidence_NormRequestBuilder> {
    /**
     * Invoke action confidence_Norm
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Confidence_NormPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action confidence_Norm
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Confidence_NormPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {Confidence_NormPostRequestBody}
 */
export function createConfidence_NormPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoConfidence_NormPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoConfidence_NormPostRequestBody(confidence_NormPostRequestBody: Partial<Confidence_NormPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "alpha": n => { confidence_NormPostRequestBody.alpha = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "backingStoreEnabled": n => { confidence_NormPostRequestBody.backingStoreEnabled = true; },
        "size": n => { confidence_NormPostRequestBody.size = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "standardDev": n => { confidence_NormPostRequestBody.standardDev = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeConfidence_NormPostRequestBody(writer: SerializationWriter, confidence_NormPostRequestBody: Partial<Confidence_NormPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("alpha", confidence_NormPostRequestBody.alpha, serializeJson);
    writer.writeObjectValue<Json>("size", confidence_NormPostRequestBody.size, serializeJson);
    writer.writeObjectValue<Json>("standardDev", confidence_NormPostRequestBody.standardDev, serializeJson);
    writer.writeAdditionalData(confidence_NormPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const Confidence_NormRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/confidence_Norm";
/**
 * Metadata for all the requests in the request builder.
 */
export const Confidence_NormRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: Confidence_NormRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeConfidence_NormPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
