/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceEnrollmentConfigurationFromDiscriminatorValue, serializeDeviceEnrollmentConfiguration, type DeviceEnrollmentConfiguration } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a createEnrollmentNotificationConfigurationPostRequestBody
 */
export function createCreateEnrollmentNotificationConfigurationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoCreateEnrollmentNotificationConfigurationPostRequestBody;
}
export interface CreateEnrollmentNotificationConfigurationPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The deviceEnrollmentNotificationConfigurations property
     */
    deviceEnrollmentNotificationConfigurations?: DeviceEnrollmentConfiguration[];
}
/**
 * Provides operations to call the createEnrollmentNotificationConfiguration method.
 */
export interface CreateEnrollmentNotificationConfigurationRequestBuilder extends BaseRequestBuilder<CreateEnrollmentNotificationConfigurationRequestBuilder> {
    /**
     * Invoke action createEnrollmentNotificationConfiguration
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     post(body: CreateEnrollmentNotificationConfigurationPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Invoke action createEnrollmentNotificationConfiguration
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: CreateEnrollmentNotificationConfigurationPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoCreateEnrollmentNotificationConfigurationPostRequestBody(createEnrollmentNotificationConfigurationPostRequestBody: Partial<CreateEnrollmentNotificationConfigurationPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { createEnrollmentNotificationConfigurationPostRequestBody.backingStoreEnabled = true; },
        "deviceEnrollmentNotificationConfigurations": n => { createEnrollmentNotificationConfigurationPostRequestBody.deviceEnrollmentNotificationConfigurations = n.getCollectionOfObjectValues<DeviceEnrollmentConfiguration>(createDeviceEnrollmentConfigurationFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeCreateEnrollmentNotificationConfigurationPostRequestBody(writer: SerializationWriter, createEnrollmentNotificationConfigurationPostRequestBody: Partial<CreateEnrollmentNotificationConfigurationPostRequestBody> | undefined = {}) : void {
    writer.writeCollectionOfObjectValues<DeviceEnrollmentConfiguration>("deviceEnrollmentNotificationConfigurations", createEnrollmentNotificationConfigurationPostRequestBody.deviceEnrollmentNotificationConfigurations, serializeDeviceEnrollmentConfiguration);
    writer.writeAdditionalData(createEnrollmentNotificationConfigurationPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const CreateEnrollmentNotificationConfigurationRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCreateEnrollmentNotificationConfigurationPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const CreateEnrollmentNotificationConfigurationRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/deviceEnrollmentConfigurations/createEnrollmentNotificationConfiguration";
/* tslint:enable */
/* eslint-enable */