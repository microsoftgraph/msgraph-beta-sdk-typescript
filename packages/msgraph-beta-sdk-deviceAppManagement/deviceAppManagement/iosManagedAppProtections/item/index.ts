/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createIosManagedAppProtectionFromDiscriminatorValue, serializeIosManagedAppProtection, type IosManagedAppProtection } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AppsRequestBuilderNavigationMetadata, AppsRequestBuilderRequestsMetadata, AppsRequestBuilderUriTemplate, type AppsRequestBuilder } from './apps/';
import { AssignmentsRequestBuilderNavigationMetadata, AssignmentsRequestBuilderRequestsMetadata, AssignmentsRequestBuilderUriTemplate, type AssignmentsRequestBuilder } from './assignments/';
import { DeploymentSummaryRequestBuilderRequestsMetadata, DeploymentSummaryRequestBuilderUriTemplate, type DeploymentSummaryRequestBuilder } from './deploymentSummary/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the iosManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
 */
export interface IosManagedAppProtectionItemRequestBuilder extends BaseRequestBuilder<IosManagedAppProtectionItemRequestBuilder> {
    /**
     * Provides operations to manage the apps property of the microsoft.graph.iosManagedAppProtection entity.
     */
    get apps(): AppsRequestBuilder;
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.targetedManagedAppProtection entity.
     */
    get assignments(): AssignmentsRequestBuilder;
    /**
     * Provides operations to manage the deploymentSummary property of the microsoft.graph.iosManagedAppProtection entity.
     */
    get deploymentSummary(): DeploymentSummaryRequestBuilder;
    /**
     * Delete navigation property iosManagedAppProtections for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * iOS managed app policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IosManagedAppProtection
     */
     get(requestConfiguration?: RequestConfiguration<IosManagedAppProtectionItemRequestBuilderGetQueryParameters> | undefined) : Promise<IosManagedAppProtection | undefined>;
    /**
     * Update the navigation property iosManagedAppProtections in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IosManagedAppProtection
     */
     patch(body: IosManagedAppProtection, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<IosManagedAppProtection | undefined>;
    /**
     * Delete navigation property iosManagedAppProtections for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * iOS managed app policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<IosManagedAppProtectionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property iosManagedAppProtections in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: IosManagedAppProtection, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * iOS managed app policies.
 */
export interface IosManagedAppProtectionItemRequestBuilderGetQueryParameters {
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
const IosManagedAppProtectionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const IosManagedAppProtectionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof IosManagedAppProtectionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    apps: {
        uriTemplate: AppsRequestBuilderUriTemplate,
        requestsMetadata: AppsRequestBuilderRequestsMetadata,
        navigationMetadata: AppsRequestBuilderNavigationMetadata,
    },
    assignments: {
        uriTemplate: AssignmentsRequestBuilderUriTemplate,
        requestsMetadata: AssignmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AssignmentsRequestBuilderNavigationMetadata,
    },
    deploymentSummary: {
        uriTemplate: DeploymentSummaryRequestBuilderUriTemplate,
        requestsMetadata: DeploymentSummaryRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const IosManagedAppProtectionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createIosManagedAppProtectionFromDiscriminatorValue,
        queryParametersMapper: IosManagedAppProtectionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createIosManagedAppProtectionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeIosManagedAppProtection,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const IosManagedAppProtectionItemRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */