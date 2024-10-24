/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createLearningProviderCollectionResponseFromDiscriminatorValue, createLearningProviderFromDiscriminatorValue, serializeLearningProvider, type LearningProvider, type LearningProviderCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { LearningProviderItemRequestBuilderNavigationMetadata, LearningProviderItemRequestBuilderRequestsMetadata, type LearningProviderItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the learningProviders property of the microsoft.graph.employeeExperience entity.
 */
export interface LearningProvidersRequestBuilder extends BaseRequestBuilder<LearningProvidersRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the learningProviders property of the microsoft.graph.employeeExperience entity.
     * @param learningProviderId The unique identifier of learningProvider
     * @returns {LearningProviderItemRequestBuilder}
     */
     byLearningProviderId(learningProviderId: string) : LearningProviderItemRequestBuilder;
    /**
     * Get a list of the learningProvider resources registered in Viva Learning for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<LearningProviderCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/employeeexperience-list-learningproviders?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<LearningProvidersRequestBuilderGetQueryParameters> | undefined) : Promise<LearningProviderCollectionResponse | undefined>;
    /**
     * Create a new learningProvider object and register it with Viva Learning using the specified display name and logos for different themes.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<LearningProvider>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/employeeexperience-post-learningproviders?view=graph-rest-beta|Find more info here}
     */
     post(body: LearningProvider, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<LearningProvider | undefined>;
    /**
     * Get a list of the learningProvider resources registered in Viva Learning for a tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<LearningProvidersRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new learningProvider object and register it with Viva Learning using the specified display name and logos for different themes.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: LearningProvider, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the learningProvider resources registered in Viva Learning for a tenant.
 */
export interface LearningProvidersRequestBuilderGetQueryParameters {
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
export const LearningProvidersRequestBuilderUriTemplate = "{+baseurl}/employeeExperience/learningProviders{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const LearningProvidersRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const LearningProvidersRequestBuilderNavigationMetadata: Record<Exclude<keyof LearningProvidersRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byLearningProviderId: {
        requestsMetadata: LearningProviderItemRequestBuilderRequestsMetadata,
        navigationMetadata: LearningProviderItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["learningProvider%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const LearningProvidersRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: LearningProvidersRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createLearningProviderCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: LearningProvidersRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: LearningProvidersRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createLearningProviderFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeLearningProvider,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
