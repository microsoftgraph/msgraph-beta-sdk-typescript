/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a workDay_IntlPostRequestBody
 */
export function createWorkDay_IntlPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoWorkDay_IntlPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoWorkDay_IntlPostRequestBody(workDay_IntlPostRequestBody: Partial<WorkDay_IntlPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { workDay_IntlPostRequestBody.backingStoreEnabled = true; },
        "days": n => { workDay_IntlPostRequestBody.days = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "holidays": n => { workDay_IntlPostRequestBody.holidays = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "startDate": n => { workDay_IntlPostRequestBody.startDate = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "weekend": n => { workDay_IntlPostRequestBody.weekend = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeWorkDay_IntlPostRequestBody(writer: SerializationWriter, workDay_IntlPostRequestBody: Partial<WorkDay_IntlPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("days", workDay_IntlPostRequestBody.days, serializeJson);
    writer.writeObjectValue<Json>("holidays", workDay_IntlPostRequestBody.holidays, serializeJson);
    writer.writeObjectValue<Json>("startDate", workDay_IntlPostRequestBody.startDate, serializeJson);
    writer.writeObjectValue<Json>("weekend", workDay_IntlPostRequestBody.weekend, serializeJson);
    writer.writeAdditionalData(workDay_IntlPostRequestBody.additionalData);
}
export interface WorkDay_IntlPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The days property
     */
    days?: Json;
    /**
     * The holidays property
     */
    holidays?: Json;
    /**
     * The startDate property
     */
    startDate?: Json;
    /**
     * The weekend property
     */
    weekend?: Json;
}
/**
 * Provides operations to call the workDay_Intl method.
 */
export interface WorkDay_IntlRequestBuilder extends BaseRequestBuilder<WorkDay_IntlRequestBuilder> {
    /**
     * Invoke action workDay_Intl
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WorkbookFunctionResult
     */
     post(body: WorkDay_IntlPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action workDay_Intl
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: WorkDay_IntlPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const WorkDay_IntlRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWorkDay_IntlPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const WorkDay_IntlRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/workDay_Intl";
/* tslint:enable */
/* eslint-enable */