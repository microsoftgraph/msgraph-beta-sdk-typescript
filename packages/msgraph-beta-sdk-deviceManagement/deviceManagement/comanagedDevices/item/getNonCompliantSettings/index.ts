/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceCompliancePolicySettingStateFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeDeviceCompliancePolicySettingState, type BaseCollectionPaginationCountResponse, type DeviceCompliancePolicySettingState } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a getNonCompliantSettingsGetResponse
 */
export function createGetNonCompliantSettingsGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoGetNonCompliantSettingsGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoGetNonCompliantSettingsGetResponse(getNonCompliantSettingsGetResponse: Partial<GetNonCompliantSettingsGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getNonCompliantSettingsGetResponse),
        "value": n => { getNonCompliantSettingsGetResponse.value = n.getCollectionOfObjectValues<DeviceCompliancePolicySettingState>(createDeviceCompliancePolicySettingStateFromDiscriminatorValue); },
    }
}
export interface GetNonCompliantSettingsGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DeviceCompliancePolicySettingState[];
}
/**
 * Provides operations to call the getNonCompliantSettings method.
 */
export interface GetNonCompliantSettingsRequestBuilder extends BaseRequestBuilder<GetNonCompliantSettingsRequestBuilder> {
    /**
     * Invoke function getNonCompliantSettings
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GetNonCompliantSettingsGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<GetNonCompliantSettingsRequestBuilderGetQueryParameters> | undefined) : Promise<GetNonCompliantSettingsGetResponse | undefined>;
    /**
     * Invoke function getNonCompliantSettings
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GetNonCompliantSettingsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Invoke function getNonCompliantSettings
 */
export interface GetNonCompliantSettingsRequestBuilderGetQueryParameters {
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
export function serializeGetNonCompliantSettingsGetResponse(writer: SerializationWriter, getNonCompliantSettingsGetResponse: Partial<GetNonCompliantSettingsGetResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, getNonCompliantSettingsGetResponse)
    writer.writeCollectionOfObjectValues<DeviceCompliancePolicySettingState>("value", getNonCompliantSettingsGetResponse.value, serializeDeviceCompliancePolicySettingState);
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GetNonCompliantSettingsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GetNonCompliantSettingsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createGetNonCompliantSettingsGetResponseFromDiscriminatorValue,
        queryParametersMapper: GetNonCompliantSettingsRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const GetNonCompliantSettingsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/comanagedDevices/{managedDevice%2Did}/getNonCompliantSettings(){?%24top,%24skip,%24search,%24filter,%24count}";
/* tslint:enable */
/* eslint-enable */