/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { SensitivityLabelAssignmentMethod, SensitivityLabelAssignmentMethodObject } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AssignSensitivityLabelPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The assignmentMethod property
     */
    assignmentMethod?: SensitivityLabelAssignmentMethod;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The justificationText property
     */
    justificationText?: string;
    /**
     * The sensitivityLabelId property
     */
    sensitivityLabelId?: string;
}
/**
 * Provides operations to call the assignSensitivityLabel method.
 */
export interface AssignSensitivityLabelRequestBuilder extends BaseRequestBuilder<AssignSensitivityLabelRequestBuilder> {
    /**
     * Invoke action assignSensitivityLabel
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     post(body: AssignSensitivityLabelPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Invoke action assignSensitivityLabel
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: AssignSensitivityLabelPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a assignSensitivityLabelPostRequestBody
 */
export function createAssignSensitivityLabelPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAssignSensitivityLabelPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoAssignSensitivityLabelPostRequestBody(assignSensitivityLabelPostRequestBody: Partial<AssignSensitivityLabelPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "assignmentMethod": n => { assignSensitivityLabelPostRequestBody.assignmentMethod = n.getEnumValue<SensitivityLabelAssignmentMethod>(SensitivityLabelAssignmentMethodObject); },
        "backingStoreEnabled": n => { assignSensitivityLabelPostRequestBody.backingStoreEnabled = true; },
        "justificationText": n => { assignSensitivityLabelPostRequestBody.justificationText = n.getStringValue(); },
        "sensitivityLabelId": n => { assignSensitivityLabelPostRequestBody.sensitivityLabelId = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAssignSensitivityLabelPostRequestBody(writer: SerializationWriter, assignSensitivityLabelPostRequestBody: Partial<AssignSensitivityLabelPostRequestBody> | undefined = {}) : void {
    writer.writeEnumValue<SensitivityLabelAssignmentMethod>("assignmentMethod", assignSensitivityLabelPostRequestBody.assignmentMethod);
    writer.writeStringValue("justificationText", assignSensitivityLabelPostRequestBody.justificationText);
    writer.writeStringValue("sensitivityLabelId", assignSensitivityLabelPostRequestBody.sensitivityLabelId);
    writer.writeAdditionalData(assignSensitivityLabelPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const AssignSensitivityLabelRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAssignSensitivityLabelPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AssignSensitivityLabelRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/assignSensitivityLabel";
/* tslint:enable */
/* eslint-enable */