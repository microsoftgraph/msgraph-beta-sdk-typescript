/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceManagementScriptAssignmentFromDiscriminatorValue, createDeviceManagementScriptGroupAssignmentFromDiscriminatorValue, serializeDeviceManagementScriptAssignment, serializeDeviceManagementScriptGroupAssignment, type DeviceManagementScriptAssignment, type DeviceManagementScriptGroupAssignment } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AssignPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The deviceManagementScriptAssignments property
     */
    deviceManagementScriptAssignments?: DeviceManagementScriptAssignment[];
    /**
     * The deviceManagementScriptGroupAssignments property
     */
    deviceManagementScriptGroupAssignments?: DeviceManagementScriptGroupAssignment[];
}
/**
 * Provides operations to call the assign method.
 */
export interface AssignRequestBuilder extends BaseRequestBuilder<AssignRequestBuilder> {
    /**
     * Invoke action assign
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     post(body: AssignPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
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
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoAssignPostRequestBody(assignPostRequestBody: Partial<AssignPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { assignPostRequestBody.backingStoreEnabled = true; },
        "deviceManagementScriptAssignments": n => { assignPostRequestBody.deviceManagementScriptAssignments = n.getCollectionOfObjectValues<DeviceManagementScriptAssignment>(createDeviceManagementScriptAssignmentFromDiscriminatorValue); },
        "deviceManagementScriptGroupAssignments": n => { assignPostRequestBody.deviceManagementScriptGroupAssignments = n.getCollectionOfObjectValues<DeviceManagementScriptGroupAssignment>(createDeviceManagementScriptGroupAssignmentFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAssignPostRequestBody(writer: SerializationWriter, assignPostRequestBody: Partial<AssignPostRequestBody> | undefined = {}) : void {
    writer.writeCollectionOfObjectValues<DeviceManagementScriptAssignment>("deviceManagementScriptAssignments", assignPostRequestBody.deviceManagementScriptAssignments, serializeDeviceManagementScriptAssignment);
    writer.writeCollectionOfObjectValues<DeviceManagementScriptGroupAssignment>("deviceManagementScriptGroupAssignments", assignPostRequestBody.deviceManagementScriptGroupAssignments, serializeDeviceManagementScriptGroupAssignment);
    writer.writeAdditionalData(assignPostRequestBody.additionalData);
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
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAssignPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AssignRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceManagementScripts/{deviceManagementScript%2Did}/assign";
/* tslint:enable */
/* eslint-enable */