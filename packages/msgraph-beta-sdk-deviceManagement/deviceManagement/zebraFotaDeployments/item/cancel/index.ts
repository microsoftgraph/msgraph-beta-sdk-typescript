/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface CancelPostResponse extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the cancel method.
 */
export interface CancelRequestBuilder extends BaseRequestBuilder<CancelRequestBuilder> {
    /**
     * Invoke action cancel
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CancelPostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CancelPostResponse | undefined>;
    /**
     * Invoke action cancel
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {CancelPostResponse}
 */
// @ts-ignore
export function createCancelPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCancelPostResponse;
}
/**
 * The deserialization information for the current model
 * @param CancelPostResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoCancelPostResponse(cancelPostResponse: Partial<CancelPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { cancelPostResponse.backingStoreEnabled = true; },
        "value": n => { cancelPostResponse.value = n.getBooleanValue(); },
    }
}
/**
 * Serializes information the current object
 * @param CancelPostResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeCancelPostResponse(writer: SerializationWriter, cancelPostResponse: Partial<CancelPostResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!cancelPostResponse || isSerializingDerivedType) { return; }
    writer.writeBooleanValue("value", cancelPostResponse.value);
    writer.writeAdditionalData(cancelPostResponse.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const CancelRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/zebraFotaDeployments/{zebraFotaDeployment%2Did}/cancel";
/**
 * Metadata for all the requests in the request builder.
 */
export const CancelRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: CancelRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCancelPostResponseFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
