/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserExperienceAnalyticsAnomalyCollectionResponseFromDiscriminatorValue, createUserExperienceAnalyticsAnomalyFromDiscriminatorValue, serializeUserExperienceAnalyticsAnomaly, type UserExperienceAnalyticsAnomaly, type UserExperienceAnalyticsAnomalyCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { type UserExperienceAnalyticsAnomalyItemRequestBuilder, UserExperienceAnalyticsAnomalyItemRequestBuilderRequestsMetadata } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsAnomaly property of the microsoft.graph.deviceManagement entity.
 */
export interface UserExperienceAnalyticsAnomalyRequestBuilder extends BaseRequestBuilder<UserExperienceAnalyticsAnomalyRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the userExperienceAnalyticsAnomaly property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsAnomalyId The unique identifier of userExperienceAnalyticsAnomaly
     * @returns {UserExperienceAnalyticsAnomalyItemRequestBuilder}
     */
     byUserExperienceAnalyticsAnomalyId(userExperienceAnalyticsAnomalyId: string) : UserExperienceAnalyticsAnomalyItemRequestBuilder;
    /**
     * The user experience analytics anomaly entity contains anomaly details.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserExperienceAnalyticsAnomalyCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsAnomalyRequestBuilderGetQueryParameters> | undefined) : Promise<UserExperienceAnalyticsAnomalyCollectionResponse | undefined>;
    /**
     * Create new navigation property to userExperienceAnalyticsAnomaly for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserExperienceAnalyticsAnomaly>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: UserExperienceAnalyticsAnomaly, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UserExperienceAnalyticsAnomaly | undefined>;
    /**
     * The user experience analytics anomaly entity contains anomaly details.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsAnomalyRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to userExperienceAnalyticsAnomaly for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: UserExperienceAnalyticsAnomaly, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The user experience analytics anomaly entity contains anomaly details.
 */
export interface UserExperienceAnalyticsAnomalyRequestBuilderGetQueryParameters {
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
export const UserExperienceAnalyticsAnomalyRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/userExperienceAnalyticsAnomaly{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UserExperienceAnalyticsAnomalyRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const UserExperienceAnalyticsAnomalyRequestBuilderNavigationMetadata: Record<Exclude<keyof UserExperienceAnalyticsAnomalyRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUserExperienceAnalyticsAnomalyId: {
        requestsMetadata: UserExperienceAnalyticsAnomalyItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["userExperienceAnalyticsAnomaly%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserExperienceAnalyticsAnomalyRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: UserExperienceAnalyticsAnomalyRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserExperienceAnalyticsAnomalyCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UserExperienceAnalyticsAnomalyRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: UserExperienceAnalyticsAnomalyRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserExperienceAnalyticsAnomalyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUserExperienceAnalyticsAnomaly,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
