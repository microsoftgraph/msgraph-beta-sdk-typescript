/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a ipmtPostRequestBody
 */
export function createIpmtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoIpmtPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoIpmtPostRequestBody(ipmtPostRequestBody: Partial<IpmtPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { ipmtPostRequestBody.backingStoreEnabled = true; },
        "fv": n => { ipmtPostRequestBody.fv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "nper": n => { ipmtPostRequestBody.nper = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "per": n => { ipmtPostRequestBody.per = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "pv": n => { ipmtPostRequestBody.pv = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "rate": n => { ipmtPostRequestBody.rate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "type": n => { ipmtPostRequestBody.type = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface IpmtPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The fv property
     */
    fv?: Json;
    /**
     * The nper property
     */
    nper?: Json;
    /**
     * The per property
     */
    per?: Json;
    /**
     * The pv property
     */
    pv?: Json;
    /**
     * The rate property
     */
    rate?: Json;
    /**
     * The type property
     */
    type?: Json;
}
/**
 * Provides operations to call the ipmt method.
 */
export interface IpmtRequestBuilder extends BaseRequestBuilder<IpmtRequestBuilder> {
    /**
     * Invoke action ipmt
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
     post(body: IpmtPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action ipmt
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: IpmtPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeIpmtPostRequestBody(writer: SerializationWriter, ipmtPostRequestBody: Partial<IpmtPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("fv", ipmtPostRequestBody.fv, serializeJson);
    writer.writeObjectValue<Json>("nper", ipmtPostRequestBody.nper, serializeJson);
    writer.writeObjectValue<Json>("per", ipmtPostRequestBody.per, serializeJson);
    writer.writeObjectValue<Json>("pv", ipmtPostRequestBody.pv, serializeJson);
    writer.writeObjectValue<Json>("rate", ipmtPostRequestBody.rate, serializeJson);
    writer.writeObjectValue<Json>("type", ipmtPostRequestBody.type, serializeJson);
    writer.writeAdditionalData(ipmtPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const IpmtRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeIpmtPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const IpmtRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/ipmt";
/* tslint:enable */
/* eslint-enable */