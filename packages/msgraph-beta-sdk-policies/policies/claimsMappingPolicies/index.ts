/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createClaimsMappingPolicyCollectionResponseFromDiscriminatorValue, createClaimsMappingPolicyFromDiscriminatorValue, serializeClaimsMappingPolicy, type ClaimsMappingPolicy, type ClaimsMappingPolicyCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { ClaimsMappingPolicyItemRequestBuilderNavigationMetadata, ClaimsMappingPolicyItemRequestBuilderRequestsMetadata, ClaimsMappingPolicyItemRequestBuilderUriTemplate, type ClaimsMappingPolicyItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the claimsMappingPolicies property of the microsoft.graph.policyRoot entity.
 */
export interface ClaimsMappingPoliciesRequestBuilder extends BaseRequestBuilder<ClaimsMappingPoliciesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the claimsMappingPolicies property of the microsoft.graph.policyRoot entity.
     * @param claimsMappingPolicyId The unique identifier of claimsMappingPolicy
     * @returns a ClaimsMappingPolicyItemRequestBuilder
     */
     byClaimsMappingPolicyId(claimsMappingPolicyId: string) : ClaimsMappingPolicyItemRequestBuilder;
    /**
     * Get a list of claimsMappingPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ClaimsMappingPolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/claimsmappingpolicy-list?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ClaimsMappingPoliciesRequestBuilderGetQueryParameters> | undefined) : Promise<ClaimsMappingPolicyCollectionResponse | undefined>;
    /**
     * Create a new claimsMappingPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ClaimsMappingPolicy
     * @see {@link https://learn.microsoft.com/graph/api/claimsmappingpolicy-post-claimsmappingpolicies?view=graph-rest-1.0|Find more info here}
     */
     post(body: ClaimsMappingPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ClaimsMappingPolicy | undefined>;
    /**
     * Get a list of claimsMappingPolicy objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ClaimsMappingPoliciesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new claimsMappingPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: ClaimsMappingPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of claimsMappingPolicy objects.
 */
export interface ClaimsMappingPoliciesRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ClaimsMappingPoliciesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ClaimsMappingPoliciesRequestBuilderNavigationMetadata: Record<Exclude<keyof ClaimsMappingPoliciesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byClaimsMappingPolicyId: {
        uriTemplate: ClaimsMappingPolicyItemRequestBuilderUriTemplate,
        requestsMetadata: ClaimsMappingPolicyItemRequestBuilderRequestsMetadata,
        navigationMetadata: ClaimsMappingPolicyItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["claimsMappingPolicy%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ClaimsMappingPoliciesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createClaimsMappingPolicyCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ClaimsMappingPoliciesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createClaimsMappingPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeClaimsMappingPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ClaimsMappingPoliciesRequestBuilderUriTemplate = "{+baseurl}/policies/claimsMappingPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */