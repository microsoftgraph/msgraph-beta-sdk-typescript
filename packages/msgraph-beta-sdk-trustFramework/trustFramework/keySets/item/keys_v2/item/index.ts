/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTrustFrameworkKey_v2FromDiscriminatorValue, type TrustFrameworkKey_v2 } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the keys_v2 property of the microsoft.graph.trustFrameworkKeySet entity.
 */
export interface TrustFrameworkKey_v2KItemRequestBuilder extends BaseRequestBuilder<TrustFrameworkKey_v2KItemRequestBuilder> {
    /**
     * Read the properties and relationships of a trustFrameworkKeyv2 object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TrustFrameworkKey_v2>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/trustframeworkkey_v2-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TrustFrameworkKey_v2KItemRequestBuilderGetQueryParameters> | undefined) : Promise<TrustFrameworkKey_v2 | undefined>;
    /**
     * Read the properties and relationships of a trustFrameworkKeyv2 object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TrustFrameworkKey_v2KItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a trustFrameworkKeyv2 object.
 */
export interface TrustFrameworkKey_v2KItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const TrustFrameworkKey_v2KItemRequestBuilderUriTemplate = "{+baseurl}/trustFramework/keySets/{trustFrameworkKeySet%2Did}/keys_v2/{trustFrameworkKey_v2%2Dkid}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TrustFrameworkKey_v2KItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TrustFrameworkKey_v2KItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: TrustFrameworkKey_v2KItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTrustFrameworkKey_v2FromDiscriminatorValue,
        queryParametersMapper: TrustFrameworkKey_v2KItemRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
