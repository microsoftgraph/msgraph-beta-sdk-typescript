/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface CleanWindowsDevicePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The keepUserData property
     */
    keepUserData?: boolean;
}
/**
 * Provides operations to call the cleanWindowsDevice method.
 */
export interface CleanWindowsDeviceRequestBuilder extends BaseRequestBuilder<CleanWindowsDeviceRequestBuilder> {
    /**
     * Clean Windows device
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     post(body: CleanWindowsDevicePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Clean Windows device
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: CleanWindowsDevicePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a cleanWindowsDevicePostRequestBody
 */
export function createCleanWindowsDevicePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCleanWindowsDevicePostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoCleanWindowsDevicePostRequestBody(cleanWindowsDevicePostRequestBody: Partial<CleanWindowsDevicePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { cleanWindowsDevicePostRequestBody.backingStoreEnabled = true; },
        "keepUserData": n => { cleanWindowsDevicePostRequestBody.keepUserData = n.getBooleanValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCleanWindowsDevicePostRequestBody(writer: SerializationWriter, cleanWindowsDevicePostRequestBody: Partial<CleanWindowsDevicePostRequestBody> | undefined = {}) : void {
    writer.writeBooleanValue("keepUserData", cleanWindowsDevicePostRequestBody.keepUserData);
    writer.writeAdditionalData(cleanWindowsDevicePostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const CleanWindowsDeviceRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCleanWindowsDevicePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CleanWindowsDeviceRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/managedDevices/{managedDevice%2Did}/cleanWindowsDevice";
/* tslint:enable */
/* eslint-enable */