/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPrivilegedRoleAssignmentFromDiscriminatorValue, serializePrivilegedRoleAssignment, type PrivilegedRoleAssignment } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a makePermanentPostRequestBody
 */
export function createMakePermanentPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoMakePermanentPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoMakePermanentPostRequestBody(makePermanentPostRequestBody: Partial<MakePermanentPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { makePermanentPostRequestBody.backingStoreEnabled = true; },
        "reason": n => { makePermanentPostRequestBody.reason = n.getStringValue(); },
        "ticketNumber": n => { makePermanentPostRequestBody.ticketNumber = n.getStringValue(); },
        "ticketSystem": n => { makePermanentPostRequestBody.ticketSystem = n.getStringValue(); },
    }
}
export interface MakePermanentPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The reason property
     */
    reason?: string;
    /**
     * The ticketNumber property
     */
    ticketNumber?: string;
    /**
     * The ticketSystem property
     */
    ticketSystem?: string;
}
/**
 * Provides operations to call the makePermanent method.
 */
export interface MakePermanentRequestBuilder extends BaseRequestBuilder<MakePermanentRequestBuilder> {
    /**
     * Invoke action makePermanent
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrivilegedRoleAssignment
     */
     post(body: MakePermanentPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PrivilegedRoleAssignment | undefined>;
    /**
     * Invoke action makePermanent
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: MakePermanentPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeMakePermanentPostRequestBody(writer: SerializationWriter, makePermanentPostRequestBody: Partial<MakePermanentPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("reason", makePermanentPostRequestBody.reason);
    writer.writeStringValue("ticketNumber", makePermanentPostRequestBody.ticketNumber);
    writer.writeStringValue("ticketSystem", makePermanentPostRequestBody.ticketSystem);
    writer.writeAdditionalData(makePermanentPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const MakePermanentRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPrivilegedRoleAssignmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMakePermanentPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const MakePermanentRequestBuilderUriTemplate = "{+baseurl}/privilegedRoleAssignments/{privilegedRoleAssignment%2Did}/makePermanent";
/* tslint:enable */
/* eslint-enable */