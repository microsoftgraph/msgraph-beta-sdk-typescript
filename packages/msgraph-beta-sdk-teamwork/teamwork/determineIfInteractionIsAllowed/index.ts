/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createIdentityFromDiscriminatorValue, serializeIdentity, TeamworkInteractionType, TeamworkInteractionTypeObject, type Identity } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {DetermineIfInteractionIsAllowedPostRequestBody}
 */
// @ts-ignore
export function createDetermineIfInteractionIsAllowedPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDetermineIfInteractionIsAllowedPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {DetermineIfInteractionIsAllowedPostResponse}
 */
// @ts-ignore
export function createDetermineIfInteractionIsAllowedPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDetermineIfInteractionIsAllowedPostResponse;
}
/**
 * The deserialization information for the current model
 * @param DetermineIfInteractionIsAllowedPostRequestBody The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoDetermineIfInteractionIsAllowedPostRequestBody(determineIfInteractionIsAllowedPostRequestBody: Partial<DetermineIfInteractionIsAllowedPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { determineIfInteractionIsAllowedPostRequestBody.backingStoreEnabled = true; },
        "interactionType": n => { determineIfInteractionIsAllowedPostRequestBody.interactionType = n.getEnumValue<TeamworkInteractionType>(TeamworkInteractionTypeObject); },
        "users": n => { determineIfInteractionIsAllowedPostRequestBody.users = n.getCollectionOfObjectValues<Identity>(createIdentityFromDiscriminatorValue); },
    }
}
/**
 * The deserialization information for the current model
 * @param DetermineIfInteractionIsAllowedPostResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoDetermineIfInteractionIsAllowedPostResponse(determineIfInteractionIsAllowedPostResponse: Partial<DetermineIfInteractionIsAllowedPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { determineIfInteractionIsAllowedPostResponse.backingStoreEnabled = true; },
        "value": n => { determineIfInteractionIsAllowedPostResponse.value = n.getBooleanValue(); },
    }
}
export interface DetermineIfInteractionIsAllowedPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The interactionType property
     */
    interactionType?: TeamworkInteractionType | null;
    /**
     * The users property
     */
    users?: Identity[] | null;
}
export interface DetermineIfInteractionIsAllowedPostResponse extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean | null;
    /**
     * The value property
     */
    value?: boolean | null;
}
/**
 * Provides operations to call the determineIfInteractionIsAllowed method.
 */
export interface DetermineIfInteractionIsAllowedRequestBuilder extends BaseRequestBuilder<DetermineIfInteractionIsAllowedRequestBuilder> {
    /**
     * Determine if a specified Microsoft Teams interaction is allowed between the signed-in user and specified users.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DetermineIfInteractionIsAllowedPostResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/teamwork-determineifinteractionisallowed?view=graph-rest-beta|Find more info here}
     */
     post(body: DetermineIfInteractionIsAllowedPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DetermineIfInteractionIsAllowedPostResponse | undefined>;
    /**
     * Determine if a specified Microsoft Teams interaction is allowed between the signed-in user and specified users.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: DetermineIfInteractionIsAllowedPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param DetermineIfInteractionIsAllowedPostRequestBody The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeDetermineIfInteractionIsAllowedPostRequestBody(writer: SerializationWriter, determineIfInteractionIsAllowedPostRequestBody: Partial<DetermineIfInteractionIsAllowedPostRequestBody> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!determineIfInteractionIsAllowedPostRequestBody || isSerializingDerivedType) { return; }
    writer.writeEnumValue<TeamworkInteractionType>("interactionType", determineIfInteractionIsAllowedPostRequestBody.interactionType);
    writer.writeCollectionOfObjectValues<Identity>("users", determineIfInteractionIsAllowedPostRequestBody.users, serializeIdentity);
    writer.writeAdditionalData(determineIfInteractionIsAllowedPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param DetermineIfInteractionIsAllowedPostResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeDetermineIfInteractionIsAllowedPostResponse(writer: SerializationWriter, determineIfInteractionIsAllowedPostResponse: Partial<DetermineIfInteractionIsAllowedPostResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!determineIfInteractionIsAllowedPostResponse || isSerializingDerivedType) { return; }
    writer.writeBooleanValue("value", determineIfInteractionIsAllowedPostResponse.value);
    writer.writeAdditionalData(determineIfInteractionIsAllowedPostResponse.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const DetermineIfInteractionIsAllowedRequestBuilderUriTemplate = "{+baseurl}/teamwork/determineIfInteractionIsAllowed";
/**
 * Metadata for all the requests in the request builder.
 */
export const DetermineIfInteractionIsAllowedRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: DetermineIfInteractionIsAllowedRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDetermineIfInteractionIsAllowedPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDetermineIfInteractionIsAllowedPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
