/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDetectedAppFromDiscriminatorValue, serializeDetectedApp, type DetectedApp } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { ManagedDevicesRequestBuilderNavigationMetadata, ManagedDevicesRequestBuilderRequestsMetadata, ManagedDevicesRequestBuilderUriTemplate, type ManagedDevicesRequestBuilder } from './managedDevices/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the detectedApps property of the microsoft.graph.deviceManagement entity.
 */
export interface DetectedAppItemRequestBuilder extends BaseRequestBuilder<DetectedAppItemRequestBuilder> {
    /**
     * Provides operations to manage the managedDevices property of the microsoft.graph.detectedApp entity.
     */
    get managedDevices(): ManagedDevicesRequestBuilder;
    /**
     * Delete navigation property detectedApps for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The list of detected apps associated with a device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DetectedApp
     */
     get(requestConfiguration?: RequestConfiguration<DetectedAppItemRequestBuilderGetQueryParameters> | undefined) : Promise<DetectedApp | undefined>;
    /**
     * Update the navigation property detectedApps in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DetectedApp
     */
     patch(body: DetectedApp, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DetectedApp | undefined>;
    /**
     * Delete navigation property detectedApps for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The list of detected apps associated with a device.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DetectedAppItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property detectedApps in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: DetectedApp, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of detected apps associated with a device.
 */
export interface DetectedAppItemRequestBuilderGetQueryParameters {
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
const DetectedAppItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DetectedAppItemRequestBuilderNavigationMetadata: Record<Exclude<keyof DetectedAppItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    managedDevices: {
        uriTemplate: ManagedDevicesRequestBuilderUriTemplate,
        requestsMetadata: ManagedDevicesRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedDevicesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DetectedAppItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createDetectedAppFromDiscriminatorValue,
        queryParametersMapper: DetectedAppItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDetectedAppFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDetectedApp,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const DetectedAppItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/detectedApps/{detectedApp%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */