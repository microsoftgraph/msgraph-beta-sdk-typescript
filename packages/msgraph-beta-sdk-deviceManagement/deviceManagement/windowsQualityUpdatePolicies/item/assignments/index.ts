/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWindowsQualityUpdatePolicyAssignmentCollectionResponseFromDiscriminatorValue, createWindowsQualityUpdatePolicyAssignmentFromDiscriminatorValue, serializeWindowsQualityUpdatePolicyAssignment, type WindowsQualityUpdatePolicyAssignment, type WindowsQualityUpdatePolicyAssignmentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/';
// @ts-ignore
import { type WindowsQualityUpdatePolicyAssignmentItemRequestBuilder, WindowsQualityUpdatePolicyAssignmentItemRequestBuilderRequestsMetadata } from './item/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.windowsQualityUpdatePolicy entity.
 */
export interface AssignmentsRequestBuilder extends BaseRequestBuilder<AssignmentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.windowsQualityUpdatePolicy entity.
     * @param windowsQualityUpdatePolicyAssignmentId The unique identifier of windowsQualityUpdatePolicyAssignment
     * @returns {WindowsQualityUpdatePolicyAssignmentItemRequestBuilder}
     */
     byWindowsQualityUpdatePolicyAssignmentId(windowsQualityUpdatePolicyAssignmentId: string) : WindowsQualityUpdatePolicyAssignmentItemRequestBuilder;
    /**
     * List of the groups this profile is assgined to.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WindowsQualityUpdatePolicyAssignmentCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AssignmentsRequestBuilderGetQueryParameters> | undefined) : Promise<WindowsQualityUpdatePolicyAssignmentCollectionResponse | undefined>;
    /**
     * Create new navigation property to assignments for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WindowsQualityUpdatePolicyAssignment>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: WindowsQualityUpdatePolicyAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WindowsQualityUpdatePolicyAssignment | undefined>;
    /**
     * List of the groups this profile is assgined to.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AssignmentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to assignments for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: WindowsQualityUpdatePolicyAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List of the groups this profile is assgined to.
 */
export interface AssignmentsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const AssignmentsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy%2Did}/assignments{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AssignmentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AssignmentsRequestBuilderNavigationMetadata: Record<Exclude<keyof AssignmentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byWindowsQualityUpdatePolicyAssignmentId: {
        requestsMetadata: WindowsQualityUpdatePolicyAssignmentItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["windowsQualityUpdatePolicyAssignment%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AssignmentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AssignmentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWindowsQualityUpdatePolicyAssignmentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AssignmentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: AssignmentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWindowsQualityUpdatePolicyAssignmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWindowsQualityUpdatePolicyAssignment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */