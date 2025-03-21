/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTenantCollectionResponseFromDiscriminatorValue, createTenantFromDiscriminatorValue, serializeTenant, type Tenant, type TenantCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/managedTenants/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { TenantItemRequestBuilderNavigationMetadata, TenantItemRequestBuilderRequestsMetadata, type TenantItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tenants property of the microsoft.graph.managedTenants.managedTenant entity.
 */
export interface TenantsRequestBuilder extends BaseRequestBuilder<TenantsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the tenants property of the microsoft.graph.managedTenants.managedTenant entity.
     * @param tenantId The unique identifier of tenant
     * @returns {TenantItemRequestBuilder}
     */
     byTenantId(tenantId: string) : TenantItemRequestBuilder;
    /**
     * Get a list of the tenant objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TenantCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/managedtenants-managedtenant-list-tenants?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TenantsRequestBuilderGetQueryParameters> | undefined) : Promise<TenantCollectionResponse | undefined>;
    /**
     * Create new navigation property to tenants for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Tenant>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Tenant, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Tenant | undefined>;
    /**
     * Get a list of the tenant objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TenantsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to tenants for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Tenant, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the tenant objects and their properties.
 */
export interface TenantsRequestBuilderGetQueryParameters {
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
export const TenantsRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants/tenants{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TenantsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const TenantsRequestBuilderNavigationMetadata: Record<Exclude<keyof TenantsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byTenantId: {
        requestsMetadata: TenantItemRequestBuilderRequestsMetadata,
        navigationMetadata: TenantItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["tenant%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TenantsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: TenantsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTenantCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: TenantsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: TenantsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTenantFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTenant,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
