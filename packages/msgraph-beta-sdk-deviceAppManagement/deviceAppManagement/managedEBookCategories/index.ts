/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createManagedEBookCategoryCollectionResponseFromDiscriminatorValue, createManagedEBookCategoryFromDiscriminatorValue, serializeManagedEBookCategory, type ManagedEBookCategory, type ManagedEBookCategoryCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { ManagedEBookCategoryItemRequestBuilderRequestsMetadata, ManagedEBookCategoryItemRequestBuilderUriTemplate, type ManagedEBookCategoryItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedEBookCategories property of the microsoft.graph.deviceAppManagement entity.
 */
export interface ManagedEBookCategoriesRequestBuilder extends BaseRequestBuilder<ManagedEBookCategoriesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the managedEBookCategories property of the microsoft.graph.deviceAppManagement entity.
     * @param managedEBookCategoryId The unique identifier of managedEBookCategory
     * @returns a ManagedEBookCategoryItemRequestBuilder
     */
     byManagedEBookCategoryId(managedEBookCategoryId: string) : ManagedEBookCategoryItemRequestBuilder;
    /**
     * The mobile eBook categories.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedEBookCategoryCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<ManagedEBookCategoriesRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedEBookCategoryCollectionResponse | undefined>;
    /**
     * Create new navigation property to managedEBookCategories for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedEBookCategory
     */
     post(body: ManagedEBookCategory, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagedEBookCategory | undefined>;
    /**
     * The mobile eBook categories.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagedEBookCategoriesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to managedEBookCategories for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: ManagedEBookCategory, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The mobile eBook categories.
 */
export interface ManagedEBookCategoriesRequestBuilderGetQueryParameters {
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
const ManagedEBookCategoriesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ManagedEBookCategoriesRequestBuilderNavigationMetadata: Record<Exclude<keyof ManagedEBookCategoriesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byManagedEBookCategoryId: {
        uriTemplate: ManagedEBookCategoryItemRequestBuilderUriTemplate,
        requestsMetadata: ManagedEBookCategoryItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["managedEBookCategory%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagedEBookCategoriesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createManagedEBookCategoryCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ManagedEBookCategoriesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createManagedEBookCategoryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagedEBookCategory,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ManagedEBookCategoriesRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/managedEBookCategories{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */