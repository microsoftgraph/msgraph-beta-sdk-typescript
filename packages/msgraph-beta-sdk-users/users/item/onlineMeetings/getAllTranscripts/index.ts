/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCallTranscriptFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeCallTranscript, type BaseCollectionPaginationCountResponse, type CallTranscript } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getAllTranscriptsGetResponse
 */
export function createGetAllTranscriptsGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetAllTranscriptsGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetAllTranscriptsGetResponse(getAllTranscriptsGetResponse: Partial<GetAllTranscriptsGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAllTranscriptsGetResponse),
        "value": n => { getAllTranscriptsGetResponse.value = n.getCollectionOfObjectValues<CallTranscript>(createCallTranscriptFromDiscriminatorValue); },
    }
}
export interface GetAllTranscriptsGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CallTranscript[];
}
/**
 * Provides operations to call the getAllTranscripts method.
 */
export interface GetAllTranscriptsRequestBuilder extends BaseRequestBuilder<GetAllTranscriptsRequestBuilder> {
    /**
     * Invoke function getAllTranscripts
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetAllTranscriptsGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<GetAllTranscriptsRequestBuilderGetQueryParameters> | undefined) : Promise<GetAllTranscriptsGetResponse | undefined>;
    /**
     * Invoke function getAllTranscripts
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GetAllTranscriptsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Invoke function getAllTranscripts
 */
export interface GetAllTranscriptsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
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
export function serializeGetAllTranscriptsGetResponse(writer: SerializationWriter, getAllTranscriptsGetResponse: Partial<GetAllTranscriptsGetResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, getAllTranscriptsGetResponse)
    writer.writeCollectionOfObjectValues<CallTranscript>("value", getAllTranscriptsGetResponse.value, serializeCallTranscript);
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GetAllTranscriptsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GetAllTranscriptsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createGetAllTranscriptsGetResponseFromDiscriminatorValue,
        queryParametersMapper: GetAllTranscriptsRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const GetAllTranscriptsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/onlineMeetings/getAllTranscripts(){?%24top,%24skip,%24search,%24filter,%24count,%24select,%24orderby}";
/* tslint:enable */
/* eslint-enable */