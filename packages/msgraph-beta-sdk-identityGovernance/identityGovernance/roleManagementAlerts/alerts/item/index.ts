/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUnifiedRoleManagementAlertFromDiscriminatorValue, serializeUnifiedRoleManagementAlert, type UnifiedRoleManagementAlert } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AlertConfigurationRequestBuilderRequestsMetadata, AlertConfigurationRequestBuilderUriTemplate, type AlertConfigurationRequestBuilder } from './alertConfiguration/';
import { AlertDefinitionRequestBuilderRequestsMetadata, AlertDefinitionRequestBuilderUriTemplate, type AlertDefinitionRequestBuilder } from './alertDefinition/';
import { AlertIncidentsRequestBuilderNavigationMetadata, AlertIncidentsRequestBuilderRequestsMetadata, AlertIncidentsRequestBuilderUriTemplate, type AlertIncidentsRequestBuilder } from './alertIncidents/';
import { RefreshRequestBuilderRequestsMetadata, RefreshRequestBuilderUriTemplate, type RefreshRequestBuilder } from './refresh/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the alerts property of the microsoft.graph.roleManagementAlert entity.
 */
export interface UnifiedRoleManagementAlertItemRequestBuilder extends BaseRequestBuilder<UnifiedRoleManagementAlertItemRequestBuilder> {
    /**
     * Provides operations to manage the alertConfiguration property of the microsoft.graph.unifiedRoleManagementAlert entity.
     */
    get alertConfiguration(): AlertConfigurationRequestBuilder;
    /**
     * Provides operations to manage the alertDefinition property of the microsoft.graph.unifiedRoleManagementAlert entity.
     */
    get alertDefinition(): AlertDefinitionRequestBuilder;
    /**
     * Provides operations to manage the alertIncidents property of the microsoft.graph.unifiedRoleManagementAlert entity.
     */
    get alertIncidents(): AlertIncidentsRequestBuilder;
    /**
     * Provides operations to call the refresh method.
     */
    get refresh(): RefreshRequestBuilder;
    /**
     * Delete navigation property alerts for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Represents the alert entity.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleManagementAlert
     */
     get(requestConfiguration?: RequestConfiguration<UnifiedRoleManagementAlertItemRequestBuilderGetQueryParameters> | undefined) : Promise<UnifiedRoleManagementAlert | undefined>;
    /**
     * Update the navigation property alerts in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UnifiedRoleManagementAlert
     */
     patch(body: UnifiedRoleManagementAlert, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UnifiedRoleManagementAlert | undefined>;
    /**
     * Delete navigation property alerts for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Represents the alert entity.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UnifiedRoleManagementAlertItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property alerts in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: UnifiedRoleManagementAlert, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Represents the alert entity.
 */
export interface UnifiedRoleManagementAlertItemRequestBuilderGetQueryParameters {
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
const UnifiedRoleManagementAlertItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const UnifiedRoleManagementAlertItemRequestBuilderNavigationMetadata: Record<Exclude<keyof UnifiedRoleManagementAlertItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    alertConfiguration: {
        uriTemplate: AlertConfigurationRequestBuilderUriTemplate,
        requestsMetadata: AlertConfigurationRequestBuilderRequestsMetadata,
    },
    alertDefinition: {
        uriTemplate: AlertDefinitionRequestBuilderUriTemplate,
        requestsMetadata: AlertDefinitionRequestBuilderRequestsMetadata,
    },
    alertIncidents: {
        uriTemplate: AlertIncidentsRequestBuilderUriTemplate,
        requestsMetadata: AlertIncidentsRequestBuilderRequestsMetadata,
        navigationMetadata: AlertIncidentsRequestBuilderNavigationMetadata,
    },
    refresh: {
        uriTemplate: RefreshRequestBuilderUriTemplate,
        requestsMetadata: RefreshRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UnifiedRoleManagementAlertItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createUnifiedRoleManagementAlertFromDiscriminatorValue,
        queryParametersMapper: UnifiedRoleManagementAlertItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUnifiedRoleManagementAlertFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedRoleManagementAlert,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UnifiedRoleManagementAlertItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */