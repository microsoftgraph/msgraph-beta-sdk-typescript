/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTeamTemplateDefinitionFromDiscriminatorValue, type TeamTemplateDefinition } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the templateDefinition property of the microsoft.graph.team entity.
 */
export interface TemplateDefinitionRequestBuilder extends BaseRequestBuilder<TemplateDefinitionRequestBuilder> {
    /**
     * Generic representation of a team template definition for a team with a specific structure and configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TeamTemplateDefinition>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<TemplateDefinitionRequestBuilderGetQueryParameters> | undefined) : Promise<TeamTemplateDefinition | undefined>;
    /**
     * Generic representation of a team template definition for a team with a specific structure and configuration.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TemplateDefinitionRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Generic representation of a team template definition for a team with a specific structure and configuration.
 */
export interface TemplateDefinitionRequestBuilderGetQueryParameters {
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
export const TemplateDefinitionRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/team/templateDefinition{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TemplateDefinitionRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TemplateDefinitionRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: TemplateDefinitionRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createTeamTemplateDefinitionFromDiscriminatorValue,
        queryParametersMapper: TemplateDefinitionRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
