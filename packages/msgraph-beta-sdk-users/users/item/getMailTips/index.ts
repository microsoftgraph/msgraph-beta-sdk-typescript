/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMailTipsFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, MailTipsType, MailTipsTypeObject, serializeBaseCollectionPaginationCountResponse, serializeMailTips, type BaseCollectionPaginationCountResponse, type MailTips } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getMailTipsPostRequestBody
 */
export function createGetMailTipsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetMailTipsPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getMailTipsPostResponse
 */
export function createGetMailTipsPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetMailTipsPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetMailTipsPostRequestBody(getMailTipsPostRequestBody: Partial<GetMailTipsPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getMailTipsPostRequestBody.backingStoreEnabled = true; },
        "emailAddresses": n => { getMailTipsPostRequestBody.emailAddresses = n.getCollectionOfPrimitiveValues<string>(); },
        "mailTipsOptions": n => { getMailTipsPostRequestBody.mailTipsOptions = n.getCollectionOfEnumValues<MailTipsType>(MailTipsTypeObject); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetMailTipsPostResponse(getMailTipsPostResponse: Partial<GetMailTipsPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getMailTipsPostResponse),
        "value": n => { getMailTipsPostResponse.value = n.getCollectionOfObjectValues<MailTips>(createMailTipsFromDiscriminatorValue); },
    }
}
export interface GetMailTipsPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The EmailAddresses property
     */
    emailAddresses?: string[];
    /**
     * The MailTipsOptions property
     */
    mailTipsOptions?: MailTipsType[];
}
export interface GetMailTipsPostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: MailTips[];
}
/**
 * Provides operations to call the getMailTips method.
 */
export interface GetMailTipsRequestBuilder extends BaseRequestBuilder<GetMailTipsRequestBuilder> {
    /**
     * Get the MailTips of one or more recipients as available to the signed-in user. Note that by making a POST call to the getMailTips action, you can request specific types of MailTips tobe returned for more than one recipient at one time. The requested MailTips are returned in a mailTips collection.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetMailTipsPostResponse
     * @see {@link https://learn.microsoft.com/graph/api/user-getmailtips?view=graph-rest-1.0|Find more info here}
     */
     post(body: GetMailTipsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GetMailTipsPostResponse | undefined>;
    /**
     * Get the MailTips of one or more recipients as available to the signed-in user. Note that by making a POST call to the getMailTips action, you can request specific types of MailTips tobe returned for more than one recipient at one time. The requested MailTips are returned in a mailTips collection.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: GetMailTipsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetMailTipsPostRequestBody(writer: SerializationWriter, getMailTipsPostRequestBody: Partial<GetMailTipsPostRequestBody> | undefined = {}) : void {
    writer.writeCollectionOfPrimitiveValues<string>("EmailAddresses", getMailTipsPostRequestBody.emailAddresses);
    writer.writeEnumValue<MailTipsType[]>("MailTipsOptions", getMailTipsPostRequestBody.mailTipsOptions);
    writer.writeAdditionalData(getMailTipsPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetMailTipsPostResponse(writer: SerializationWriter, getMailTipsPostResponse: Partial<GetMailTipsPostResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, getMailTipsPostResponse)
    writer.writeCollectionOfObjectValues<MailTips>("value", getMailTipsPostResponse.value, serializeMailTips);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const GetMailTipsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createGetMailTipsPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetMailTipsPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const GetMailTipsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/getMailTips";
/* tslint:enable */
/* eslint-enable */