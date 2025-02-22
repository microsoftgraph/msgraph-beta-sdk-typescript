/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createManagedTenantAlertRuleFromDiscriminatorValue, type ManagedTenantAlertRule } from '@microsoft/msgraph-beta-sdk/models/managedTenants/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the alertRule property of the microsoft.graph.managedTenants.managedTenantAlert entity.
 */
export interface AlertRuleRequestBuilder extends BaseRequestBuilder<AlertRuleRequestBuilder> {
    /**
     * Get alertRule from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedTenantAlertRule>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AlertRuleRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedTenantAlertRule | undefined>;
    /**
     * Get alertRule from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AlertRuleRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get alertRule from tenantRelationships
 */
export interface AlertRuleRequestBuilderGetQueryParameters {
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
export const AlertRuleRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants/managedTenantAlerts/{managedTenantAlert%2Did}/alertRule{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AlertRuleRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AlertRuleRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AlertRuleRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedTenantAlertRuleFromDiscriminatorValue,
        queryParametersMapper: AlertRuleRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
