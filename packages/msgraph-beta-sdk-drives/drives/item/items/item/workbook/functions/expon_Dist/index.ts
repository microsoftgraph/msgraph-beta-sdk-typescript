/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a expon_DistPostRequestBody
 */
export function createExpon_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoExpon_DistPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoExpon_DistPostRequestBody(expon_DistPostRequestBody: Partial<Expon_DistPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { expon_DistPostRequestBody.backingStoreEnabled = true; },
        "cumulative": n => { expon_DistPostRequestBody.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "lambda": n => { expon_DistPostRequestBody.lambda = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "x": n => { expon_DistPostRequestBody.x = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface Expon_DistPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The cumulative property
     */
    cumulative?: Json;
    /**
     * The lambda property
     */
    lambda?: Json;
    /**
     * The x property
     */
    x?: Json;
}
/**
 * Provides operations to call the expon_Dist method.
 */
export interface Expon_DistRequestBuilder extends BaseRequestBuilder<Expon_DistRequestBuilder> {
    /**
     * Invoke action expon_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
     post(body: Expon_DistPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action expon_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Expon_DistPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeExpon_DistPostRequestBody(writer: SerializationWriter, expon_DistPostRequestBody: Partial<Expon_DistPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("cumulative", expon_DistPostRequestBody.cumulative, serializeJson);
    writer.writeObjectValue<Json>("lambda", expon_DistPostRequestBody.lambda, serializeJson);
    writer.writeObjectValue<Json>("x", expon_DistPostRequestBody.x, serializeJson);
    writer.writeAdditionalData(expon_DistPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const Expon_DistRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeExpon_DistPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const Expon_DistRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/expon_Dist";
/* tslint:enable */
/* eslint-enable */