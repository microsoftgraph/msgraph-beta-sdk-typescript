/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, type BaseCollectionPaginationCountResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createDestinationSummaryFromDiscriminatorValue, serializeDestinationSummary, type DestinationSummary } from '@microsoft/msgraph-beta-sdk/models/networkaccess/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse}
 */
// @ts-ignore
export function createGetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse;
}
/**
 * The deserialization information for the current model
 * @param GetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse(getDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse: Partial<GetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse),
        "value": n => { getDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse.value = n.getCollectionOfObjectValues<DestinationSummary>(createDestinationSummaryFromDiscriminatorValue); },
    }
}
export interface GetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DestinationSummary[] | null;
}
/**
 * Provides operations to call the getDestinationSummaries method.
 */
export interface MicrosoftGraphNetworkaccessGetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByRequestBuilder extends BaseRequestBuilder<MicrosoftGraphNetworkaccessGetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByRequestBuilder> {
    /**
     * Get counts of the visits to the top destination aggregations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<MicrosoftGraphNetworkaccessGetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByRequestBuilderGetQueryParameters> | undefined) : Promise<GetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse | undefined>;
    /**
     * Get counts of the visits to the top destination aggregations.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MicrosoftGraphNetworkaccessGetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get counts of the visits to the top destination aggregations.
 */
export interface MicrosoftGraphNetworkaccessGetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByRequestBuilderGetQueryParameters {
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
 * @param GetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse(writer: SerializationWriter, getDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse: Partial<GetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, getDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<DestinationSummary>("value", getDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponse.value, serializeDestinationSummary);
}
/**
 * Uri template for the request builder.
 */
export const MicrosoftGraphNetworkaccessGetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByRequestBuilderUriTemplate = "{+baseurl}/networkAccess/reports/microsoft.graph.networkaccess.getDestinationSummaries(startDateTime={startDateTime},endDateTime={endDateTime},aggregatedBy='{aggregatedBy}'){?%24count,%24filter,%24search,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MicrosoftGraphNetworkaccessGetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftGraphNetworkaccessGetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: MicrosoftGraphNetworkaccessGetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByGetResponseFromDiscriminatorValue,
        queryParametersMapper: MicrosoftGraphNetworkaccessGetDestinationSummariesWithStartDateTimeWithEndDateTimeWithAggregatedByRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
