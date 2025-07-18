/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createServiceActivityValueMetricFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeServiceActivityValueMetric, type BaseCollectionPaginationCountResponse, type ServiceActivityValueMetric } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse}
 */
// @ts-ignore
export function createGetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse;
}
/**
 * The deserialization information for the current model
 * @param GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoGetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse(getMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse: Partial<GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse),
        "value": n => { getMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse.value = n.getCollectionOfObjectValues<ServiceActivityValueMetric>(createServiceActivityValueMetricFromDiscriminatorValue); },
    }
}
export interface GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ServiceActivityValueMetric[] | null;
}
/**
 * Provides operations to call the getMetricsForConditionalAccessCompliantDevicesSignInSuccess method.
 */
export interface GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesRequestBuilder extends BaseRequestBuilder<GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesRequestBuilder> {
    /**
     * Get the number of user authentication requests, during a specified time period, that satisfy a Conditional Access policy that requires device compliance. Microsoft Intune manages compliant devices, including mobile iOS/Android devices, tablets, or cloud Microsoft Entra-joined computers (not hybrid).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/serviceactivity-getmetricsforconditionalaccesscompliantdevicessigninsuccess?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesRequestBuilderGetQueryParameters> | undefined) : Promise<GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse | undefined>;
    /**
     * Get the number of user authentication requests, during a specified time period, that satisfy a Conditional Access policy that requires device compliance. Microsoft Intune manages compliant devices, including mobile iOS/Android devices, tablets, or cloud Microsoft Entra-joined computers (not hybrid).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the number of user authentication requests, during a specified time period, that satisfy a Conditional Access policy that requires device compliance. Microsoft Intune manages compliant devices, including mobile iOS/Android devices, tablets, or cloud Microsoft Entra-joined computers (not hybrid).
 */
export interface GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesRequestBuilderGetQueryParameters {
    /**
     * Usage: aggregationIntervalInMinutes=@aggregationIntervalInMinutes
     */
    aggregationIntervalInMinutes?: number;
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
 * @param GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeGetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse(writer: SerializationWriter, getMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse: Partial<GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!getMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, getMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<ServiceActivityValueMetric>("value", getMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponse.value, serializeServiceActivityValueMetric);
}
/**
 * Uri template for the request builder.
 */
export const GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesRequestBuilderUriTemplate = "{+baseurl}/reports/serviceActivity/getMetricsForConditionalAccessCompliantDevicesSignInSuccess(inclusiveIntervalStartDateTime={inclusiveIntervalStartDateTime},exclusiveIntervalEndDateTime={exclusiveIntervalEndDateTime},aggregationIntervalInMinutes=@aggregationIntervalInMinutes){?%24count,%24filter,%24search,%24skip,%24top,aggregationIntervalInMinutes*}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesGetResponseFromDiscriminatorValue,
        queryParametersMapper: GetMetricsForConditionalAccessCompliantDevicesSignInSuccessWithInclusiveIntervalStartDateTimeWithExclusiveIntervalEndDateTimeWithAggregationIntervalInMinutesRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
