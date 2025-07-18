/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createContentModelUsageFromDiscriminatorValue, serializeContentModelUsage, type ContentModelUsage } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AddToDrivePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the addToDrive method.
 */
export interface AddToDriveRequestBuilder extends BaseRequestBuilder<AddToDriveRequestBuilder> {
    /**
     * Apply a contentModel to SharePoint document libraries. For an existing model that's already trained, this action automatically processes new documents that are added to the SharePoint libraries.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ContentModelUsage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/contentmodel-addtodrive?view=graph-rest-beta|Find more info here}
     */
     post(body: AddToDrivePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ContentModelUsage | undefined>;
    /**
     * Apply a contentModel to SharePoint document libraries. For an existing model that's already trained, this action automatically processes new documents that are added to the SharePoint libraries.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AddToDrivePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AddToDrivePostRequestBody}
 */
// @ts-ignore
export function createAddToDrivePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAddToDrivePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param AddToDrivePostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoAddToDrivePostRequestBody(addToDrivePostRequestBody: Partial<AddToDrivePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { addToDrivePostRequestBody.backingStoreEnabled = true; },
        "driveId": n => { addToDrivePostRequestBody.driveId = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param AddToDrivePostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeAddToDrivePostRequestBody(writer: SerializationWriter, addToDrivePostRequestBody: Partial<AddToDrivePostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!addToDrivePostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("driveId", addToDrivePostRequestBody.driveId);
    writer.writeAdditionalData(addToDrivePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const AddToDriveRequestBuilderUriTemplate = "{+baseurl}/sites/{site%2Did}/contentModels/{contentModel%2Did}/addToDrive";
/**
 * Metadata for all the requests in the request builder.
 */
export const AddToDriveRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: AddToDriveRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createContentModelUsageFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAddToDrivePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
