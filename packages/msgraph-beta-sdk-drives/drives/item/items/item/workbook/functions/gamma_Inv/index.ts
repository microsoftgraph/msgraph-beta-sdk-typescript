/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a gamma_InvPostRequestBody
 */
export function createGamma_InvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGamma_InvPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGamma_InvPostRequestBody(gamma_InvPostRequestBody: Partial<Gamma_InvPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "alpha": n => { gamma_InvPostRequestBody.alpha = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "backingStoreEnabled": n => { gamma_InvPostRequestBody.backingStoreEnabled = true; },
        "beta": n => { gamma_InvPostRequestBody.beta = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probability": n => { gamma_InvPostRequestBody.probability = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface Gamma_InvPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
     * The beta property
     */
    beta?: Json;
    /**
     * The probability property
     */
    probability?: Json;
}
/**
 * Provides operations to call the gamma_Inv method.
 */
export interface Gamma_InvRequestBuilder extends BaseRequestBuilder<Gamma_InvRequestBuilder> {
    /**
     * Invoke action gamma_Inv
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
     post(body: Gamma_InvPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action gamma_Inv
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Gamma_InvPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGamma_InvPostRequestBody(writer: SerializationWriter, gamma_InvPostRequestBody: Partial<Gamma_InvPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("alpha", gamma_InvPostRequestBody.alpha, serializeJson);
    writer.writeObjectValue<Json>("beta", gamma_InvPostRequestBody.beta, serializeJson);
    writer.writeObjectValue<Json>("probability", gamma_InvPostRequestBody.probability, serializeJson);
    writer.writeAdditionalData(gamma_InvPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const Gamma_InvRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGamma_InvPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const Gamma_InvRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/gamma_Inv";
/* tslint:enable */
/* eslint-enable */