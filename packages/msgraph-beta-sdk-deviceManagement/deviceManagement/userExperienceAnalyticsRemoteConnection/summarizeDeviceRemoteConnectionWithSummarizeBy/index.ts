/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUserExperienceAnalyticsRemoteConnectionFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeUserExperienceAnalyticsRemoteConnection, type BaseCollectionPaginationCountResponse, type UserExperienceAnalyticsRemoteConnection } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a summarizeDeviceRemoteConnectionWithSummarizeByGetResponse
 */
export function createSummarizeDeviceRemoteConnectionWithSummarizeByGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSummarizeDeviceRemoteConnectionWithSummarizeByGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoSummarizeDeviceRemoteConnectionWithSummarizeByGetResponse(summarizeDeviceRemoteConnectionWithSummarizeByGetResponse: Partial<SummarizeDeviceRemoteConnectionWithSummarizeByGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(summarizeDeviceRemoteConnectionWithSummarizeByGetResponse),
        "value": n => { summarizeDeviceRemoteConnectionWithSummarizeByGetResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsRemoteConnection>(createUserExperienceAnalyticsRemoteConnectionFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeSummarizeDeviceRemoteConnectionWithSummarizeByGetResponse(writer: SerializationWriter, summarizeDeviceRemoteConnectionWithSummarizeByGetResponse: Partial<SummarizeDeviceRemoteConnectionWithSummarizeByGetResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, summarizeDeviceRemoteConnectionWithSummarizeByGetResponse)
    writer.writeCollectionOfObjectValues<UserExperienceAnalyticsRemoteConnection>("value", summarizeDeviceRemoteConnectionWithSummarizeByGetResponse.value, serializeUserExperienceAnalyticsRemoteConnection);
}
export interface SummarizeDeviceRemoteConnectionWithSummarizeByGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsRemoteConnection[];
}
/**
 * Provides operations to call the summarizeDeviceRemoteConnection method.
 */
export interface SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilder extends BaseRequestBuilder<SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilder> {
    /**
     * Invoke function summarizeDeviceRemoteConnection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of SummarizeDeviceRemoteConnectionWithSummarizeByGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilderGetQueryParameters> | undefined) : Promise<SummarizeDeviceRemoteConnectionWithSummarizeByGetResponse | undefined>;
    /**
     * Invoke function summarizeDeviceRemoteConnection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Invoke function summarizeDeviceRemoteConnection
 */
export interface SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createSummarizeDeviceRemoteConnectionWithSummarizeByGetResponseFromDiscriminatorValue,
        queryParametersMapper: SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/userExperienceAnalyticsRemoteConnection/summarizeDeviceRemoteConnection(summarizeBy='{summarizeBy}'){?%24top,%24skip,%24search,%24filter,%24count,%24select,%24orderby}";
/* tslint:enable */
/* eslint-enable */