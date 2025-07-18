/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createTeamsUserConfigurationCollectionResponseFromDiscriminatorValue, createTeamsUserConfigurationFromDiscriminatorValue, serializeTeamsUserConfiguration, type TeamsUserConfiguration, type TeamsUserConfigurationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/teamsAdministration/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { TeamsUserConfigurationItemRequestBuilderNavigationMetadata, TeamsUserConfigurationItemRequestBuilderRequestsMetadata, type TeamsUserConfigurationItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userConfigurations property of the microsoft.graph.teamsAdministration.teamsAdminRoot entity.
 */
export interface UserConfigurationsRequestBuilder extends BaseRequestBuilder<UserConfigurationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the userConfigurations property of the microsoft.graph.teamsAdministration.teamsAdminRoot entity.
     * @param teamsUserConfigurationId The unique identifier of teamsUserConfiguration
     * @returns {TeamsUserConfigurationItemRequestBuilder}
     */
     byTeamsUserConfigurationId(teamsUserConfigurationId: string) : TeamsUserConfigurationItemRequestBuilder;
    /**
     * Get user configurations for all Teams users who belong to a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TeamsUserConfigurationCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/teamsadministration-teamsadminroot-list-userconfigurations?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<UserConfigurationsRequestBuilderGetQueryParameters> | undefined) : Promise<TeamsUserConfigurationCollectionResponse | undefined>;
    /**
     * Create new navigation property to userConfigurations for admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TeamsUserConfiguration>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: TeamsUserConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TeamsUserConfiguration | undefined>;
    /**
     * Get user configurations for all Teams users who belong to a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserConfigurationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to userConfigurations for admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: TeamsUserConfiguration, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get user configurations for all Teams users who belong to a tenant.
 */
export interface UserConfigurationsRequestBuilderGetQueryParameters {
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
export const UserConfigurationsRequestBuilderUriTemplate = "{+baseurl}/admin/teams/userConfigurations{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UserConfigurationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const UserConfigurationsRequestBuilderNavigationMetadata: Record<Exclude<keyof UserConfigurationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byTeamsUserConfigurationId: {
        requestsMetadata: TeamsUserConfigurationItemRequestBuilderRequestsMetadata,
        navigationMetadata: TeamsUserConfigurationItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["teamsUserConfiguration%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserConfigurationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: UserConfigurationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTeamsUserConfigurationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UserConfigurationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: UserConfigurationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTeamsUserConfigurationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTeamsUserConfiguration,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
