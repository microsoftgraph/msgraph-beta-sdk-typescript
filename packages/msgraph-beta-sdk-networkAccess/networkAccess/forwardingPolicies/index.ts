/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createForwardingPolicyCollectionResponseFromDiscriminatorValue, createForwardingPolicyFromDiscriminatorValue, serializeForwardingPolicy, type ForwardingPolicy, type ForwardingPolicyCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/networkaccess/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ForwardingPolicyItemRequestBuilderNavigationMetadata, ForwardingPolicyItemRequestBuilderRequestsMetadata, type ForwardingPolicyItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the forwardingPolicies property of the microsoft.graph.networkaccess.networkAccessRoot entity.
 */
export interface ForwardingPoliciesRequestBuilder extends BaseRequestBuilder<ForwardingPoliciesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the forwardingPolicies property of the microsoft.graph.networkaccess.networkAccessRoot entity.
     * @param forwardingPolicyId The unique identifier of forwardingPolicy
     * @returns {ForwardingPolicyItemRequestBuilder}
     */
     byForwardingPolicyId(forwardingPolicyId: string) : ForwardingPolicyItemRequestBuilder;
    /**
     * Retrieve a list of forwarding policies associated with a specific traffic forwarding profile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ForwardingPolicyCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/networkaccess-networkaccessroot-list-forwardingpolicies?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ForwardingPoliciesRequestBuilderGetQueryParameters> | undefined) : Promise<ForwardingPolicyCollectionResponse | undefined>;
    /**
     * Create new navigation property to forwardingPolicies for networkAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ForwardingPolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ForwardingPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ForwardingPolicy | undefined>;
    /**
     * Retrieve a list of forwarding policies associated with a specific traffic forwarding profile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ForwardingPoliciesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to forwardingPolicies for networkAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ForwardingPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of forwarding policies associated with a specific traffic forwarding profile.
 */
export interface ForwardingPoliciesRequestBuilderGetQueryParameters {
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
export const ForwardingPoliciesRequestBuilderUriTemplate = "{+baseurl}/networkAccess/forwardingPolicies{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ForwardingPoliciesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ForwardingPoliciesRequestBuilderNavigationMetadata: Record<Exclude<keyof ForwardingPoliciesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byForwardingPolicyId: {
        requestsMetadata: ForwardingPolicyItemRequestBuilderRequestsMetadata,
        navigationMetadata: ForwardingPolicyItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["forwardingPolicy%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ForwardingPoliciesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ForwardingPoliciesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createForwardingPolicyCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ForwardingPoliciesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ForwardingPoliciesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createForwardingPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeForwardingPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
