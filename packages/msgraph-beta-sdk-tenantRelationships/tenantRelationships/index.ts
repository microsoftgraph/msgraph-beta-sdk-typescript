/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTenantRelationshipFromDiscriminatorValue, serializeTenantRelationship, type TenantRelationship } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { DelegatedAdminCustomersRequestBuilderNavigationMetadata, DelegatedAdminCustomersRequestBuilderRequestsMetadata, type DelegatedAdminCustomersRequestBuilder } from './delegatedAdminCustomers/index.js';
// @ts-ignore
import { DelegatedAdminRelationshipsRequestBuilderNavigationMetadata, DelegatedAdminRelationshipsRequestBuilderRequestsMetadata, type DelegatedAdminRelationshipsRequestBuilder } from './delegatedAdminRelationships/index.js';
// @ts-ignore
import { FindTenantInformationByDomainNameWithDomainNameRequestBuilderRequestsMetadata, type FindTenantInformationByDomainNameWithDomainNameRequestBuilder } from './findTenantInformationByDomainNameWithDomainName/index.js';
// @ts-ignore
import { FindTenantInformationByTenantIdWithTenantIdRequestBuilderRequestsMetadata, type FindTenantInformationByTenantIdWithTenantIdRequestBuilder } from './findTenantInformationByTenantIdWithTenantId/index.js';
// @ts-ignore
import { ManagedTenantsRequestBuilderNavigationMetadata, ManagedTenantsRequestBuilderRequestsMetadata, type ManagedTenantsRequestBuilder } from './managedTenants/index.js';
// @ts-ignore
import { MultiTenantOrganizationRequestBuilderNavigationMetadata, MultiTenantOrganizationRequestBuilderRequestsMetadata, type MultiTenantOrganizationRequestBuilder } from './multiTenantOrganization/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tenantRelationship singleton.
 */
export interface TenantRelationshipsRequestBuilder extends BaseRequestBuilder<TenantRelationshipsRequestBuilder> {
    /**
     * Provides operations to manage the delegatedAdminCustomers property of the microsoft.graph.tenantRelationship entity.
     */
    get delegatedAdminCustomers(): DelegatedAdminCustomersRequestBuilder;
    /**
     * Provides operations to manage the delegatedAdminRelationships property of the microsoft.graph.tenantRelationship entity.
     */
    get delegatedAdminRelationships(): DelegatedAdminRelationshipsRequestBuilder;
    /**
     * Provides operations to manage the managedTenants property of the microsoft.graph.tenantRelationship entity.
     */
    get managedTenants(): ManagedTenantsRequestBuilder;
    /**
     * Provides operations to manage the multiTenantOrganization property of the microsoft.graph.tenantRelationship entity.
     */
    get multiTenantOrganization(): MultiTenantOrganizationRequestBuilder;
    /**
     * Provides operations to call the findTenantInformationByDomainName method.
     * @param domainName Usage: domainName='{domainName}'
     * @returns {FindTenantInformationByDomainNameWithDomainNameRequestBuilder}
     */
     findTenantInformationByDomainNameWithDomainName(domainName: string | undefined) : FindTenantInformationByDomainNameWithDomainNameRequestBuilder;
    /**
     * Provides operations to call the findTenantInformationByTenantId method.
     * @param tenantId Usage: tenantId='{tenantId}'
     * @returns {FindTenantInformationByTenantIdWithTenantIdRequestBuilder}
     */
     findTenantInformationByTenantIdWithTenantId(tenantId: string | undefined) : FindTenantInformationByTenantIdWithTenantIdRequestBuilder;
    /**
     * Get tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TenantRelationship>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<TenantRelationshipsRequestBuilderGetQueryParameters> | undefined) : Promise<TenantRelationship | undefined>;
    /**
     * Update tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TenantRelationship>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: TenantRelationship, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TenantRelationship | undefined>;
    /**
     * Get tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TenantRelationshipsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: TenantRelationship, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get tenantRelationships
 */
export interface TenantRelationshipsRequestBuilderGetQueryParameters {
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
export const TenantRelationshipsRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TenantRelationshipsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TenantRelationshipsRequestBuilderNavigationMetadata: Record<Exclude<keyof TenantRelationshipsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    findTenantInformationByDomainNameWithDomainName: {
        requestsMetadata: FindTenantInformationByDomainNameWithDomainNameRequestBuilderRequestsMetadata,
        pathParametersMappings: ["domainName"],
    },
    findTenantInformationByTenantIdWithTenantId: {
        requestsMetadata: FindTenantInformationByTenantIdWithTenantIdRequestBuilderRequestsMetadata,
        pathParametersMappings: ["tenantId"],
    },
    delegatedAdminCustomers: {
        requestsMetadata: DelegatedAdminCustomersRequestBuilderRequestsMetadata,
        navigationMetadata: DelegatedAdminCustomersRequestBuilderNavigationMetadata,
    },
    delegatedAdminRelationships: {
        requestsMetadata: DelegatedAdminRelationshipsRequestBuilderRequestsMetadata,
        navigationMetadata: DelegatedAdminRelationshipsRequestBuilderNavigationMetadata,
    },
    managedTenants: {
        requestsMetadata: ManagedTenantsRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedTenantsRequestBuilderNavigationMetadata,
    },
    multiTenantOrganization: {
        requestsMetadata: MultiTenantOrganizationRequestBuilderRequestsMetadata,
        navigationMetadata: MultiTenantOrganizationRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TenantRelationshipsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: TenantRelationshipsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTenantRelationshipFromDiscriminatorValue,
        queryParametersMapper: TenantRelationshipsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: TenantRelationshipsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTenantRelationshipFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTenantRelationship,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
