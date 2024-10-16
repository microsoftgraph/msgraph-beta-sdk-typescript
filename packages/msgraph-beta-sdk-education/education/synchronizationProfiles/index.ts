/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEducationSynchronizationProfileCollectionResponseFromDiscriminatorValue, createEducationSynchronizationProfileFromDiscriminatorValue, serializeEducationSynchronizationProfile, type EducationSynchronizationProfile, type EducationSynchronizationProfileCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { EducationSynchronizationProfileItemRequestBuilderNavigationMetadata, EducationSynchronizationProfileItemRequestBuilderRequestsMetadata, type EducationSynchronizationProfileItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the synchronizationProfiles property of the microsoft.graph.educationRoot entity.
 */
export interface SynchronizationProfilesRequestBuilder extends BaseRequestBuilder<SynchronizationProfilesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the synchronizationProfiles property of the microsoft.graph.educationRoot entity.
     * @param educationSynchronizationProfileId The unique identifier of educationSynchronizationProfile
     * @returns {EducationSynchronizationProfileItemRequestBuilder}
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
     byEducationSynchronizationProfileId(educationSynchronizationProfileId: string) : EducationSynchronizationProfileItemRequestBuilder;
    /**
     * Retrieve the collection of school data synchronization profiles in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationSynchronizationProfileCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     * @see {@link https://learn.microsoft.com/graph/api/educationsynchronizationprofile-list?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<SynchronizationProfilesRequestBuilderGetQueryParameters> | undefined) : Promise<EducationSynchronizationProfileCollectionResponse | undefined>;
    /**
     * Create new navigation property to synchronizationProfiles for education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationSynchronizationProfile>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
     post(body: EducationSynchronizationProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EducationSynchronizationProfile | undefined>;
    /**
     * Retrieve the collection of school data synchronization profiles in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SynchronizationProfilesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to synchronizationProfiles for education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
     toPostRequestInformation(body: EducationSynchronizationProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the collection of school data synchronization profiles in the tenant.
 */
export interface SynchronizationProfilesRequestBuilderGetQueryParameters {
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
export const SynchronizationProfilesRequestBuilderUriTemplate = "{+baseurl}/education/synchronizationProfiles{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SynchronizationProfilesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const SynchronizationProfilesRequestBuilderNavigationMetadata: Record<Exclude<keyof SynchronizationProfilesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byEducationSynchronizationProfileId: {
        requestsMetadata: EducationSynchronizationProfileItemRequestBuilderRequestsMetadata,
        navigationMetadata: EducationSynchronizationProfileItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["educationSynchronizationProfile%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SynchronizationProfilesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: SynchronizationProfilesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationSynchronizationProfileCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: SynchronizationProfilesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: SynchronizationProfilesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationSynchronizationProfileFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEducationSynchronizationProfile,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
