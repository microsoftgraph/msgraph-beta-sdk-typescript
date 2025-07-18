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
 * @returns {VlookupPostRequestBody}
 */
// @ts-ignore
export function createVlookupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoVlookupPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param VlookupPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoVlookupPostRequestBody(vlookupPostRequestBody: Partial<VlookupPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { vlookupPostRequestBody.backingStoreEnabled = true; },
        "colIndexNum": n => { vlookupPostRequestBody.colIndexNum = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "lookupValue": n => { vlookupPostRequestBody.lookupValue = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "rangeLookup": n => { vlookupPostRequestBody.rangeLookup = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "tableArray": n => { vlookupPostRequestBody.tableArray = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param VlookupPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeVlookupPostRequestBody(writer: SerializationWriter, vlookupPostRequestBody: Partial<VlookupPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!vlookupPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("colIndexNum", vlookupPostRequestBody.colIndexNum);
    writer.writeObjectValue("lookupValue", vlookupPostRequestBody.lookupValue);
    writer.writeObjectValue("rangeLookup", vlookupPostRequestBody.rangeLookup);
    writer.writeObjectValue("tableArray", vlookupPostRequestBody.tableArray);
    writer.writeAdditionalData(vlookupPostRequestBody.additionalData);
}
export interface VlookupPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The colIndexNum property
     */
    colIndexNum?: UntypedNode | null;
    /**
     * The lookupValue property
     */
    lookupValue?: UntypedNode | null;
    /**
     * The rangeLookup property
     */
    rangeLookup?: UntypedNode | null;
    /**
     * The tableArray property
     */
    tableArray?: UntypedNode | null;
}
/**
 * Provides operations to call the vlookup method.
 */
export interface VlookupRequestBuilder extends BaseRequestBuilder<VlookupRequestBuilder> {
    /**
     * Invoke action vlookup
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: VlookupPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action vlookup
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: VlookupPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const VlookupRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/vlookup";
/**
 * Metadata for all the requests in the request builder.
 */
export const VlookupRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: VlookupRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeVlookupPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
