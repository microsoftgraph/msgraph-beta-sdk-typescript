/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createYearTimePeriodDefinitionCollectionResponseFromDiscriminatorValue, createYearTimePeriodDefinitionFromDiscriminatorValue, serializeYearTimePeriodDefinition, type YearTimePeriodDefinition, type YearTimePeriodDefinitionCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/industryData/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { type YearTimePeriodDefinitionItemRequestBuilder, YearTimePeriodDefinitionItemRequestBuilderRequestsMetadata, YearTimePeriodDefinitionItemRequestBuilderUriTemplate } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the years property of the microsoft.graph.industryData.industryDataRoot entity.
 */
export interface YearsRequestBuilder extends BaseRequestBuilder<YearsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the years property of the microsoft.graph.industryData.industryDataRoot entity.
     * @param yearTimePeriodDefinitionId The unique identifier of yearTimePeriodDefinition
     * @returns a YearTimePeriodDefinitionItemRequestBuilder
     */
     byYearTimePeriodDefinitionId(yearTimePeriodDefinitionId: string) : YearTimePeriodDefinitionItemRequestBuilder;
    /**
     * Get a list of the yearTimePeriodDefinition objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of YearTimePeriodDefinitionCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/industrydata-yeartimeperioddefinition-list?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<YearsRequestBuilderGetQueryParameters> | undefined) : Promise<YearTimePeriodDefinitionCollectionResponse | undefined>;
    /**
     * Create a new yearTimePeriodDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of YearTimePeriodDefinition
     * @see {@link https://learn.microsoft.com/graph/api/industrydata-yeartimeperioddefinition-post?view=graph-rest-1.0|Find more info here}
     */
     post(body: YearTimePeriodDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<YearTimePeriodDefinition | undefined>;
    /**
     * Get a list of the yearTimePeriodDefinition objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<YearsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new yearTimePeriodDefinition object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: YearTimePeriodDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the yearTimePeriodDefinition objects and their properties.
 */
export interface YearsRequestBuilderGetQueryParameters {
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
const YearsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const YearsRequestBuilderNavigationMetadata: Record<Exclude<keyof YearsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byYearTimePeriodDefinitionId: {
        uriTemplate: YearTimePeriodDefinitionItemRequestBuilderUriTemplate,
        requestsMetadata: YearTimePeriodDefinitionItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["yearTimePeriodDefinition%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const YearsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createYearTimePeriodDefinitionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: YearsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createYearTimePeriodDefinitionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeYearTimePeriodDefinition,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const YearsRequestBuilderUriTemplate = "{+baseurl}/external/industryData/years{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */