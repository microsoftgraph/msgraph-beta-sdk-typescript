/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceManagementConfigurationJustInTimeAssignmentPolicyFromDiscriminatorValue, serializeDeviceManagementConfigurationJustInTimeAssignmentPolicy, type DeviceManagementConfigurationJustInTimeAssignmentPolicy } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AssignJustInTimeConfigurationPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The justInTimeAssignments property
     */
    justInTimeAssignments?: DeviceManagementConfigurationJustInTimeAssignmentPolicy;
}
export interface AssignJustInTimeConfigurationPostResponse extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the assignJustInTimeConfiguration method.
 */
export interface AssignJustInTimeConfigurationRequestBuilder extends BaseRequestBuilder<AssignJustInTimeConfigurationRequestBuilder> {
    /**
     * Invoke action assignJustInTimeConfiguration
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AssignJustInTimeConfigurationPostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: AssignJustInTimeConfigurationPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AssignJustInTimeConfigurationPostResponse | undefined>;
    /**
     * Invoke action assignJustInTimeConfiguration
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AssignJustInTimeConfigurationPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AssignJustInTimeConfigurationPostRequestBody}
 */
export function createAssignJustInTimeConfigurationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAssignJustInTimeConfigurationPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AssignJustInTimeConfigurationPostResponse}
 */
export function createAssignJustInTimeConfigurationPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAssignJustInTimeConfigurationPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoAssignJustInTimeConfigurationPostRequestBody(assignJustInTimeConfigurationPostRequestBody: Partial<AssignJustInTimeConfigurationPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { assignJustInTimeConfigurationPostRequestBody.backingStoreEnabled = true; },
        "justInTimeAssignments": n => { assignJustInTimeConfigurationPostRequestBody.justInTimeAssignments = n.getObjectValue<DeviceManagementConfigurationJustInTimeAssignmentPolicy>(createDeviceManagementConfigurationJustInTimeAssignmentPolicyFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoAssignJustInTimeConfigurationPostResponse(assignJustInTimeConfigurationPostResponse: Partial<AssignJustInTimeConfigurationPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { assignJustInTimeConfigurationPostResponse.backingStoreEnabled = true; },
        "value": n => { assignJustInTimeConfigurationPostResponse.value = n.getBooleanValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAssignJustInTimeConfigurationPostRequestBody(writer: SerializationWriter, assignJustInTimeConfigurationPostRequestBody: Partial<AssignJustInTimeConfigurationPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<DeviceManagementConfigurationJustInTimeAssignmentPolicy>("justInTimeAssignments", assignJustInTimeConfigurationPostRequestBody.justInTimeAssignments, serializeDeviceManagementConfigurationJustInTimeAssignmentPolicy);
    writer.writeAdditionalData(assignJustInTimeConfigurationPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAssignJustInTimeConfigurationPostResponse(writer: SerializationWriter, assignJustInTimeConfigurationPostResponse: Partial<AssignJustInTimeConfigurationPostResponse> | undefined = {}) : void {
    writer.writeBooleanValue("value", assignJustInTimeConfigurationPostResponse.value);
    writer.writeAdditionalData(assignJustInTimeConfigurationPostResponse.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const AssignJustInTimeConfigurationRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicy%2Did}/assignJustInTimeConfiguration";
/**
 * Metadata for all the requests in the request builder.
 */
export const AssignJustInTimeConfigurationRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: AssignJustInTimeConfigurationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAssignJustInTimeConfigurationPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAssignJustInTimeConfigurationPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */