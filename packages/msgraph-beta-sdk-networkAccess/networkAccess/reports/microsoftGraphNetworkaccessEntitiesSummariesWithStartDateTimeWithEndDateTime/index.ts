/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, type BaseCollectionPaginationCountResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createEntitiesSummaryFromDiscriminatorValue, serializeEntitiesSummary, type EntitiesSummary } from '@microsoft/msgraph-beta-sdk/models/networkaccess/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a entitiesSummariesWithStartDateTimeWithEndDateTimeGetResponse
 */
export function createEntitiesSummariesWithStartDateTimeWithEndDateTimeGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoEntitiesSummariesWithStartDateTimeWithEndDateTimeGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoEntitiesSummariesWithStartDateTimeWithEndDateTimeGetResponse(entitiesSummariesWithStartDateTimeWithEndDateTimeGetResponse: Partial<EntitiesSummariesWithStartDateTimeWithEndDateTimeGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(entitiesSummariesWithStartDateTimeWithEndDateTimeGetResponse),
        "value": n => { entitiesSummariesWithStartDateTimeWithEndDateTimeGetResponse.value = n.getCollectionOfObjectValues<EntitiesSummary>(createEntitiesSummaryFromDiscriminatorValue); },
    }
}
export interface EntitiesSummariesWithStartDateTimeWithEndDateTimeGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EntitiesSummary[];
}
/**
 * Provides operations to call the entitiesSummaries method.
 */
export interface MicrosoftGraphNetworkaccessEntitiesSummariesWithStartDateTimeWithEndDateTimeRequestBuilder extends BaseRequestBuilder<MicrosoftGraphNetworkaccessEntitiesSummariesWithStartDateTimeWithEndDateTimeRequestBuilder> {
    /**
     * Invoke function entitiesSummaries
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EntitiesSummariesWithStartDateTimeWithEndDateTimeGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<MicrosoftGraphNetworkaccessEntitiesSummariesWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters> | undefined) : Promise<EntitiesSummariesWithStartDateTimeWithEndDateTimeGetResponse | undefined>;
    /**
     * Invoke function entitiesSummaries
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MicrosoftGraphNetworkaccessEntitiesSummariesWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Invoke function entitiesSummaries
 */
export interface MicrosoftGraphNetworkaccessEntitiesSummariesWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters {
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
export function serializeEntitiesSummariesWithStartDateTimeWithEndDateTimeGetResponse(writer: SerializationWriter, entitiesSummariesWithStartDateTimeWithEndDateTimeGetResponse: Partial<EntitiesSummariesWithStartDateTimeWithEndDateTimeGetResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, entitiesSummariesWithStartDateTimeWithEndDateTimeGetResponse)
    writer.writeCollectionOfObjectValues<EntitiesSummary>("value", entitiesSummariesWithStartDateTimeWithEndDateTimeGetResponse.value, serializeEntitiesSummary);
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MicrosoftGraphNetworkaccessEntitiesSummariesWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftGraphNetworkaccessEntitiesSummariesWithStartDateTimeWithEndDateTimeRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEntitiesSummariesWithStartDateTimeWithEndDateTimeGetResponseFromDiscriminatorValue,
        queryParametersMapper: MicrosoftGraphNetworkaccessEntitiesSummariesWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const MicrosoftGraphNetworkaccessEntitiesSummariesWithStartDateTimeWithEndDateTimeRequestBuilderUriTemplate = "{+baseurl}/networkAccess/reports/microsoft.graph.networkaccess.entitiesSummaries(startDateTime={startDateTime},endDateTime={endDateTime}){?%24top,%24skip,%24search,%24filter,%24count}";
/* tslint:enable */
/* eslint-enable */