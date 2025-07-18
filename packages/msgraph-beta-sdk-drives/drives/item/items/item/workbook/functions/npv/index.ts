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
 * @returns {NpvPostRequestBody}
 */
// @ts-ignore
export function createNpvPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoNpvPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param NpvPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoNpvPostRequestBody(npvPostRequestBody: Partial<NpvPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { npvPostRequestBody.backingStoreEnabled = true; },
        "rate": n => { npvPostRequestBody.rate = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "values": n => { npvPostRequestBody.values = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
export interface NpvPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The rate property
     */
    rate?: UntypedNode | null;
    /**
     * The values property
     */
    values?: UntypedNode | null;
}
/**
 * Provides operations to call the npv method.
 */
export interface NpvRequestBuilder extends BaseRequestBuilder<NpvRequestBuilder> {
    /**
     * Invoke action npv
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: NpvPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action npv
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: NpvPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param NpvPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeNpvPostRequestBody(writer: SerializationWriter, npvPostRequestBody: Partial<NpvPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!npvPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("rate", npvPostRequestBody.rate);
    writer.writeObjectValue("values", npvPostRequestBody.values);
    writer.writeAdditionalData(npvPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const NpvRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/npv";
/**
 * Metadata for all the requests in the request builder.
 */
export const NpvRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: NpvRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeNpvPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
