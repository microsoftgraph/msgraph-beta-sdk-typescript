/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDeviceHealthScriptFromDiscriminatorValue, serializeDeviceHealthScript, type DeviceHealthScript } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AssignRequestBuilderRequestsMetadata, AssignRequestBuilderUriTemplate, type AssignRequestBuilder } from './assign/';
import { AssignmentsRequestBuilderNavigationMetadata, AssignmentsRequestBuilderRequestsMetadata, AssignmentsRequestBuilderUriTemplate, type AssignmentsRequestBuilder } from './assignments/';
import { DeviceRunStatesRequestBuilderNavigationMetadata, DeviceRunStatesRequestBuilderRequestsMetadata, DeviceRunStatesRequestBuilderUriTemplate, type DeviceRunStatesRequestBuilder } from './deviceRunStates/';
import { GetGlobalScriptHighestAvailableVersionRequestBuilderRequestsMetadata, GetGlobalScriptHighestAvailableVersionRequestBuilderUriTemplate, type GetGlobalScriptHighestAvailableVersionRequestBuilder } from './getGlobalScriptHighestAvailableVersion/';
import { GetRemediationHistoryRequestBuilderRequestsMetadata, GetRemediationHistoryRequestBuilderUriTemplate, type GetRemediationHistoryRequestBuilder } from './getRemediationHistory/';
import { RunSummaryRequestBuilderRequestsMetadata, RunSummaryRequestBuilderUriTemplate, type RunSummaryRequestBuilder } from './runSummary/';
import { type UpdateGlobalScriptRequestBuilder, UpdateGlobalScriptRequestBuilderRequestsMetadata, UpdateGlobalScriptRequestBuilderUriTemplate } from './updateGlobalScript/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the deviceHealthScripts property of the microsoft.graph.deviceManagement entity.
 */
export interface DeviceHealthScriptItemRequestBuilder extends BaseRequestBuilder<DeviceHealthScriptItemRequestBuilder> {
    /**
     * Provides operations to call the assign method.
     */
    get assign(): AssignRequestBuilder;
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.deviceHealthScript entity.
     */
    get assignments(): AssignmentsRequestBuilder;
    /**
     * Provides operations to manage the deviceRunStates property of the microsoft.graph.deviceHealthScript entity.
     */
    get deviceRunStates(): DeviceRunStatesRequestBuilder;
    /**
     * Provides operations to call the getGlobalScriptHighestAvailableVersion method.
     */
    get getGlobalScriptHighestAvailableVersion(): GetGlobalScriptHighestAvailableVersionRequestBuilder;
    /**
     * Provides operations to call the getRemediationHistory method.
     */
    get getRemediationHistory(): GetRemediationHistoryRequestBuilder;
    /**
     * Provides operations to manage the runSummary property of the microsoft.graph.deviceHealthScript entity.
     */
    get runSummary(): RunSummaryRequestBuilder;
    /**
     * Provides operations to call the updateGlobalScript method.
     */
    get updateGlobalScript(): UpdateGlobalScriptRequestBuilder;
    /**
     * Delete navigation property deviceHealthScripts for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The list of device health scripts associated with the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceHealthScript
     */
     get(requestConfiguration?: RequestConfiguration<DeviceHealthScriptItemRequestBuilderGetQueryParameters> | undefined) : Promise<DeviceHealthScript | undefined>;
    /**
     * Update the navigation property deviceHealthScripts in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DeviceHealthScript
     */
     patch(body: DeviceHealthScript, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DeviceHealthScript | undefined>;
    /**
     * Delete navigation property deviceHealthScripts for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The list of device health scripts associated with the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DeviceHealthScriptItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property deviceHealthScripts in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: DeviceHealthScript, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of device health scripts associated with the tenant.
 */
export interface DeviceHealthScriptItemRequestBuilderGetQueryParameters {
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
const DeviceHealthScriptItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DeviceHealthScriptItemRequestBuilderNavigationMetadata: Record<Exclude<keyof DeviceHealthScriptItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    assign: {
        uriTemplate: AssignRequestBuilderUriTemplate,
        requestsMetadata: AssignRequestBuilderRequestsMetadata,
    },
    assignments: {
        uriTemplate: AssignmentsRequestBuilderUriTemplate,
        requestsMetadata: AssignmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AssignmentsRequestBuilderNavigationMetadata,
    },
    deviceRunStates: {
        uriTemplate: DeviceRunStatesRequestBuilderUriTemplate,
        requestsMetadata: DeviceRunStatesRequestBuilderRequestsMetadata,
        navigationMetadata: DeviceRunStatesRequestBuilderNavigationMetadata,
    },
    getGlobalScriptHighestAvailableVersion: {
        uriTemplate: GetGlobalScriptHighestAvailableVersionRequestBuilderUriTemplate,
        requestsMetadata: GetGlobalScriptHighestAvailableVersionRequestBuilderRequestsMetadata,
    },
    getRemediationHistory: {
        uriTemplate: GetRemediationHistoryRequestBuilderUriTemplate,
        requestsMetadata: GetRemediationHistoryRequestBuilderRequestsMetadata,
    },
    runSummary: {
        uriTemplate: RunSummaryRequestBuilderUriTemplate,
        requestsMetadata: RunSummaryRequestBuilderRequestsMetadata,
    },
    updateGlobalScript: {
        uriTemplate: UpdateGlobalScriptRequestBuilderUriTemplate,
        requestsMetadata: UpdateGlobalScriptRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DeviceHealthScriptItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createDeviceHealthScriptFromDiscriminatorValue,
        queryParametersMapper: DeviceHealthScriptItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDeviceHealthScriptFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDeviceHealthScript,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const DeviceHealthScriptItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/deviceHealthScripts/{deviceHealthScript%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */