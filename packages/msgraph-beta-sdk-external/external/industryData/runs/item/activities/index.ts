/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createIndustryDataRunActivityCollectionResponseFromDiscriminatorValue, type IndustryDataRunActivityCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/industryData/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { IndustryDataRunActivityItemRequestBuilderNavigationMetadata, IndustryDataRunActivityItemRequestBuilderRequestsMetadata, IndustryDataRunActivityItemRequestBuilderUriTemplate, type IndustryDataRunActivityItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the activities property of the microsoft.graph.industryData.industryDataRun entity.
 */
export interface ActivitiesRequestBuilder extends BaseRequestBuilder<ActivitiesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the activities property of the microsoft.graph.industryData.industryDataRun entity.
     * @param industryDataRunActivityId The unique identifier of industryDataRunActivity
     * @returns a IndustryDataRunActivityItemRequestBuilder
     */
     byIndustryDataRunActivityId(industryDataRunActivityId: string) : IndustryDataRunActivityItemRequestBuilder;
    /**
     * The set of activities performed during the run.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IndustryDataRunActivityCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<ActivitiesRequestBuilderGetQueryParameters> | undefined) : Promise<IndustryDataRunActivityCollectionResponse | undefined>;
    /**
     * The set of activities performed during the run.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ActivitiesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The set of activities performed during the run.
 */
export interface ActivitiesRequestBuilderGetQueryParameters {
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
const ActivitiesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ActivitiesRequestBuilderNavigationMetadata: Record<Exclude<keyof ActivitiesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byIndustryDataRunActivityId: {
        uriTemplate: IndustryDataRunActivityItemRequestBuilderUriTemplate,
        requestsMetadata: IndustryDataRunActivityItemRequestBuilderRequestsMetadata,
        navigationMetadata: IndustryDataRunActivityItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["industryDataRunActivity%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ActivitiesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createIndustryDataRunActivityCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ActivitiesRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const ActivitiesRequestBuilderUriTemplate = "{+baseurl}/external/industryData/runs/{industryDataRun%2Did}/activities{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */