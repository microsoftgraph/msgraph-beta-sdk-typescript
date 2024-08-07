/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAppCredentialSignInActivityCollectionResponseFromDiscriminatorValue, createAppCredentialSignInActivityFromDiscriminatorValue, serializeAppCredentialSignInActivity, type AppCredentialSignInActivity, type AppCredentialSignInActivityCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { AppCredentialSignInActivityItemRequestBuilderRequestsMetadata, type AppCredentialSignInActivityItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appCredentialSignInActivities property of the microsoft.graph.reportRoot entity.
 */
export interface AppCredentialSignInActivitiesRequestBuilder extends BaseRequestBuilder<AppCredentialSignInActivitiesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the appCredentialSignInActivities property of the microsoft.graph.reportRoot entity.
     * @param appCredentialSignInActivityId The unique identifier of appCredentialSignInActivity
     * @returns {AppCredentialSignInActivityItemRequestBuilder}
     */
     byAppCredentialSignInActivityId(appCredentialSignInActivityId: string) : AppCredentialSignInActivityItemRequestBuilder;
    /**
     * Get a list of appCredentialSignInActivity objects that contains recent activity of application credentials.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AppCredentialSignInActivityCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/reportroot-list-appcredentialsigninactivities?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AppCredentialSignInActivitiesRequestBuilderGetQueryParameters> | undefined) : Promise<AppCredentialSignInActivityCollectionResponse | undefined>;
    /**
     * Create new navigation property to appCredentialSignInActivities for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AppCredentialSignInActivity>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: AppCredentialSignInActivity, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AppCredentialSignInActivity | undefined>;
    /**
     * Get a list of appCredentialSignInActivity objects that contains recent activity of application credentials.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AppCredentialSignInActivitiesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to appCredentialSignInActivities for reports
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AppCredentialSignInActivity, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of appCredentialSignInActivity objects that contains recent activity of application credentials.
 */
export interface AppCredentialSignInActivitiesRequestBuilderGetQueryParameters {
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
export const AppCredentialSignInActivitiesRequestBuilderUriTemplate = "{+baseurl}/reports/appCredentialSignInActivities{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AppCredentialSignInActivitiesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AppCredentialSignInActivitiesRequestBuilderNavigationMetadata: Record<Exclude<keyof AppCredentialSignInActivitiesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAppCredentialSignInActivityId: {
        requestsMetadata: AppCredentialSignInActivityItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["appCredentialSignInActivity%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AppCredentialSignInActivitiesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AppCredentialSignInActivitiesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAppCredentialSignInActivityCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AppCredentialSignInActivitiesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: AppCredentialSignInActivitiesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAppCredentialSignInActivityFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAppCredentialSignInActivity,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
