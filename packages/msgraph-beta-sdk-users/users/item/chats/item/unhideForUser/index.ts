/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createTeamworkUserIdentityFromDiscriminatorValue, serializeTeamworkUserIdentity, type TeamworkUserIdentity } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a unhideForUserPostRequestBody
 */
export function createUnhideForUserPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoUnhideForUserPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoUnhideForUserPostRequestBody(unhideForUserPostRequestBody: Partial<UnhideForUserPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { unhideForUserPostRequestBody.backingStoreEnabled = true; },
        "tenantId": n => { unhideForUserPostRequestBody.tenantId = n.getStringValue(); },
        "user": n => { unhideForUserPostRequestBody.user = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeUnhideForUserPostRequestBody(writer: SerializationWriter, unhideForUserPostRequestBody: Partial<UnhideForUserPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("tenantId", unhideForUserPostRequestBody.tenantId);
    writer.writeObjectValue<TeamworkUserIdentity>("user", unhideForUserPostRequestBody.user, serializeTeamworkUserIdentity);
    writer.writeAdditionalData(unhideForUserPostRequestBody.additionalData);
}
export interface UnhideForUserPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The tenantId property
     */
    tenantId?: string;
    /**
     * The user property
     */
    user?: TeamworkUserIdentity;
}
/**
 * Provides operations to call the unhideForUser method.
 */
export interface UnhideForUserRequestBuilder extends BaseRequestBuilder<UnhideForUserRequestBuilder> {
    /**
     * Unhide a chat for a user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/chat-unhideforuser?view=graph-rest-1.0|Find more info here}
     */
     post(body: UnhideForUserPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Unhide a chat for a user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UnhideForUserPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const UnhideForUserRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnhideForUserPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UnhideForUserRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/chats/{chat%2Did}/unhideForUser";
/* tslint:enable */
/* eslint-enable */