/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDirectoryObjectFromDiscriminatorValue, serializeDirectoryObject, type DirectoryObject } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getUserOwnedObjectsPostRequestBody
 */
export function createGetUserOwnedObjectsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetUserOwnedObjectsPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetUserOwnedObjectsPostRequestBody(getUserOwnedObjectsPostRequestBody: Partial<GetUserOwnedObjectsPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getUserOwnedObjectsPostRequestBody.backingStoreEnabled = true; },
        "type": n => { getUserOwnedObjectsPostRequestBody.type = n.getStringValue(); },
        "userId": n => { getUserOwnedObjectsPostRequestBody.userId = n.getStringValue(); },
    }
}
export interface GetUserOwnedObjectsPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The type property
     */
    type?: string;
    /**
     * The userId property
     */
    userId?: string;
}
/**
 * Provides operations to call the getUserOwnedObjects method.
 */
export interface GetUserOwnedObjectsRequestBuilder extends BaseRequestBuilder<GetUserOwnedObjectsRequestBuilder> {
    /**
     * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn't support pagination.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DirectoryObject
     * @see {@link https://learn.microsoft.com/graph/api/directory-deleteditems-getuserownedobjects?view=graph-rest-1.0|Find more info here}
     */
     post(body: GetUserOwnedObjectsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DirectoryObject | undefined>;
    /**
     * Retrieve a list of recently deleted application and group objects owned by the specified user. This API returns up to 1,000 deleted objects owned by the user, sorted by ID, and doesn't support pagination.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: GetUserOwnedObjectsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetUserOwnedObjectsPostRequestBody(writer: SerializationWriter, getUserOwnedObjectsPostRequestBody: Partial<GetUserOwnedObjectsPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("type", getUserOwnedObjectsPostRequestBody.type);
    writer.writeStringValue("userId", getUserOwnedObjectsPostRequestBody.userId);
    writer.writeAdditionalData(getUserOwnedObjectsPostRequestBody.additionalData);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const GetUserOwnedObjectsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDirectoryObjectFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetUserOwnedObjectsPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const GetUserOwnedObjectsRequestBuilderUriTemplate = "{+baseurl}/contacts/getUserOwnedObjects";
/* tslint:enable */
/* eslint-enable */