/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createHostSecurityProfileCollectionResponseFromDiscriminatorValue, createHostSecurityProfileFromDiscriminatorValue, serializeHostSecurityProfile, type HostSecurityProfile, type HostSecurityProfileCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { HostSecurityProfileItemRequestBuilderRequestsMetadata, HostSecurityProfileItemRequestBuilderUriTemplate, type HostSecurityProfileItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the hostSecurityProfiles property of the microsoft.graph.security entity.
 */
export interface HostSecurityProfilesRequestBuilder extends BaseRequestBuilder<HostSecurityProfilesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the hostSecurityProfiles property of the microsoft.graph.security entity.
     * @param hostSecurityProfileId The unique identifier of hostSecurityProfile
     * @returns a HostSecurityProfileItemRequestBuilder
     */
     byHostSecurityProfileId(hostSecurityProfileId: string) : HostSecurityProfileItemRequestBuilder;
    /**
     * Get hostSecurityProfiles from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostSecurityProfileCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<HostSecurityProfilesRequestBuilderGetQueryParameters> | undefined) : Promise<HostSecurityProfileCollectionResponse | undefined>;
    /**
     * Create new navigation property to hostSecurityProfiles for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of HostSecurityProfile
     */
     post(body: HostSecurityProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<HostSecurityProfile | undefined>;
    /**
     * Get hostSecurityProfiles from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HostSecurityProfilesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to hostSecurityProfiles for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: HostSecurityProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get hostSecurityProfiles from security
 */
export interface HostSecurityProfilesRequestBuilderGetQueryParameters {
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
const HostSecurityProfilesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const HostSecurityProfilesRequestBuilderNavigationMetadata: Record<Exclude<keyof HostSecurityProfilesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byHostSecurityProfileId: {
        uriTemplate: HostSecurityProfileItemRequestBuilderUriTemplate,
        requestsMetadata: HostSecurityProfileItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["hostSecurityProfile%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HostSecurityProfilesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createHostSecurityProfileCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: HostSecurityProfilesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createHostSecurityProfileFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeHostSecurityProfile,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const HostSecurityProfilesRequestBuilderUriTemplate = "{+baseurl}/security/hostSecurityProfiles{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */