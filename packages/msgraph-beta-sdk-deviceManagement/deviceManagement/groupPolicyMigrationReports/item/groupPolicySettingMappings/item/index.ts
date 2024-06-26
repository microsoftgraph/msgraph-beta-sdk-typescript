/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createGroupPolicySettingMappingFromDiscriminatorValue, serializeGroupPolicySettingMapping, type GroupPolicySettingMapping } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the groupPolicySettingMappings property of the microsoft.graph.groupPolicyMigrationReport entity.
 */
export interface GroupPolicySettingMappingItemRequestBuilder extends BaseRequestBuilder<GroupPolicySettingMappingItemRequestBuilder> {
    /**
     * Delete navigation property groupPolicySettingMappings for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A list of group policy settings to MDM/Intune mappings.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GroupPolicySettingMapping>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<GroupPolicySettingMappingItemRequestBuilderGetQueryParameters> | undefined) : Promise<GroupPolicySettingMapping | undefined>;
    /**
     * Update the navigation property groupPolicySettingMappings in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GroupPolicySettingMapping>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: GroupPolicySettingMapping, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GroupPolicySettingMapping | undefined>;
    /**
     * Delete navigation property groupPolicySettingMappings for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A list of group policy settings to MDM/Intune mappings.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GroupPolicySettingMappingItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property groupPolicySettingMappings in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: GroupPolicySettingMapping, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A list of group policy settings to MDM/Intune mappings.
 */
export interface GroupPolicySettingMappingItemRequestBuilderGetQueryParameters {
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
export const GroupPolicySettingMappingItemRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/groupPolicyMigrationReports/{groupPolicyMigrationReport%2Did}/groupPolicySettingMappings/{groupPolicySettingMapping%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GroupPolicySettingMappingItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GroupPolicySettingMappingItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: GroupPolicySettingMappingItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: GroupPolicySettingMappingItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGroupPolicySettingMappingFromDiscriminatorValue,
        queryParametersMapper: GroupPolicySettingMappingItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: GroupPolicySettingMappingItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGroupPolicySettingMappingFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGroupPolicySettingMapping,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
