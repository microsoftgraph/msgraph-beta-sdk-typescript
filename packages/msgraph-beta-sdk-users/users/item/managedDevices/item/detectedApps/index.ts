/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDetectedAppCollectionResponseFromDiscriminatorValue, type DetectedAppCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { DetectedAppItemRequestBuilderRequestsMetadata, DetectedAppItemRequestBuilderUriTemplate, type DetectedAppItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the detectedApps property of the microsoft.graph.managedDevice entity.
 */
export interface DetectedAppsRequestBuilder extends BaseRequestBuilder<DetectedAppsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the detectedApps property of the microsoft.graph.managedDevice entity.
     * @param detectedAppId The unique identifier of detectedApp
     * @returns a DetectedAppItemRequestBuilder
     */
     byDetectedAppId(detectedAppId: string) : DetectedAppItemRequestBuilder;
    /**
     * All applications currently installed on the device
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DetectedAppCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<DetectedAppsRequestBuilderGetQueryParameters> | undefined) : Promise<DetectedAppCollectionResponse | undefined>;
    /**
     * All applications currently installed on the device
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DetectedAppsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * All applications currently installed on the device
 */
export interface DetectedAppsRequestBuilderGetQueryParameters {
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
const DetectedAppsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const DetectedAppsRequestBuilderNavigationMetadata: Record<Exclude<keyof DetectedAppsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDetectedAppId: {
        uriTemplate: DetectedAppItemRequestBuilderUriTemplate,
        requestsMetadata: DetectedAppItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["detectedApp%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DetectedAppsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDetectedAppCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DetectedAppsRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const DetectedAppsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/managedDevices/{managedDevice%2Did}/detectedApps{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */