/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAndroidManagedAppProtectionFromDiscriminatorValue, serializeAndroidManagedAppProtection, type AndroidManagedAppProtection } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AppsRequestBuilderNavigationMetadata, AppsRequestBuilderRequestsMetadata, AppsRequestBuilderUriTemplate, type AppsRequestBuilder } from './apps/';
import { AssignmentsRequestBuilderNavigationMetadata, AssignmentsRequestBuilderRequestsMetadata, AssignmentsRequestBuilderUriTemplate, type AssignmentsRequestBuilder } from './assignments/';
import { DeploymentSummaryRequestBuilderRequestsMetadata, DeploymentSummaryRequestBuilderUriTemplate, type DeploymentSummaryRequestBuilder } from './deploymentSummary/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the androidManagedAppProtections property of the microsoft.graph.deviceAppManagement entity.
 */
export interface AndroidManagedAppProtectionItemRequestBuilder extends BaseRequestBuilder<AndroidManagedAppProtectionItemRequestBuilder> {
    /**
     * Provides operations to manage the apps property of the microsoft.graph.androidManagedAppProtection entity.
     */
    get apps(): AppsRequestBuilder;
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.targetedManagedAppProtection entity.
     */
    get assignments(): AssignmentsRequestBuilder;
    /**
     * Provides operations to manage the deploymentSummary property of the microsoft.graph.androidManagedAppProtection entity.
     */
    get deploymentSummary(): DeploymentSummaryRequestBuilder;
    /**
     * Delete navigation property androidManagedAppProtections for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Android managed app policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AndroidManagedAppProtection
     */
     get(requestConfiguration?: RequestConfiguration<AndroidManagedAppProtectionItemRequestBuilderGetQueryParameters> | undefined) : Promise<AndroidManagedAppProtection | undefined>;
    /**
     * Update the navigation property androidManagedAppProtections in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AndroidManagedAppProtection
     */
     patch(body: AndroidManagedAppProtection, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AndroidManagedAppProtection | undefined>;
    /**
     * Delete navigation property androidManagedAppProtections for deviceAppManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Android managed app policies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AndroidManagedAppProtectionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property androidManagedAppProtections in deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: AndroidManagedAppProtection, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Android managed app policies.
 */
export interface AndroidManagedAppProtectionItemRequestBuilderGetQueryParameters {
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
const AndroidManagedAppProtectionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AndroidManagedAppProtectionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof AndroidManagedAppProtectionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
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
export const AndroidManagedAppProtectionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createAndroidManagedAppProtectionFromDiscriminatorValue,
        queryParametersMapper: AndroidManagedAppProtectionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAndroidManagedAppProtectionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAndroidManagedAppProtection,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AndroidManagedAppProtectionItemRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */