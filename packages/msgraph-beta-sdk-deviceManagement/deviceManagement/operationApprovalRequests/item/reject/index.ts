/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { OperationApprovalSource, OperationApprovalSourceObject } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a rejectPostRequestBody
 */
export function createRejectPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRejectPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a rejectPostResponse
 */
export function createRejectPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRejectPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoRejectPostRequestBody(rejectPostRequestBody: Partial<RejectPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "approvalSource": n => { rejectPostRequestBody.approvalSource = n.getEnumValue<OperationApprovalSource>(OperationApprovalSourceObject); },
        "backingStoreEnabled": n => { rejectPostRequestBody.backingStoreEnabled = true; },
        "justification": n => { rejectPostRequestBody.justification = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoRejectPostResponse(rejectPostResponse: Partial<RejectPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { rejectPostResponse.backingStoreEnabled = true; },
        "value": n => { rejectPostResponse.value = n.getStringValue(); },
    }
}
export interface RejectPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
export interface RejectPostResponse extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the reject method.
 */
export interface RejectRequestBuilder extends BaseRequestBuilder<RejectRequestBuilder> {
    /**
     * Rejects the requested instance of an operationApprovalRequest.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of RejectPostResponse
     */
     post(body: RejectPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<RejectPostResponse | undefined>;
    /**
     * Rejects the requested instance of an operationApprovalRequest.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: RejectPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeRejectPostRequestBody(writer: SerializationWriter, rejectPostRequestBody: Partial<RejectPostRequestBody> | undefined = {}) : void {
    writer.writeEnumValue<OperationApprovalSource>("approvalSource", rejectPostRequestBody.approvalSource);
    writer.writeStringValue("justification", rejectPostRequestBody.justification);
    writer.writeAdditionalData(rejectPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeRejectPostResponse(writer: SerializationWriter, rejectPostResponse: Partial<RejectPostResponse> | undefined = {}) : void {
    writer.writeStringValue("value", rejectPostResponse.value);
    writer.writeAdditionalData(rejectPostResponse.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const RejectRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createRejectPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRejectPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const RejectRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/operationApprovalRequests/{operationApprovalRequest%2Did}/reject";
/* tslint:enable */
/* eslint-enable */