/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDlpEvaluatePoliciesJobResponseFromDiscriminatorValue, createDlpEvaluationInputFromDiscriminatorValue, createDlpNotificationFromDiscriminatorValue, serializeDlpEvaluatePoliciesJobResponse, serializeDlpEvaluationInput, serializeDlpNotification, type DlpEvaluatePoliciesJobResponse, type DlpEvaluationInput, type DlpNotification } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a evaluatePostRequestBody
 */
export function createEvaluatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEvaluatePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoEvaluatePostRequestBody(evaluatePostRequestBody: Partial<EvaluatePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { evaluatePostRequestBody.backingStoreEnabled = true; },
        "evaluationInput": n => { evaluatePostRequestBody.evaluationInput = n.getObjectValue<DlpEvaluationInput>(createDlpEvaluationInputFromDiscriminatorValue); },
        "notificationInfo": n => { evaluatePostRequestBody.notificationInfo = n.getObjectValue<DlpNotification>(createDlpNotificationFromDiscriminatorValue); },
        "target": n => { evaluatePostRequestBody.target = n.getStringValue(); },
    }
}
export interface EvaluatePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The evaluationInput property
     */
    evaluationInput?: DlpEvaluationInput;
    /**
     * The notificationInfo property
     */
    notificationInfo?: DlpNotification;
    /**
     * The target property
     */
    target?: string;
}
/**
 * Provides operations to call the evaluate method.
 */
export interface EvaluateRequestBuilder extends BaseRequestBuilder<EvaluateRequestBuilder> {
    /**
     * Invoke action evaluate
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DlpEvaluatePoliciesJobResponse
     */
     post(body: EvaluatePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DlpEvaluatePoliciesJobResponse | undefined>;
    /**
     * Invoke action evaluate
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: EvaluatePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeEvaluatePostRequestBody(writer: SerializationWriter, evaluatePostRequestBody: Partial<EvaluatePostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<DlpEvaluationInput>("evaluationInput", evaluatePostRequestBody.evaluationInput, serializeDlpEvaluationInput);
    writer.writeObjectValue<DlpNotification>("notificationInfo", evaluatePostRequestBody.notificationInfo, serializeDlpNotification);
    writer.writeStringValue("target", evaluatePostRequestBody.target);
    writer.writeAdditionalData(evaluatePostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const EvaluateRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDlpEvaluatePoliciesJobResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEvaluatePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const EvaluateRequestBuilderUriTemplate = "{+baseurl}/informationProtection/dataLossPreventionPolicies/evaluate";
/* tslint:enable */
/* eslint-enable */