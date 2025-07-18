/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWindowsQualityUpdateCatalogItemPolicyDetailFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeWindowsQualityUpdateCatalogItemPolicyDetail, type BaseCollectionPaginationCountResponse, type WindowsQualityUpdateCatalogItemPolicyDetail } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse}
 */
// @ts-ignore
export function createRetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse;
}
/**
 * The deserialization information for the current model
 * @param RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse(retrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse: Partial<RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(retrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse),
        "value": n => { retrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse.value = n.getCollectionOfObjectValues<WindowsQualityUpdateCatalogItemPolicyDetail>(createWindowsQualityUpdateCatalogItemPolicyDetailFromDiscriminatorValue); },
    }
}
export interface RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: WindowsQualityUpdateCatalogItemPolicyDetail[] | null;
}
/**
 * Provides operations to call the retrieveWindowsQualityUpdateCatalogItemDetails method.
 */
export interface RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsRequestBuilder extends BaseRequestBuilder<RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsRequestBuilder> {
    /**
     * Invoke function retrieveWindowsQualityUpdateCatalogItemDetails
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsRequestBuilderGetQueryParameters> | undefined) : Promise<RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse | undefined>;
    /**
     * Invoke function retrieveWindowsQualityUpdateCatalogItemDetails
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Invoke function retrieveWindowsQualityUpdateCatalogItemDetails
 */
export interface RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsRequestBuilderGetQueryParameters {
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
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse(writer: SerializationWriter, retrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse: Partial<RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!retrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, retrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<WindowsQualityUpdateCatalogItemPolicyDetail>("value", retrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponse.value, serializeWindowsQualityUpdateCatalogItemPolicyDetail);
}
/**
 * Uri template for the request builder.
 */
export const RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy%2Did}/retrieveWindowsQualityUpdateCatalogItemDetails(ids={ids}){?%24count,%24filter,%24search,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createRetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsGetResponseFromDiscriminatorValue,
        queryParametersMapper: RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
