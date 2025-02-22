/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createOnPremisesAgentCollectionResponseFromDiscriminatorValue, createOnPremisesAgentFromDiscriminatorValue, serializeOnPremisesAgent, type OnPremisesAgent, type OnPremisesAgentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { OnPremisesAgentItemRequestBuilderNavigationMetadata, OnPremisesAgentItemRequestBuilderRequestsMetadata, type OnPremisesAgentItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the agents property of the microsoft.graph.onPremisesPublishingProfile entity.
 */
export interface AgentsRequestBuilder extends BaseRequestBuilder<AgentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the agents property of the microsoft.graph.onPremisesPublishingProfile entity.
     * @param onPremisesAgentId The unique identifier of onPremisesAgent
     * @returns {OnPremisesAgentItemRequestBuilder}
     */
     byOnPremisesAgentId(onPremisesAgentId: string) : OnPremisesAgentItemRequestBuilder;
    /**
     * List of existing onPremisesAgent objects. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OnPremisesAgentCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AgentsRequestBuilderGetQueryParameters> | undefined) : Promise<OnPremisesAgentCollectionResponse | undefined>;
    /**
     * Create new navigation property to agents for onPremisesPublishingProfiles
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OnPremisesAgent>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: OnPremisesAgent, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<OnPremisesAgent | undefined>;
    /**
     * List of existing onPremisesAgent objects. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AgentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to agents for onPremisesPublishingProfiles
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: OnPremisesAgent, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List of existing onPremisesAgent objects. Read-only. Nullable.
 */
export interface AgentsRequestBuilderGetQueryParameters {
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
export const AgentsRequestBuilderUriTemplate = "{+baseurl}/onPremisesPublishingProfiles/{onPremisesPublishingProfile%2Did}/agents{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AgentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AgentsRequestBuilderNavigationMetadata: Record<Exclude<keyof AgentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byOnPremisesAgentId: {
        requestsMetadata: OnPremisesAgentItemRequestBuilderRequestsMetadata,
        navigationMetadata: OnPremisesAgentItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["onPremisesAgent%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AgentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AgentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOnPremisesAgentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AgentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: AgentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOnPremisesAgentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeOnPremisesAgent,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
