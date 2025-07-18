/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, type BaseCollectionPaginationCountResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RetrieveZebraFotaDeviceModelsGetResponse}
 */
// @ts-ignore
export function createRetrieveZebraFotaDeviceModelsGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRetrieveZebraFotaDeviceModelsGetResponse;
}
/**
 * The deserialization information for the current model
 * @param RetrieveZebraFotaDeviceModelsGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRetrieveZebraFotaDeviceModelsGetResponse(retrieveZebraFotaDeviceModelsGetResponse: Partial<RetrieveZebraFotaDeviceModelsGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(retrieveZebraFotaDeviceModelsGetResponse),
        "value": n => { retrieveZebraFotaDeviceModelsGetResponse.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
export interface RetrieveZebraFotaDeviceModelsGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: string[] | null;
}
/**
 * Provides operations to call the retrieveZebraFotaDeviceModels method.
 */
export interface RetrieveZebraFotaDeviceModelsRequestBuilder extends BaseRequestBuilder<RetrieveZebraFotaDeviceModelsRequestBuilder> {
    /**
     * Invoke function retrieveZebraFotaDeviceModels
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RetrieveZebraFotaDeviceModelsGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<RetrieveZebraFotaDeviceModelsRequestBuilderGetQueryParameters> | undefined) : Promise<RetrieveZebraFotaDeviceModelsGetResponse | undefined>;
    /**
     * Invoke function retrieveZebraFotaDeviceModels
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RetrieveZebraFotaDeviceModelsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Invoke function retrieveZebraFotaDeviceModels
 */
export interface RetrieveZebraFotaDeviceModelsRequestBuilderGetQueryParameters {
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
 * @param RetrieveZebraFotaDeviceModelsGetResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRetrieveZebraFotaDeviceModelsGetResponse(writer: SerializationWriter, retrieveZebraFotaDeviceModelsGetResponse: Partial<RetrieveZebraFotaDeviceModelsGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!retrieveZebraFotaDeviceModelsGetResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, retrieveZebraFotaDeviceModelsGetResponse, isSerializingDerivedType)
    writer.writeCollectionOfPrimitiveValues<string>("value", retrieveZebraFotaDeviceModelsGetResponse.value);
}
/**
 * Uri template for the request builder.
 */
export const RetrieveZebraFotaDeviceModelsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/zebraFotaConnector/retrieveZebraFotaDeviceModels(){?%24count,%24filter,%24search,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RetrieveZebraFotaDeviceModelsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RetrieveZebraFotaDeviceModelsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: RetrieveZebraFotaDeviceModelsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createRetrieveZebraFotaDeviceModelsGetResponseFromDiscriminatorValue,
        queryParametersMapper: RetrieveZebraFotaDeviceModelsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
