/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createGovernanceRoleSettingFromDiscriminatorValue, type GovernanceRoleSetting } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleSetting property of the microsoft.graph.governanceRoleDefinition entity.
 */
export interface RoleSettingRequestBuilder extends BaseRequestBuilder<RoleSettingRequestBuilder> {
    /**
     * The associated role setting for the role definition.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<GovernanceRoleSetting>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<RoleSettingRequestBuilderGetQueryParameters> | undefined) : Promise<GovernanceRoleSetting | undefined>;
    /**
     * The associated role setting for the role definition.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RoleSettingRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The associated role setting for the role definition.
 */
export interface RoleSettingRequestBuilderGetQueryParameters {
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
export const RoleSettingRequestBuilderUriTemplate = "{+baseurl}/privilegedAccess/{privilegedAccess%2Did}/resources/{governanceResource%2Did}/roleSettings/{governanceRoleSetting%2Did}/roleDefinition/roleSetting{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RoleSettingRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RoleSettingRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: RoleSettingRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createGovernanceRoleSettingFromDiscriminatorValue,
        queryParametersMapper: RoleSettingRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
