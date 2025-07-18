/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createManagedDeviceSummarizedAppStateFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, serializeManagedDeviceSummarizedAppState, type BaseCollectionPaginationCountResponse, type ManagedDeviceSummarizedAppState } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {RetrieveManagedDevicesWithAppInstallationIssuesGetResponse}
 */
// @ts-ignore
export function createRetrieveManagedDevicesWithAppInstallationIssuesGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoRetrieveManagedDevicesWithAppInstallationIssuesGetResponse;
}
/**
 * The deserialization information for the current model
 * @param RetrieveManagedDevicesWithAppInstallationIssuesGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoRetrieveManagedDevicesWithAppInstallationIssuesGetResponse(retrieveManagedDevicesWithAppInstallationIssuesGetResponse: Partial<RetrieveManagedDevicesWithAppInstallationIssuesGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(retrieveManagedDevicesWithAppInstallationIssuesGetResponse),
        "value": n => { retrieveManagedDevicesWithAppInstallationIssuesGetResponse.value = n.getCollectionOfObjectValues<ManagedDeviceSummarizedAppState>(createManagedDeviceSummarizedAppStateFromDiscriminatorValue); },
    }
}
export interface RetrieveManagedDevicesWithAppInstallationIssuesGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: ManagedDeviceSummarizedAppState[] | null;
}
/**
 * Provides operations to call the retrieveManagedDevicesWithAppInstallationIssues method.
 */
export interface RetrieveManagedDevicesWithAppInstallationIssuesRequestBuilder extends BaseRequestBuilder<RetrieveManagedDevicesWithAppInstallationIssuesRequestBuilder> {
    /**
     * Retrieves the list of devices with failed or pending apps
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<RetrieveManagedDevicesWithAppInstallationIssuesGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<RetrieveManagedDevicesWithAppInstallationIssuesRequestBuilderGetQueryParameters> | undefined) : Promise<RetrieveManagedDevicesWithAppInstallationIssuesGetResponse | undefined>;
    /**
     * Retrieves the list of devices with failed or pending apps
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RetrieveManagedDevicesWithAppInstallationIssuesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Retrieves the list of devices with failed or pending apps
 */
export interface RetrieveManagedDevicesWithAppInstallationIssuesRequestBuilderGetQueryParameters {
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
 * @param RetrieveManagedDevicesWithAppInstallationIssuesGetResponse The instance to serialize from.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeRetrieveManagedDevicesWithAppInstallationIssuesGetResponse(writer: SerializationWriter, retrieveManagedDevicesWithAppInstallationIssuesGetResponse: Partial<RetrieveManagedDevicesWithAppInstallationIssuesGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!retrieveManagedDevicesWithAppInstallationIssuesGetResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, retrieveManagedDevicesWithAppInstallationIssuesGetResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<ManagedDeviceSummarizedAppState>("value", retrieveManagedDevicesWithAppInstallationIssuesGetResponse.value, serializeManagedDeviceSummarizedAppState);
}
/**
 * Uri template for the request builder.
 */
export const RetrieveManagedDevicesWithAppInstallationIssuesRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/retrieveManagedDevicesWithAppInstallationIssues(){?%24count,%24filter,%24search,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RetrieveManagedDevicesWithAppInstallationIssuesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "search": "%24search",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RetrieveManagedDevicesWithAppInstallationIssuesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: RetrieveManagedDevicesWithAppInstallationIssuesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createRetrieveManagedDevicesWithAppInstallationIssuesGetResponseFromDiscriminatorValue,
        queryParametersMapper: RetrieveManagedDevicesWithAppInstallationIssuesRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
