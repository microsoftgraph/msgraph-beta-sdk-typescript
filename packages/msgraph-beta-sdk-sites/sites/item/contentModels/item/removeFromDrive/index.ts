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
 * @returns {RemoveFromDrivePostRequestBody}
 */
// @ts-ignore
export function createRemoveFromDrivePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRemoveFromDrivePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRemoveFromDrivePostRequestBody(removeFromDrivePostRequestBody: Partial<RemoveFromDrivePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { removeFromDrivePostRequestBody.backingStoreEnabled = true; },
        "driveId": n => { removeFromDrivePostRequestBody.driveId = n.getStringValue(); },
    }
}
export interface RemoveFromDrivePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The driveId property
     */
    driveId?: string | null;
}
/**
 * Provides operations to call the removeFromDrive method.
 */
export interface RemoveFromDriveRequestBuilder extends BaseRequestBuilder<RemoveFromDriveRequestBuilder> {
    /**
     * Remove a contentModel from a SharePoint document library.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/contentmodel-removefromdrive?view=graph-rest-beta|Find more info here}
     */
     post(body: RemoveFromDrivePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Remove a contentModel from a SharePoint document library.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: RemoveFromDrivePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRemoveFromDrivePostRequestBody(writer: SerializationWriter, removeFromDrivePostRequestBody: Partial<RemoveFromDrivePostRequestBody> | undefined | null = {}) : void {
    if (removeFromDrivePostRequestBody) {
        writer.writeStringValue("driveId", removeFromDrivePostRequestBody.driveId);
        writer.writeAdditionalData(removeFromDrivePostRequestBody.additionalData);
    }
}
/**
 * Uri template for the request builder.
 */
export const RemoveFromDriveRequestBuilderUriTemplate = "{+baseurl}/sites/{site%2Did}/contentModels/{contentModel%2Did}/removeFromDrive";
/**
 * Metadata for all the requests in the request builder.
 */
export const RemoveFromDriveRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: RemoveFromDriveRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRemoveFromDrivePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
