/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createGroupPolicyMigrationReportFromDiscriminatorValue, serializeGroupPolicyMigrationReport, type GroupPolicyMigrationReport } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { GroupPolicySettingMappingsRequestBuilderNavigationMetadata, GroupPolicySettingMappingsRequestBuilderRequestsMetadata, type GroupPolicySettingMappingsRequestBuilder } from './groupPolicySettingMappings/index.js';
// @ts-ignore
import { type UnsupportedGroupPolicyExtensionsRequestBuilder, UnsupportedGroupPolicyExtensionsRequestBuilderNavigationMetadata, UnsupportedGroupPolicyExtensionsRequestBuilderRequestsMetadata } from './unsupportedGroupPolicyExtensions/index.js';
// @ts-ignore
import { type UpdateScopeTagsRequestBuilder, UpdateScopeTagsRequestBuilderRequestsMetadata } from './updateScopeTags/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the groupPolicyMigrationReports property of the microsoft.graph.deviceManagement entity.
 */
export interface GroupPolicyMigrationReportItemRequestBuilder extends BaseRequestBuilder<GroupPolicyMigrationReportItemRequestBuilder> {
    /**
     * Provides operations to manage the groupPolicySettingMappings property of the microsoft.graph.groupPolicyMigrationReport entity.
     */
    get groupPolicySettingMappings(): GroupPolicySettingMappingsRequestBuilder;
    /**
     * Provides operations to manage the unsupportedGroupPolicyExtensions property of the microsoft.graph.groupPolicyMigrationReport entity.
     */
    get unsupportedGroupPolicyExtensions(): UnsupportedGroupPolicyExtensionsRequestBuilder;
    /**
     * Provides operations to call the updateScopeTags method.
     */
    get updateScopeTags(): UpdateScopeTagsRequestBuilder;
    /**
     * Delete navigation property groupPolicyMigrationReports for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A list of Group Policy migration reports.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GroupPolicyMigrationReport>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<GroupPolicyMigrationReportItemRequestBuilderGetQueryParameters> | undefined) : Promise<GroupPolicyMigrationReport | undefined>;
    /**
     * Update the navigation property groupPolicyMigrationReports in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GroupPolicyMigrationReport>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: GroupPolicyMigrationReport, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GroupPolicyMigrationReport | undefined>;
    /**
     * Delete navigation property groupPolicyMigrationReports for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A list of Group Policy migration reports.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GroupPolicyMigrationReportItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property groupPolicyMigrationReports in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: GroupPolicyMigrationReport, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A list of Group Policy migration reports.
 */
export interface GroupPolicyMigrationReportItemRequestBuilderGetQueryParameters {
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
export const GroupPolicyMigrationReportItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GroupPolicyMigrationReportItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const GroupPolicyMigrationReportItemRequestBuilderNavigationMetadata: Record<Exclude<keyof GroupPolicyMigrationReportItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    groupPolicySettingMappings: {
        requestsMetadata: GroupPolicySettingMappingsRequestBuilderRequestsMetadata,
        navigationMetadata: GroupPolicySettingMappingsRequestBuilderNavigationMetadata,
    },
    unsupportedGroupPolicyExtensions: {
        requestsMetadata: UnsupportedGroupPolicyExtensionsRequestBuilderRequestsMetadata,
        navigationMetadata: UnsupportedGroupPolicyExtensionsRequestBuilderNavigationMetadata,
    },
    updateScopeTags: {
        requestsMetadata: UpdateScopeTagsRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GroupPolicyMigrationReportItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: GroupPolicyMigrationReportItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: GroupPolicyMigrationReportItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGroupPolicyMigrationReportFromDiscriminatorValue,
        queryParametersMapper: GroupPolicyMigrationReportItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: GroupPolicyMigrationReportItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGroupPolicyMigrationReportFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGroupPolicyMigrationReport,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
