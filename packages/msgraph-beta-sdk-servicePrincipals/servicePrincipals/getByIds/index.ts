/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDirectoryObjectFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeDirectoryObject, type BaseCollectionPaginationCountResponse, type DirectoryObject } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getByIdsPostRequestBody
 */
export function createGetByIdsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetByIdsPostRequestBody;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getByIdsPostResponse
 */
export function createGetByIdsPostResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetByIdsPostResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetByIdsPostRequestBody(getByIdsPostRequestBody: Partial<GetByIdsPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "backingStoreEnabled": n => { getByIdsPostRequestBody.backingStoreEnabled = true; },
        "ids": n => { getByIdsPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>(); },
        "types": n => { getByIdsPostRequestBody.types = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetByIdsPostResponse(getByIdsPostResponse: Partial<GetByIdsPostResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getByIdsPostResponse),
        "value": n => { getByIdsPostResponse.value = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
    }
}
export interface GetByIdsPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
    /**
     * The ids property
     */
    ids?: string[];
    /**
     * The types property
     */
    types?: string[];
}
export interface GetByIdsPostResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DirectoryObject[];
}
/**
 * Provides operations to call the getByIds method.
 */
export interface GetByIdsRequestBuilder extends BaseRequestBuilder<GetByIdsRequestBuilder> {
    /**
     * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetByIdsPostResponse
     * @see {@link https://learn.microsoft.com/graph/api/directoryobject-getbyids?view=graph-rest-1.0|Find more info here}
     */
     post(body: GetByIdsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GetByIdsPostResponse | undefined>;
    /**
     * Return the directory objects specified in a list of IDs. Some common uses for this function are to:
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: GetByIdsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetByIdsPostRequestBody(writer: SerializationWriter, getByIdsPostRequestBody: Partial<GetByIdsPostRequestBody> | undefined = {}) : void {
    writer.writeCollectionOfPrimitiveValues<string>("ids", getByIdsPostRequestBody.ids);
    writer.writeCollectionOfPrimitiveValues<string>("types", getByIdsPostRequestBody.types);
    writer.writeAdditionalData(getByIdsPostRequestBody.additionalData);
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeGetByIdsPostResponse(writer: SerializationWriter, getByIdsPostResponse: Partial<GetByIdsPostResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, getByIdsPostResponse)
    writer.writeCollectionOfObjectValues<DirectoryObject>("value", getByIdsPostResponse.value, serializeDirectoryObject);
}
/**
 * Metadata for all the requests in the request builder.
 */
export const GetByIdsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createGetByIdsPostResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGetByIdsPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const GetByIdsRequestBuilderUriTemplate = "{+baseurl}/servicePrincipals/getByIds";
/* tslint:enable */
/* eslint-enable */