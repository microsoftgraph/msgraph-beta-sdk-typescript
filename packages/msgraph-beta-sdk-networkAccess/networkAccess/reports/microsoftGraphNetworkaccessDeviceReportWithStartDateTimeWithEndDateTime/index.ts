/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, type BaseCollectionPaginationCountResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createDeviceFromDiscriminatorValue, serializeDevice, type Device } from '@microsoft/msgraph-beta-sdk/models/networkaccess/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a deviceReportWithStartDateTimeWithEndDateTimeGetResponse
 */
export function createDeviceReportWithStartDateTimeWithEndDateTimeGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoDeviceReportWithStartDateTimeWithEndDateTimeGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoDeviceReportWithStartDateTimeWithEndDateTimeGetResponse(deviceReportWithStartDateTimeWithEndDateTimeGetResponse: Partial<DeviceReportWithStartDateTimeWithEndDateTimeGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(deviceReportWithStartDateTimeWithEndDateTimeGetResponse),
        "value": n => { deviceReportWithStartDateTimeWithEndDateTimeGetResponse.value = n.getCollectionOfObjectValues<Device>(createDeviceFromDiscriminatorValue); },
    }
}
export interface DeviceReportWithStartDateTimeWithEndDateTimeGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: Device[];
}
/**
 * Provides operations to call the deviceReport method.
 */
export interface MicrosoftGraphNetworkaccessDeviceReportWithStartDateTimeWithEndDateTimeRequestBuilder extends BaseRequestBuilder<MicrosoftGraphNetworkaccessDeviceReportWithStartDateTimeWithEndDateTimeRequestBuilder> {
    /**
     * Invoke function deviceReport
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceReportWithStartDateTimeWithEndDateTimeGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<MicrosoftGraphNetworkaccessDeviceReportWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceReportWithStartDateTimeWithEndDateTimeGetResponse | undefined>;
    /**
     * Invoke function deviceReport
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MicrosoftGraphNetworkaccessDeviceReportWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Invoke function deviceReport
 */
export interface MicrosoftGraphNetworkaccessDeviceReportWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParameters {
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
export function serializeDeviceReportWithStartDateTimeWithEndDateTimeGetResponse(writer: SerializationWriter, deviceReportWithStartDateTimeWithEndDateTimeGetResponse: Partial<DeviceReportWithStartDateTimeWithEndDateTimeGetResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, deviceReportWithStartDateTimeWithEndDateTimeGetResponse)
    writer.writeCollectionOfObjectValues<Device>("value", deviceReportWithStartDateTimeWithEndDateTimeGetResponse.value, serializeDevice);
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MicrosoftGraphNetworkaccessDeviceReportWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftGraphNetworkaccessDeviceReportWithStartDateTimeWithEndDateTimeRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceReportWithStartDateTimeWithEndDateTimeGetResponseFromDiscriminatorValue,
        queryParametersMapper: MicrosoftGraphNetworkaccessDeviceReportWithStartDateTimeWithEndDateTimeRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const MicrosoftGraphNetworkaccessDeviceReportWithStartDateTimeWithEndDateTimeRequestBuilderUriTemplate = "{+baseurl}/networkAccess/reports/microsoft.graph.networkaccess.deviceReport(startDateTime={startDateTime},endDateTime={endDateTime}){?%24top,%24skip,%24search,%24filter,%24count}";
/* tslint:enable */
/* eslint-enable */