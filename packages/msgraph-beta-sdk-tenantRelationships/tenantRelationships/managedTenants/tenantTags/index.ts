/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createTenantTagCollectionResponseFromDiscriminatorValue, createTenantTagFromDiscriminatorValue, serializeTenantTag, type TenantTag, type TenantTagCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/managedTenants/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { TenantTagItemRequestBuilderNavigationMetadata, TenantTagItemRequestBuilderRequestsMetadata, TenantTagItemRequestBuilderUriTemplate, type TenantTagItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tenantTags property of the microsoft.graph.managedTenants.managedTenant entity.
 */
export interface TenantTagsRequestBuilder extends BaseRequestBuilder<TenantTagsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the tenantTags property of the microsoft.graph.managedTenants.managedTenant entity.
     * @param tenantTagId The unique identifier of tenantTag
     * @returns a TenantTagItemRequestBuilder
     */
     byTenantTagId(tenantTagId: string) : TenantTagItemRequestBuilder;
    /**
     * Get a list of the tenantTag objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TenantTagCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/managedtenants-managedtenant-list-tenanttags?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TenantTagsRequestBuilderGetQueryParameters> | undefined) : Promise<TenantTagCollectionResponse | undefined>;
    /**
     * Create a new tenantTag object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TenantTag
     * @see {@link https://learn.microsoft.com/graph/api/managedtenants-managedtenant-post-tenanttags?view=graph-rest-1.0|Find more info here}
     */
     post(body: TenantTag, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TenantTag | undefined>;
    /**
     * Get a list of the tenantTag objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TenantTagsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new tenantTag object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: TenantTag, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the tenantTag objects and their properties.
 */
export interface TenantTagsRequestBuilderGetQueryParameters {
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
const TenantTagsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const TenantTagsRequestBuilderNavigationMetadata: Record<Exclude<keyof TenantTagsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byTenantTagId: {
        uriTemplate: TenantTagItemRequestBuilderUriTemplate,
        requestsMetadata: TenantTagItemRequestBuilderRequestsMetadata,
        navigationMetadata: TenantTagItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["tenantTag%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TenantTagsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTenantTagCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: TenantTagsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTenantTagFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTenantTag,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const TenantTagsRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants/tenantTags{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */