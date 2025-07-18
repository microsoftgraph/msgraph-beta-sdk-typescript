/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEmailAddressFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeEmailAddress, type BaseCollectionPaginationCountResponse, type EmailAddress } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {FindRoomsGetResponse}
 */
// @ts-ignore
export function createFindRoomsGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoFindRoomsGetResponse;
}
/**
 * The deserialization information for the current model
 * @param FindRoomsGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoFindRoomsGetResponse(findRoomsGetResponse: Partial<FindRoomsGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(findRoomsGetResponse),
        "value": n => { findRoomsGetResponse.value = n.getCollectionOfObjectValues<EmailAddress>(createEmailAddressFromDiscriminatorValue); },
    }
}
export interface FindRoomsGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EmailAddress[] | null;
}
/**
 * Provides operations to call the findRooms method.
 */
export interface FindRoomsRequestBuilder extends BaseRequestBuilder<FindRoomsRequestBuilder> {
    /**
     * Invoke function findRooms
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FindRoomsGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<FindRoomsRequestBuilderGetQueryParameters> | undefined) : Promise<FindRoomsGetResponse | undefined>;
    /**
     * Invoke function findRooms
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FindRoomsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Invoke function findRooms
 */
export interface FindRoomsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Serializes information the current object
 * @param FindRoomsGetResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeFindRoomsGetResponse(writer: SerializationWriter, findRoomsGetResponse: Partial<FindRoomsGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!findRoomsGetResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, findRoomsGetResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<EmailAddress>("value", findRoomsGetResponse.value, serializeEmailAddress);
}
/**
 * Uri template for the request builder.
 */
export const FindRoomsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/findRooms(){?%24count,%24filter,%24search,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FindRoomsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FindRoomsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: FindRoomsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFindRoomsGetResponseFromDiscriminatorValue,
        queryParametersMapper: FindRoomsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
