/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createOnPremisesAgentGroupCollectionResponseFromDiscriminatorValue, createOnPremisesAgentGroupFromDiscriminatorValue, serializeOnPremisesAgentGroup, type OnPremisesAgentGroup, type OnPremisesAgentGroupCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { OnPremisesAgentGroupItemRequestBuilderNavigationMetadata, OnPremisesAgentGroupItemRequestBuilderRequestsMetadata, OnPremisesAgentGroupItemRequestBuilderUriTemplate, type OnPremisesAgentGroupItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the agentGroups property of the microsoft.graph.onPremisesPublishingProfile entity.
 */
export interface AgentGroupsRequestBuilder extends BaseRequestBuilder<AgentGroupsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the agentGroups property of the microsoft.graph.onPremisesPublishingProfile entity.
     * @param onPremisesAgentGroupId The unique identifier of onPremisesAgentGroup
     * @returns a OnPremisesAgentGroupItemRequestBuilder
     */
     byOnPremisesAgentGroupId(onPremisesAgentGroupId: string) : OnPremisesAgentGroupItemRequestBuilder;
    /**
     * Retrieve a list of onPremisesAgentGroup objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnPremisesAgentGroupCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/onpremisesagentgroup-list?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AgentGroupsRequestBuilderGetQueryParameters> | undefined) : Promise<OnPremisesAgentGroupCollectionResponse | undefined>;
    /**
     * Create a new onPremisesAgentGroup object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnPremisesAgentGroup
     * @see {@link https://learn.microsoft.com/graph/api/onpremisesagentgroup-post?view=graph-rest-1.0|Find more info here}
     */
     post(body: OnPremisesAgentGroup, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<OnPremisesAgentGroup | undefined>;
    /**
     * Retrieve a list of onPremisesAgentGroup objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AgentGroupsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new onPremisesAgentGroup object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: OnPremisesAgentGroup, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of onPremisesAgentGroup objects.
 */
export interface AgentGroupsRequestBuilderGetQueryParameters {
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
const AgentGroupsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AgentGroupsRequestBuilderNavigationMetadata: Record<Exclude<keyof AgentGroupsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byOnPremisesAgentGroupId: {
        uriTemplate: OnPremisesAgentGroupItemRequestBuilderUriTemplate,
        requestsMetadata: OnPremisesAgentGroupItemRequestBuilderRequestsMetadata,
        navigationMetadata: OnPremisesAgentGroupItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["onPremisesAgentGroup%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AgentGroupsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createOnPremisesAgentGroupCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AgentGroupsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createOnPremisesAgentGroupFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeOnPremisesAgentGroup,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AgentGroupsRequestBuilderUriTemplate = "{+baseurl}/onPremisesPublishingProfiles/{onPremisesPublishingProfile%2Did}/agentGroups{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */