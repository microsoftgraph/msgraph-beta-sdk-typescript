/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEducationGradingSchemeCollectionResponseFromDiscriminatorValue, createEducationGradingSchemeFromDiscriminatorValue, serializeEducationGradingScheme, type EducationGradingScheme, type EducationGradingSchemeCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { EducationGradingSchemeItemRequestBuilderRequestsMetadata, type EducationGradingSchemeItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the gradingSchemes property of the microsoft.graph.educationAssignmentSettings entity.
 */
export interface GradingSchemesRequestBuilder extends BaseRequestBuilder<GradingSchemesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the gradingSchemes property of the microsoft.graph.educationAssignmentSettings entity.
     * @param educationGradingSchemeId The unique identifier of educationGradingScheme
     * @returns {EducationGradingSchemeItemRequestBuilder}
     */
     byEducationGradingSchemeId(educationGradingSchemeId: string) : EducationGradingSchemeItemRequestBuilder;
    /**
     * Read the properties and relationships of an educationGradingScheme object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationGradingSchemeCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<GradingSchemesRequestBuilderGetQueryParameters> | undefined) : Promise<EducationGradingSchemeCollectionResponse | undefined>;
    /**
     * Create a new educationGradingScheme object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationGradingScheme>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/educationgradingscheme-post?view=graph-rest-beta|Find more info here}
     */
     post(body: EducationGradingScheme, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EducationGradingScheme | undefined>;
    /**
     * Read the properties and relationships of an educationGradingScheme object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<GradingSchemesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new educationGradingScheme object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: EducationGradingScheme, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of an educationGradingScheme object.
 */
export interface GradingSchemesRequestBuilderGetQueryParameters {
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
export const GradingSchemesRequestBuilderUriTemplate = "{+baseurl}/education/classes/{educationClass%2Did}/assignmentSettings/gradingSchemes{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const GradingSchemesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const GradingSchemesRequestBuilderNavigationMetadata: Record<Exclude<keyof GradingSchemesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byEducationGradingSchemeId: {
        requestsMetadata: EducationGradingSchemeItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["educationGradingScheme%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const GradingSchemesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: GradingSchemesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationGradingSchemeCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: GradingSchemesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: GradingSchemesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationGradingSchemeFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEducationGradingScheme,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
