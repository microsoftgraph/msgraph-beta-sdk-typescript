/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createContentTypeFromDiscriminatorValue, serializeContentType, type ContentType } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AddCopyPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The contentType property
     */
    contentType?: string;
}
/**
 * Provides operations to call the addCopy method.
 */
export interface AddCopyRequestBuilder extends BaseRequestBuilder<AddCopyRequestBuilder> {
    /**
     * Add a copy of a [content type][contentType] from a [site][site] to a [list][list].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ContentType
     * @see {@link https://learn.microsoft.com/graph/api/contenttype-addcopy?view=graph-rest-1.0|Find more info here}
     */
     post(body: AddCopyPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ContentType | undefined>;
    /**
     * Add a copy of a [content type][contentType] from a [site][site] to a [list][list].
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: AddCopyPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a addCopyPostRequestBody
 */
export function createAddCopyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAddCopyPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoAddCopyPostRequestBody(addCopyPostRequestBody: Partial<AddCopyPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { addCopyPostRequestBody.backingStoreEnabled = true; },
        "contentType": n => { addCopyPostRequestBody.contentType = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAddCopyPostRequestBody(writer: SerializationWriter, addCopyPostRequestBody: Partial<AddCopyPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("contentType", addCopyPostRequestBody.contentType);
    writer.writeAdditionalData(addCopyPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const AddCopyRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createContentTypeFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAddCopyPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AddCopyRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/list/contentTypes/addCopy";
/* tslint:enable */
/* eslint-enable */