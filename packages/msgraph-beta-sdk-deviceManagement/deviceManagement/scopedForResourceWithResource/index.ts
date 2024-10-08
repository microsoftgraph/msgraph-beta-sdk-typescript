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
 * @returns {ScopedForResourceWithResourceGetResponse}
 */
// @ts-ignore
export function createScopedForResourceWithResourceGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoScopedForResourceWithResourceGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoScopedForResourceWithResourceGetResponse(scopedForResourceWithResourceGetResponse: Partial<ScopedForResourceWithResourceGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { scopedForResourceWithResourceGetResponse.backingStoreEnabled = true; },
        "value": n => { scopedForResourceWithResourceGetResponse.value = n.getBooleanValue(); },
    }
}
export interface ScopedForResourceWithResourceGetResponse extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The value property
     */
    value?: boolean | null;
}
/**
 * Provides operations to call the scopedForResource method.
 */
export interface ScopedForResourceWithResourceRequestBuilder extends BaseRequestBuilder<ScopedForResourceWithResourceRequestBuilder> {
    /**
     * Invoke function scopedForResource
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ScopedForResourceWithResourceGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ScopedForResourceWithResourceGetResponse | undefined>;
    /**
     * Invoke function scopedForResource
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeScopedForResourceWithResourceGetResponse(writer: SerializationWriter, scopedForResourceWithResourceGetResponse: Partial<ScopedForResourceWithResourceGetResponse> | undefined | null = {}) : void {
    if (scopedForResourceWithResourceGetResponse) {
        writer.writeBooleanValue("value", scopedForResourceWithResourceGetResponse.value);
        writer.writeAdditionalData(scopedForResourceWithResourceGetResponse.additionalData);
    }
}
/**
 * Uri template for the request builder.
 */
export const ScopedForResourceWithResourceRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/scopedForResource(resource='{resource}')";
/**
 * Metadata for all the requests in the request builder.
 */
export const ScopedForResourceWithResourceRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ScopedForResourceWithResourceRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createScopedForResourceWithResourceGetResponseFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
