/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookFunctionResultFromDiscriminatorValue, serializeWorkbookFunctionResult, type WorkbookFunctionResult } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createUntypedNodeFromDiscriminatorValue, type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter, type UntypedNode } from '@microsoft/kiota-abstractions';

export interface ChiSq_Inv_RTPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The degFreedom property
     */
    degFreedom?: UntypedNode | null;
    /**
     * The probability property
     */
    probability?: UntypedNode | null;
}
/**
 * Provides operations to call the chiSq_Inv_RT method.
 */
export interface ChiSq_Inv_RTRequestBuilder extends BaseRequestBuilder<ChiSq_Inv_RTRequestBuilder> {
    /**
     * Invoke action chiSq_Inv_RT
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ChiSq_Inv_RTPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action chiSq_Inv_RT
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ChiSq_Inv_RTPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ChiSq_Inv_RTPostRequestBody}
 */
// @ts-ignore
export function createChiSq_Inv_RTPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoChiSq_Inv_RTPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param ChiSq_Inv_RTPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoChiSq_Inv_RTPostRequestBody(chiSq_Inv_RTPostRequestBody: Partial<ChiSq_Inv_RTPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { chiSq_Inv_RTPostRequestBody.backingStoreEnabled = true; },
        "degFreedom": n => { chiSq_Inv_RTPostRequestBody.degFreedom = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
        "probability": n => { chiSq_Inv_RTPostRequestBody.probability = n.getObjectValue<UntypedNode>(createUntypedNodeFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param ChiSq_Inv_RTPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeChiSq_Inv_RTPostRequestBody(writer: SerializationWriter, chiSq_Inv_RTPostRequestBody: Partial<ChiSq_Inv_RTPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!chiSq_Inv_RTPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue("degFreedom", chiSq_Inv_RTPostRequestBody.degFreedom);
    writer.writeObjectValue("probability", chiSq_Inv_RTPostRequestBody.probability);
    writer.writeAdditionalData(chiSq_Inv_RTPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const ChiSq_Inv_RTRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/chiSq_Inv_RT";
/**
 * Metadata for all the requests in the request builder.
 */
export const ChiSq_Inv_RTRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ChiSq_Inv_RTRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeChiSq_Inv_RTPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
