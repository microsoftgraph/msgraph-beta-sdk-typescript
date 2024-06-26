/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUnifiedRoleManagementAlertConfigurationFromDiscriminatorValue, type UnifiedRoleManagementAlertConfiguration } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the alertConfiguration property of the microsoft.graph.unifiedRoleManagementAlert entity.
 */
export interface AlertConfigurationRequestBuilder extends BaseRequestBuilder<AlertConfigurationRequestBuilder> {
    /**
     * The configuration of the alert in PIM for Microsoft Entra roles. Alert configurations are pre-defined and cannot be created or deleted, but some configurations can be modified. Supports $filter for the isEnabled property and $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnifiedRoleManagementAlertConfiguration>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AlertConfigurationRequestBuilderGetQueryParameters> | undefined) : Promise<UnifiedRoleManagementAlertConfiguration | undefined>;
    /**
     * The configuration of the alert in PIM for Microsoft Entra roles. Alert configurations are pre-defined and cannot be created or deleted, but some configurations can be modified. Supports $filter for the isEnabled property and $expand.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AlertConfigurationRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The configuration of the alert in PIM for Microsoft Entra roles. Alert configurations are pre-defined and cannot be created or deleted, but some configurations can be modified. Supports $filter for the isEnabled property and $expand.
 */
export interface AlertConfigurationRequestBuilderGetQueryParameters {
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
export const AlertConfigurationRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert%2Did}/alertConfiguration{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AlertConfigurationRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AlertConfigurationRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AlertConfigurationRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnifiedRoleManagementAlertConfigurationFromDiscriminatorValue,
        queryParametersMapper: AlertConfigurationRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
