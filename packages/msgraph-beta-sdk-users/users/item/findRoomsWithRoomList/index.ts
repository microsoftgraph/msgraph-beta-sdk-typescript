/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createEmailAddressFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeEmailAddress, type BaseCollectionPaginationCountResponse, type EmailAddress } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a findRoomsWithRoomListGetResponse
 */
export function createFindRoomsWithRoomListGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoFindRoomsWithRoomListGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoFindRoomsWithRoomListGetResponse(findRoomsWithRoomListGetResponse: Partial<FindRoomsWithRoomListGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(findRoomsWithRoomListGetResponse),
        "value": n => { findRoomsWithRoomListGetResponse.value = n.getCollectionOfObjectValues<EmailAddress>(createEmailAddressFromDiscriminatorValue); },
    }
}
export interface FindRoomsWithRoomListGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EmailAddress[];
}
/**
 * Provides operations to call the findRooms method.
 */
export interface FindRoomsWithRoomListRequestBuilder extends BaseRequestBuilder<FindRoomsWithRoomListRequestBuilder> {
    /**
     * Invoke function findRooms
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of FindRoomsWithRoomListGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<FindRoomsWithRoomListRequestBuilderGetQueryParameters> | undefined) : Promise<FindRoomsWithRoomListGetResponse | undefined>;
    /**
     * Invoke function findRooms
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FindRoomsWithRoomListRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Invoke function findRooms
 */
export interface FindRoomsWithRoomListRequestBuilderGetQueryParameters {
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
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeFindRoomsWithRoomListGetResponse(writer: SerializationWriter, findRoomsWithRoomListGetResponse: Partial<FindRoomsWithRoomListGetResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, findRoomsWithRoomListGetResponse)
    writer.writeCollectionOfObjectValues<EmailAddress>("value", findRoomsWithRoomListGetResponse.value, serializeEmailAddress);
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FindRoomsWithRoomListRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FindRoomsWithRoomListRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createFindRoomsWithRoomListGetResponseFromDiscriminatorValue,
        queryParametersMapper: FindRoomsWithRoomListRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const FindRoomsWithRoomListRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/findRooms(RoomList='{RoomList}'){?%24top,%24skip,%24search,%24filter,%24count}";
/* tslint:enable */
/* eslint-enable */