/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCloudPcResizeValidationResultFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeCloudPcResizeValidationResult, type BaseCollectionPaginationCountResponse, type CloudPcResizeValidationResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a validateBulkResizePostRequestBody
 */
export function createValidateBulkResizePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoValidateBulkResizePostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a validateBulkResizePostResponse
 */
export function createValidateBulkResizePostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoValidateBulkResizePostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoValidateBulkResizePostRequestBody(validateBulkResizePostRequestBody: Partial<ValidateBulkResizePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { validateBulkResizePostRequestBody.backingStoreEnabled = true; },
        "cloudPcIds": n => { validateBulkResizePostRequestBody.cloudPcIds = n.getCollectionOfPrimitiveValues<string>(); },
        "targetServicePlanId": n => { validateBulkResizePostRequestBody.targetServicePlanId = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoValidateBulkResizePostResponse(validateBulkResizePostResponse: Partial<ValidateBulkResizePostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(validateBulkResizePostResponse),
        "value": n => { validateBulkResizePostResponse.value = n.getCollectionOfObjectValues<CloudPcResizeValidationResult>(createCloudPcResizeValidationResultFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeValidateBulkResizePostRequestBody(writer: SerializationWriter, validateBulkResizePostRequestBody: Partial<ValidateBulkResizePostRequestBody> | undefined = {}) : void {
    writer.writeCollectionOfPrimitiveValues<string>("cloudPcIds", validateBulkResizePostRequestBody.cloudPcIds);
    writer.writeStringValue("targetServicePlanId", validateBulkResizePostRequestBody.targetServicePlanId);
    writer.writeAdditionalData(validateBulkResizePostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeValidateBulkResizePostResponse(writer: SerializationWriter, validateBulkResizePostResponse: Partial<ValidateBulkResizePostResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, validateBulkResizePostResponse)
    writer.writeCollectionOfObjectValues<CloudPcResizeValidationResult>("value", validateBulkResizePostResponse.value, serializeCloudPcResizeValidationResult);
}
export interface ValidateBulkResizePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The cloudPcIds property
     */
    cloudPcIds?: string[];
    /**
     * The targetServicePlanId property
     */
    targetServicePlanId?: string;
}
export interface ValidateBulkResizePostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CloudPcResizeValidationResult[];
}
/**
 * Provides operations to call the validateBulkResize method.
 */
export interface ValidateBulkResizeRequestBuilder extends BaseRequestBuilder<ValidateBulkResizeRequestBuilder> {
    /**
     * Validate that a set of cloudPC devices meet the requirements to be bulk resized.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ValidateBulkResizePostResponse
     * @see {@link https://learn.microsoft.com/graph/api/cloudpc-validatebulkresize?view=graph-rest-1.0|Find more info here}
     */
     post(body: ValidateBulkResizePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ValidateBulkResizePostResponse | undefined>;
    /**
     * Validate that a set of cloudPC devices meet the requirements to be bulk resized.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: ValidateBulkResizePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const ValidateBulkResizeRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createValidateBulkResizePostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeValidateBulkResizePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ValidateBulkResizeRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/virtualEndpoint/cloudPCs/validateBulkResize";
/* tslint:enable */
/* eslint-enable */