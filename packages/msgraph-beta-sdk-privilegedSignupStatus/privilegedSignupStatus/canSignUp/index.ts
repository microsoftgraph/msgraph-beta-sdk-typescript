/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface CanSignUpGetResponse extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The value property
     */
    value?: boolean;
}
/**
 * Provides operations to call the canSignUp method.
 */
export interface CanSignUpRequestBuilder extends BaseRequestBuilder<CanSignUpRequestBuilder> {
    /**
     * Invoke function canSignUp
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CanSignUpGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CanSignUpGetResponse | undefined>;
    /**
     * Invoke function canSignUp
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a canSignUpGetResponse
 */
export function createCanSignUpGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCanSignUpGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoCanSignUpGetResponse(canSignUpGetResponse: Partial<CanSignUpGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { canSignUpGetResponse.backingStoreEnabled = true; },
        "value": n => { canSignUpGetResponse.value = n.getBooleanValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCanSignUpGetResponse(writer: SerializationWriter, canSignUpGetResponse: Partial<CanSignUpGetResponse> | undefined = {}) : void {
    writer.writeBooleanValue("value", canSignUpGetResponse.value);
    writer.writeAdditionalData(canSignUpGetResponse.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const CanSignUpRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCanSignUpGetResponseFromDiscriminatorValue,
    },
};
/**
 * Uri template for the request builder.
 */
export const CanSignUpRequestBuilderUriTemplate = "{+baseurl}/privilegedSignupStatus/canSignUp()";
/* tslint:enable */
/* eslint-enable */