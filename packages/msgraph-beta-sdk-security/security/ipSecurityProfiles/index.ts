/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createIpSecurityProfileCollectionResponseFromDiscriminatorValue, createIpSecurityProfileFromDiscriminatorValue, serializeIpSecurityProfile, type IpSecurityProfile, type IpSecurityProfileCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { IpSecurityProfileItemRequestBuilderRequestsMetadata, type IpSecurityProfileItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the ipSecurityProfiles property of the microsoft.graph.security entity.
 */
export interface IpSecurityProfilesRequestBuilder extends BaseRequestBuilder<IpSecurityProfilesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated The legacy Graph Security API is deprecated and will stop returning data on January 31, 2025. Please use the new Graph Security API. as of 2024-01/Deprecation on 2024-04-10 and will be removed 2026-04-10
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the ipSecurityProfiles property of the microsoft.graph.security entity.
     * @param ipSecurityProfileId The unique identifier of ipSecurityProfile
     * @returns {IpSecurityProfileItemRequestBuilder}
     * @deprecated The legacy Graph Security API is deprecated and will stop returning data on January 31, 2025. Please use the new Graph Security API. as of 2024-01/Deprecation on 2024-04-10 and will be removed 2026-04-10
     */
     byIpSecurityProfileId(ipSecurityProfileId: string) : IpSecurityProfileItemRequestBuilder;
    /**
     * Get ipSecurityProfiles from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<IpSecurityProfileCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The legacy Graph Security API is deprecated and will stop returning data on January 31, 2025. Please use the new Graph Security API. as of 2024-01/Deprecation on 2024-04-10 and will be removed 2026-04-10
     */
     get(requestConfiguration?: RequestConfiguration<IpSecurityProfilesRequestBuilderGetQueryParameters> | undefined) : Promise<IpSecurityProfileCollectionResponse | undefined>;
    /**
     * Create new navigation property to ipSecurityProfiles for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<IpSecurityProfile>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The legacy Graph Security API is deprecated and will stop returning data on January 31, 2025. Please use the new Graph Security API. as of 2024-01/Deprecation on 2024-04-10 and will be removed 2026-04-10
     */
     post(body: IpSecurityProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<IpSecurityProfile | undefined>;
    /**
     * Get ipSecurityProfiles from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The legacy Graph Security API is deprecated and will stop returning data on January 31, 2025. Please use the new Graph Security API. as of 2024-01/Deprecation on 2024-04-10 and will be removed 2026-04-10
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<IpSecurityProfilesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to ipSecurityProfiles for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The legacy Graph Security API is deprecated and will stop returning data on January 31, 2025. Please use the new Graph Security API. as of 2024-01/Deprecation on 2024-04-10 and will be removed 2026-04-10
     */
     toPostRequestInformation(body: IpSecurityProfile, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get ipSecurityProfiles from security
 */
export interface IpSecurityProfilesRequestBuilderGetQueryParameters {
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
export const IpSecurityProfilesRequestBuilderUriTemplate = "{+baseurl}/security/ipSecurityProfiles{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const IpSecurityProfilesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const IpSecurityProfilesRequestBuilderNavigationMetadata: Record<Exclude<keyof IpSecurityProfilesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byIpSecurityProfileId: {
        requestsMetadata: IpSecurityProfileItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["ipSecurityProfile%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const IpSecurityProfilesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: IpSecurityProfilesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createIpSecurityProfileCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: IpSecurityProfilesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: IpSecurityProfilesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createIpSecurityProfileFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeIpSecurityProfile,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
