/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { OperationApprovalSource, OperationApprovalSourceObject } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface CancelApprovalPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The approvalSource property
     */
    approvalSource?: OperationApprovalSource;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The justification property
     */
    justification?: string;
}
export interface CancelApprovalPostResponse extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The value property
     */
    value?: string;
}
/**
 * Provides operations to call the cancelApproval method.
 */
export interface CancelApprovalRequestBuilder extends BaseRequestBuilder<CancelApprovalRequestBuilder> {
    /**
     * Cancels an already approved instance of an operationApprovalRequest.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CancelApprovalPostResponse
     */
     post(body: CancelApprovalPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CancelApprovalPostResponse | undefined>;
    /**
     * Cancels an already approved instance of an operationApprovalRequest.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: CancelApprovalPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a cancelApprovalPostRequestBody
 */
export function createCancelApprovalPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCancelApprovalPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a cancelApprovalPostResponse
 */
export function createCancelApprovalPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCancelApprovalPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoCancelApprovalPostRequestBody(cancelApprovalPostRequestBody: Partial<CancelApprovalPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "approvalSource": n => { cancelApprovalPostRequestBody.approvalSource = n.getEnumValue<OperationApprovalSource>(OperationApprovalSourceObject); },
        "backingStoreEnabled": n => { cancelApprovalPostRequestBody.backingStoreEnabled = true; },
        "justification": n => { cancelApprovalPostRequestBody.justification = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoCancelApprovalPostResponse(cancelApprovalPostResponse: Partial<CancelApprovalPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { cancelApprovalPostResponse.backingStoreEnabled = true; },
        "value": n => { cancelApprovalPostResponse.value = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCancelApprovalPostRequestBody(writer: SerializationWriter, cancelApprovalPostRequestBody: Partial<CancelApprovalPostRequestBody> | undefined = {}) : void {
    writer.writeEnumValue<OperationApprovalSource>("approvalSource", cancelApprovalPostRequestBody.approvalSource);
    writer.writeStringValue("justification", cancelApprovalPostRequestBody.justification);
    writer.writeAdditionalData(cancelApprovalPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCancelApprovalPostResponse(writer: SerializationWriter, cancelApprovalPostResponse: Partial<CancelApprovalPostResponse> | undefined = {}) : void {
    writer.writeStringValue("value", cancelApprovalPostResponse.value);
    writer.writeAdditionalData(cancelApprovalPostResponse.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const CancelApprovalRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCancelApprovalPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCancelApprovalPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CancelApprovalRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/operationApprovalRequests/{operationApprovalRequest%2Did}/cancelApproval";
/* tslint:enable */
/* eslint-enable */