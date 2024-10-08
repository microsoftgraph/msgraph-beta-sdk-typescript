/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createImportedDeviceIdentityFromDiscriminatorValue, createImportedDeviceIdentityResultFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeImportedDeviceIdentity, serializeImportedDeviceIdentityResult, type BaseCollectionPaginationCountResponse, type ImportedDeviceIdentity, type ImportedDeviceIdentityResult } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ImportDeviceIdentityListPostRequestBody}
 */
// @ts-ignore
export function createImportDeviceIdentityListPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoImportDeviceIdentityListPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {ImportDeviceIdentityListPostResponse}
 */
// @ts-ignore
export function createImportDeviceIdentityListPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoImportDeviceIdentityListPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoImportDeviceIdentityListPostRequestBody(importDeviceIdentityListPostRequestBody: Partial<ImportDeviceIdentityListPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { importDeviceIdentityListPostRequestBody.backingStoreEnabled = true; },
        "importedDeviceIdentities": n => { importDeviceIdentityListPostRequestBody.importedDeviceIdentities = n.getCollectionOfObjectValues<ImportedDeviceIdentity>(createImportedDeviceIdentityFromDiscriminatorValue); },
        "overwriteImportedDeviceIdentities": n => { importDeviceIdentityListPostRequestBody.overwriteImportedDeviceIdentities = n.getBooleanValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoImportDeviceIdentityListPostResponse(importDeviceIdentityListPostResponse: Partial<ImportDeviceIdentityListPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(importDeviceIdentityListPostResponse),
        "value": n => { importDeviceIdentityListPostResponse.value = n.getCollectionOfObjectValues<ImportedDeviceIdentityResult>(createImportedDeviceIdentityResultFromDiscriminatorValue); },
    }
}
export interface ImportDeviceIdentityListPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The importedDeviceIdentities property
     */
    importedDeviceIdentities?: ImportedDeviceIdentity[] | null;
    /**
     * The overwriteImportedDeviceIdentities property
     */
    overwriteImportedDeviceIdentities?: boolean | null;
}
export interface ImportDeviceIdentityListPostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ImportedDeviceIdentityResult[] | null;
}
/**
 * Provides operations to call the importDeviceIdentityList method.
 */
export interface ImportDeviceIdentityListRequestBuilder extends BaseRequestBuilder<ImportDeviceIdentityListRequestBuilder> {
    /**
     * Invoke action importDeviceIdentityList
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ImportDeviceIdentityListPostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ImportDeviceIdentityListPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ImportDeviceIdentityListPostResponse | undefined>;
    /**
     * Invoke action importDeviceIdentityList
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ImportDeviceIdentityListPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeImportDeviceIdentityListPostRequestBody(writer: SerializationWriter, importDeviceIdentityListPostRequestBody: Partial<ImportDeviceIdentityListPostRequestBody> | undefined | null = {}) : void {
    if (importDeviceIdentityListPostRequestBody) {
        writer.writeCollectionOfObjectValues<ImportedDeviceIdentity>("importedDeviceIdentities", importDeviceIdentityListPostRequestBody.importedDeviceIdentities, serializeImportedDeviceIdentity);
        writer.writeBooleanValue("overwriteImportedDeviceIdentities", importDeviceIdentityListPostRequestBody.overwriteImportedDeviceIdentities);
        writer.writeAdditionalData(importDeviceIdentityListPostRequestBody.additionalData);
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeImportDeviceIdentityListPostResponse(writer: SerializationWriter, importDeviceIdentityListPostResponse: Partial<ImportDeviceIdentityListPostResponse> | undefined | null = {}) : void {
    if (importDeviceIdentityListPostResponse) {
        serializeBaseCollectionPaginationCountResponse(writer, importDeviceIdentityListPostResponse)
        writer.writeCollectionOfObjectValues<ImportedDeviceIdentityResult>("value", importDeviceIdentityListPostResponse.value, serializeImportedDeviceIdentityResult);
    }
}
/**
 * Uri template for the request builder.
 */
export const ImportDeviceIdentityListRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/importedDeviceIdentities/importDeviceIdentityList";
/**
 * Metadata for all the requests in the request builder.
 */
export const ImportDeviceIdentityListRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: ImportDeviceIdentityListRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createImportDeviceIdentityListPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeImportDeviceIdentityListPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
