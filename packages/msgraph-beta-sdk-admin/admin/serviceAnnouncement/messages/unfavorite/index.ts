/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a unfavoritePostRequestBody
 */
export function createUnfavoritePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoUnfavoritePostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a unfavoritePostResponse
 */
export function createUnfavoritePostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoUnfavoritePostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoUnfavoritePostRequestBody(unfavoritePostRequestBody: Partial<UnfavoritePostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { unfavoritePostRequestBody.backingStoreEnabled = true; },
        "messageIds": n => { unfavoritePostRequestBody.messageIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoUnfavoritePostResponse(unfavoritePostResponse: Partial<UnfavoritePostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { unfavoritePostResponse.backingStoreEnabled = true; },
        "value": n => { unfavoritePostResponse.value = n.getBooleanValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeUnfavoritePostRequestBody(writer: SerializationWriter, unfavoritePostRequestBody: Partial<UnfavoritePostRequestBody> | undefined = {}) : void {
    writer.writeCollectionOfPrimitiveValues<string>("messageIds", unfavoritePostRequestBody.messageIds);
    writer.writeAdditionalData(unfavoritePostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeUnfavoritePostResponse(writer: SerializationWriter, unfavoritePostResponse: Partial<UnfavoritePostResponse> | undefined = {}) : void {
    writer.writeBooleanValue("value", unfavoritePostResponse.value);
    writer.writeAdditionalData(unfavoritePostResponse.additionalData);
}
export interface UnfavoritePostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The messageIds property
     */
    messageIds?: string[];
}
export interface UnfavoritePostResponse extends AdditionalDataHolder, BackedModel, Parsable {
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
 * Provides operations to call the unfavorite method.
 */
export interface UnfavoriteRequestBuilder extends BaseRequestBuilder<UnfavoriteRequestBuilder> {
    /**
     * Remove the favorite status of serviceUpdateMessages for the signed in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnfavoritePostResponse
     * @see {@link https://learn.microsoft.com/graph/api/serviceupdatemessage-unfavorite?view=graph-rest-1.0|Find more info here}
     */
     post(body: UnfavoritePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UnfavoritePostResponse | undefined>;
    /**
     * Remove the favorite status of serviceUpdateMessages for the signed in user.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UnfavoritePostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const UnfavoriteRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUnfavoritePostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnfavoritePostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UnfavoriteRequestBuilderUriTemplate = "{+baseurl}/admin/serviceAnnouncement/messages/unfavorite";
/* tslint:enable */
/* eslint-enable */