/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a downloadApplePushNotificationCertificateSigningRequestGetResponse
 */
export function createDownloadApplePushNotificationCertificateSigningRequestGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDownloadApplePushNotificationCertificateSigningRequestGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoDownloadApplePushNotificationCertificateSigningRequestGetResponse(downloadApplePushNotificationCertificateSigningRequestGetResponse: Partial<DownloadApplePushNotificationCertificateSigningRequestGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { downloadApplePushNotificationCertificateSigningRequestGetResponse.backingStoreEnabled = true; },
        "value": n => { downloadApplePushNotificationCertificateSigningRequestGetResponse.value = n.getStringValue(); },
    }
}
export interface DownloadApplePushNotificationCertificateSigningRequestGetResponse extends AdditionalDataHolder, BackedModel, Parsable {
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
    value?: string;
}
/**
 * Provides operations to call the downloadApplePushNotificationCertificateSigningRequest method.
 */
export interface DownloadApplePushNotificationCertificateSigningRequestRequestBuilder extends BaseRequestBuilder<DownloadApplePushNotificationCertificateSigningRequestRequestBuilder> {
    /**
     * Download Apple push notification certificate signing request
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DownloadApplePushNotificationCertificateSigningRequestGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DownloadApplePushNotificationCertificateSigningRequestGetResponse | undefined>;
    /**
     * Download Apple push notification certificate signing request
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeDownloadApplePushNotificationCertificateSigningRequestGetResponse(writer: SerializationWriter, downloadApplePushNotificationCertificateSigningRequestGetResponse: Partial<DownloadApplePushNotificationCertificateSigningRequestGetResponse> | undefined = {}) : void {
    writer.writeStringValue("value", downloadApplePushNotificationCertificateSigningRequestGetResponse.value);
    writer.writeAdditionalData(downloadApplePushNotificationCertificateSigningRequestGetResponse.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const DownloadApplePushNotificationCertificateSigningRequestRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDownloadApplePushNotificationCertificateSigningRequestGetResponseFromDiscriminatorValue,
    },
};
/**
 * Uri template for the request builder.
 */
export const DownloadApplePushNotificationCertificateSigningRequestRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/applePushNotificationCertificate/downloadApplePushNotificationCertificateSigningRequest()";
/* tslint:enable */
/* eslint-enable */