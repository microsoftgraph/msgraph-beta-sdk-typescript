/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createOnPremisesAgentCollectionResponseFromDiscriminatorValue, createOnPremisesAgentFromDiscriminatorValue, serializeOnPremisesAgent, type OnPremisesAgent, type OnPremisesAgentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { OnPremisesAgentItemRequestBuilderNavigationMetadata, OnPremisesAgentItemRequestBuilderRequestsMetadata, OnPremisesAgentItemRequestBuilderUriTemplate, type OnPremisesAgentItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the agents property of the microsoft.graph.onPremisesAgentGroup entity.
 */
export interface AgentsRequestBuilder extends BaseRequestBuilder<AgentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the agents property of the microsoft.graph.onPremisesAgentGroup entity.
     * @param onPremisesAgentId The unique identifier of onPremisesAgent
     * @returns a OnPremisesAgentItemRequestBuilder
     */
     byOnPremisesAgentId(onPremisesAgentId: string) : OnPremisesAgentItemRequestBuilder;
    /**
     * List of onPremisesAgent that are assigned to an onPremisesAgentGroup. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnPremisesAgentCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<AgentsRequestBuilderGetQueryParameters> | undefined) : Promise<OnPremisesAgentCollectionResponse | undefined>;
    /**
     * Create new navigation property to agents for onPremisesPublishingProfiles
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnPremisesAgent
     */
     post(body: OnPremisesAgent, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<OnPremisesAgent | undefined>;
    /**
     * List of onPremisesAgent that are assigned to an onPremisesAgentGroup. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AgentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to agents for onPremisesPublishingProfiles
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: OnPremisesAgent, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * List of onPremisesAgent that are assigned to an onPremisesAgentGroup. Read-only. Nullable.
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
        uriTemplate: OnPremisesAgentItemRequestBuilderUriTemplate,
        requestsMetadata: OnPremisesAgentItemRequestBuilderRequestsMetadata,
        navigationMetadata: OnPremisesAgentItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["onPremisesAgent%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AgentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createOnPremisesAgentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AgentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createOnPremisesAgentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeOnPremisesAgent,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AgentsRequestBuilderUriTemplate = "{+baseurl}/onPremisesPublishingProfiles/{onPremisesPublishingProfile%2Did}/agentGroups/{onPremisesAgentGroup%2Did}/agents{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */