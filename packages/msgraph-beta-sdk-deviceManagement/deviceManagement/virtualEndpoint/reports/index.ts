/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCloudPcReportsFromDiscriminatorValue, serializeCloudPcReports, type CloudPcReports } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { ExportJobsRequestBuilderNavigationMetadata, ExportJobsRequestBuilderRequestsMetadata, type ExportJobsRequestBuilder } from './exportJobs/';
import { GetActionStatusReportsRequestBuilderRequestsMetadata, type GetActionStatusReportsRequestBuilder } from './getActionStatusReports/';
import { GetCloudPcPerformanceReportRequestBuilderRequestsMetadata, type GetCloudPcPerformanceReportRequestBuilder } from './getCloudPcPerformanceReport/';
import { GetCloudPcRecommendationReportsRequestBuilderRequestsMetadata, type GetCloudPcRecommendationReportsRequestBuilder } from './getCloudPcRecommendationReports/';
import { GetConnectionQualityReportsRequestBuilderRequestsMetadata, type GetConnectionQualityReportsRequestBuilder } from './getConnectionQualityReports/';
import { GetDailyAggregatedRemoteConnectionReportsRequestBuilderRequestsMetadata, type GetDailyAggregatedRemoteConnectionReportsRequestBuilder } from './getDailyAggregatedRemoteConnectionReports/';
import { GetFrontlineReportRequestBuilderRequestsMetadata, type GetFrontlineReportRequestBuilder } from './getFrontlineReport/';
import { GetInaccessibleCloudPcReportsRequestBuilderRequestsMetadata, type GetInaccessibleCloudPcReportsRequestBuilder } from './getInaccessibleCloudPcReports/';
import { GetRawRemoteConnectionReportsRequestBuilderRequestsMetadata, type GetRawRemoteConnectionReportsRequestBuilder } from './getRawRemoteConnectionReports/';
import { GetRealTimeRemoteConnectionLatencyWithCloudPcIdRequestBuilderRequestsMetadata, type GetRealTimeRemoteConnectionLatencyWithCloudPcIdRequestBuilder } from './getRealTimeRemoteConnectionLatencyWithCloudPcId/';
import { GetRealTimeRemoteConnectionStatusWithCloudPcIdRequestBuilderRequestsMetadata, type GetRealTimeRemoteConnectionStatusWithCloudPcIdRequestBuilder } from './getRealTimeRemoteConnectionStatusWithCloudPcId/';
import { GetRemoteConnectionHistoricalReportsRequestBuilderRequestsMetadata, type GetRemoteConnectionHistoricalReportsRequestBuilder } from './getRemoteConnectionHistoricalReports/';
import { GetSharedUseLicenseUsageReportRequestBuilderRequestsMetadata, type GetSharedUseLicenseUsageReportRequestBuilder } from './getSharedUseLicenseUsageReport/';
import { GetTotalAggregatedRemoteConnectionReportsRequestBuilderRequestsMetadata, type GetTotalAggregatedRemoteConnectionReportsRequestBuilder } from './getTotalAggregatedRemoteConnectionReports/';
import { RetrieveCrossRegionDisasterRecoveryReportRequestBuilderRequestsMetadata, type RetrieveCrossRegionDisasterRecoveryReportRequestBuilder } from './retrieveCrossRegionDisasterRecoveryReport/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the reports property of the microsoft.graph.virtualEndpoint entity.
 */
export interface ReportsRequestBuilder extends BaseRequestBuilder<ReportsRequestBuilder> {
    /**
     * Provides operations to manage the exportJobs property of the microsoft.graph.cloudPcReports entity.
     */
    get exportJobs(): ExportJobsRequestBuilder;
    /**
     * Provides operations to call the getActionStatusReports method.
     */
    get getActionStatusReports(): GetActionStatusReportsRequestBuilder;
    /**
     * Provides operations to call the getCloudPcPerformanceReport method.
     */
    get getCloudPcPerformanceReport(): GetCloudPcPerformanceReportRequestBuilder;
    /**
     * Provides operations to call the getCloudPcRecommendationReports method.
     */
    get getCloudPcRecommendationReports(): GetCloudPcRecommendationReportsRequestBuilder;
    /**
     * Provides operations to call the getConnectionQualityReports method.
     */
    get getConnectionQualityReports(): GetConnectionQualityReportsRequestBuilder;
    /**
     * Provides operations to call the getDailyAggregatedRemoteConnectionReports method.
     */
    get getDailyAggregatedRemoteConnectionReports(): GetDailyAggregatedRemoteConnectionReportsRequestBuilder;
    /**
     * Provides operations to call the getFrontlineReport method.
     */
    get getFrontlineReport(): GetFrontlineReportRequestBuilder;
    /**
     * Provides operations to call the getInaccessibleCloudPcReports method.
     */
    get getInaccessibleCloudPcReports(): GetInaccessibleCloudPcReportsRequestBuilder;
    /**
     * Provides operations to call the getRawRemoteConnectionReports method.
     */
    get getRawRemoteConnectionReports(): GetRawRemoteConnectionReportsRequestBuilder;
    /**
     * Provides operations to call the getRemoteConnectionHistoricalReports method.
     */
    get getRemoteConnectionHistoricalReports(): GetRemoteConnectionHistoricalReportsRequestBuilder;
    /**
     * Provides operations to call the getSharedUseLicenseUsageReport method.
     */
    get getSharedUseLicenseUsageReport(): GetSharedUseLicenseUsageReportRequestBuilder;
    /**
     * Provides operations to call the getTotalAggregatedRemoteConnectionReports method.
     */
    get getTotalAggregatedRemoteConnectionReports(): GetTotalAggregatedRemoteConnectionReportsRequestBuilder;
    /**
     * Provides operations to call the retrieveCrossRegionDisasterRecoveryReport method.
     */
    get retrieveCrossRegionDisasterRecoveryReport(): RetrieveCrossRegionDisasterRecoveryReportRequestBuilder;
    /**
     * Delete navigation property reports for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Cloud PC related reports.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudPcReports>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ReportsRequestBuilderGetQueryParameters> | undefined) : Promise<CloudPcReports | undefined>;
    /**
     * Provides operations to call the getRealTimeRemoteConnectionLatency method.
     * @param cloudPcId Usage: cloudPcId='{cloudPcId}'
     * @returns {GetRealTimeRemoteConnectionLatencyWithCloudPcIdRequestBuilder}
     */
     getRealTimeRemoteConnectionLatencyWithCloudPcId(cloudPcId: string | undefined) : GetRealTimeRemoteConnectionLatencyWithCloudPcIdRequestBuilder;
    /**
     * Provides operations to call the getRealTimeRemoteConnectionStatus method.
     * @param cloudPcId Usage: cloudPcId='{cloudPcId}'
     * @returns {GetRealTimeRemoteConnectionStatusWithCloudPcIdRequestBuilder}
     */
     getRealTimeRemoteConnectionStatusWithCloudPcId(cloudPcId: string | undefined) : GetRealTimeRemoteConnectionStatusWithCloudPcIdRequestBuilder;
    /**
     * Update the navigation property reports in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudPcReports>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: CloudPcReports, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CloudPcReports | undefined>;
    /**
     * Delete navigation property reports for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Cloud PC related reports.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ReportsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property reports in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: CloudPcReports, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Cloud PC related reports.
 */
export interface ReportsRequestBuilderGetQueryParameters {
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
export const ReportsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/virtualEndpoint/reports{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ReportsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ReportsRequestBuilderNavigationMetadata: Record<Exclude<keyof ReportsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    getRealTimeRemoteConnectionLatencyWithCloudPcId: {
        requestsMetadata: GetRealTimeRemoteConnectionLatencyWithCloudPcIdRequestBuilderRequestsMetadata,
    },
    getRealTimeRemoteConnectionStatusWithCloudPcId: {
        requestsMetadata: GetRealTimeRemoteConnectionStatusWithCloudPcIdRequestBuilderRequestsMetadata,
    },
    exportJobs: {
        requestsMetadata: ExportJobsRequestBuilderRequestsMetadata,
        navigationMetadata: ExportJobsRequestBuilderNavigationMetadata,
    },
    getActionStatusReports: {
        requestsMetadata: GetActionStatusReportsRequestBuilderRequestsMetadata,
    },
    getCloudPcPerformanceReport: {
        requestsMetadata: GetCloudPcPerformanceReportRequestBuilderRequestsMetadata,
    },
    getCloudPcRecommendationReports: {
        requestsMetadata: GetCloudPcRecommendationReportsRequestBuilderRequestsMetadata,
    },
    getConnectionQualityReports: {
        requestsMetadata: GetConnectionQualityReportsRequestBuilderRequestsMetadata,
    },
    getDailyAggregatedRemoteConnectionReports: {
        requestsMetadata: GetDailyAggregatedRemoteConnectionReportsRequestBuilderRequestsMetadata,
    },
    getFrontlineReport: {
        requestsMetadata: GetFrontlineReportRequestBuilderRequestsMetadata,
    },
    getInaccessibleCloudPcReports: {
        requestsMetadata: GetInaccessibleCloudPcReportsRequestBuilderRequestsMetadata,
    },
    getRawRemoteConnectionReports: {
        requestsMetadata: GetRawRemoteConnectionReportsRequestBuilderRequestsMetadata,
    },
    getRemoteConnectionHistoricalReports: {
        requestsMetadata: GetRemoteConnectionHistoricalReportsRequestBuilderRequestsMetadata,
    },
    getSharedUseLicenseUsageReport: {
        requestsMetadata: GetSharedUseLicenseUsageReportRequestBuilderRequestsMetadata,
    },
    getTotalAggregatedRemoteConnectionReports: {
        requestsMetadata: GetTotalAggregatedRemoteConnectionReportsRequestBuilderRequestsMetadata,
    },
    retrieveCrossRegionDisasterRecoveryReport: {
        requestsMetadata: RetrieveCrossRegionDisasterRecoveryReportRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ReportsRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ReportsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ReportsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudPcReportsFromDiscriminatorValue,
        queryParametersMapper: ReportsRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ReportsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudPcReportsFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCloudPcReports,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
