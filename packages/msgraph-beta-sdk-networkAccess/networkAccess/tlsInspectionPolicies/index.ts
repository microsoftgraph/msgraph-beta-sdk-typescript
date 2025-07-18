/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTlsInspectionPolicyCollectionResponseFromDiscriminatorValue, createTlsInspectionPolicyFromDiscriminatorValue, serializeTlsInspectionPolicy, type TlsInspectionPolicy, type TlsInspectionPolicyCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/networkaccess/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { TlsInspectionPolicyItemRequestBuilderNavigationMetadata, TlsInspectionPolicyItemRequestBuilderRequestsMetadata, type TlsInspectionPolicyItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tlsInspectionPolicies property of the microsoft.graph.networkaccess.networkAccessRoot entity.
 */
export interface TlsInspectionPoliciesRequestBuilder extends BaseRequestBuilder<TlsInspectionPoliciesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the tlsInspectionPolicies property of the microsoft.graph.networkaccess.networkAccessRoot entity.
     * @param tlsInspectionPolicyId The unique identifier of tlsInspectionPolicy
     * @returns {TlsInspectionPolicyItemRequestBuilder}
     */
     byTlsInspectionPolicyId(tlsInspectionPolicyId: string) : TlsInspectionPolicyItemRequestBuilder;
    /**
     * Get a list of the tlsInspectionPolicy objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TlsInspectionPolicyCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/networkaccess-networkaccessroot-list-tlsinspectionpolicies?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TlsInspectionPoliciesRequestBuilderGetQueryParameters> | undefined) : Promise<TlsInspectionPolicyCollectionResponse | undefined>;
    /**
     * Create a new tlsInspectionPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TlsInspectionPolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/networkaccess-networkaccessroot-post-tlsinspectionpolicies?view=graph-rest-beta|Find more info here}
     */
     post(body: TlsInspectionPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TlsInspectionPolicy | undefined>;
    /**
     * Get a list of the tlsInspectionPolicy objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TlsInspectionPoliciesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new tlsInspectionPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: TlsInspectionPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the tlsInspectionPolicy objects and their properties.
 */
export interface TlsInspectionPoliciesRequestBuilderGetQueryParameters {
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
export const TlsInspectionPoliciesRequestBuilderUriTemplate = "{+baseurl}/networkAccess/tlsInspectionPolicies{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TlsInspectionPoliciesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
 * Metadata for all the navigation properties in the request builder.
 */
export const TlsInspectionPoliciesRequestBuilderNavigationMetadata: Record<Exclude<keyof TlsInspectionPoliciesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byTlsInspectionPolicyId: {
        requestsMetadata: TlsInspectionPolicyItemRequestBuilderRequestsMetadata,
        navigationMetadata: TlsInspectionPolicyItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["tlsInspectionPolicy%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TlsInspectionPoliciesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: TlsInspectionPoliciesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTlsInspectionPolicyCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: TlsInspectionPoliciesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: TlsInspectionPoliciesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTlsInspectionPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTlsInspectionPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
