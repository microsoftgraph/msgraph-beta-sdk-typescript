/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createManagedTenantAlertRuleDefinitionFromDiscriminatorValue, serializeManagedTenantAlertRuleDefinition, type ManagedTenantAlertRuleDefinition } from '@microsoft/msgraph-beta-sdk/models/managedTenants/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AlertRulesRequestBuilderNavigationMetadata, AlertRulesRequestBuilderRequestsMetadata, AlertRulesRequestBuilderUriTemplate, type AlertRulesRequestBuilder } from './alertRules/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedTenantAlertRuleDefinitions property of the microsoft.graph.managedTenants.managedTenant entity.
 */
export interface ManagedTenantAlertRuleDefinitionItemRequestBuilder extends BaseRequestBuilder<ManagedTenantAlertRuleDefinitionItemRequestBuilder> {
    /**
     * Provides operations to manage the alertRules property of the microsoft.graph.managedTenants.managedTenantAlertRuleDefinition entity.
     */
    get alertRules(): AlertRulesRequestBuilder;
    /**
     * Delete navigation property managedTenantAlertRuleDefinitions for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get managedTenantAlertRuleDefinitions from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedTenantAlertRuleDefinition
     */
     get(requestConfiguration?: RequestConfiguration<ManagedTenantAlertRuleDefinitionItemRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedTenantAlertRuleDefinition | undefined>;
    /**
     * Update the navigation property managedTenantAlertRuleDefinitions in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedTenantAlertRuleDefinition
     */
     patch(body: ManagedTenantAlertRuleDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagedTenantAlertRuleDefinition | undefined>;
    /**
     * Delete navigation property managedTenantAlertRuleDefinitions for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get managedTenantAlertRuleDefinitions from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagedTenantAlertRuleDefinitionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property managedTenantAlertRuleDefinitions in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ManagedTenantAlertRuleDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get managedTenantAlertRuleDefinitions from tenantRelationships
 */
export interface ManagedTenantAlertRuleDefinitionItemRequestBuilderGetQueryParameters {
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
const ManagedTenantAlertRuleDefinitionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ManagedTenantAlertRuleDefinitionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ManagedTenantAlertRuleDefinitionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    alertRules: {
        uriTemplate: AlertRulesRequestBuilderUriTemplate,
        requestsMetadata: AlertRulesRequestBuilderRequestsMetadata,
        navigationMetadata: AlertRulesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagedTenantAlertRuleDefinitionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createManagedTenantAlertRuleDefinitionFromDiscriminatorValue,
        queryParametersMapper: ManagedTenantAlertRuleDefinitionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createManagedTenantAlertRuleDefinitionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagedTenantAlertRuleDefinition,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ManagedTenantAlertRuleDefinitionItemRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */