/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceConfigurationAssignmentFromDiscriminatorValue, createDeviceConfigurationGroupAssignmentFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeDeviceConfigurationAssignment, serializeDeviceConfigurationGroupAssignment, type BaseCollectionPaginationCountResponse, type DeviceConfigurationAssignment, type DeviceConfigurationGroupAssignment } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AssignPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The assignments property
     */
    assignments?: DeviceConfigurationAssignment[];
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The deviceConfigurationGroupAssignments property
     */
    deviceConfigurationGroupAssignments?: DeviceConfigurationGroupAssignment[];
}
export interface AssignPostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceConfigurationAssignment[];
}
/**
 * Provides operations to call the assign method.
 */
export interface AssignRequestBuilder extends BaseRequestBuilder<AssignRequestBuilder> {
    /**
     * Invoke action assign
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AssignPostResponse
     */
     post(body: AssignPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AssignPostResponse | undefined>;
    /**
     * Invoke action assign
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: AssignPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a assignPostRequestBody
 */
export function createAssignPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAssignPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a assignPostResponse
 */
export function createAssignPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAssignPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoAssignPostRequestBody(assignPostRequestBody: Partial<AssignPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "assignments": n => { assignPostRequestBody.assignments = n.getCollectionOfObjectValues<DeviceConfigurationAssignment>(createDeviceConfigurationAssignmentFromDiscriminatorValue); },
        "backingStoreEnabled": n => { assignPostRequestBody.backingStoreEnabled = true; },
        "deviceConfigurationGroupAssignments": n => { assignPostRequestBody.deviceConfigurationGroupAssignments = n.getCollectionOfObjectValues<DeviceConfigurationGroupAssignment>(createDeviceConfigurationGroupAssignmentFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoAssignPostResponse(assignPostResponse: Partial<AssignPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(assignPostResponse),
        "value": n => { assignPostResponse.value = n.getCollectionOfObjectValues<DeviceConfigurationAssignment>(createDeviceConfigurationAssignmentFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAssignPostRequestBody(writer: SerializationWriter, assignPostRequestBody: Partial<AssignPostRequestBody> | undefined = {}) : void {
    writer.writeCollectionOfObjectValues<DeviceConfigurationAssignment>("assignments", assignPostRequestBody.assignments, serializeDeviceConfigurationAssignment);
    writer.writeCollectionOfObjectValues<DeviceConfigurationGroupAssignment>("deviceConfigurationGroupAssignments", assignPostRequestBody.deviceConfigurationGroupAssignments, serializeDeviceConfigurationGroupAssignment);
    writer.writeAdditionalData(assignPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAssignPostResponse(writer: SerializationWriter, assignPostResponse: Partial<AssignPostResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, assignPostResponse)
    writer.writeCollectionOfObjectValues<DeviceConfigurationAssignment>("value", assignPostResponse.value, serializeDeviceConfigurationAssignment);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const AssignRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAssignPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAssignPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AssignRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceConfigurations/{deviceConfiguration%2Did}/assign";
/* tslint:enable */
/* eslint-enable */