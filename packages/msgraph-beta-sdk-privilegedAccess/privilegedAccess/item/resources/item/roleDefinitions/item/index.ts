/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createGovernanceRoleDefinitionFromDiscriminatorValue, serializeGovernanceRoleDefinition, type GovernanceRoleDefinition } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { ResourceRequestBuilderRequestsMetadata, ResourceRequestBuilderUriTemplate, type ResourceRequestBuilder } from './resource/';
import { RoleSettingRequestBuilderRequestsMetadata, RoleSettingRequestBuilderUriTemplate, type RoleSettingRequestBuilder } from './roleSetting/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleDefinitions property of the microsoft.graph.governanceResource entity.
 */
export interface GovernanceRoleDefinitionItemRequestBuilder extends BaseRequestBuilder<GovernanceRoleDefinitionItemRequestBuilder> {
    /**
     * Provides operations to manage the resource property of the microsoft.graph.governanceRoleDefinition entity.
     */
    get resource(): ResourceRequestBuilder;
    /**
     * Provides operations to manage the roleSetting property of the microsoft.graph.governanceRoleDefinition entity.
     */
    get roleSetting(): RoleSettingRequestBuilder;
    /**
     * Delete navigation property roleDefinitions for privilegedAccess
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The collection of role definitions for the resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GovernanceRoleDefinition
     */
     get(requestConfiguration?: RequestConfiguration<GovernanceRoleDefinitionItemRequestBuilderGetQueryParameters> | undefined) : Promise<GovernanceRoleDefinition | undefined>;
    /**
     * Update the navigation property roleDefinitions in privilegedAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GovernanceRoleDefinition
     */
     patch(body: GovernanceRoleDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GovernanceRoleDefinition | undefined>;
    /**
     * Delete navigation property roleDefinitions for privilegedAccess
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The collection of role definitions for the resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GovernanceRoleDefinitionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property roleDefinitions in privilegedAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: GovernanceRoleDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of role definitions for the resource.
 */
export interface GovernanceRoleDefinitionItemRequestBuilderGetQueryParameters {
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
const GovernanceRoleDefinitionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const GovernanceRoleDefinitionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof GovernanceRoleDefinitionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    resource: {
        uriTemplate: ResourceRequestBuilderUriTemplate,
        requestsMetadata: ResourceRequestBuilderRequestsMetadata,
    },
    roleSetting: {
        uriTemplate: RoleSettingRequestBuilderUriTemplate,
        requestsMetadata: RoleSettingRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GovernanceRoleDefinitionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createGovernanceRoleDefinitionFromDiscriminatorValue,
        queryParametersMapper: GovernanceRoleDefinitionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createGovernanceRoleDefinitionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeGovernanceRoleDefinition,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const GovernanceRoleDefinitionItemRequestBuilderUriTemplate = "{+baseurl}/privilegedAccess/{privilegedAccess%2Did}/resources/{governanceResource%2Did}/roleDefinitions/{governanceRoleDefinition%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */