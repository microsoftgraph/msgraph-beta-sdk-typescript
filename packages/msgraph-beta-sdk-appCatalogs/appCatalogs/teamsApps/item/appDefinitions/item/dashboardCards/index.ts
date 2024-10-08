/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTeamsAppDashboardCardDefinitionCollectionResponseFromDiscriminatorValue, createTeamsAppDashboardCardDefinitionFromDiscriminatorValue, serializeTeamsAppDashboardCardDefinition, type TeamsAppDashboardCardDefinition, type TeamsAppDashboardCardDefinitionCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { TeamsAppDashboardCardDefinitionItemRequestBuilderRequestsMetadata, type TeamsAppDashboardCardDefinitionItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the dashboardCards property of the microsoft.graph.teamsAppDefinition entity.
 */
export interface DashboardCardsRequestBuilder extends BaseRequestBuilder<DashboardCardsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the dashboardCards property of the microsoft.graph.teamsAppDefinition entity.
     * @param teamsAppDashboardCardDefinitionId The unique identifier of teamsAppDashboardCardDefinition
     * @returns {TeamsAppDashboardCardDefinitionItemRequestBuilder}
     */
     byTeamsAppDashboardCardDefinitionId(teamsAppDashboardCardDefinitionId: string) : TeamsAppDashboardCardDefinitionItemRequestBuilder;
    /**
     * Dashboard cards specified in the Teams app manifest.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TeamsAppDashboardCardDefinitionCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DashboardCardsRequestBuilderGetQueryParameters> | undefined) : Promise<TeamsAppDashboardCardDefinitionCollectionResponse | undefined>;
    /**
     * Create new navigation property to dashboardCards for appCatalogs
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TeamsAppDashboardCardDefinition>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: TeamsAppDashboardCardDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TeamsAppDashboardCardDefinition | undefined>;
    /**
     * Dashboard cards specified in the Teams app manifest.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DashboardCardsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to dashboardCards for appCatalogs
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: TeamsAppDashboardCardDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Dashboard cards specified in the Teams app manifest.
 */
export interface DashboardCardsRequestBuilderGetQueryParameters {
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
export const DashboardCardsRequestBuilderUriTemplate = "{+baseurl}/appCatalogs/teamsApps/{teamsApp%2Did}/appDefinitions/{teamsAppDefinition%2Did}/dashboardCards{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DashboardCardsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const DashboardCardsRequestBuilderNavigationMetadata: Record<Exclude<keyof DashboardCardsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byTeamsAppDashboardCardDefinitionId: {
        requestsMetadata: TeamsAppDashboardCardDefinitionItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["teamsAppDashboardCardDefinition%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DashboardCardsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DashboardCardsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTeamsAppDashboardCardDefinitionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DashboardCardsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: DashboardCardsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTeamsAppDashboardCardDefinitionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTeamsAppDashboardCardDefinition,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
