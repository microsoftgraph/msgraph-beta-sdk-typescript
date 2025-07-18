/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookFunctionResultFromDiscriminatorValue, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, type UntypedNode } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {LargePostRequestBody}
 */
// @ts-ignore
export function createLargePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoLargePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param LargePostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoLargePostRequestBody(largePostRequestBody: Partial<LargePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "array": n => { largePostRequestBody.array = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "backingStoreEnabled": n => { largePostRequestBody.backingStoreEnabled = true; },
        "k": n => { largePostRequestBody.k = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface LargePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * The array property
     */
    array?: UntypedNode | null;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The k property
     */
    k?: UntypedNode | null;
}
/**
 * Provides operations to call the large method.
 */
export interface LargeRequestBuilder extends BaseRequestBuilder<LargeRequestBuilder> {
    /**
     * Invoke action large
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: LargePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action large
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: LargePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param LargePostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeLargePostRequestBody(writer: SerializationWriter, largePostRequestBody: Partial<LargePostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!largePostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("array", largePostRequestBody.array);
    writer.writeObjectValue("k", largePostRequestBody.k);
    writer.writeAdditionalData(largePostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const LargeRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/large";
/**
 * Metadata for all the requests in the request builder.
 */
export const LargeRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: LargeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeLargePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
