/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, type BaseCollectionPaginationCountResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getMemberGroupsPostRequestBody
 */
export function createGetMemberGroupsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetMemberGroupsPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getMemberGroupsPostResponse
 */
export function createGetMemberGroupsPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetMemberGroupsPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetMemberGroupsPostRequestBody(getMemberGroupsPostRequestBody: Partial<GetMemberGroupsPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getMemberGroupsPostRequestBody.backingStoreEnabled = true; },
        "securityEnabledOnly": n => { getMemberGroupsPostRequestBody.securityEnabledOnly = n.getBooleanValue(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetMemberGroupsPostResponse(getMemberGroupsPostResponse: Partial<GetMemberGroupsPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getMemberGroupsPostResponse),
        "value": n => { getMemberGroupsPostResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
export interface GetMemberGroupsPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The securityEnabledOnly property
     */
    securityEnabledOnly?: boolean;
}
export interface GetMemberGroupsPostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: string[];
}
/**
 * Provides operations to call the getMemberGroups method.
 */
export interface GetMemberGroupsRequestBuilder extends BaseRequestBuilder<GetMemberGroupsRequestBuilder> {
    /**
     * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the Directory_ResultSizeLimitExceeded error code. As a workaround, use the List group transitive memberOf API.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetMemberGroupsPostResponse
     * @see {@link https://learn.microsoft.com/graph/api/directoryobject-getmembergroups?view=graph-rest-1.0|Find more info here}
     */
     post(body: GetMemberGroupsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GetMemberGroupsPostResponse | undefined>;
    /**
     * Return all the group IDs for the groups that the specified user, group, service principal, organizational contact, device, or directory object is a member of. This function is transitive. This API returns up to 11,000 group IDs. If more than 11,000 results are available, it returns a 400 Bad Request error with the Directory_ResultSizeLimitExceeded error code. As a workaround, use the List group transitive memberOf API.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: GetMemberGroupsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetMemberGroupsPostRequestBody(writer: SerializationWriter, getMemberGroupsPostRequestBody: Partial<GetMemberGroupsPostRequestBody> | undefined = {}) : void {
    writer.writeBooleanValue("securityEnabledOnly", getMemberGroupsPostRequestBody.securityEnabledOnly);
    writer.writeAdditionalData(getMemberGroupsPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetMemberGroupsPostResponse(writer: SerializationWriter, getMemberGroupsPostResponse: Partial<GetMemberGroupsPostResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, getMemberGroupsPostResponse)
    writer.writeCollectionOfPrimitiveValues<string>("value", getMemberGroupsPostResponse.value);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const GetMemberGroupsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createGetMemberGroupsPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetMemberGroupsPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const GetMemberGroupsRequestBuilderUriTemplate = "{+baseurl}/organization/{organization%2Did}/getMemberGroups";
/* tslint:enable */
/* eslint-enable */