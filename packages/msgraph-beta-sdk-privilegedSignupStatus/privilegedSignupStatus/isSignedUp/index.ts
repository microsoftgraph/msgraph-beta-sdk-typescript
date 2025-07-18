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
 * @returns {IsSignedUpGetResponse}
 */
// @ts-ignore
export function createIsSignedUpGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoIsSignedUpGetResponse;
}
/**
 * The deserialization information for the current model
 * @param IsSignedUpGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoIsSignedUpGetResponse(isSignedUpGetResponse: Partial<IsSignedUpGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { isSignedUpGetResponse.backingStoreEnabled = true; },
        "value": n => { isSignedUpGetResponse.value = n.getBooleanValue(); },
    }
}
export interface IsSignedUpGetResponse extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the isSignedUp method.
 */
export interface IsSignedUpRequestBuilder extends BaseRequestBuilder<IsSignedUpRequestBuilder> {
    /**
     * Invoke function isSignedUp
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<IsSignedUpGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<IsSignedUpGetResponse | undefined>;
    /**
     * Invoke function isSignedUp
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param IsSignedUpGetResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeIsSignedUpGetResponse(writer: SerializationWriter, isSignedUpGetResponse: Partial<IsSignedUpGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!isSignedUpGetResponse || isSerializingDerivedType) { return; }
    writer.writeBooleanValue("value", isSignedUpGetResponse.value);
    writer.writeAdditionalData(isSignedUpGetResponse.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const IsSignedUpRequestBuilderUriTemplate = "{+baseurl}/privilegedSignupStatus/isSignedUp()";
/**
 * Metadata for all the requests in the request builder.
 */
export const IsSignedUpRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: IsSignedUpRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createIsSignedUpGetResponseFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
