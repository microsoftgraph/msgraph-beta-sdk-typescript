/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTenantFromDiscriminatorValue, serializeTenant, type Tenant } from '@microsoft/msgraph-beta-sdk/models/managedTenants/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { MicrosoftGraphManagedTenantsOffboardTenantRequestBuilderRequestsMetadata, type MicrosoftGraphManagedTenantsOffboardTenantRequestBuilder } from './microsoftGraphManagedTenantsOffboardTenant/index.js';
// @ts-ignore
import { MicrosoftGraphManagedTenantsResetTenantOnboardingStatusRequestBuilderRequestsMetadata, type MicrosoftGraphManagedTenantsResetTenantOnboardingStatusRequestBuilder } from './microsoftGraphManagedTenantsResetTenantOnboardingStatus/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tenants property of the microsoft.graph.managedTenants.managedTenant entity.
 */
export interface TenantItemRequestBuilder extends BaseRequestBuilder<TenantItemRequestBuilder> {
    /**
     * Provides operations to call the offboardTenant method.
     */
    get microsoftGraphManagedTenantsOffboardTenant(): MicrosoftGraphManagedTenantsOffboardTenantRequestBuilder;
    /**
     * Provides operations to call the resetTenantOnboardingStatus method.
     */
    get microsoftGraphManagedTenantsResetTenantOnboardingStatus(): MicrosoftGraphManagedTenantsResetTenantOnboardingStatusRequestBuilder;
    /**
     * Delete navigation property tenants for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a tenant object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Tenant>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/managedtenants-tenant-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TenantItemRequestBuilderGetQueryParameters> | undefined) : Promise<Tenant | undefined>;
    /**
     * Update the navigation property tenants in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Tenant>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: Tenant, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Tenant | undefined>;
    /**
     * Delete navigation property tenants for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a tenant object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TenantItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property tenants in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Tenant, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a tenant object.
 */
export interface TenantItemRequestBuilderGetQueryParameters {
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
export const TenantItemRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants/tenants/{tenant%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TenantItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TenantItemRequestBuilderNavigationMetadata: Record<Exclude<keyof TenantItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    microsoftGraphManagedTenantsOffboardTenant: {
        requestsMetadata: MicrosoftGraphManagedTenantsOffboardTenantRequestBuilderRequestsMetadata,
    },
    microsoftGraphManagedTenantsResetTenantOnboardingStatus: {
        requestsMetadata: MicrosoftGraphManagedTenantsResetTenantOnboardingStatusRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TenantItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: TenantItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: TenantItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTenantFromDiscriminatorValue,
        queryParametersMapper: TenantItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: TenantItemRequestBuilderUriTemplate,
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
