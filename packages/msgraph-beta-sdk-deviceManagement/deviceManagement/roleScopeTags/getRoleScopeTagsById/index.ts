/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createRoleScopeTagFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeRoleScopeTag, type BaseCollectionPaginationCountResponse, type RoleScopeTag } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getRoleScopeTagsByIdPostRequestBody
 */
export function createGetRoleScopeTagsByIdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetRoleScopeTagsByIdPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getRoleScopeTagsByIdPostResponse
 */
export function createGetRoleScopeTagsByIdPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetRoleScopeTagsByIdPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetRoleScopeTagsByIdPostRequestBody(getRoleScopeTagsByIdPostRequestBody: Partial<GetRoleScopeTagsByIdPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getRoleScopeTagsByIdPostRequestBody.backingStoreEnabled = true; },
        "roleScopeTagIds": n => { getRoleScopeTagsByIdPostRequestBody.roleScopeTagIds = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetRoleScopeTagsByIdPostResponse(getRoleScopeTagsByIdPostResponse: Partial<GetRoleScopeTagsByIdPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getRoleScopeTagsByIdPostResponse),
        "value": n => { getRoleScopeTagsByIdPostResponse.value = n.getCollectionOfObjectValues<RoleScopeTag>(createRoleScopeTagFromDiscriminatorValue); },
    }
}
export interface GetRoleScopeTagsByIdPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The roleScopeTagIds property
     */
    roleScopeTagIds?: string[];
}
export interface GetRoleScopeTagsByIdPostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: RoleScopeTag[];
}
/**
 * Provides operations to call the getRoleScopeTagsById method.
 */
export interface GetRoleScopeTagsByIdRequestBuilder extends BaseRequestBuilder<GetRoleScopeTagsByIdRequestBuilder> {
    /**
     * Invoke action getRoleScopeTagsById
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetRoleScopeTagsByIdPostResponse
     */
     post(body: GetRoleScopeTagsByIdPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GetRoleScopeTagsByIdPostResponse | undefined>;
    /**
     * Invoke action getRoleScopeTagsById
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: GetRoleScopeTagsByIdPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetRoleScopeTagsByIdPostRequestBody(writer: SerializationWriter, getRoleScopeTagsByIdPostRequestBody: Partial<GetRoleScopeTagsByIdPostRequestBody> | undefined = {}) : void {
    writer.writeCollectionOfPrimitiveValues<string>("roleScopeTagIds", getRoleScopeTagsByIdPostRequestBody.roleScopeTagIds);
    writer.writeAdditionalData(getRoleScopeTagsByIdPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetRoleScopeTagsByIdPostResponse(writer: SerializationWriter, getRoleScopeTagsByIdPostResponse: Partial<GetRoleScopeTagsByIdPostResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, getRoleScopeTagsByIdPostResponse)
    writer.writeCollectionOfObjectValues<RoleScopeTag>("value", getRoleScopeTagsByIdPostResponse.value, serializeRoleScopeTag);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const GetRoleScopeTagsByIdRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createGetRoleScopeTagsByIdPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetRoleScopeTagsByIdPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const GetRoleScopeTagsByIdRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/roleScopeTags/getRoleScopeTagsById";
/* tslint:enable */
/* eslint-enable */