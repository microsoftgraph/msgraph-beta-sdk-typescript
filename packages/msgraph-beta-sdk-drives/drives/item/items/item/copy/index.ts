/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDriveItemFromDiscriminatorValue, createItemReferenceFromDiscriminatorValue, serializeDriveItem, serializeItemReference, type DriveItem, type ItemReference } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface CopyPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The name property
     */
    name?: string;
    /**
     * The parentReference property
     */
    parentReference?: ItemReference;
}
/**
 * Provides operations to call the copy method.
 */
export interface CopyRequestBuilder extends BaseRequestBuilder<CopyRequestBuilder> {
    /**
     * Asynchronously creates a copy of an [driveItem][item-resource] (including any children), under a new parent item or with a new name.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DriveItem
     * @see {@link https://learn.microsoft.com/graph/api/driveitem-copy?view=graph-rest-1.0|Find more info here}
     */
     post(body: CopyPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DriveItem | undefined>;
    /**
     * Asynchronously creates a copy of an [driveItem][item-resource] (including any children), under a new parent item or with a new name.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: CopyPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a copyPostRequestBody
 */
export function createCopyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCopyPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoCopyPostRequestBody(copyPostRequestBody: Partial<CopyPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { copyPostRequestBody.backingStoreEnabled = true; },
        "name": n => { copyPostRequestBody.name = n.getStringValue(); },
        "parentReference": n => { copyPostRequestBody.parentReference = n.getObjectValue<ItemReference>(createItemReferenceFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCopyPostRequestBody(writer: SerializationWriter, copyPostRequestBody: Partial<CopyPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("name", copyPostRequestBody.name);
    writer.writeObjectValue<ItemReference>("parentReference", copyPostRequestBody.parentReference, serializeItemReference);
    writer.writeAdditionalData(copyPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const CopyRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDriveItemFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCopyPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CopyRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/copy";
/* tslint:enable */
/* eslint-enable */