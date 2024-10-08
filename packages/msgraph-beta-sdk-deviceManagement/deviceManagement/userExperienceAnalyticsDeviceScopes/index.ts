/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserExperienceAnalyticsDeviceScopeCollectionResponseFromDiscriminatorValue, createUserExperienceAnalyticsDeviceScopeFromDiscriminatorValue, serializeUserExperienceAnalyticsDeviceScope, type UserExperienceAnalyticsDeviceScope, type UserExperienceAnalyticsDeviceScopeCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { type UserExperienceAnalyticsDeviceScopeItemRequestBuilder, UserExperienceAnalyticsDeviceScopeItemRequestBuilderNavigationMetadata, UserExperienceAnalyticsDeviceScopeItemRequestBuilderRequestsMetadata } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsDeviceScopes property of the microsoft.graph.deviceManagement entity.
 */
export interface UserExperienceAnalyticsDeviceScopesRequestBuilder extends BaseRequestBuilder<UserExperienceAnalyticsDeviceScopesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the userExperienceAnalyticsDeviceScopes property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsDeviceScopeId The unique identifier of userExperienceAnalyticsDeviceScope
     * @returns {UserExperienceAnalyticsDeviceScopeItemRequestBuilder}
     */
     byUserExperienceAnalyticsDeviceScopeId(userExperienceAnalyticsDeviceScopeId: string) : UserExperienceAnalyticsDeviceScopeItemRequestBuilder;
    /**
     * The user experience analytics device scope entity contains device scope configuration use to apply filtering on the endpoint analytics reports.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserExperienceAnalyticsDeviceScopeCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsDeviceScopesRequestBuilderGetQueryParameters> | undefined) : Promise<UserExperienceAnalyticsDeviceScopeCollectionResponse | undefined>;
    /**
     * Create new navigation property to userExperienceAnalyticsDeviceScopes for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserExperienceAnalyticsDeviceScope>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: UserExperienceAnalyticsDeviceScope, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UserExperienceAnalyticsDeviceScope | undefined>;
    /**
     * The user experience analytics device scope entity contains device scope configuration use to apply filtering on the endpoint analytics reports.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsDeviceScopesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to userExperienceAnalyticsDeviceScopes for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: UserExperienceAnalyticsDeviceScope, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The user experience analytics device scope entity contains device scope configuration use to apply filtering on the endpoint analytics reports.
 */
export interface UserExperienceAnalyticsDeviceScopesRequestBuilderGetQueryParameters {
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
export const UserExperienceAnalyticsDeviceScopesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/userExperienceAnalyticsDeviceScopes{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UserExperienceAnalyticsDeviceScopesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const UserExperienceAnalyticsDeviceScopesRequestBuilderNavigationMetadata: Record<Exclude<keyof UserExperienceAnalyticsDeviceScopesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUserExperienceAnalyticsDeviceScopeId: {
        requestsMetadata: UserExperienceAnalyticsDeviceScopeItemRequestBuilderRequestsMetadata,
        navigationMetadata: UserExperienceAnalyticsDeviceScopeItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["userExperienceAnalyticsDeviceScope%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserExperienceAnalyticsDeviceScopesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: UserExperienceAnalyticsDeviceScopesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserExperienceAnalyticsDeviceScopeCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UserExperienceAnalyticsDeviceScopesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: UserExperienceAnalyticsDeviceScopesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserExperienceAnalyticsDeviceScopeFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUserExperienceAnalyticsDeviceScope,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
