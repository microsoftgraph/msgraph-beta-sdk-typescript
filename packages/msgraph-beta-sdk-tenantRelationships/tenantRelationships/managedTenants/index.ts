/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createManagedTenantFromDiscriminatorValue, serializeManagedTenant, type ManagedTenant } from '@microsoft/msgraph-beta-sdk/models/managedTenants/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AggregatedPolicyCompliancesRequestBuilderNavigationMetadata, AggregatedPolicyCompliancesRequestBuilderRequestsMetadata, AggregatedPolicyCompliancesRequestBuilderUriTemplate, type AggregatedPolicyCompliancesRequestBuilder } from './aggregatedPolicyCompliances/';
import { AppPerformancesRequestBuilderNavigationMetadata, AppPerformancesRequestBuilderRequestsMetadata, AppPerformancesRequestBuilderUriTemplate, type AppPerformancesRequestBuilder } from './appPerformances/';
import { AuditEventsRequestBuilderNavigationMetadata, AuditEventsRequestBuilderRequestsMetadata, AuditEventsRequestBuilderUriTemplate, type AuditEventsRequestBuilder } from './auditEvents/';
import { CloudPcConnectionsRequestBuilderNavigationMetadata, CloudPcConnectionsRequestBuilderRequestsMetadata, CloudPcConnectionsRequestBuilderUriTemplate, type CloudPcConnectionsRequestBuilder } from './cloudPcConnections/';
import { CloudPcDevicesRequestBuilderNavigationMetadata, CloudPcDevicesRequestBuilderRequestsMetadata, CloudPcDevicesRequestBuilderUriTemplate, type CloudPcDevicesRequestBuilder } from './cloudPcDevices/';
import { CloudPcsOverviewRequestBuilderNavigationMetadata, CloudPcsOverviewRequestBuilderRequestsMetadata, CloudPcsOverviewRequestBuilderUriTemplate, type CloudPcsOverviewRequestBuilder } from './cloudPcsOverview/';
import { ConditionalAccessPolicyCoveragesRequestBuilderNavigationMetadata, ConditionalAccessPolicyCoveragesRequestBuilderRequestsMetadata, ConditionalAccessPolicyCoveragesRequestBuilderUriTemplate, type ConditionalAccessPolicyCoveragesRequestBuilder } from './conditionalAccessPolicyCoverages/';
import { CredentialUserRegistrationsSummariesRequestBuilderNavigationMetadata, CredentialUserRegistrationsSummariesRequestBuilderRequestsMetadata, CredentialUserRegistrationsSummariesRequestBuilderUriTemplate, type CredentialUserRegistrationsSummariesRequestBuilder } from './credentialUserRegistrationsSummaries/';
import { DeviceAppPerformancesRequestBuilderNavigationMetadata, DeviceAppPerformancesRequestBuilderRequestsMetadata, DeviceAppPerformancesRequestBuilderUriTemplate, type DeviceAppPerformancesRequestBuilder } from './deviceAppPerformances/';
import { DeviceCompliancePolicySettingStateSummariesRequestBuilderNavigationMetadata, DeviceCompliancePolicySettingStateSummariesRequestBuilderRequestsMetadata, DeviceCompliancePolicySettingStateSummariesRequestBuilderUriTemplate, type DeviceCompliancePolicySettingStateSummariesRequestBuilder } from './deviceCompliancePolicySettingStateSummaries/';
import { DeviceHealthStatusesRequestBuilderNavigationMetadata, DeviceHealthStatusesRequestBuilderRequestsMetadata, DeviceHealthStatusesRequestBuilderUriTemplate, type DeviceHealthStatusesRequestBuilder } from './deviceHealthStatuses/';
import { ManagedDeviceCompliancesRequestBuilderNavigationMetadata, ManagedDeviceCompliancesRequestBuilderRequestsMetadata, ManagedDeviceCompliancesRequestBuilderUriTemplate, type ManagedDeviceCompliancesRequestBuilder } from './managedDeviceCompliances/';
import { ManagedDeviceComplianceTrendsRequestBuilderNavigationMetadata, ManagedDeviceComplianceTrendsRequestBuilderRequestsMetadata, ManagedDeviceComplianceTrendsRequestBuilderUriTemplate, type ManagedDeviceComplianceTrendsRequestBuilder } from './managedDeviceComplianceTrends/';
import { ManagedTenantAlertLogsRequestBuilderNavigationMetadata, ManagedTenantAlertLogsRequestBuilderRequestsMetadata, ManagedTenantAlertLogsRequestBuilderUriTemplate, type ManagedTenantAlertLogsRequestBuilder } from './managedTenantAlertLogs/';
import { ManagedTenantAlertRuleDefinitionsRequestBuilderNavigationMetadata, ManagedTenantAlertRuleDefinitionsRequestBuilderRequestsMetadata, ManagedTenantAlertRuleDefinitionsRequestBuilderUriTemplate, type ManagedTenantAlertRuleDefinitionsRequestBuilder } from './managedTenantAlertRuleDefinitions/';
import { ManagedTenantAlertRulesRequestBuilderNavigationMetadata, ManagedTenantAlertRulesRequestBuilderRequestsMetadata, ManagedTenantAlertRulesRequestBuilderUriTemplate, type ManagedTenantAlertRulesRequestBuilder } from './managedTenantAlertRules/';
import { ManagedTenantAlertsRequestBuilderNavigationMetadata, ManagedTenantAlertsRequestBuilderRequestsMetadata, ManagedTenantAlertsRequestBuilderUriTemplate, type ManagedTenantAlertsRequestBuilder } from './managedTenantAlerts/';
import { ManagedTenantApiNotificationsRequestBuilderNavigationMetadata, ManagedTenantApiNotificationsRequestBuilderRequestsMetadata, ManagedTenantApiNotificationsRequestBuilderUriTemplate, type ManagedTenantApiNotificationsRequestBuilder } from './managedTenantApiNotifications/';
import { ManagedTenantEmailNotificationsRequestBuilderNavigationMetadata, ManagedTenantEmailNotificationsRequestBuilderRequestsMetadata, ManagedTenantEmailNotificationsRequestBuilderUriTemplate, type ManagedTenantEmailNotificationsRequestBuilder } from './managedTenantEmailNotifications/';
import { ManagedTenantTicketingEndpointsRequestBuilderNavigationMetadata, ManagedTenantTicketingEndpointsRequestBuilderRequestsMetadata, ManagedTenantTicketingEndpointsRequestBuilderUriTemplate, type ManagedTenantTicketingEndpointsRequestBuilder } from './managedTenantTicketingEndpoints/';
import { ManagementActionsRequestBuilderNavigationMetadata, ManagementActionsRequestBuilderRequestsMetadata, ManagementActionsRequestBuilderUriTemplate, type ManagementActionsRequestBuilder } from './managementActions/';
import { ManagementActionTenantDeploymentStatusesRequestBuilderNavigationMetadata, ManagementActionTenantDeploymentStatusesRequestBuilderRequestsMetadata, ManagementActionTenantDeploymentStatusesRequestBuilderUriTemplate, type ManagementActionTenantDeploymentStatusesRequestBuilder } from './managementActionTenantDeploymentStatuses/';
import { ManagementIntentsRequestBuilderNavigationMetadata, ManagementIntentsRequestBuilderRequestsMetadata, ManagementIntentsRequestBuilderUriTemplate, type ManagementIntentsRequestBuilder } from './managementIntents/';
import { ManagementTemplateCollectionsRequestBuilderNavigationMetadata, ManagementTemplateCollectionsRequestBuilderRequestsMetadata, ManagementTemplateCollectionsRequestBuilderUriTemplate, type ManagementTemplateCollectionsRequestBuilder } from './managementTemplateCollections/';
import { ManagementTemplateCollectionTenantSummariesRequestBuilderNavigationMetadata, ManagementTemplateCollectionTenantSummariesRequestBuilderRequestsMetadata, ManagementTemplateCollectionTenantSummariesRequestBuilderUriTemplate, type ManagementTemplateCollectionTenantSummariesRequestBuilder } from './managementTemplateCollectionTenantSummaries/';
import { ManagementTemplatesRequestBuilderNavigationMetadata, ManagementTemplatesRequestBuilderRequestsMetadata, ManagementTemplatesRequestBuilderUriTemplate, type ManagementTemplatesRequestBuilder } from './managementTemplates/';
import { ManagementTemplateStepsRequestBuilderNavigationMetadata, ManagementTemplateStepsRequestBuilderRequestsMetadata, ManagementTemplateStepsRequestBuilderUriTemplate, type ManagementTemplateStepsRequestBuilder } from './managementTemplateSteps/';
import { ManagementTemplateStepTenantSummariesRequestBuilderNavigationMetadata, ManagementTemplateStepTenantSummariesRequestBuilderRequestsMetadata, ManagementTemplateStepTenantSummariesRequestBuilderUriTemplate, type ManagementTemplateStepTenantSummariesRequestBuilder } from './managementTemplateStepTenantSummaries/';
import { ManagementTemplateStepVersionsRequestBuilderNavigationMetadata, ManagementTemplateStepVersionsRequestBuilderRequestsMetadata, ManagementTemplateStepVersionsRequestBuilderUriTemplate, type ManagementTemplateStepVersionsRequestBuilder } from './managementTemplateStepVersions/';
import { MyRolesRequestBuilderNavigationMetadata, MyRolesRequestBuilderRequestsMetadata, MyRolesRequestBuilderUriTemplate, type MyRolesRequestBuilder } from './myRoles/';
import { TenantGroupsRequestBuilderNavigationMetadata, TenantGroupsRequestBuilderRequestsMetadata, TenantGroupsRequestBuilderUriTemplate, type TenantGroupsRequestBuilder } from './tenantGroups/';
import { TenantsRequestBuilderNavigationMetadata, TenantsRequestBuilderRequestsMetadata, TenantsRequestBuilderUriTemplate, type TenantsRequestBuilder } from './tenants/';
import { TenantsCustomizedInformationRequestBuilderNavigationMetadata, TenantsCustomizedInformationRequestBuilderRequestsMetadata, TenantsCustomizedInformationRequestBuilderUriTemplate, type TenantsCustomizedInformationRequestBuilder } from './tenantsCustomizedInformation/';
import { TenantsDetailedInformationRequestBuilderNavigationMetadata, TenantsDetailedInformationRequestBuilderRequestsMetadata, TenantsDetailedInformationRequestBuilderUriTemplate, type TenantsDetailedInformationRequestBuilder } from './tenantsDetailedInformation/';
import { TenantTagsRequestBuilderNavigationMetadata, TenantTagsRequestBuilderRequestsMetadata, TenantTagsRequestBuilderUriTemplate, type TenantTagsRequestBuilder } from './tenantTags/';
import { type WindowsDeviceMalwareStatesRequestBuilder, WindowsDeviceMalwareStatesRequestBuilderNavigationMetadata, WindowsDeviceMalwareStatesRequestBuilderRequestsMetadata, WindowsDeviceMalwareStatesRequestBuilderUriTemplate } from './windowsDeviceMalwareStates/';
import { type WindowsProtectionStatesRequestBuilder, WindowsProtectionStatesRequestBuilderNavigationMetadata, WindowsProtectionStatesRequestBuilderRequestsMetadata, WindowsProtectionStatesRequestBuilderUriTemplate } from './windowsProtectionStates/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedTenants property of the microsoft.graph.tenantRelationship entity.
 */
export interface ManagedTenantsRequestBuilder extends BaseRequestBuilder<ManagedTenantsRequestBuilder> {
    /**
     * Provides operations to manage the aggregatedPolicyCompliances property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get aggregatedPolicyCompliances(): AggregatedPolicyCompliancesRequestBuilder;
    /**
     * Provides operations to manage the appPerformances property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get appPerformances(): AppPerformancesRequestBuilder;
    /**
     * Provides operations to manage the auditEvents property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get auditEvents(): AuditEventsRequestBuilder;
    /**
     * Provides operations to manage the cloudPcConnections property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get cloudPcConnections(): CloudPcConnectionsRequestBuilder;
    /**
     * Provides operations to manage the cloudPcDevices property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get cloudPcDevices(): CloudPcDevicesRequestBuilder;
    /**
     * Provides operations to manage the cloudPcsOverview property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get cloudPcsOverview(): CloudPcsOverviewRequestBuilder;
    /**
     * Provides operations to manage the conditionalAccessPolicyCoverages property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get conditionalAccessPolicyCoverages(): ConditionalAccessPolicyCoveragesRequestBuilder;
    /**
     * Provides operations to manage the credentialUserRegistrationsSummaries property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get credentialUserRegistrationsSummaries(): CredentialUserRegistrationsSummariesRequestBuilder;
    /**
     * Provides operations to manage the deviceAppPerformances property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get deviceAppPerformances(): DeviceAppPerformancesRequestBuilder;
    /**
     * Provides operations to manage the deviceCompliancePolicySettingStateSummaries property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get deviceCompliancePolicySettingStateSummaries(): DeviceCompliancePolicySettingStateSummariesRequestBuilder;
    /**
     * Provides operations to manage the deviceHealthStatuses property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get deviceHealthStatuses(): DeviceHealthStatusesRequestBuilder;
    /**
     * Provides operations to manage the managedDeviceCompliances property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managedDeviceCompliances(): ManagedDeviceCompliancesRequestBuilder;
    /**
     * Provides operations to manage the managedDeviceComplianceTrends property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managedDeviceComplianceTrends(): ManagedDeviceComplianceTrendsRequestBuilder;
    /**
     * Provides operations to manage the managedTenantAlertLogs property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managedTenantAlertLogs(): ManagedTenantAlertLogsRequestBuilder;
    /**
     * Provides operations to manage the managedTenantAlertRuleDefinitions property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managedTenantAlertRuleDefinitions(): ManagedTenantAlertRuleDefinitionsRequestBuilder;
    /**
     * Provides operations to manage the managedTenantAlertRules property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managedTenantAlertRules(): ManagedTenantAlertRulesRequestBuilder;
    /**
     * Provides operations to manage the managedTenantAlerts property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managedTenantAlerts(): ManagedTenantAlertsRequestBuilder;
    /**
     * Provides operations to manage the managedTenantApiNotifications property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managedTenantApiNotifications(): ManagedTenantApiNotificationsRequestBuilder;
    /**
     * Provides operations to manage the managedTenantEmailNotifications property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managedTenantEmailNotifications(): ManagedTenantEmailNotificationsRequestBuilder;
    /**
     * Provides operations to manage the managedTenantTicketingEndpoints property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managedTenantTicketingEndpoints(): ManagedTenantTicketingEndpointsRequestBuilder;
    /**
     * Provides operations to manage the managementActions property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managementActions(): ManagementActionsRequestBuilder;
    /**
     * Provides operations to manage the managementActionTenantDeploymentStatuses property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managementActionTenantDeploymentStatuses(): ManagementActionTenantDeploymentStatusesRequestBuilder;
    /**
     * Provides operations to manage the managementIntents property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managementIntents(): ManagementIntentsRequestBuilder;
    /**
     * Provides operations to manage the managementTemplateCollections property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managementTemplateCollections(): ManagementTemplateCollectionsRequestBuilder;
    /**
     * Provides operations to manage the managementTemplateCollectionTenantSummaries property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managementTemplateCollectionTenantSummaries(): ManagementTemplateCollectionTenantSummariesRequestBuilder;
    /**
     * Provides operations to manage the managementTemplates property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managementTemplates(): ManagementTemplatesRequestBuilder;
    /**
     * Provides operations to manage the managementTemplateSteps property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managementTemplateSteps(): ManagementTemplateStepsRequestBuilder;
    /**
     * Provides operations to manage the managementTemplateStepTenantSummaries property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managementTemplateStepTenantSummaries(): ManagementTemplateStepTenantSummariesRequestBuilder;
    /**
     * Provides operations to manage the managementTemplateStepVersions property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get managementTemplateStepVersions(): ManagementTemplateStepVersionsRequestBuilder;
    /**
     * Provides operations to manage the myRoles property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get myRoles(): MyRolesRequestBuilder;
    /**
     * Provides operations to manage the tenantGroups property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get tenantGroups(): TenantGroupsRequestBuilder;
    /**
     * Provides operations to manage the tenants property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get tenants(): TenantsRequestBuilder;
    /**
     * Provides operations to manage the tenantsCustomizedInformation property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get tenantsCustomizedInformation(): TenantsCustomizedInformationRequestBuilder;
    /**
     * Provides operations to manage the tenantsDetailedInformation property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get tenantsDetailedInformation(): TenantsDetailedInformationRequestBuilder;
    /**
     * Provides operations to manage the tenantTags property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get tenantTags(): TenantTagsRequestBuilder;
    /**
     * Provides operations to manage the windowsDeviceMalwareStates property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get windowsDeviceMalwareStates(): WindowsDeviceMalwareStatesRequestBuilder;
    /**
     * Provides operations to manage the windowsProtectionStates property of the microsoft.graph.managedTenants.managedTenant entity.
     */
    get windowsProtectionStates(): WindowsProtectionStatesRequestBuilder;
    /**
     * Delete navigation property managedTenants for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The operations available to interact with the multi-tenant management platform.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedTenant
     */
     get(requestConfiguration?: RequestConfiguration<ManagedTenantsRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedTenant | undefined>;
    /**
     * Update the navigation property managedTenants in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedTenant
     */
     patch(body: ManagedTenant, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagedTenant | undefined>;
    /**
     * Delete navigation property managedTenants for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The operations available to interact with the multi-tenant management platform.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagedTenantsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property managedTenants in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ManagedTenant, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The operations available to interact with the multi-tenant management platform.
 */
export interface ManagedTenantsRequestBuilderGetQueryParameters {
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
const ManagedTenantsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ManagedTenantsRequestBuilderNavigationMetadata: Record<Exclude<keyof ManagedTenantsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    aggregatedPolicyCompliances: {
        uriTemplate: AggregatedPolicyCompliancesRequestBuilderUriTemplate,
        requestsMetadata: AggregatedPolicyCompliancesRequestBuilderRequestsMetadata,
        navigationMetadata: AggregatedPolicyCompliancesRequestBuilderNavigationMetadata,
    },
    appPerformances: {
        uriTemplate: AppPerformancesRequestBuilderUriTemplate,
        requestsMetadata: AppPerformancesRequestBuilderRequestsMetadata,
        navigationMetadata: AppPerformancesRequestBuilderNavigationMetadata,
    },
    auditEvents: {
        uriTemplate: AuditEventsRequestBuilderUriTemplate,
        requestsMetadata: AuditEventsRequestBuilderRequestsMetadata,
        navigationMetadata: AuditEventsRequestBuilderNavigationMetadata,
    },
    cloudPcConnections: {
        uriTemplate: CloudPcConnectionsRequestBuilderUriTemplate,
        requestsMetadata: CloudPcConnectionsRequestBuilderRequestsMetadata,
        navigationMetadata: CloudPcConnectionsRequestBuilderNavigationMetadata,
    },
    cloudPcDevices: {
        uriTemplate: CloudPcDevicesRequestBuilderUriTemplate,
        requestsMetadata: CloudPcDevicesRequestBuilderRequestsMetadata,
        navigationMetadata: CloudPcDevicesRequestBuilderNavigationMetadata,
    },
    cloudPcsOverview: {
        uriTemplate: CloudPcsOverviewRequestBuilderUriTemplate,
        requestsMetadata: CloudPcsOverviewRequestBuilderRequestsMetadata,
        navigationMetadata: CloudPcsOverviewRequestBuilderNavigationMetadata,
    },
    conditionalAccessPolicyCoverages: {
        uriTemplate: ConditionalAccessPolicyCoveragesRequestBuilderUriTemplate,
        requestsMetadata: ConditionalAccessPolicyCoveragesRequestBuilderRequestsMetadata,
        navigationMetadata: ConditionalAccessPolicyCoveragesRequestBuilderNavigationMetadata,
    },
    credentialUserRegistrationsSummaries: {
        uriTemplate: CredentialUserRegistrationsSummariesRequestBuilderUriTemplate,
        requestsMetadata: CredentialUserRegistrationsSummariesRequestBuilderRequestsMetadata,
        navigationMetadata: CredentialUserRegistrationsSummariesRequestBuilderNavigationMetadata,
    },
    deviceAppPerformances: {
        uriTemplate: DeviceAppPerformancesRequestBuilderUriTemplate,
        requestsMetadata: DeviceAppPerformancesRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceAppPerformancesRequestBuilderNavigationMetadata,
    },
    deviceCompliancePolicySettingStateSummaries: {
        uriTemplate: DeviceCompliancePolicySettingStateSummariesRequestBuilderUriTemplate,
        requestsMetadata: DeviceCompliancePolicySettingStateSummariesRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceCompliancePolicySettingStateSummariesRequestBuilderNavigationMetadata,
    },
    deviceHealthStatuses: {
        uriTemplate: DeviceHealthStatusesRequestBuilderUriTemplate,
        requestsMetadata: DeviceHealthStatusesRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceHealthStatusesRequestBuilderNavigationMetadata,
    },
    managedDeviceCompliances: {
        uriTemplate: ManagedDeviceCompliancesRequestBuilderUriTemplate,
        requestsMetadata: ManagedDeviceCompliancesRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedDeviceCompliancesRequestBuilderNavigationMetadata,
    },
    managedDeviceComplianceTrends: {
        uriTemplate: ManagedDeviceComplianceTrendsRequestBuilderUriTemplate,
        requestsMetadata: ManagedDeviceComplianceTrendsRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedDeviceComplianceTrendsRequestBuilderNavigationMetadata,
    },
    managedTenantAlertLogs: {
        uriTemplate: ManagedTenantAlertLogsRequestBuilderUriTemplate,
        requestsMetadata: ManagedTenantAlertLogsRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedTenantAlertLogsRequestBuilderNavigationMetadata,
    },
    managedTenantAlertRuleDefinitions: {
        uriTemplate: ManagedTenantAlertRuleDefinitionsRequestBuilderUriTemplate,
        requestsMetadata: ManagedTenantAlertRuleDefinitionsRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedTenantAlertRuleDefinitionsRequestBuilderNavigationMetadata,
    },
    managedTenantAlertRules: {
        uriTemplate: ManagedTenantAlertRulesRequestBuilderUriTemplate,
        requestsMetadata: ManagedTenantAlertRulesRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedTenantAlertRulesRequestBuilderNavigationMetadata,
    },
    managedTenantAlerts: {
        uriTemplate: ManagedTenantAlertsRequestBuilderUriTemplate,
        requestsMetadata: ManagedTenantAlertsRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedTenantAlertsRequestBuilderNavigationMetadata,
    },
    managedTenantApiNotifications: {
        uriTemplate: ManagedTenantApiNotificationsRequestBuilderUriTemplate,
        requestsMetadata: ManagedTenantApiNotificationsRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedTenantApiNotificationsRequestBuilderNavigationMetadata,
    },
    managedTenantEmailNotifications: {
        uriTemplate: ManagedTenantEmailNotificationsRequestBuilderUriTemplate,
        requestsMetadata: ManagedTenantEmailNotificationsRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedTenantEmailNotificationsRequestBuilderNavigationMetadata,
    },
    managedTenantTicketingEndpoints: {
        uriTemplate: ManagedTenantTicketingEndpointsRequestBuilderUriTemplate,
        requestsMetadata: ManagedTenantTicketingEndpointsRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedTenantTicketingEndpointsRequestBuilderNavigationMetadata,
    },
    managementActions: {
        uriTemplate: ManagementActionsRequestBuilderUriTemplate,
        requestsMetadata: ManagementActionsRequestBuilderRequestsMetadata,
        navigationMetadata: ManagementActionsRequestBuilderNavigationMetadata,
    },
    managementActionTenantDeploymentStatuses: {
        uriTemplate: ManagementActionTenantDeploymentStatusesRequestBuilderUriTemplate,
        requestsMetadata: ManagementActionTenantDeploymentStatusesRequestBuilderRequestsMetadata,
        navigationMetadata: ManagementActionTenantDeploymentStatusesRequestBuilderNavigationMetadata,
    },
    managementIntents: {
        uriTemplate: ManagementIntentsRequestBuilderUriTemplate,
        requestsMetadata: ManagementIntentsRequestBuilderRequestsMetadata,
        navigationMetadata: ManagementIntentsRequestBuilderNavigationMetadata,
    },
    managementTemplateCollections: {
        uriTemplate: ManagementTemplateCollectionsRequestBuilderUriTemplate,
        requestsMetadata: ManagementTemplateCollectionsRequestBuilderRequestsMetadata,
        navigationMetadata: ManagementTemplateCollectionsRequestBuilderNavigationMetadata,
    },
    managementTemplateCollectionTenantSummaries: {
        uriTemplate: ManagementTemplateCollectionTenantSummariesRequestBuilderUriTemplate,
        requestsMetadata: ManagementTemplateCollectionTenantSummariesRequestBuilderRequestsMetadata,
        navigationMetadata: ManagementTemplateCollectionTenantSummariesRequestBuilderNavigationMetadata,
    },
    managementTemplates: {
        uriTemplate: ManagementTemplatesRequestBuilderUriTemplate,
        requestsMetadata: ManagementTemplatesRequestBuilderRequestsMetadata,
        navigationMetadata: ManagementTemplatesRequestBuilderNavigationMetadata,
    },
    managementTemplateSteps: {
        uriTemplate: ManagementTemplateStepsRequestBuilderUriTemplate,
        requestsMetadata: ManagementTemplateStepsRequestBuilderRequestsMetadata,
        navigationMetadata: ManagementTemplateStepsRequestBuilderNavigationMetadata,
    },
    managementTemplateStepTenantSummaries: {
        uriTemplate: ManagementTemplateStepTenantSummariesRequestBuilderUriTemplate,
        requestsMetadata: ManagementTemplateStepTenantSummariesRequestBuilderRequestsMetadata,
        navigationMetadata: ManagementTemplateStepTenantSummariesRequestBuilderNavigationMetadata,
    },
    managementTemplateStepVersions: {
        uriTemplate: ManagementTemplateStepVersionsRequestBuilderUriTemplate,
        requestsMetadata: ManagementTemplateStepVersionsRequestBuilderRequestsMetadata,
        navigationMetadata: ManagementTemplateStepVersionsRequestBuilderNavigationMetadata,
    },
    myRoles: {
        uriTemplate: MyRolesRequestBuilderUriTemplate,
        requestsMetadata: MyRolesRequestBuilderRequestsMetadata,
        navigationMetadata: MyRolesRequestBuilderNavigationMetadata,
    },
    tenantGroups: {
        uriTemplate: TenantGroupsRequestBuilderUriTemplate,
        requestsMetadata: TenantGroupsRequestBuilderRequestsMetadata,
        navigationMetadata: TenantGroupsRequestBuilderNavigationMetadata,
    },
    tenants: {
        uriTemplate: TenantsRequestBuilderUriTemplate,
        requestsMetadata: TenantsRequestBuilderRequestsMetadata,
        navigationMetadata: TenantsRequestBuilderNavigationMetadata,
    },
    tenantsCustomizedInformation: {
        uriTemplate: TenantsCustomizedInformationRequestBuilderUriTemplate,
        requestsMetadata: TenantsCustomizedInformationRequestBuilderRequestsMetadata,
        navigationMetadata: TenantsCustomizedInformationRequestBuilderNavigationMetadata,
    },
    tenantsDetailedInformation: {
        uriTemplate: TenantsDetailedInformationRequestBuilderUriTemplate,
        requestsMetadata: TenantsDetailedInformationRequestBuilderRequestsMetadata,
        navigationMetadata: TenantsDetailedInformationRequestBuilderNavigationMetadata,
    },
    tenantTags: {
        uriTemplate: TenantTagsRequestBuilderUriTemplate,
        requestsMetadata: TenantTagsRequestBuilderRequestsMetadata,
        navigationMetadata: TenantTagsRequestBuilderNavigationMetadata,
    },
    windowsDeviceMalwareStates: {
        uriTemplate: WindowsDeviceMalwareStatesRequestBuilderUriTemplate,
        requestsMetadata: WindowsDeviceMalwareStatesRequestBuilderRequestsMetadata,
        navigationMetadata: WindowsDeviceMalwareStatesRequestBuilderNavigationMetadata,
    },
    windowsProtectionStates: {
        uriTemplate: WindowsProtectionStatesRequestBuilderUriTemplate,
        requestsMetadata: WindowsProtectionStatesRequestBuilderRequestsMetadata,
        navigationMetadata: WindowsProtectionStatesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagedTenantsRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createManagedTenantFromDiscriminatorValue,
        queryParametersMapper: ManagedTenantsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createManagedTenantFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagedTenant,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ManagedTenantsRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */