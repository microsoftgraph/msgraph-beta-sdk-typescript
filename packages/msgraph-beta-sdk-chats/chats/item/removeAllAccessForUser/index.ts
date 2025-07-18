/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTeamworkUserIdentityFromDiscriminatorValue, serializeTeamworkUserIdentity, type TeamworkUserIdentity } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RemoveAllAccessForUserPostRequestBody}
 */
// @ts-ignore
export function createRemoveAllAccessForUserPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRemoveAllAccessForUserPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @param RemoveAllAccessForUserPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRemoveAllAccessForUserPostRequestBody(removeAllAccessForUserPostRequestBody: Partial<RemoveAllAccessForUserPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { removeAllAccessForUserPostRequestBody.backingStoreEnabled = true; },
        "user": n => { removeAllAccessForUserPostRequestBody.user = n.getObjectValue<TeamworkUserIdentity>(createTeamworkUserIdentityFromDiscriminatorValue); },
    }
}
export interface RemoveAllAccessForUserPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The user property
     */
    user?: TeamworkUserIdentity | null;
}
/**
 * Provides operations to call the removeAllAccessForUser method.
 */
export interface RemoveAllAccessForUserRequestBuilder extends BaseRequestBuilder<RemoveAllAccessForUserRequestBuilder> {
    /**
     * Remove access to a chat for a user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/chat-removeallaccessforuser?view=graph-rest-beta|Find more info here}
     */
     post(body: RemoveAllAccessForUserPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Remove access to a chat for a user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: RemoveAllAccessForUserPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param RemoveAllAccessForUserPostRequestBody The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRemoveAllAccessForUserPostRequestBody(writer: SerializationWriter, removeAllAccessForUserPostRequestBody: Partial<RemoveAllAccessForUserPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!removeAllAccessForUserPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeObjectValue<TeamworkUserIdentity>("user", removeAllAccessForUserPostRequestBody.user, serializeTeamworkUserIdentity);
    writer.writeAdditionalData(removeAllAccessForUserPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const RemoveAllAccessForUserRequestBuilderUriTemplate = "{+baseurl}/chats/{chat%2Did}/removeAllAccessForUser";
/**
 * Metadata for all the requests in the request builder.
 */
export const RemoveAllAccessForUserRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: RemoveAllAccessForUserRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeRemoveAllAccessForUserPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
