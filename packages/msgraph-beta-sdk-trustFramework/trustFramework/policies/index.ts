/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createTrustFrameworkPolicyCollectionResponseFromDiscriminatorValue, createTrustFrameworkPolicyFromDiscriminatorValue, serializeTrustFrameworkPolicy, type TrustFrameworkPolicy, type TrustFrameworkPolicyCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { TrustFrameworkPolicyItemRequestBuilderNavigationMetadata, TrustFrameworkPolicyItemRequestBuilderRequestsMetadata, TrustFrameworkPolicyItemRequestBuilderUriTemplate, type TrustFrameworkPolicyItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the policies property of the microsoft.graph.trustFramework entity.
 */
export interface PoliciesRequestBuilder extends BaseRequestBuilder<PoliciesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the policies property of the microsoft.graph.trustFramework entity.
     * @param trustFrameworkPolicyId The unique identifier of trustFrameworkPolicy
     * @returns a TrustFrameworkPolicyItemRequestBuilder
     */
     byTrustFrameworkPolicyId(trustFrameworkPolicyId: string) : TrustFrameworkPolicyItemRequestBuilder;
    /**
     * Retrieve a list of trustFrameworkPolicies in the tenant/directory.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TrustFrameworkPolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/trustframework-list-trustframeworkpolicies?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<PoliciesRequestBuilderGetQueryParameters> | undefined) : Promise<TrustFrameworkPolicyCollectionResponse | undefined>;
    /**
     * Create new navigation property to policies for trustFramework
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TrustFrameworkPolicy
     */
     post(body: TrustFrameworkPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TrustFrameworkPolicy | undefined>;
    /**
     * Retrieve a list of trustFrameworkPolicies in the tenant/directory.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PoliciesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to policies for trustFramework
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: TrustFrameworkPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of trustFrameworkPolicies in the tenant/directory.
 */
export interface PoliciesRequestBuilderGetQueryParameters {
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
const PoliciesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const PoliciesRequestBuilderNavigationMetadata: Record<Exclude<keyof PoliciesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byTrustFrameworkPolicyId: {
        uriTemplate: TrustFrameworkPolicyItemRequestBuilderUriTemplate,
        requestsMetadata: TrustFrameworkPolicyItemRequestBuilderRequestsMetadata,
        navigationMetadata: TrustFrameworkPolicyItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["trustFrameworkPolicy%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PoliciesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTrustFrameworkPolicyCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: PoliciesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTrustFrameworkPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTrustFrameworkPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const PoliciesRequestBuilderUriTemplate = "{+baseurl}/trustFramework/policies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */