/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createConfigurationManagementFromDiscriminatorValue, serializeConfigurationManagement, type ConfigurationManagement } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ConfigurationApplicationsRequestBuilderNavigationMetadata, ConfigurationApplicationsRequestBuilderRequestsMetadata, type ConfigurationApplicationsRequestBuilder } from './configurationApplications/index.js';
// @ts-ignore
import { ConfigurationDriftsRequestBuilderNavigationMetadata, ConfigurationDriftsRequestBuilderRequestsMetadata, type ConfigurationDriftsRequestBuilder } from './configurationDrifts/index.js';
// @ts-ignore
import { ConfigurationMonitoringResultsRequestBuilderNavigationMetadata, ConfigurationMonitoringResultsRequestBuilderRequestsMetadata, type ConfigurationMonitoringResultsRequestBuilder } from './configurationMonitoringResults/index.js';
// @ts-ignore
import { ConfigurationMonitorsRequestBuilderNavigationMetadata, ConfigurationMonitorsRequestBuilderRequestsMetadata, type ConfigurationMonitorsRequestBuilder } from './configurationMonitors/index.js';
// @ts-ignore
import { ConfigurationSnapshotJobsRequestBuilderNavigationMetadata, ConfigurationSnapshotJobsRequestBuilderRequestsMetadata, type ConfigurationSnapshotJobsRequestBuilder } from './configurationSnapshotJobs/index.js';
// @ts-ignore
import { ConfigurationSnapshotsRequestBuilderNavigationMetadata, ConfigurationSnapshotsRequestBuilderRequestsMetadata, type ConfigurationSnapshotsRequestBuilder } from './configurationSnapshots/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the configurationManagement property of the microsoft.graph.admin entity.
 */
export interface ConfigurationManagementRequestBuilder extends BaseRequestBuilder<ConfigurationManagementRequestBuilder> {
    /**
     * Provides operations to manage the configurationApplications property of the microsoft.graph.configurationManagement entity.
     */
    get configurationApplications(): ConfigurationApplicationsRequestBuilder;
    /**
     * Provides operations to manage the configurationDrifts property of the microsoft.graph.configurationManagement entity.
     */
    get configurationDrifts(): ConfigurationDriftsRequestBuilder;
    /**
     * Provides operations to manage the configurationMonitoringResults property of the microsoft.graph.configurationManagement entity.
     */
    get configurationMonitoringResults(): ConfigurationMonitoringResultsRequestBuilder;
    /**
     * Provides operations to manage the configurationMonitors property of the microsoft.graph.configurationManagement entity.
     */
    get configurationMonitors(): ConfigurationMonitorsRequestBuilder;
    /**
     * Provides operations to manage the configurationSnapshotJobs property of the microsoft.graph.configurationManagement entity.
     */
    get configurationSnapshotJobs(): ConfigurationSnapshotJobsRequestBuilder;
    /**
     * Provides operations to manage the configurationSnapshots property of the microsoft.graph.configurationManagement entity.
     */
    get configurationSnapshots(): ConfigurationSnapshotsRequestBuilder;
    /**
     * Delete navigation property configurationManagement for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get configurationManagement from admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ConfigurationManagement>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ConfigurationManagementRequestBuilderGetQueryParameters> | undefined) : Promise<ConfigurationManagement | undefined>;
    /**
     * Update the navigation property configurationManagement in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ConfigurationManagement>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ConfigurationManagement, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ConfigurationManagement | undefined>;
    /**
     * Delete navigation property configurationManagement for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get configurationManagement from admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ConfigurationManagementRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property configurationManagement in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ConfigurationManagement, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get configurationManagement from admin
 */
export interface ConfigurationManagementRequestBuilderGetQueryParameters {
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
export const ConfigurationManagementRequestBuilderUriTemplate = "{+baseurl}/admin/configurationManagement{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ConfigurationManagementRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ConfigurationManagementRequestBuilderNavigationMetadata: Record<Exclude<keyof ConfigurationManagementRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    configurationApplications: {
        requestsMetadata: ConfigurationApplicationsRequestBuilderRequestsMetadata,
        navigationMetadata: ConfigurationApplicationsRequestBuilderNavigationMetadata,
    },
    configurationDrifts: {
        requestsMetadata: ConfigurationDriftsRequestBuilderRequestsMetadata,
        navigationMetadata: ConfigurationDriftsRequestBuilderNavigationMetadata,
    },
    configurationMonitoringResults: {
        requestsMetadata: ConfigurationMonitoringResultsRequestBuilderRequestsMetadata,
        navigationMetadata: ConfigurationMonitoringResultsRequestBuilderNavigationMetadata,
    },
    configurationMonitors: {
        requestsMetadata: ConfigurationMonitorsRequestBuilderRequestsMetadata,
        navigationMetadata: ConfigurationMonitorsRequestBuilderNavigationMetadata,
    },
    configurationSnapshotJobs: {
        requestsMetadata: ConfigurationSnapshotJobsRequestBuilderRequestsMetadata,
        navigationMetadata: ConfigurationSnapshotJobsRequestBuilderNavigationMetadata,
    },
    configurationSnapshots: {
        requestsMetadata: ConfigurationSnapshotsRequestBuilderRequestsMetadata,
        navigationMetadata: ConfigurationSnapshotsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ConfigurationManagementRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ConfigurationManagementRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ConfigurationManagementRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createConfigurationManagementFromDiscriminatorValue,
        queryParametersMapper: ConfigurationManagementRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ConfigurationManagementRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createConfigurationManagementFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeConfigurationManagement,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
