/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, type BaseCollectionPaginationCountResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createTrafficDistributionPointFromDiscriminatorValue, serializeTrafficDistributionPoint, type TrafficDistributionPoint } from '@microsoft/msgraph-beta-sdk/models/networkaccess/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a trafficDistributionWithStartDateTimeWithEndDateTimeGetResponse
 */
export function createTrafficDistributionWithStartDateTimeWithEndDateTimeGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoTrafficDistributionWithStartDateTimeWithEndDateTimeGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoTrafficDistributionWithStartDateTimeWithEndDateTimeGetResponse(trafficDistributionWithStartDateTimeWithEndDateTimeGetResponse: Partial<TrafficDistributionWithStartDateTimeWithEndDateTimeGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(trafficDistributionWithStartDateTimeWithEndDateTimeGetResponse),
        "value": n => { trafficDistributionWithStartDateTimeWithEndDateTimeGetResponse.value = n.getCollectionOfObjectValues<TrafficDistributionPoint>(createTrafficDistributionPointFromDiscriminatorValue); },
    }
}
/**
 * Provides operations to call the trafficDistribution method.
 */
export interface MicrosoftGraphNetworkaccessTrafficDistributionWithStartDateTimeWithEndDateTimeRequestBuilder extends BaseRequestBuilder<MicrosoftGraphNetworkaccessTrafficDistributionWithStartDateTimeWithEndDateTimeRequestBuilder> {
    /**
     * Invoke function trafficDistribution
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TrafficDistributionWithStartDateTimeWithEndDateTimeGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<MicrosoftGraphNetworkaccessTrafficDistributionWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters> | undefined) : Promise<TrafficDistributionWithStartDateTimeWithEndDateTimeGetResponse | undefined>;
    /**
     * Invoke function trafficDistribution
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MicrosoftGraphNetworkaccessTrafficDistributionWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Invoke function trafficDistribution
 */
export interface MicrosoftGraphNetworkaccessTrafficDistributionWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters {
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
export function serializeTrafficDistributionWithStartDateTimeWithEndDateTimeGetResponse(writer: SerializationWriter, trafficDistributionWithStartDateTimeWithEndDateTimeGetResponse: Partial<TrafficDistributionWithStartDateTimeWithEndDateTimeGetResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, trafficDistributionWithStartDateTimeWithEndDateTimeGetResponse)
    writer.writeCollectionOfObjectValues<TrafficDistributionPoint>("value", trafficDistributionWithStartDateTimeWithEndDateTimeGetResponse.value, serializeTrafficDistributionPoint);
}
export interface TrafficDistributionWithStartDateTimeWithEndDateTimeGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: TrafficDistributionPoint[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MicrosoftGraphNetworkaccessTrafficDistributionWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftGraphNetworkaccessTrafficDistributionWithStartDateTimeWithEndDateTimeRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTrafficDistributionWithStartDateTimeWithEndDateTimeGetResponseFromDiscriminatorValue,
        queryParametersMapper: MicrosoftGraphNetworkaccessTrafficDistributionWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const MicrosoftGraphNetworkaccessTrafficDistributionWithStartDateTimeWithEndDateTimeRequestBuilderUriTemplate = "{+baseurl}/networkAccess/reports/microsoft.graph.networkaccess.trafficDistribution(startDateTime={startDateTime},endDateTime={endDateTime}){?%24top,%24skip,%24search,%24filter,%24count}";
/* tslint:enable */
/* eslint-enable */