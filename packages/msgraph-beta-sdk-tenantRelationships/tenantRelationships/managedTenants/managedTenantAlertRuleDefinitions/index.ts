/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createManagedTenantAlertRuleDefinitionCollectionResponseFromDiscriminatorValue, createManagedTenantAlertRuleDefinitionFromDiscriminatorValue, serializeManagedTenantAlertRuleDefinition, type ManagedTenantAlertRuleDefinition, type ManagedTenantAlertRuleDefinitionCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/managedTenants/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ManagedTenantAlertRuleDefinitionItemRequestBuilderNavigationMetadata, ManagedTenantAlertRuleDefinitionItemRequestBuilderRequestsMetadata, type ManagedTenantAlertRuleDefinitionItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedTenantAlertRuleDefinitions property of the microsoft.graph.managedTenants.managedTenant entity.
 */
export interface ManagedTenantAlertRuleDefinitionsRequestBuilder extends BaseRequestBuilder<ManagedTenantAlertRuleDefinitionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the managedTenantAlertRuleDefinitions property of the microsoft.graph.managedTenants.managedTenant entity.
     * @param managedTenantAlertRuleDefinitionId The unique identifier of managedTenantAlertRuleDefinition
     * @returns {ManagedTenantAlertRuleDefinitionItemRequestBuilder}
     */
     byManagedTenantAlertRuleDefinitionId(managedTenantAlertRuleDefinitionId: string) : ManagedTenantAlertRuleDefinitionItemRequestBuilder;
    /**
     * Get managedTenantAlertRuleDefinitions from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedTenantAlertRuleDefinitionCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ManagedTenantAlertRuleDefinitionsRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedTenantAlertRuleDefinitionCollectionResponse | undefined>;
    /**
     * Create new navigation property to managedTenantAlertRuleDefinitions for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedTenantAlertRuleDefinition>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ManagedTenantAlertRuleDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagedTenantAlertRuleDefinition | undefined>;
    /**
     * Get managedTenantAlertRuleDefinitions from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagedTenantAlertRuleDefinitionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to managedTenantAlertRuleDefinitions for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ManagedTenantAlertRuleDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get managedTenantAlertRuleDefinitions from tenantRelationships
 */
export interface ManagedTenantAlertRuleDefinitionsRequestBuilderGetQueryParameters {
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
export const ManagedTenantAlertRuleDefinitionsRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ManagedTenantAlertRuleDefinitionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ManagedTenantAlertRuleDefinitionsRequestBuilderNavigationMetadata: Record<Exclude<keyof ManagedTenantAlertRuleDefinitionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byManagedTenantAlertRuleDefinitionId: {
        requestsMetadata: ManagedTenantAlertRuleDefinitionItemRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedTenantAlertRuleDefinitionItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["managedTenantAlertRuleDefinition%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagedTenantAlertRuleDefinitionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ManagedTenantAlertRuleDefinitionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedTenantAlertRuleDefinitionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ManagedTenantAlertRuleDefinitionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ManagedTenantAlertRuleDefinitionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedTenantAlertRuleDefinitionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagedTenantAlertRuleDefinition,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
