/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWindowsQualityUpdatePolicyFromDiscriminatorValue, serializeWindowsQualityUpdatePolicy, type WindowsQualityUpdatePolicy } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AssignRequestBuilderRequestsMetadata, type AssignRequestBuilder } from './assign/index.js';
// @ts-ignore
import { AssignmentsRequestBuilderNavigationMetadata, AssignmentsRequestBuilderRequestsMetadata, type AssignmentsRequestBuilder } from './assignments/index.js';
// @ts-ignore
import { BulkActionRequestBuilderRequestsMetadata, type BulkActionRequestBuilder } from './bulkAction/index.js';
// @ts-ignore
import { RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsRequestBuilderRequestsMetadata, type RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsRequestBuilder } from './retrieveWindowsQualityUpdateCatalogItemDetailsWithIds/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsQualityUpdatePolicies property of the microsoft.graph.deviceManagement entity.
 */
export interface WindowsQualityUpdatePolicyItemRequestBuilder extends BaseRequestBuilder<WindowsQualityUpdatePolicyItemRequestBuilder> {
    /**
     * Provides operations to call the assign method.
     */
    get assign(): AssignRequestBuilder;
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.windowsQualityUpdatePolicy entity.
     */
    get assignments(): AssignmentsRequestBuilder;
    /**
     * Provides operations to call the bulkAction method.
     */
    get bulkAction(): BulkActionRequestBuilder;
    /**
     * Delete navigation property windowsQualityUpdatePolicies for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A collection of Windows quality update policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WindowsQualityUpdatePolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<WindowsQualityUpdatePolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<WindowsQualityUpdatePolicy | undefined>;
    /**
     * Update the navigation property windowsQualityUpdatePolicies in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WindowsQualityUpdatePolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: WindowsQualityUpdatePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WindowsQualityUpdatePolicy | undefined>;
    /**
     * Provides operations to call the retrieveWindowsQualityUpdateCatalogItemDetails method.
     * @param ids Usage: ids={ids}
     * @returns {RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsRequestBuilder}
     */
     retrieveWindowsQualityUpdateCatalogItemDetailsWithIds(ids: string | undefined) : RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsRequestBuilder;
    /**
     * Delete navigation property windowsQualityUpdatePolicies for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A collection of Windows quality update policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WindowsQualityUpdatePolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property windowsQualityUpdatePolicies in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: WindowsQualityUpdatePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A collection of Windows quality update policies
 */
export interface WindowsQualityUpdatePolicyItemRequestBuilderGetQueryParameters {
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
export const WindowsQualityUpdatePolicyItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const WindowsQualityUpdatePolicyItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WindowsQualityUpdatePolicyItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WindowsQualityUpdatePolicyItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    retrieveWindowsQualityUpdateCatalogItemDetailsWithIds: {
        requestsMetadata: RetrieveWindowsQualityUpdateCatalogItemDetailsWithIdsRequestBuilderRequestsMetadata,
        pathParametersMappings: ["ids"],
    },
    assign: {
        requestsMetadata: AssignRequestBuilderRequestsMetadata,
    },
    assignments: {
        requestsMetadata: AssignmentsRequestBuilderRequestsMetadata,
        navigationMetadata: AssignmentsRequestBuilderNavigationMetadata,
    },
    bulkAction: {
        requestsMetadata: BulkActionRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WindowsQualityUpdatePolicyItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: WindowsQualityUpdatePolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: WindowsQualityUpdatePolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWindowsQualityUpdatePolicyFromDiscriminatorValue,
        queryParametersMapper: WindowsQualityUpdatePolicyItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: WindowsQualityUpdatePolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWindowsQualityUpdatePolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWindowsQualityUpdatePolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
