/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createManagedTenantTicketingEndpointFromDiscriminatorValue, serializeManagedTenantTicketingEndpoint, type ManagedTenantTicketingEndpoint } from '@microsoft/msgraph-beta-sdk/models/managedTenants/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedTenantTicketingEndpoints property of the microsoft.graph.managedTenants.managedTenant entity.
 */
export interface ManagedTenantTicketingEndpointItemRequestBuilder extends BaseRequestBuilder<ManagedTenantTicketingEndpointItemRequestBuilder> {
    /**
     * Delete navigation property managedTenantTicketingEndpoints for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get managedTenantTicketingEndpoints from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedTenantTicketingEndpoint
     */
     get(requestConfiguration?: RequestConfiguration<ManagedTenantTicketingEndpointItemRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedTenantTicketingEndpoint | undefined>;
    /**
     * Update the navigation property managedTenantTicketingEndpoints in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedTenantTicketingEndpoint
     */
     patch(body: ManagedTenantTicketingEndpoint, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagedTenantTicketingEndpoint | undefined>;
    /**
     * Delete navigation property managedTenantTicketingEndpoints for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get managedTenantTicketingEndpoints from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagedTenantTicketingEndpointItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property managedTenantTicketingEndpoints in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ManagedTenantTicketingEndpoint, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get managedTenantTicketingEndpoints from tenantRelationships
 */
export interface ManagedTenantTicketingEndpointItemRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ManagedTenantTicketingEndpointItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagedTenantTicketingEndpointItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createManagedTenantTicketingEndpointFromDiscriminatorValue,
        queryParametersMapper: ManagedTenantTicketingEndpointItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
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
export const ManagedTenantTicketingEndpointItemRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants/managedTenantTicketingEndpoints/{managedTenantTicketingEndpoint%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */