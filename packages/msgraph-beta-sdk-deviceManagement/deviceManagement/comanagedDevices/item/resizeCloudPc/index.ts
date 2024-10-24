/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ResizeCloudPcPostRequestBody}
 */
// @ts-ignore
export function createResizeCloudPcPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoResizeCloudPcPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoResizeCloudPcPostRequestBody(resizeCloudPcPostRequestBody: Partial<ResizeCloudPcPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { resizeCloudPcPostRequestBody.backingStoreEnabled = true; },
        "targetServicePlanId": n => { resizeCloudPcPostRequestBody.targetServicePlanId = n.getStringValue(); },
    }
}
export interface ResizeCloudPcPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The targetServicePlanId property
     */
    targetServicePlanId?: string | null;
}
/**
 * Provides operations to call the resizeCloudPc method.
 */
export interface ResizeCloudPcRequestBuilder extends BaseRequestBuilder<ResizeCloudPcRequestBuilder> {
    /**
     * Upgrade or downgrade an existing Cloud PC to another configuration with a new virtual CPU (vCPU) and storage size.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The resizeCloudPc API is deprecated and will stop returning on Oct 30, 2023. Please use resize instead as of 2023-05/resizeCloudPc
     * @see {@link https://learn.microsoft.com/graph/api/manageddevice-resizecloudpc?view=graph-rest-beta|Find more info here}
     */
     post(body: ResizeCloudPcPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Upgrade or downgrade an existing Cloud PC to another configuration with a new virtual CPU (vCPU) and storage size.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The resizeCloudPc API is deprecated and will stop returning on Oct 30, 2023. Please use resize instead as of 2023-05/resizeCloudPc
     */
     toPostRequestInformation(body: ResizeCloudPcPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeResizeCloudPcPostRequestBody(writer: SerializationWriter, resizeCloudPcPostRequestBody: Partial<ResizeCloudPcPostRequestBody> | undefined | null = {}) : void {
    if (resizeCloudPcPostRequestBody) {
        writer.writeStringValue("targetServicePlanId", resizeCloudPcPostRequestBody.targetServicePlanId);
        writer.writeAdditionalData(resizeCloudPcPostRequestBody.additionalData);
    }
}
/**
 * Uri template for the request builder.
 */
export const ResizeCloudPcRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/comanagedDevices/{managedDevice%2Did}/resizeCloudPc";
/**
 * Metadata for all the requests in the request builder.
 */
export const ResizeCloudPcRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ResizeCloudPcRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeResizeCloudPcPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
