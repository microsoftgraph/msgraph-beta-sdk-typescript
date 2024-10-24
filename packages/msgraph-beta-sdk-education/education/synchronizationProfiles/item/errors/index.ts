/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEducationSynchronizationErrorCollectionResponseFromDiscriminatorValue, createEducationSynchronizationErrorFromDiscriminatorValue, serializeEducationSynchronizationError, type EducationSynchronizationError, type EducationSynchronizationErrorCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { EducationSynchronizationErrorItemRequestBuilderRequestsMetadata, type EducationSynchronizationErrorItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the errors property of the microsoft.graph.educationSynchronizationProfile entity.
 */
export interface ErrorsRequestBuilder extends BaseRequestBuilder<ErrorsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the errors property of the microsoft.graph.educationSynchronizationProfile entity.
     * @param educationSynchronizationErrorId The unique identifier of educationSynchronizationError
     * @returns {EducationSynchronizationErrorItemRequestBuilder}
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
     byEducationSynchronizationErrorId(educationSynchronizationErrorId: string) : EducationSynchronizationErrorItemRequestBuilder;
    /**
     * Get the errors generated during validation and/or during a sync of a specific school data synchronization profile in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationSynchronizationErrorCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     * @see {@link https://learn.microsoft.com/graph/api/educationsynchronizationerrors-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ErrorsRequestBuilderGetQueryParameters> | undefined) : Promise<EducationSynchronizationErrorCollectionResponse | undefined>;
    /**
     * Create new navigation property to errors for education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationSynchronizationError>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
     post(body: EducationSynchronizationError, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EducationSynchronizationError | undefined>;
    /**
     * Get the errors generated during validation and/or during a sync of a specific school data synchronization profile in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ErrorsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to errors for education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
     toPostRequestInformation(body: EducationSynchronizationError, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the errors generated during validation and/or during a sync of a specific school data synchronization profile in the tenant.
 */
export interface ErrorsRequestBuilderGetQueryParameters {
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
export const ErrorsRequestBuilderUriTemplate = "{+baseurl}/education/synchronizationProfiles/{educationSynchronizationProfile%2Did}/errors{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ErrorsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ErrorsRequestBuilderNavigationMetadata: Record<Exclude<keyof ErrorsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byEducationSynchronizationErrorId: {
        requestsMetadata: EducationSynchronizationErrorItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["educationSynchronizationError%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ErrorsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ErrorsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationSynchronizationErrorCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ErrorsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ErrorsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationSynchronizationErrorFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEducationSynchronizationError,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
