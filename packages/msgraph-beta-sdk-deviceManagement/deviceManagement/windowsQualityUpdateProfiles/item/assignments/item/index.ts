/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWindowsQualityUpdateProfileAssignmentFromDiscriminatorValue, serializeWindowsQualityUpdateProfileAssignment, type WindowsQualityUpdateProfileAssignment } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.windowsQualityUpdateProfile entity.
 */
export interface WindowsQualityUpdateProfileAssignmentItemRequestBuilder extends BaseRequestBuilder<WindowsQualityUpdateProfileAssignmentItemRequestBuilder> {
    /**
     * Delete navigation property assignments for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The list of group assignments of the profile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WindowsQualityUpdateProfileAssignment>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<WindowsQualityUpdateProfileAssignmentItemRequestBuilderGetQueryParameters> | undefined) : Promise<WindowsQualityUpdateProfileAssignment | undefined>;
    /**
     * Update the navigation property assignments in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WindowsQualityUpdateProfileAssignment>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: WindowsQualityUpdateProfileAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WindowsQualityUpdateProfileAssignment | undefined>;
    /**
     * Delete navigation property assignments for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The list of group assignments of the profile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WindowsQualityUpdateProfileAssignmentItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property assignments in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: WindowsQualityUpdateProfileAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of group assignments of the profile.
 */
export interface WindowsQualityUpdateProfileAssignmentItemRequestBuilderGetQueryParameters {
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
export const WindowsQualityUpdateProfileAssignmentItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/windowsQualityUpdateProfiles/{windowsQualityUpdateProfile%2Did}/assignments/{windowsQualityUpdateProfileAssignment%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const WindowsQualityUpdateProfileAssignmentItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WindowsQualityUpdateProfileAssignmentItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: WindowsQualityUpdateProfileAssignmentItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: WindowsQualityUpdateProfileAssignmentItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWindowsQualityUpdateProfileAssignmentFromDiscriminatorValue,
        queryParametersMapper: WindowsQualityUpdateProfileAssignmentItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: WindowsQualityUpdateProfileAssignmentItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWindowsQualityUpdateProfileAssignmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWindowsQualityUpdateProfileAssignment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
