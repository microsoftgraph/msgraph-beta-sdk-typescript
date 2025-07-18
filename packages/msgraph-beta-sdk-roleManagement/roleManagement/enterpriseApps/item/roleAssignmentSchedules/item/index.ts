/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUnifiedRoleAssignmentScheduleFromDiscriminatorValue, serializeUnifiedRoleAssignmentSchedule, type UnifiedRoleAssignmentSchedule } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ActivatedUsingRequestBuilderRequestsMetadata, type ActivatedUsingRequestBuilder } from './activatedUsing/index.js';
// @ts-ignore
import { AppScopeRequestBuilderRequestsMetadata, type AppScopeRequestBuilder } from './appScope/index.js';
// @ts-ignore
import { DirectoryScopeRequestBuilderRequestsMetadata, type DirectoryScopeRequestBuilder } from './directoryScope/index.js';
// @ts-ignore
import { PrincipalRequestBuilderRequestsMetadata, type PrincipalRequestBuilder } from './principal/index.js';
// @ts-ignore
import { RoleDefinitionRequestBuilderRequestsMetadata, type RoleDefinitionRequestBuilder } from './roleDefinition/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleAssignmentSchedules property of the microsoft.graph.rbacApplication entity.
 */
export interface UnifiedRoleAssignmentScheduleItemRequestBuilder extends BaseRequestBuilder<UnifiedRoleAssignmentScheduleItemRequestBuilder> {
    /**
     * Provides operations to manage the activatedUsing property of the microsoft.graph.unifiedRoleAssignmentSchedule entity.
     * @deprecated This version is being deprecated and is scheduled for removal on 2025-12-01.Please migrate to the latest version before the removal date. as of 2025-01/PrivatePreview:microsoft.applicationAuthorization on 2025-01-01 and will be removed 2025-12-01
     */
    get activatedUsing(): ActivatedUsingRequestBuilder;
    /**
     * Provides operations to manage the appScope property of the microsoft.graph.unifiedRoleScheduleBase entity.
     * @deprecated This version is being deprecated and is scheduled for removal on 2025-12-01.Please migrate to the latest version before the removal date. as of 2025-01/PrivatePreview:microsoft.applicationAuthorization on 2025-01-01 and will be removed 2025-12-01
     */
    get appScope(): AppScopeRequestBuilder;
    /**
     * Provides operations to manage the directoryScope property of the microsoft.graph.unifiedRoleScheduleBase entity.
     * @deprecated This version is being deprecated and is scheduled for removal on 2025-12-01.Please migrate to the latest version before the removal date. as of 2025-01/PrivatePreview:microsoft.applicationAuthorization on 2025-01-01 and will be removed 2025-12-01
     */
    get directoryScope(): DirectoryScopeRequestBuilder;
    /**
     * Provides operations to manage the principal property of the microsoft.graph.unifiedRoleScheduleBase entity.
     * @deprecated This version is being deprecated and is scheduled for removal on 2025-12-01.Please migrate to the latest version before the removal date. as of 2025-01/PrivatePreview:microsoft.applicationAuthorization on 2025-01-01 and will be removed 2025-12-01
     */
    get principal(): PrincipalRequestBuilder;
    /**
     * Provides operations to manage the roleDefinition property of the microsoft.graph.unifiedRoleScheduleBase entity.
     * @deprecated This version is being deprecated and is scheduled for removal on 2025-12-01.Please migrate to the latest version before the removal date. as of 2025-01/PrivatePreview:microsoft.applicationAuthorization on 2025-01-01 and will be removed 2025-12-01
     */
    get roleDefinition(): RoleDefinitionRequestBuilder;
    /**
     * Delete navigation property roleAssignmentSchedules for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated This version is being deprecated and is scheduled for removal on 2025-12-01.Please migrate to the latest version before the removal date. as of 2025-01/PrivatePreview:microsoft.applicationAuthorization on 2025-01-01 and will be removed 2025-12-01
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get roleAssignmentSchedules from roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnifiedRoleAssignmentSchedule>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated This version is being deprecated and is scheduled for removal on 2025-12-01.Please migrate to the latest version before the removal date. as of 2025-01/PrivatePreview:microsoft.applicationAuthorization on 2025-01-01 and will be removed 2025-12-01
     */
     get(requestConfiguration?: RequestConfiguration<UnifiedRoleAssignmentScheduleItemRequestBuilderGetQueryParameters> | undefined) : Promise<UnifiedRoleAssignmentSchedule | undefined>;
    /**
     * Update the navigation property roleAssignmentSchedules in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnifiedRoleAssignmentSchedule>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated This version is being deprecated and is scheduled for removal on 2025-12-01.Please migrate to the latest version before the removal date. as of 2025-01/PrivatePreview:microsoft.applicationAuthorization on 2025-01-01 and will be removed 2025-12-01
     */
     patch(body: UnifiedRoleAssignmentSchedule, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UnifiedRoleAssignmentSchedule | undefined>;
    /**
     * Delete navigation property roleAssignmentSchedules for roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated This version is being deprecated and is scheduled for removal on 2025-12-01.Please migrate to the latest version before the removal date. as of 2025-01/PrivatePreview:microsoft.applicationAuthorization on 2025-01-01 and will be removed 2025-12-01
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get roleAssignmentSchedules from roleManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated This version is being deprecated and is scheduled for removal on 2025-12-01.Please migrate to the latest version before the removal date. as of 2025-01/PrivatePreview:microsoft.applicationAuthorization on 2025-01-01 and will be removed 2025-12-01
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UnifiedRoleAssignmentScheduleItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property roleAssignmentSchedules in roleManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated This version is being deprecated and is scheduled for removal on 2025-12-01.Please migrate to the latest version before the removal date. as of 2025-01/PrivatePreview:microsoft.applicationAuthorization on 2025-01-01 and will be removed 2025-12-01
     */
     toPatchRequestInformation(body: UnifiedRoleAssignmentSchedule, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get roleAssignmentSchedules from roleManagement
 */
export interface UnifiedRoleAssignmentScheduleItemRequestBuilderGetQueryParameters {
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
export const UnifiedRoleAssignmentScheduleItemRequestBuilderUriTemplate = "{+baseurl}/roleManagement/enterpriseApps/{rbacApplication%2Did}/roleAssignmentSchedules/{unifiedRoleAssignmentSchedule%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UnifiedRoleAssignmentScheduleItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const UnifiedRoleAssignmentScheduleItemRequestBuilderNavigationMetadata: Record<Exclude<keyof UnifiedRoleAssignmentScheduleItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    activatedUsing: {
        requestsMetadata: ActivatedUsingRequestBuilderRequestsMetadata,
    },
    appScope: {
        requestsMetadata: AppScopeRequestBuilderRequestsMetadata,
    },
    directoryScope: {
        requestsMetadata: DirectoryScopeRequestBuilderRequestsMetadata,
    },
    principal: {
        requestsMetadata: PrincipalRequestBuilderRequestsMetadata,
    },
    roleDefinition: {
        requestsMetadata: RoleDefinitionRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UnifiedRoleAssignmentScheduleItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: UnifiedRoleAssignmentScheduleItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: UnifiedRoleAssignmentScheduleItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnifiedRoleAssignmentScheduleFromDiscriminatorValue,
        queryParametersMapper: UnifiedRoleAssignmentScheduleItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: UnifiedRoleAssignmentScheduleItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnifiedRoleAssignmentScheduleFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnifiedRoleAssignmentSchedule,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
