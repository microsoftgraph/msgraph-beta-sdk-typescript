/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeImportedWindowsAutopilotDeviceIdentity, type BaseCollectionPaginationCountResponse, type ImportedWindowsAutopilotDeviceIdentity } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ImportPostRequestBody}
 */
// @ts-ignore
export function createImportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoImportPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ImportPostResponse}
 */
// @ts-ignore
export function createImportPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoImportPostResponse;
}
/**
 * The deserialization information for the current model
 * @param ImportPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoImportPostRequestBody(importPostRequestBody: Partial<ImportPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { importPostRequestBody.backingStoreEnabled = true; },
        "importedWindowsAutopilotDeviceIdentities": n => { importPostRequestBody.importedWindowsAutopilotDeviceIdentities = n.getCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>(createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @param ImportPostResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoImportPostResponse(importPostResponse: Partial<ImportPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(importPostResponse),
        "value": n => { importPostResponse.value = n.getCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>(createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue); },
    }
}
export interface ImportPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The importedWindowsAutopilotDeviceIdentities property
     */
    importedWindowsAutopilotDeviceIdentities?: ImportedWindowsAutopilotDeviceIdentity[] | null;
}
export interface ImportPostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ImportedWindowsAutopilotDeviceIdentity[] | null;
}
/**
 * Provides operations to call the import method.
 */
export interface ImportRequestBuilder extends BaseRequestBuilder<ImportRequestBuilder> {
    /**
     * Invoke action import
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ImportPostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ImportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ImportPostResponse | undefined>;
    /**
     * Invoke action import
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ImportPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param ImportPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeImportPostRequestBody(writer: SerializationWriter, importPostRequestBody: Partial<ImportPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!importPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>("importedWindowsAutopilotDeviceIdentities", importPostRequestBody.importedWindowsAutopilotDeviceIdentities, serializeImportedWindowsAutopilotDeviceIdentity);
    writer.writeAdditionalData(importPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param ImportPostResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeImportPostResponse(writer: SerializationWriter, importPostResponse: Partial<ImportPostResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!importPostResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, importPostResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<ImportedWindowsAutopilotDeviceIdentity>("value", importPostResponse.value, serializeImportedWindowsAutopilotDeviceIdentity);
}
/**
 * Uri template for the request builder.
 */
export const ImportRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/importedWindowsAutopilotDeviceIdentities/import";
/**
 * Metadata for all the requests in the request builder.
 */
export const ImportRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ImportRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createImportPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeImportPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
