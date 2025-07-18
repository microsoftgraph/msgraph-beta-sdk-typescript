/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, type BaseCollectionPaginationCountResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createDestinationFromDiscriminatorValue, serializeDestination, type Destination } from '@microsoft/msgraph-beta-sdk/models/networkaccess/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {DestinationReportWithStartDateTimeWithEndDateTimeGetResponse}
 */
// @ts-ignore
export function createDestinationReportWithStartDateTimeWithEndDateTimeGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDestinationReportWithStartDateTimeWithEndDateTimeGetResponse;
}
/**
 * The deserialization information for the current model
 * @param DestinationReportWithStartDateTimeWithEndDateTimeGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoDestinationReportWithStartDateTimeWithEndDateTimeGetResponse(destinationReportWithStartDateTimeWithEndDateTimeGetResponse: Partial<DestinationReportWithStartDateTimeWithEndDateTimeGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(destinationReportWithStartDateTimeWithEndDateTimeGetResponse),
        "value": n => { destinationReportWithStartDateTimeWithEndDateTimeGetResponse.value = n.getCollectionOfObjectValues<Destination>(createDestinationFromDiscriminatorValue); },
    }
}
export interface DestinationReportWithStartDateTimeWithEndDateTimeGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Destination[] | null;
}
/**
 * Provides operations to call the destinationReport method.
 */
export interface MicrosoftGraphNetworkaccessDestinationReportWithStartDateTimeWithEndDateTimeRequestBuilder extends BaseRequestBuilder<MicrosoftGraphNetworkaccessDestinationReportWithStartDateTimeWithEndDateTimeRequestBuilder> {
    /**
     * Invoke function destinationReport
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DestinationReportWithStartDateTimeWithEndDateTimeGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<MicrosoftGraphNetworkaccessDestinationReportWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters> | undefined) : Promise<DestinationReportWithStartDateTimeWithEndDateTimeGetResponse | undefined>;
    /**
     * Invoke function destinationReport
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MicrosoftGraphNetworkaccessDestinationReportWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Invoke function destinationReport
 */
export interface MicrosoftGraphNetworkaccessDestinationReportWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters {
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
 * @param DestinationReportWithStartDateTimeWithEndDateTimeGetResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeDestinationReportWithStartDateTimeWithEndDateTimeGetResponse(writer: SerializationWriter, destinationReportWithStartDateTimeWithEndDateTimeGetResponse: Partial<DestinationReportWithStartDateTimeWithEndDateTimeGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!destinationReportWithStartDateTimeWithEndDateTimeGetResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, destinationReportWithStartDateTimeWithEndDateTimeGetResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<Destination>("value", destinationReportWithStartDateTimeWithEndDateTimeGetResponse.value, serializeDestination);
}
/**
 * Uri template for the request builder.
 */
export const MicrosoftGraphNetworkaccessDestinationReportWithStartDateTimeWithEndDateTimeRequestBuilderUriTemplate = "{+baseurl}/networkAccess/reports/microsoft.graph.networkaccess.destinationReport(startDateTime={startDateTime},endDateTime={endDateTime}){?%24count,%24filter,%24search,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MicrosoftGraphNetworkaccessDestinationReportWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftGraphNetworkaccessDestinationReportWithStartDateTimeWithEndDateTimeRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: MicrosoftGraphNetworkaccessDestinationReportWithStartDateTimeWithEndDateTimeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDestinationReportWithStartDateTimeWithEndDateTimeGetResponseFromDiscriminatorValue,
        queryParametersMapper: MicrosoftGraphNetworkaccessDestinationReportWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
