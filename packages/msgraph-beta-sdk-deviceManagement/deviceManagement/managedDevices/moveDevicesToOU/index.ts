/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Guid, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {MoveDevicesToOUPostRequestBody}
 */
// @ts-ignore
export function createMoveDevicesToOUPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoMoveDevicesToOUPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param MoveDevicesToOUPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoMoveDevicesToOUPostRequestBody(moveDevicesToOUPostRequestBody: Partial<MoveDevicesToOUPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { moveDevicesToOUPostRequestBody.backingStoreEnabled = true; },
        "deviceIds": n => { moveDevicesToOUPostRequestBody.deviceIds = n.getCollectionOfPrimitiveValues<Guid>(); },
        "organizationalUnitPath": n => { moveDevicesToOUPostRequestBody.organizationalUnitPath = n.getStringValue(); },
    }
}
export interface MoveDevicesToOUPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The deviceIds property
     */
    deviceIds?: Guid[] | null;
    /**
     * The organizationalUnitPath property
     */
    organizationalUnitPath?: string | null;
}
/**
 * Provides operations to call the moveDevicesToOU method.
 */
export interface MoveDevicesToOURequestBuilder extends BaseRequestBuilder<MoveDevicesToOURequestBuilder> {
    /**
     * Invoke action moveDevicesToOU
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: MoveDevicesToOUPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Invoke action moveDevicesToOU
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: MoveDevicesToOUPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param MoveDevicesToOUPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeMoveDevicesToOUPostRequestBody(writer: SerializationWriter, moveDevicesToOUPostRequestBody: Partial<MoveDevicesToOUPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!moveDevicesToOUPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeCollectionOfPrimitiveValues<Guid>("deviceIds", moveDevicesToOUPostRequestBody.deviceIds);
    writer.writeStringValue("organizationalUnitPath", moveDevicesToOUPostRequestBody.organizationalUnitPath);
    writer.writeAdditionalData(moveDevicesToOUPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const MoveDevicesToOURequestBuilderUriTemplate = "{+baseurl}/deviceManagement/managedDevices/moveDevicesToOU";
/**
 * Metadata for all the requests in the request builder.
 */
export const MoveDevicesToOURequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: MoveDevicesToOURequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMoveDevicesToOUPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
