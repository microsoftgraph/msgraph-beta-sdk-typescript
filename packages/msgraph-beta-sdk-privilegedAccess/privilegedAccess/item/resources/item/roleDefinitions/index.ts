/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createGovernanceRoleDefinitionCollectionResponseFromDiscriminatorValue, createGovernanceRoleDefinitionFromDiscriminatorValue, serializeGovernanceRoleDefinition, type GovernanceRoleDefinition, type GovernanceRoleDefinitionCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { GovernanceRoleDefinitionItemRequestBuilderNavigationMetadata, GovernanceRoleDefinitionItemRequestBuilderRequestsMetadata, GovernanceRoleDefinitionItemRequestBuilderUriTemplate, type GovernanceRoleDefinitionItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the roleDefinitions property of the microsoft.graph.governanceResource entity.
 */
export interface RoleDefinitionsRequestBuilder extends BaseRequestBuilder<RoleDefinitionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the roleDefinitions property of the microsoft.graph.governanceResource entity.
     * @param governanceRoleDefinitionId The unique identifier of governanceRoleDefinition
     * @returns a GovernanceRoleDefinitionItemRequestBuilder
     */
     byGovernanceRoleDefinitionId(governanceRoleDefinitionId: string) : GovernanceRoleDefinitionItemRequestBuilder;
    /**
     * The collection of role definitions for the resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GovernanceRoleDefinitionCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<RoleDefinitionsRequestBuilderGetQueryParameters> | undefined) : Promise<GovernanceRoleDefinitionCollectionResponse | undefined>;
    /**
     * Create new navigation property to roleDefinitions for privilegedAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of GovernanceRoleDefinition
     */
     post(body: GovernanceRoleDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<GovernanceRoleDefinition | undefined>;
    /**
     * The collection of role definitions for the resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RoleDefinitionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to roleDefinitions for privilegedAccess
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: GovernanceRoleDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of role definitions for the resource.
 */
export interface RoleDefinitionsRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RoleDefinitionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const RoleDefinitionsRequestBuilderNavigationMetadata: Record<Exclude<keyof RoleDefinitionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byGovernanceRoleDefinitionId: {
        uriTemplate: GovernanceRoleDefinitionItemRequestBuilderUriTemplate,
        requestsMetadata: GovernanceRoleDefinitionItemRequestBuilderRequestsMetadata,
        navigationMetadata: GovernanceRoleDefinitionItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["governanceRoleDefinition%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RoleDefinitionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createGovernanceRoleDefinitionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: RoleDefinitionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
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
export const RoleDefinitionsRequestBuilderUriTemplate = "{+baseurl}/privilegedAccess/{privilegedAccess%2Did}/resources/{governanceResource%2Did}/roleDefinitions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */