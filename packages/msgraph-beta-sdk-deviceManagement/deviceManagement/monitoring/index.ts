/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMonitoringFromDiscriminatorValue, serializeMonitoring, type Monitoring } from '@microsoft/msgraph-beta-sdk/models/deviceManagement/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AlertRecordsRequestBuilderNavigationMetadata, AlertRecordsRequestBuilderRequestsMetadata, AlertRecordsRequestBuilderUriTemplate, type AlertRecordsRequestBuilder } from './alertRecords/';
import { AlertRulesRequestBuilderNavigationMetadata, AlertRulesRequestBuilderRequestsMetadata, AlertRulesRequestBuilderUriTemplate, type AlertRulesRequestBuilder } from './alertRules/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the monitoring property of the microsoft.graph.deviceManagement entity.
 */
export interface MonitoringRequestBuilder extends BaseRequestBuilder<MonitoringRequestBuilder> {
    /**
     * Provides operations to manage the alertRecords property of the microsoft.graph.deviceManagement.monitoring entity.
     */
    get alertRecords(): AlertRecordsRequestBuilder;
    /**
     * Provides operations to manage the alertRules property of the microsoft.graph.deviceManagement.monitoring entity.
     */
    get alertRules(): AlertRulesRequestBuilder;
    /**
     * Delete navigation property monitoring for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get monitoring from deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Monitoring
     */
     get(requestConfiguration?: RequestConfiguration<MonitoringRequestBuilderGetQueryParameters> | undefined) : Promise<Monitoring | undefined>;
    /**
     * Update the navigation property monitoring in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Monitoring
     */
     patch(body: Monitoring, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Monitoring | undefined>;
    /**
     * Delete navigation property monitoring for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get monitoring from deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MonitoringRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property monitoring in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: Monitoring, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get monitoring from deviceManagement
 */
export interface MonitoringRequestBuilderGetQueryParameters {
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
const MonitoringRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MonitoringRequestBuilderNavigationMetadata: Record<Exclude<keyof MonitoringRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    alertRecords: {
        uriTemplate: AlertRecordsRequestBuilderUriTemplate,
        requestsMetadata: AlertRecordsRequestBuilderRequestsMetadata,
        navigationMetadata: AlertRecordsRequestBuilderNavigationMetadata,
    },
    alertRules: {
        uriTemplate: AlertRulesRequestBuilderUriTemplate,
        requestsMetadata: AlertRulesRequestBuilderRequestsMetadata,
        navigationMetadata: AlertRulesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MonitoringRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createMonitoringFromDiscriminatorValue,
        queryParametersMapper: MonitoringRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMonitoringFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMonitoring,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const MonitoringRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/monitoring{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */