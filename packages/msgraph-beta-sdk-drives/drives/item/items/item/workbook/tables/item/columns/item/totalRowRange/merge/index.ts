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
 * @returns {MergePostRequestBody}
 */
// @ts-ignore
export function createMergePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoMergePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoMergePostRequestBody(mergePostRequestBody: Partial<MergePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "across": n => { mergePostRequestBody.across = n.getBooleanValue(); },
        "backingStoreEnabled": n => { mergePostRequestBody.backingStoreEnabled = true; },
    }
}
export interface MergePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * The across property
     */
    across?: boolean | null;
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
}
/**
 * Provides operations to call the merge method.
 */
export interface MergeRequestBuilder extends BaseRequestBuilder<MergeRequestBuilder> {
    /**
     * Invoke action merge
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: MergePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Invoke action merge
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: MergePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeMergePostRequestBody(writer: SerializationWriter, mergePostRequestBody: Partial<MergePostRequestBody> | undefined | null = {}) : void {
    if (mergePostRequestBody) {
        writer.writeBooleanValue("across", mergePostRequestBody.across);
        writer.writeAdditionalData(mergePostRequestBody.additionalData);
    }
}
/**
 * Uri template for the request builder.
 */
export const MergeRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/tables/{workbookTable%2Did}/columns/{workbookTableColumn%2Did}/totalRowRange()/merge";
/**
 * Metadata for all the requests in the request builder.
 */
export const MergeRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: MergeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMergePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */