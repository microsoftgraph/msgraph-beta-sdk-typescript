/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { deserializeIntoBaseCollectionPaginationCountResponse, serializeBaseCollectionPaginationCountResponse, type BaseCollectionPaginationCountResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createEdiscoveryReviewTagFromDiscriminatorValue, serializeEdiscoveryReviewTag, type EdiscoveryReviewTag } from '@microsoft/msgraph-beta-sdk/models/security/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AsHierarchyGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: EdiscoveryReviewTag[];
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a asHierarchyGetResponse
 */
export function createAsHierarchyGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAsHierarchyGetResponse;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoAsHierarchyGetResponse(asHierarchyGetResponse: Partial<AsHierarchyGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(asHierarchyGetResponse),
        "value": n => { asHierarchyGetResponse.value = n.getCollectionOfObjectValues<EdiscoveryReviewTag>(createEdiscoveryReviewTagFromDiscriminatorValue); },
    }
}
/**
 * Provides operations to call the asHierarchy method.
 */
export interface MicrosoftGraphSecurityAsHierarchyRequestBuilder extends BaseRequestBuilder<MicrosoftGraphSecurityAsHierarchyRequestBuilder> {
    /**
     * Invoke function asHierarchy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AsHierarchyGetResponse
     */
     get(requestConfiguration?: RequestConfiguration<MicrosoftGraphSecurityAsHierarchyRequestBuilderGetQueryParameters> | undefined) : Promise<AsHierarchyGetResponse | undefined>;
    /**
     * Invoke function asHierarchy
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MicrosoftGraphSecurityAsHierarchyRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Invoke function asHierarchy
 */
export interface MicrosoftGraphSecurityAsHierarchyRequestBuilderGetQueryParameters {
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
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAsHierarchyGetResponse(writer: SerializationWriter, asHierarchyGetResponse: Partial<AsHierarchyGetResponse> | undefined = {}) : void {
    serializeBaseCollectionPaginationCountResponse(writer, asHierarchyGetResponse)
    writer.writeCollectionOfObjectValues<EdiscoveryReviewTag>("value", asHierarchyGetResponse.value, serializeEdiscoveryReviewTag);
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MicrosoftGraphSecurityAsHierarchyRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const MicrosoftGraphSecurityAsHierarchyRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAsHierarchyGetResponseFromDiscriminatorValue,
        queryParametersMapper: MicrosoftGraphSecurityAsHierarchyRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const MicrosoftGraphSecurityAsHierarchyRequestBuilderUriTemplate = "{+baseurl}/security/cases/ediscoveryCases/{ediscoveryCase%2Did}/tags/microsoft.graph.security.asHierarchy(){?%24top,%24skip,%24search,%24filter,%24count,%24select,%24orderby}";
/* tslint:enable */
/* eslint-enable */