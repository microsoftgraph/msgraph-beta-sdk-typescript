/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMobileAppContentCollectionResponseFromDiscriminatorValue, createMobileAppContentFromDiscriminatorValue, serializeMobileAppContent, type MobileAppContent, type MobileAppContentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { MobileAppContentItemRequestBuilderNavigationMetadata, MobileAppContentItemRequestBuilderRequestsMetadata, MobileAppContentItemRequestBuilderUriTemplate, type MobileAppContentItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contentVersions property of the microsoft.graph.managedMobileLobApp entity.
 */
export interface ContentVersionsRequestBuilder extends BaseRequestBuilder<ContentVersionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the contentVersions property of the microsoft.graph.managedMobileLobApp entity.
     * @param mobileAppContentId The unique identifier of mobileAppContent
     * @returns a MobileAppContentItemRequestBuilder
     */
     byMobileAppContentId(mobileAppContentId: string) : MobileAppContentItemRequestBuilder;
    /**
     * The list of content versions for this app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileAppContentCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<ContentVersionsRequestBuilderGetQueryParameters> | undefined) : Promise<MobileAppContentCollectionResponse | undefined>;
    /**
     * Create new navigation property to contentVersions for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobileAppContent
     */
     post(body: MobileAppContent, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MobileAppContent | undefined>;
    /**
     * The list of content versions for this app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ContentVersionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to contentVersions for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: MobileAppContent, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of content versions for this app.
 */
export interface ContentVersionsRequestBuilderGetQueryParameters {
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
const ContentVersionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ContentVersionsRequestBuilderNavigationMetadata: Record<Exclude<keyof ContentVersionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMobileAppContentId: {
        uriTemplate: MobileAppContentItemRequestBuilderUriTemplate,
        requestsMetadata: MobileAppContentItemRequestBuilderRequestsMetadata,
        navigationMetadata: MobileAppContentItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["mobileAppContent%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ContentVersionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMobileAppContentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ContentVersionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMobileAppContentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMobileAppContent,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ContentVersionsRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}/graph.managedAndroidLobApp/contentVersions{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */