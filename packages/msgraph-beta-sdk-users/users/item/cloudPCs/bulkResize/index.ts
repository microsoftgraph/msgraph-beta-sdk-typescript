/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCloudPcRemoteActionResultFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeCloudPcRemoteActionResult, type BaseCollectionPaginationCountResponse, type CloudPcRemoteActionResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface BulkResizePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
export interface BulkResizePostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CloudPcRemoteActionResult[];
}
/**
 * Provides operations to call the bulkResize method.
 */
export interface BulkResizeRequestBuilder extends BaseRequestBuilder<BulkResizeRequestBuilder> {
    /**
     * Perform a bulk resize action to resize a group of cloudPCs that have successfully passed validation. If any devices can't be resized, those devices indicate 'resize failed'. The remaining devices are provisioned for the resize process.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of BulkResizePostResponse
     * @deprecated The bulkResize action is deprecated and will stop supporting on September 24, 2023. Please use bulk action entity api. as of 2023-05/bulkResize
     * @see {@link https://learn.microsoft.com/graph/api/cloudpc-bulkresize?view=graph-rest-1.0|Find more info here}
     */
     post(body: BulkResizePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<BulkResizePostResponse | undefined>;
    /**
     * Perform a bulk resize action to resize a group of cloudPCs that have successfully passed validation. If any devices can't be resized, those devices indicate 'resize failed'. The remaining devices are provisioned for the resize process.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated The bulkResize action is deprecated and will stop supporting on September 24, 2023. Please use bulk action entity api. as of 2023-05/bulkResize
     */
     toPostRequestInformation(body: BulkResizePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a bulkResizePostRequestBody
 */
export function createBulkResizePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoBulkResizePostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a bulkResizePostResponse
 */
export function createBulkResizePostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoBulkResizePostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoBulkResizePostRequestBody(bulkResizePostRequestBody: Partial<BulkResizePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { bulkResizePostRequestBody.backingStoreEnabled = true; },
        "cloudPcIds": n => { bulkResizePostRequestBody.cloudPcIds = n.getCollectionOfPrimitiveValues<string>(); },
        "targetServicePlanId": n => { bulkResizePostRequestBody.targetServicePlanId = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoBulkResizePostResponse(bulkResizePostResponse: Partial<BulkResizePostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(bulkResizePostResponse),
        "value": n => { bulkResizePostResponse.value = n.getCollectionOfObjectValues<CloudPcRemoteActionResult>(createCloudPcRemoteActionResultFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeBulkResizePostRequestBody(writer: SerializationWriter, bulkResizePostRequestBody: Partial<BulkResizePostRequestBody> | undefined = {}) : void {
    writer.writeCollectionOfPrimitiveValues<string>("cloudPcIds", bulkResizePostRequestBody.cloudPcIds);
    writer.writeStringValue("targetServicePlanId", bulkResizePostRequestBody.targetServicePlanId);
    writer.writeAdditionalData(bulkResizePostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeBulkResizePostResponse(writer: SerializationWriter, bulkResizePostResponse: Partial<BulkResizePostResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, bulkResizePostResponse)
    writer.writeCollectionOfObjectValues<CloudPcRemoteActionResult>("value", bulkResizePostResponse.value, serializeCloudPcRemoteActionResult);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const BulkResizeRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createBulkResizePostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeBulkResizePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const BulkResizeRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/cloudPCs/bulkResize";
/* tslint:enable */
/* eslint-enable */