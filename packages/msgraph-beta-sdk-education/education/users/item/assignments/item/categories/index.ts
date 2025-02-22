/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEducationCategoryCollectionResponseFromDiscriminatorValue, createEducationCategoryFromDiscriminatorValue, serializeEducationCategory, type EducationCategory, type EducationCategoryCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { DeltaRequestBuilderRequestsMetadata, type DeltaRequestBuilder } from './delta/index.js';
// @ts-ignore
import { EducationCategoryItemRequestBuilderNavigationMetadata, type EducationCategoryItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { RefRequestBuilderRequestsMetadata, type RefRequestBuilder } from './ref/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the categories property of the microsoft.graph.educationAssignment entity.
 */
export interface CategoriesRequestBuilder extends BaseRequestBuilder<CategoriesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the delta method.
     */
    get delta(): DeltaRequestBuilder;
    /**
     * Provides operations to manage the collection of educationRoot entities.
     */
    get ref(): RefRequestBuilder;
    /**
     * Gets an item from the github.com/microsoftgraph/msgraph-sdk-typescript/.education.users.item.assignments.item.categories.item collection
     * @param educationCategoryId The unique identifier of educationCategory
     * @returns {EducationCategoryItemRequestBuilder}
     */
     byEducationCategoryId(educationCategoryId: string) : EducationCategoryItemRequestBuilder;
    /**
     * When set, enables users to easily find assignments of a given type.  Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationCategoryCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<CategoriesRequestBuilderGetQueryParameters> | undefined) : Promise<EducationCategoryCollectionResponse | undefined>;
    /**
     * Create new navigation property to categories for education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationCategory>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: EducationCategory, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EducationCategory | undefined>;
    /**
     * When set, enables users to easily find assignments of a given type.  Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CategoriesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to categories for education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: EducationCategory, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * When set, enables users to easily find assignments of a given type.  Read-only. Nullable.
 */
export interface CategoriesRequestBuilderGetQueryParameters {
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
export const CategoriesRequestBuilderUriTemplate = "{+baseurl}/education/users/{educationUser%2Did}/assignments/{educationAssignment%2Did}/categories{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CategoriesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const CategoriesRequestBuilderNavigationMetadata: Record<Exclude<keyof CategoriesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byEducationCategoryId: {
        navigationMetadata: EducationCategoryItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["educationCategory%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    delta: {
        requestsMetadata: DeltaRequestBuilderRequestsMetadata,
    },
    ref: {
        requestsMetadata: RefRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CategoriesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: CategoriesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationCategoryCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CategoriesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: CategoriesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationCategoryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEducationCategory,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
