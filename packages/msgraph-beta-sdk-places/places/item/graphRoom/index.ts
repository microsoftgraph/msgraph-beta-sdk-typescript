/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createRoomFromDiscriminatorValue, type Room } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Casts the previous resource to room.
 */
export interface GraphRoomRequestBuilder extends BaseRequestBuilder<GraphRoomRequestBuilder> {
    /**
     * Get the item of type microsoft.graph.place as microsoft.graph.room
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Room
     */
     get(requestConfiguration?: RequestConfiguration<GraphRoomRequestBuilderGetQueryParameters> | undefined) : Promise<Room | undefined>;
    /**
     * Get the item of type microsoft.graph.place as microsoft.graph.room
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GraphRoomRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the item of type microsoft.graph.place as microsoft.graph.room
 */
export interface GraphRoomRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GraphRoomRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GraphRoomRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createRoomFromDiscriminatorValue,
        queryParametersMapper: GraphRoomRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const GraphRoomRequestBuilderUriTemplate = "{+baseurl}/places/{place%2Did}/graph.room{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */