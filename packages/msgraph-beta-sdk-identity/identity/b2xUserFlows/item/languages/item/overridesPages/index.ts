/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserFlowLanguagePageCollectionResponseFromDiscriminatorValue, createUserFlowLanguagePageFromDiscriminatorValue, serializeUserFlowLanguagePage, type UserFlowLanguagePage, type UserFlowLanguagePageCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { type UserFlowLanguagePageItemRequestBuilder, UserFlowLanguagePageItemRequestBuilderNavigationMetadata, UserFlowLanguagePageItemRequestBuilderRequestsMetadata } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the overridesPages property of the microsoft.graph.userFlowLanguageConfiguration entity.
 */
export interface OverridesPagesRequestBuilder extends BaseRequestBuilder<OverridesPagesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the overridesPages property of the microsoft.graph.userFlowLanguageConfiguration entity.
     * @param userFlowLanguagePageId The unique identifier of userFlowLanguagePage
     * @returns {UserFlowLanguagePageItemRequestBuilder}
     */
     byUserFlowLanguagePageId(userFlowLanguagePageId: string) : UserFlowLanguagePageItemRequestBuilder;
    /**
     * Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification isn't allowed (creation or deletion of pages).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserFlowLanguagePageCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<OverridesPagesRequestBuilderGetQueryParameters> | undefined) : Promise<UserFlowLanguagePageCollectionResponse | undefined>;
    /**
     * Create new navigation property to overridesPages for identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserFlowLanguagePage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: UserFlowLanguagePage, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UserFlowLanguagePage | undefined>;
    /**
     * Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification isn't allowed (creation or deletion of pages).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OverridesPagesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to overridesPages for identity
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: UserFlowLanguagePage, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification isn't allowed (creation or deletion of pages).
 */
export interface OverridesPagesRequestBuilderGetQueryParameters {
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
export const OverridesPagesRequestBuilderUriTemplate = "{+baseurl}/identity/b2xUserFlows/{b2xIdentityUserFlow%2Did}/languages/{userFlowLanguageConfiguration%2Did}/overridesPages{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const OverridesPagesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const OverridesPagesRequestBuilderNavigationMetadata: Record<Exclude<keyof OverridesPagesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUserFlowLanguagePageId: {
        requestsMetadata: UserFlowLanguagePageItemRequestBuilderRequestsMetadata,
        navigationMetadata: UserFlowLanguagePageItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["userFlowLanguagePage%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const OverridesPagesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: OverridesPagesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserFlowLanguagePageCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: OverridesPagesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: OverridesPagesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUserFlowLanguagePageFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUserFlowLanguagePage,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
