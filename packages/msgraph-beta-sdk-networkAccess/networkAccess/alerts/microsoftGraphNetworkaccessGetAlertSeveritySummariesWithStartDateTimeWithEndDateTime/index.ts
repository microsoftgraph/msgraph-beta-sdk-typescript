/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, type BaseCollectionPaginationCountResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createAlertSeveritySummaryFromDiscriminatorValue, serializeAlertSeveritySummary, type AlertSeveritySummary } from '@microsoft/msgraph-beta-sdk/models/networkaccess/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse}
 */
// @ts-ignore
export function createGetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse(getAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse: Partial<GetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse),
        "value": n => { getAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse.value = n.getCollectionOfObjectValues<AlertSeveritySummary>(createAlertSeveritySummaryFromDiscriminatorValue); },
    }
}
export interface GetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AlertSeveritySummary[] | null;
}
/**
 * Provides operations to call the getAlertSeveritySummaries method.
 */
export interface MicrosoftGraphNetworkaccessGetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeRequestBuilder extends BaseRequestBuilder<MicrosoftGraphNetworkaccessGetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeRequestBuilder> {
    /**
     * Invoke function getAlertSeveritySummaries
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2022-06/PrivatePreview:NetworkAccess
     */
     get(requestConfiguration?: RequestConfiguration<MicrosoftGraphNetworkaccessGetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters> | undefined) : Promise<GetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse | undefined>;
    /**
     * Invoke function getAlertSeveritySummaries
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2022-06/PrivatePreview:NetworkAccess
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MicrosoftGraphNetworkaccessGetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Invoke function getAlertSeveritySummaries
 */
export interface MicrosoftGraphNetworkaccessGetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters {
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
// @ts-ignore
export function serializeGetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse(writer: SerializationWriter, getAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse: Partial<GetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse> | undefined | null = {}) : void {
    if (getAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse) {
        serializeBaseCollectionPaginationCountResponse(writer, getAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse)
        writer.writeCollectionOfObjectValues<AlertSeveritySummary>("value", getAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponse.value, serializeAlertSeveritySummary);
    }
}
/**
 * Uri template for the request builder.
 */
export const MicrosoftGraphNetworkaccessGetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeRequestBuilderUriTemplate = "{+baseurl}/networkAccess/alerts/microsoft.graph.networkaccess.getAlertSeveritySummaries(startDateTime={startDateTime},endDateTime={endDateTime}){?%24count,%24filter,%24search,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MicrosoftGraphNetworkaccessGetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftGraphNetworkaccessGetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: MicrosoftGraphNetworkaccessGetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeGetResponseFromDiscriminatorValue,
        queryParametersMapper: MicrosoftGraphNetworkaccessGetAlertSeveritySummariesWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */