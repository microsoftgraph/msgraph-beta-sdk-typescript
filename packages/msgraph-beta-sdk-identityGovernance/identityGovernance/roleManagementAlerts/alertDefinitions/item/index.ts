/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUnifiedRoleManagementAlertDefinitionFromDiscriminatorValue, serializeUnifiedRoleManagementAlertDefinition, type UnifiedRoleManagementAlertDefinition } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the alertDefinitions property of the microsoft.graph.roleManagementAlert entity.
 */
export interface UnifiedRoleManagementAlertDefinitionItemRequestBuilder extends BaseRequestBuilder<UnifiedRoleManagementAlertDefinitionItemRequestBuilder> {
    /**
     * Delete navigation property alertDefinitions for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Defines an alert, its impact, and measures to mitigate or prevent it.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnifiedRoleManagementAlertDefinition>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<UnifiedRoleManagementAlertDefinitionItemRequestBuilderGetQueryParameters> | undefined) : Promise<UnifiedRoleManagementAlertDefinition | undefined>;
    /**
     * Update the navigation property alertDefinitions in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnifiedRoleManagementAlertDefinition>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: UnifiedRoleManagementAlertDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UnifiedRoleManagementAlertDefinition | undefined>;
    /**
     * Delete navigation property alertDefinitions for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Defines an alert, its impact, and measures to mitigate or prevent it.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UnifiedRoleManagementAlertDefinitionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property alertDefinitions in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: UnifiedRoleManagementAlertDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Defines an alert, its impact, and measures to mitigate or prevent it.
 */
export interface UnifiedRoleManagementAlertDefinitionItemRequestBuilderGetQueryParameters {
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
export const UnifiedRoleManagementAlertDefinitionItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UnifiedRoleManagementAlertDefinitionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UnifiedRoleManagementAlertDefinitionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: UnifiedRoleManagementAlertDefinitionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: UnifiedRoleManagementAlertDefinitionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnifiedRoleManagementAlertDefinitionFromDiscriminatorValue,
        queryParametersMapper: UnifiedRoleManagementAlertDefinitionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: UnifiedRoleManagementAlertDefinitionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnifiedRoleManagementAlertDefinitionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedRoleManagementAlertDefinition,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
