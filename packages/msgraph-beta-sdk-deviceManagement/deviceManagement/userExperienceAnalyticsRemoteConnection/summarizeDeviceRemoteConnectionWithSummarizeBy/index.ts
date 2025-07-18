/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserExperienceAnalyticsRemoteConnectionFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeUserExperienceAnalyticsRemoteConnection, type BaseCollectionPaginationCountResponse, type UserExperienceAnalyticsRemoteConnection } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {SummarizeDeviceRemoteConnectionWithSummarizeByGetResponse}
 */
// @ts-ignore
export function createSummarizeDeviceRemoteConnectionWithSummarizeByGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoSummarizeDeviceRemoteConnectionWithSummarizeByGetResponse;
}
/**
 * The deserialization information for the current model
 * @param SummarizeDeviceRemoteConnectionWithSummarizeByGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoSummarizeDeviceRemoteConnectionWithSummarizeByGetResponse(summarizeDeviceRemoteConnectionWithSummarizeByGetResponse: Partial<SummarizeDeviceRemoteConnectionWithSummarizeByGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(summarizeDeviceRemoteConnectionWithSummarizeByGetResponse),
        "value": n => { summarizeDeviceRemoteConnectionWithSummarizeByGetResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsRemoteConnection>(createUserExperienceAnalyticsRemoteConnectionFromDiscriminatorValue); },
    }
}
/**
 * Serializes information the current object
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param SummarizeDeviceRemoteConnectionWithSummarizeByGetResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeSummarizeDeviceRemoteConnectionWithSummarizeByGetResponse(writer: SerializationWriter, summarizeDeviceRemoteConnectionWithSummarizeByGetResponse: Partial<SummarizeDeviceRemoteConnectionWithSummarizeByGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!summarizeDeviceRemoteConnectionWithSummarizeByGetResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, summarizeDeviceRemoteConnectionWithSummarizeByGetResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<UserExperienceAnalyticsRemoteConnection>("value", summarizeDeviceRemoteConnectionWithSummarizeByGetResponse.value, serializeUserExperienceAnalyticsRemoteConnection);
}
export interface SummarizeDeviceRemoteConnectionWithSummarizeByGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: UserExperienceAnalyticsRemoteConnection[] | null;
}
/**
 * Provides operations to call the summarizeDeviceRemoteConnection method.
 */
export interface SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilder extends BaseRequestBuilder<SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilder> {
    /**
     * Invoke function summarizeDeviceRemoteConnection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SummarizeDeviceRemoteConnectionWithSummarizeByGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilderGetQueryParameters> | undefined) : Promise<SummarizeDeviceRemoteConnectionWithSummarizeByGetResponse | undefined>;
    /**
     * Invoke function summarizeDeviceRemoteConnection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
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
     * Expand related entities
     */
    expand?: string[];
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
 * Uri template for the request builder.
 */
export const SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/userExperienceAnalyticsRemoteConnection/summarizeDeviceRemoteConnection(summarizeBy='{summarizeBy}'){?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
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
        uriTemplate: SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSummarizeDeviceRemoteConnectionWithSummarizeByGetResponseFromDiscriminatorValue,
        queryParametersMapper: SummarizeDeviceRemoteConnectionWithSummarizeByRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
