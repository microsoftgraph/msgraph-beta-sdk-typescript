/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createClassificationResultFromDiscriminatorValue, createContentInfoFromDiscriminatorValue, createInformationProtectionActionFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeClassificationResult, serializeContentInfo, serializeInformationProtectionAction, type BaseCollectionPaginationCountResponse, type ClassificationResult, type ContentInfo, type InformationProtectionAction } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {EvaluateClassificationResultsPostRequestBody}
 */
// @ts-ignore
export function createEvaluateClassificationResultsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEvaluateClassificationResultsPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {EvaluateClassificationResultsPostResponse}
 */
// @ts-ignore
export function createEvaluateClassificationResultsPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEvaluateClassificationResultsPostResponse;
}
/**
 * The deserialization information for the current model
 * @param EvaluateClassificationResultsPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoEvaluateClassificationResultsPostRequestBody(evaluateClassificationResultsPostRequestBody: Partial<EvaluateClassificationResultsPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { evaluateClassificationResultsPostRequestBody.backingStoreEnabled = true; },
        "classificationResults": n => { evaluateClassificationResultsPostRequestBody.classificationResults = n.getCollectionOfObjectValues<ClassificationResult>(createClassificationResultFromDiscriminatorValue); },
        "contentInfo": n => { evaluateClassificationResultsPostRequestBody.contentInfo = n.getObjectValue<ContentInfo>(createContentInfoFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @param EvaluateClassificationResultsPostResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoEvaluateClassificationResultsPostResponse(evaluateClassificationResultsPostResponse: Partial<EvaluateClassificationResultsPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(evaluateClassificationResultsPostResponse),
        "value": n => { evaluateClassificationResultsPostResponse.value = n.getCollectionOfObjectValues<InformationProtectionAction>(createInformationProtectionActionFromDiscriminatorValue); },
    }
}
export interface EvaluateClassificationResultsPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The classificationResults property
     */
    classificationResults?: ClassificationResult[] | null;
    /**
     * The contentInfo property
     */
    contentInfo?: ContentInfo | null;
}
export interface EvaluateClassificationResultsPostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: InformationProtectionAction[] | null;
}
/**
 * Provides operations to call the evaluateClassificationResults method.
 */
export interface EvaluateClassificationResultsRequestBuilder extends BaseRequestBuilder<EvaluateClassificationResultsRequestBuilder> {
    /**
     * Using classification results, compute the information protection label that should be applied and return the set of actions that must be taken to correctly label the information. This API is useful when a label should be set automatically based on classification of the file contents, rather than labeled directly by a user or service. To evaluate based on classification results, provide contentInfo, which includes existing content metadata key/value pairs, and classification results. The API returns an informationProtectionAction that contains one of more of the following:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EvaluateClassificationResultsPostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated This API will no longer be accessible, please see microsoft.graph.security.informationProtection APIs. as of 2021-02/Beta_SensitivityLabels on 2021-02-15 and will be removed 2022-08-15
     * @see {@link https://learn.microsoft.com/graph/api/informationprotectionlabel-evaluateclassificationresults?view=graph-rest-beta|Find more info here}
     */
     post(body: EvaluateClassificationResultsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EvaluateClassificationResultsPostResponse | undefined>;
    /**
     * Using classification results, compute the information protection label that should be applied and return the set of actions that must be taken to correctly label the information. This API is useful when a label should be set automatically based on classification of the file contents, rather than labeled directly by a user or service. To evaluate based on classification results, provide contentInfo, which includes existing content metadata key/value pairs, and classification results. The API returns an informationProtectionAction that contains one of more of the following:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated This API will no longer be accessible, please see microsoft.graph.security.informationProtection APIs. as of 2021-02/Beta_SensitivityLabels on 2021-02-15 and will be removed 2022-08-15
     */
     toPostRequestInformation(body: EvaluateClassificationResultsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param EvaluateClassificationResultsPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeEvaluateClassificationResultsPostRequestBody(writer: SerializationWriter, evaluateClassificationResultsPostRequestBody: Partial<EvaluateClassificationResultsPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!evaluateClassificationResultsPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeCollectionOfObjectValues<ClassificationResult>("classificationResults", evaluateClassificationResultsPostRequestBody.classificationResults, serializeClassificationResult);
    writer.writeObjectValue<ContentInfo>("contentInfo", evaluateClassificationResultsPostRequestBody.contentInfo, serializeContentInfo);
    writer.writeAdditionalData(evaluateClassificationResultsPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param EvaluateClassificationResultsPostResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeEvaluateClassificationResultsPostResponse(writer: SerializationWriter, evaluateClassificationResultsPostResponse: Partial<EvaluateClassificationResultsPostResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!evaluateClassificationResultsPostResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, evaluateClassificationResultsPostResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<InformationProtectionAction>("value", evaluateClassificationResultsPostResponse.value, serializeInformationProtectionAction);
}
/**
 * Uri template for the request builder.
 */
export const EvaluateClassificationResultsRequestBuilderUriTemplate = "{+baseurl}/informationProtection/policy/labels/evaluateClassificationResults";
/**
 * Metadata for all the requests in the request builder.
 */
export const EvaluateClassificationResultsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: EvaluateClassificationResultsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEvaluateClassificationResultsPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEvaluateClassificationResultsPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
