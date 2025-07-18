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
 * @returns {GenerateApplePushNotificationCertificateSigningRequestPostResponse}
 */
// @ts-ignore
export function createGenerateApplePushNotificationCertificateSigningRequestPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGenerateApplePushNotificationCertificateSigningRequestPostResponse;
}
/**
 * The deserialization information for the current model
 * @param GenerateApplePushNotificationCertificateSigningRequestPostResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGenerateApplePushNotificationCertificateSigningRequestPostResponse(generateApplePushNotificationCertificateSigningRequestPostResponse: Partial<GenerateApplePushNotificationCertificateSigningRequestPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { generateApplePushNotificationCertificateSigningRequestPostResponse.backingStoreEnabled = true; },
        "value": n => { generateApplePushNotificationCertificateSigningRequestPostResponse.value = n.getStringValue(); },
    }
}
export interface GenerateApplePushNotificationCertificateSigningRequestPostResponse extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the generateApplePushNotificationCertificateSigningRequest method.
 */
export interface GenerateApplePushNotificationCertificateSigningRequestRequestBuilder extends BaseRequestBuilder<GenerateApplePushNotificationCertificateSigningRequestRequestBuilder> {
    /**
     * Download Apple push notification certificate signing request
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GenerateApplePushNotificationCertificateSigningRequestPostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GenerateApplePushNotificationCertificateSigningRequestPostResponse | undefined>;
    /**
     * Download Apple push notification certificate signing request
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param GenerateApplePushNotificationCertificateSigningRequestPostResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGenerateApplePushNotificationCertificateSigningRequestPostResponse(writer: SerializationWriter, generateApplePushNotificationCertificateSigningRequestPostResponse: Partial<GenerateApplePushNotificationCertificateSigningRequestPostResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!generateApplePushNotificationCertificateSigningRequestPostResponse || isSerializingDerivedType) { return; }
    writer.writeStringValue("value", generateApplePushNotificationCertificateSigningRequestPostResponse.value);
    writer.writeAdditionalData(generateApplePushNotificationCertificateSigningRequestPostResponse.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const GenerateApplePushNotificationCertificateSigningRequestRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/applePushNotificationCertificate/generateApplePushNotificationCertificateSigningRequest";
/**
 * Metadata for all the requests in the request builder.
 */
export const GenerateApplePushNotificationCertificateSigningRequestRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: GenerateApplePushNotificationCertificateSigningRequestRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGenerateApplePushNotificationCertificateSigningRequestPostResponseFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
