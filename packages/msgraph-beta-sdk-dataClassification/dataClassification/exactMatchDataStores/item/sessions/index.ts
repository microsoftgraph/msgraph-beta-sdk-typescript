/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createExactMatchSessionCollectionResponseFromDiscriminatorValue, createExactMatchSessionFromDiscriminatorValue, serializeExactMatchSession, type ExactMatchSession, type ExactMatchSessionCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ExactMatchSessionItemRequestBuilderNavigationMetadata, ExactMatchSessionItemRequestBuilderRequestsMetadata, type ExactMatchSessionItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sessions property of the microsoft.graph.exactMatchDataStore entity.
 */
export interface SessionsRequestBuilder extends BaseRequestBuilder<SessionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the sessions property of the microsoft.graph.exactMatchDataStore entity.
     * @param exactMatchSessionId The unique identifier of exactMatchSession
     * @returns {ExactMatchSessionItemRequestBuilder}
     */
     byExactMatchSessionId(exactMatchSessionId: string) : ExactMatchSessionItemRequestBuilder;
    /**
     * Get sessions from dataClassification
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ExactMatchSessionCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<SessionsRequestBuilderGetQueryParameters> | undefined) : Promise<ExactMatchSessionCollectionResponse | undefined>;
    /**
     * Create new navigation property to sessions for dataClassification
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ExactMatchSession>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ExactMatchSession, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ExactMatchSession | undefined>;
    /**
     * Get sessions from dataClassification
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SessionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to sessions for dataClassification
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ExactMatchSession, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get sessions from dataClassification
 */
export interface SessionsRequestBuilderGetQueryParameters {
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
export const SessionsRequestBuilderUriTemplate = "{+baseurl}/dataClassification/exactMatchDataStores/{exactMatchDataStore%2Did}/sessions{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SessionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const SessionsRequestBuilderNavigationMetadata: Record<Exclude<keyof SessionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byExactMatchSessionId: {
        requestsMetadata: ExactMatchSessionItemRequestBuilderRequestsMetadata,
        navigationMetadata: ExactMatchSessionItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["exactMatchSession%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SessionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: SessionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createExactMatchSessionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: SessionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: SessionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createExactMatchSessionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeExactMatchSession,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
