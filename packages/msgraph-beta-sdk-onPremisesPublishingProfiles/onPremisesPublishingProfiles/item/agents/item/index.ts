/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createOnPremisesAgentFromDiscriminatorValue, serializeOnPremisesAgent, type OnPremisesAgent } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AgentGroupsRequestBuilderNavigationMetadata, AgentGroupsRequestBuilderRequestsMetadata, AgentGroupsRequestBuilderUriTemplate, type AgentGroupsRequestBuilder } from './agentGroups/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the agents property of the microsoft.graph.onPremisesPublishingProfile entity.
 */
export interface OnPremisesAgentItemRequestBuilder extends BaseRequestBuilder<OnPremisesAgentItemRequestBuilder> {
    /**
     * Provides operations to manage the agentGroups property of the microsoft.graph.onPremisesAgent entity.
     */
    get agentGroups(): AgentGroupsRequestBuilder;
    /**
     * Delete navigation property agents for onPremisesPublishingProfiles
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties and relationships of an onPremisesAgent object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnPremisesAgent
     * @see {@link https://learn.microsoft.com/graph/api/onpremisesagent-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<OnPremisesAgentItemRequestBuilderGetQueryParameters> | undefined) : Promise<OnPremisesAgent | undefined>;
    /**
     * Update the navigation property agents in onPremisesPublishingProfiles
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OnPremisesAgent
     */
     patch(body: OnPremisesAgent, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<OnPremisesAgent | undefined>;
    /**
     * Delete navigation property agents for onPremisesPublishingProfiles
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties and relationships of an onPremisesAgent object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OnPremisesAgentItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property agents in onPremisesPublishingProfiles
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: OnPremisesAgent, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and relationships of an onPremisesAgent object.
 */
export interface OnPremisesAgentItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const OnPremisesAgentItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const OnPremisesAgentItemRequestBuilderNavigationMetadata: Record<Exclude<keyof OnPremisesAgentItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    agentGroups: {
        uriTemplate: AgentGroupsRequestBuilderUriTemplate,
        requestsMetadata: AgentGroupsRequestBuilderRequestsMetadata,
        navigationMetadata: AgentGroupsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const OnPremisesAgentItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
    },
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createOnPremisesAgentFromDiscriminatorValue,
        queryParametersMapper: OnPremisesAgentItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
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
export const OnPremisesAgentItemRequestBuilderUriTemplate = "{+baseurl}/onPremisesPublishingProfiles/{onPremisesPublishingProfile%2Did}/agents/{onPremisesAgent%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */