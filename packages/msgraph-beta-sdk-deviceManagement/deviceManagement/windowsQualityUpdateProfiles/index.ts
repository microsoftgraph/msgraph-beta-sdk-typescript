/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createWindowsQualityUpdateProfileCollectionResponseFromDiscriminatorValue, createWindowsQualityUpdateProfileFromDiscriminatorValue, serializeWindowsQualityUpdateProfile, type WindowsQualityUpdateProfile, type WindowsQualityUpdateProfileCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { type WindowsQualityUpdateProfileItemRequestBuilder, WindowsQualityUpdateProfileItemRequestBuilderNavigationMetadata, WindowsQualityUpdateProfileItemRequestBuilderRequestsMetadata, WindowsQualityUpdateProfileItemRequestBuilderUriTemplate } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the windowsQualityUpdateProfiles property of the microsoft.graph.deviceManagement entity.
 */
export interface WindowsQualityUpdateProfilesRequestBuilder extends BaseRequestBuilder<WindowsQualityUpdateProfilesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the windowsQualityUpdateProfiles property of the microsoft.graph.deviceManagement entity.
     * @param windowsQualityUpdateProfileId The unique identifier of windowsQualityUpdateProfile
     * @returns a WindowsQualityUpdateProfileItemRequestBuilder
     */
     byWindowsQualityUpdateProfileId(windowsQualityUpdateProfileId: string) : WindowsQualityUpdateProfileItemRequestBuilder;
    /**
     * A collection of windows quality update profiles
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsQualityUpdateProfileCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<WindowsQualityUpdateProfilesRequestBuilderGetQueryParameters> | undefined) : Promise<WindowsQualityUpdateProfileCollectionResponse | undefined>;
    /**
     * Create new navigation property to windowsQualityUpdateProfiles for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WindowsQualityUpdateProfile
     */
     post(body: WindowsQualityUpdateProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WindowsQualityUpdateProfile | undefined>;
    /**
     * A collection of windows quality update profiles
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WindowsQualityUpdateProfilesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to windowsQualityUpdateProfiles for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: WindowsQualityUpdateProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A collection of windows quality update profiles
 */
export interface WindowsQualityUpdateProfilesRequestBuilderGetQueryParameters {
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
const WindowsQualityUpdateProfilesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const WindowsQualityUpdateProfilesRequestBuilderNavigationMetadata: Record<Exclude<keyof WindowsQualityUpdateProfilesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byWindowsQualityUpdateProfileId: {
        uriTemplate: WindowsQualityUpdateProfileItemRequestBuilderUriTemplate,
        requestsMetadata: WindowsQualityUpdateProfileItemRequestBuilderRequestsMetadata,
        navigationMetadata: WindowsQualityUpdateProfileItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["windowsQualityUpdateProfile%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WindowsQualityUpdateProfilesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWindowsQualityUpdateProfileCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: WindowsQualityUpdateProfilesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWindowsQualityUpdateProfileFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWindowsQualityUpdateProfile,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const WindowsQualityUpdateProfilesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/windowsQualityUpdateProfiles{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */