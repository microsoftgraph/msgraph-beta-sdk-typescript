/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createTeamTemplateFromDiscriminatorValue, serializeTeamTemplate, type TeamTemplate } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { DefinitionsRequestBuilderNavigationMetadata, DefinitionsRequestBuilderRequestsMetadata, DefinitionsRequestBuilderUriTemplate, type DefinitionsRequestBuilder } from './definitions/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the teamTemplates property of the microsoft.graph.teamwork entity.
 */
export interface TeamTemplateItemRequestBuilder extends BaseRequestBuilder<TeamTemplateItemRequestBuilder> {
    /**
     * Provides operations to manage the definitions property of the microsoft.graph.teamTemplate entity.
     */
    get definitions(): DefinitionsRequestBuilder;
    /**
     * Delete navigation property teamTemplates for teamwork
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The templates associated with a team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamTemplate
     */
     get(requestConfiguration?: RequestConfiguration<TeamTemplateItemRequestBuilderGetQueryParameters> | undefined) : Promise<TeamTemplate | undefined>;
    /**
     * Update the navigation property teamTemplates in teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TeamTemplate
     */
     patch(body: TeamTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TeamTemplate | undefined>;
    /**
     * Delete navigation property teamTemplates for teamwork
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The templates associated with a team.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TeamTemplateItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property teamTemplates in teamwork
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: TeamTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The templates associated with a team.
 */
export interface TeamTemplateItemRequestBuilderGetQueryParameters {
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
const TeamTemplateItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TeamTemplateItemRequestBuilderNavigationMetadata: Record<Exclude<keyof TeamTemplateItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    definitions: {
        uriTemplate: DefinitionsRequestBuilderUriTemplate,
        requestsMetadata: DefinitionsRequestBuilderRequestsMetadata,
        navigationMetadata: DefinitionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TeamTemplateItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createTeamTemplateFromDiscriminatorValue,
        queryParametersMapper: TeamTemplateItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTeamTemplateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTeamTemplate,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const TeamTemplateItemRequestBuilderUriTemplate = "{+baseurl}/teamwork/teamTemplates/{teamTemplate%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */