/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUserExperienceAnalyticsAnomalyDeviceCollectionResponseFromDiscriminatorValue, createUserExperienceAnalyticsAnomalyDeviceFromDiscriminatorValue, serializeUserExperienceAnalyticsAnomalyDevice, type UserExperienceAnalyticsAnomalyDevice, type UserExperienceAnalyticsAnomalyDeviceCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { type UserExperienceAnalyticsAnomalyDeviceItemRequestBuilder, UserExperienceAnalyticsAnomalyDeviceItemRequestBuilderRequestsMetadata, UserExperienceAnalyticsAnomalyDeviceItemRequestBuilderUriTemplate } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userExperienceAnalyticsAnomalyDevice property of the microsoft.graph.deviceManagement entity.
 */
export interface UserExperienceAnalyticsAnomalyDeviceRequestBuilder extends BaseRequestBuilder<UserExperienceAnalyticsAnomalyDeviceRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the userExperienceAnalyticsAnomalyDevice property of the microsoft.graph.deviceManagement entity.
     * @param userExperienceAnalyticsAnomalyDeviceId The unique identifier of userExperienceAnalyticsAnomalyDevice
     * @returns a UserExperienceAnalyticsAnomalyDeviceItemRequestBuilder
     */
     byUserExperienceAnalyticsAnomalyDeviceId(userExperienceAnalyticsAnomalyDeviceId: string) : UserExperienceAnalyticsAnomalyDeviceItemRequestBuilder;
    /**
     * The user experience analytics anomaly entity contains device details.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAnomalyDeviceCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsAnomalyDeviceRequestBuilderGetQueryParameters> | undefined) : Promise<UserExperienceAnalyticsAnomalyDeviceCollectionResponse | undefined>;
    /**
     * Create new navigation property to userExperienceAnalyticsAnomalyDevice for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserExperienceAnalyticsAnomalyDevice
     */
     post(body: UserExperienceAnalyticsAnomalyDevice, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UserExperienceAnalyticsAnomalyDevice | undefined>;
    /**
     * The user experience analytics anomaly entity contains device details.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserExperienceAnalyticsAnomalyDeviceRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to userExperienceAnalyticsAnomalyDevice for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UserExperienceAnalyticsAnomalyDevice, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The user experience analytics anomaly entity contains device details.
 */
export interface UserExperienceAnalyticsAnomalyDeviceRequestBuilderGetQueryParameters {
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
const UserExperienceAnalyticsAnomalyDeviceRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const UserExperienceAnalyticsAnomalyDeviceRequestBuilderNavigationMetadata: Record<Exclude<keyof UserExperienceAnalyticsAnomalyDeviceRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUserExperienceAnalyticsAnomalyDeviceId: {
        uriTemplate: UserExperienceAnalyticsAnomalyDeviceItemRequestBuilderUriTemplate,
        requestsMetadata: UserExperienceAnalyticsAnomalyDeviceItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["userExperienceAnalyticsAnomalyDevice%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserExperienceAnalyticsAnomalyDeviceRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUserExperienceAnalyticsAnomalyDeviceCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UserExperienceAnalyticsAnomalyDeviceRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUserExperienceAnalyticsAnomalyDeviceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUserExperienceAnalyticsAnomalyDevice,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UserExperienceAnalyticsAnomalyDeviceRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/userExperienceAnalyticsAnomalyDevice{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */