/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createSecurityRequirementCollectionResponseFromDiscriminatorValue, createSecurityRequirementFromDiscriminatorValue, serializeSecurityRequirement, type SecurityRequirement, type SecurityRequirementCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/partner/security/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { SecurityRequirementItemRequestBuilderRequestsMetadata, type SecurityRequirementItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the requirements property of the microsoft.graph.partner.security.partnerSecurityScore entity.
 */
export interface RequirementsRequestBuilder extends BaseRequestBuilder<RequirementsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the requirements property of the microsoft.graph.partner.security.partnerSecurityScore entity.
     * @param securityRequirementId The unique identifier of securityRequirement
     * @returns {SecurityRequirementItemRequestBuilder}
     */
     bySecurityRequirementId(securityRequirementId: string) : SecurityRequirementItemRequestBuilder;
    /**
     * Get a list of securityRequirement objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SecurityRequirementCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/partner-security-partnersecurityscore-list-requirements?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<RequirementsRequestBuilderGetQueryParameters> | undefined) : Promise<SecurityRequirementCollectionResponse | undefined>;
    /**
     * Create new navigation property to requirements for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SecurityRequirement>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: SecurityRequirement, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SecurityRequirement | undefined>;
    /**
     * Get a list of securityRequirement objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RequirementsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to requirements for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: SecurityRequirement, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of securityRequirement objects and their properties.
 */
export interface RequirementsRequestBuilderGetQueryParameters {
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
export const RequirementsRequestBuilderUriTemplate = "{+baseurl}/security/partner/securityScore/requirements{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RequirementsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const RequirementsRequestBuilderNavigationMetadata: Record<Exclude<keyof RequirementsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    bySecurityRequirementId: {
        requestsMetadata: SecurityRequirementItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["securityRequirement%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RequirementsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: RequirementsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSecurityRequirementCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: RequirementsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: RequirementsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSecurityRequirementFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSecurityRequirement,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */