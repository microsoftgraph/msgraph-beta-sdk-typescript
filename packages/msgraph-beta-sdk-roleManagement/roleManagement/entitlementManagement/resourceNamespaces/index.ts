/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedRbacResourceNamespaceCollectionResponseFromDiscriminatorValue, createUnifiedRbacResourceNamespaceFromDiscriminatorValue, serializeUnifiedRbacResourceNamespace, type UnifiedRbacResourceNamespace, type UnifiedRbacResourceNamespaceCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { type UnifiedRbacResourceNamespaceItemRequestBuilder, UnifiedRbacResourceNamespaceItemRequestBuilderNavigationMetadata, UnifiedRbacResourceNamespaceItemRequestBuilderRequestsMetadata, UnifiedRbacResourceNamespaceItemRequestBuilderUriTemplate } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resourceNamespaces property of the microsoft.graph.rbacApplication entity.
 */
export interface ResourceNamespacesRequestBuilder extends BaseRequestBuilder<ResourceNamespacesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the resourceNamespaces property of the microsoft.graph.rbacApplication entity.
     * @param unifiedRbacResourceNamespaceId The unique identifier of unifiedRbacResourceNamespace
     * @returns a UnifiedRbacResourceNamespaceItemRequestBuilder
     */
     byUnifiedRbacResourceNamespaceId(unifiedRbacResourceNamespaceId: string) : UnifiedRbacResourceNamespaceItemRequestBuilder;
    /**
     * Get a list of the unifiedRbacResourceNamespace objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRbacResourceNamespaceCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/rbacapplicationmultiple-list-resourcenamespaces?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ResourceNamespacesRequestBuilderGetQueryParameters> | undefined) : Promise<UnifiedRbacResourceNamespaceCollectionResponse | undefined>;
    /**
     * Create new navigation property to resourceNamespaces for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRbacResourceNamespace
     */
     post(body: UnifiedRbacResourceNamespace, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UnifiedRbacResourceNamespace | undefined>;
    /**
     * Get a list of the unifiedRbacResourceNamespace objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ResourceNamespacesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to resourceNamespaces for roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UnifiedRbacResourceNamespace, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the unifiedRbacResourceNamespace objects and their properties.
 */
export interface ResourceNamespacesRequestBuilderGetQueryParameters {
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
const ResourceNamespacesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ResourceNamespacesRequestBuilderNavigationMetadata: Record<Exclude<keyof ResourceNamespacesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUnifiedRbacResourceNamespaceId: {
        uriTemplate: UnifiedRbacResourceNamespaceItemRequestBuilderUriTemplate,
        requestsMetadata: UnifiedRbacResourceNamespaceItemRequestBuilderRequestsMetadata,
        navigationMetadata: UnifiedRbacResourceNamespaceItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["unifiedRbacResourceNamespace%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ResourceNamespacesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUnifiedRbacResourceNamespaceCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ResourceNamespacesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUnifiedRbacResourceNamespaceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedRbacResourceNamespace,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ResourceNamespacesRequestBuilderUriTemplate = "{+baseurl}/roleManagement/entitlementManagement/resourceNamespaces{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */