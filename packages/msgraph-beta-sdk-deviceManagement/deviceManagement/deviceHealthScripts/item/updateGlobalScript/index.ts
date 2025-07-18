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
 * @returns {UpdateGlobalScriptPostRequestBody}
 */
// @ts-ignore
export function createUpdateGlobalScriptPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoUpdateGlobalScriptPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {UpdateGlobalScriptPostResponse}
 */
// @ts-ignore
export function createUpdateGlobalScriptPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoUpdateGlobalScriptPostResponse;
}
/**
 * The deserialization information for the current model
 * @param UpdateGlobalScriptPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoUpdateGlobalScriptPostRequestBody(updateGlobalScriptPostRequestBody: Partial<UpdateGlobalScriptPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { updateGlobalScriptPostRequestBody.backingStoreEnabled = true; },
        "version": n => { updateGlobalScriptPostRequestBody.version = n.getStringValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @param UpdateGlobalScriptPostResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoUpdateGlobalScriptPostResponse(updateGlobalScriptPostResponse: Partial<UpdateGlobalScriptPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { updateGlobalScriptPostResponse.backingStoreEnabled = true; },
        "value": n => { updateGlobalScriptPostResponse.value = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param UpdateGlobalScriptPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeUpdateGlobalScriptPostRequestBody(writer: SerializationWriter, updateGlobalScriptPostRequestBody: Partial<UpdateGlobalScriptPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!updateGlobalScriptPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeStringValue("version", updateGlobalScriptPostRequestBody.version);
    writer.writeAdditionalData(updateGlobalScriptPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param UpdateGlobalScriptPostResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeUpdateGlobalScriptPostResponse(writer: SerializationWriter, updateGlobalScriptPostResponse: Partial<UpdateGlobalScriptPostResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!updateGlobalScriptPostResponse || isSerializingDerivedType) { return; }
    writer.writeStringValue("value", updateGlobalScriptPostResponse.value);
    writer.writeAdditionalData(updateGlobalScriptPostResponse.additionalData);
}
export interface UpdateGlobalScriptPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The version property
     */
    version?: string | null;
}
export interface UpdateGlobalScriptPostResponse extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The value property
     */
    value?: string | null;
}
/**
 * Provides operations to call the updateGlobalScript method.
 */
export interface UpdateGlobalScriptRequestBuilder extends BaseRequestBuilder<UpdateGlobalScriptRequestBuilder> {
    /**
     * Update the Proprietary Device Health Script
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UpdateGlobalScriptPostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: UpdateGlobalScriptPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UpdateGlobalScriptPostResponse | undefined>;
    /**
     * Update the Proprietary Device Health Script
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: UpdateGlobalScriptPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const UpdateGlobalScriptRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceHealthScripts/{deviceHealthScript%2Did}/updateGlobalScript";
/**
 * Metadata for all the requests in the request builder.
 */
export const UpdateGlobalScriptRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: UpdateGlobalScriptRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUpdateGlobalScriptPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUpdateGlobalScriptPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
