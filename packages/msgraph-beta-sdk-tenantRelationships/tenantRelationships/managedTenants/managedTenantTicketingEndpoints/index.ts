/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createManagedTenantTicketingEndpointCollectionResponseFromDiscriminatorValue, createManagedTenantTicketingEndpointFromDiscriminatorValue, serializeManagedTenantTicketingEndpoint, type ManagedTenantTicketingEndpoint, type ManagedTenantTicketingEndpointCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/managedTenants/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { ManagedTenantTicketingEndpointItemRequestBuilderRequestsMetadata, ManagedTenantTicketingEndpointItemRequestBuilderUriTemplate, type ManagedTenantTicketingEndpointItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedTenantTicketingEndpoints property of the microsoft.graph.managedTenants.managedTenant entity.
 */
export interface ManagedTenantTicketingEndpointsRequestBuilder extends BaseRequestBuilder<ManagedTenantTicketingEndpointsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the managedTenantTicketingEndpoints property of the microsoft.graph.managedTenants.managedTenant entity.
     * @param managedTenantTicketingEndpointId The unique identifier of managedTenantTicketingEndpoint
     * @returns a ManagedTenantTicketingEndpointItemRequestBuilder
     */
     byManagedTenantTicketingEndpointId(managedTenantTicketingEndpointId: string) : ManagedTenantTicketingEndpointItemRequestBuilder;
    /**
     * Get managedTenantTicketingEndpoints from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedTenantTicketingEndpointCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<ManagedTenantTicketingEndpointsRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedTenantTicketingEndpointCollectionResponse | undefined>;
    /**
     * Create new navigation property to managedTenantTicketingEndpoints for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedTenantTicketingEndpoint
     */
     post(body: ManagedTenantTicketingEndpoint, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagedTenantTicketingEndpoint | undefined>;
    /**
     * Get managedTenantTicketingEndpoints from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagedTenantTicketingEndpointsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to managedTenantTicketingEndpoints for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: ManagedTenantTicketingEndpoint, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get managedTenantTicketingEndpoints from tenantRelationships
 */
export interface ManagedTenantTicketingEndpointsRequestBuilderGetQueryParameters {
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
const ManagedTenantTicketingEndpointsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ManagedTenantTicketingEndpointsRequestBuilderNavigationMetadata: Record<Exclude<keyof ManagedTenantTicketingEndpointsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byManagedTenantTicketingEndpointId: {
        uriTemplate: ManagedTenantTicketingEndpointItemRequestBuilderUriTemplate,
        requestsMetadata: ManagedTenantTicketingEndpointItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["managedTenantTicketingEndpoint%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagedTenantTicketingEndpointsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createManagedTenantTicketingEndpointCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ManagedTenantTicketingEndpointsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createManagedTenantTicketingEndpointFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagedTenantTicketingEndpoint,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ManagedTenantTicketingEndpointsRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants/managedTenantTicketingEndpoints{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */