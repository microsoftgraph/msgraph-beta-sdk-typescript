/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMicrosoftTunnelServerLogCollectionResponseCollectionResponseFromDiscriminatorValue, createMicrosoftTunnelServerLogCollectionResponseFromDiscriminatorValue, serializeMicrosoftTunnelServerLogCollectionResponse, type MicrosoftTunnelServerLogCollectionResponse, type MicrosoftTunnelServerLogCollectionResponseCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { MicrosoftTunnelServerLogCollectionResponseItemRequestBuilderNavigationMetadata, MicrosoftTunnelServerLogCollectionResponseItemRequestBuilderRequestsMetadata, MicrosoftTunnelServerLogCollectionResponseItemRequestBuilderUriTemplate, type MicrosoftTunnelServerLogCollectionResponseItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the microsoftTunnelServerLogCollectionResponses property of the microsoft.graph.deviceManagement entity.
 */
export interface MicrosoftTunnelServerLogCollectionResponsesRequestBuilder extends BaseRequestBuilder<MicrosoftTunnelServerLogCollectionResponsesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the microsoftTunnelServerLogCollectionResponses property of the microsoft.graph.deviceManagement entity.
     * @param microsoftTunnelServerLogCollectionResponseId The unique identifier of microsoftTunnelServerLogCollectionResponse
     * @returns a MicrosoftTunnelServerLogCollectionResponseItemRequestBuilder
     */
     byMicrosoftTunnelServerLogCollectionResponseId(microsoftTunnelServerLogCollectionResponseId: string) : MicrosoftTunnelServerLogCollectionResponseItemRequestBuilder;
    /**
     * Collection of MicrosoftTunnelServerLogCollectionResponse settings associated with account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MicrosoftTunnelServerLogCollectionResponseCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<MicrosoftTunnelServerLogCollectionResponsesRequestBuilderGetQueryParameters> | undefined) : Promise<MicrosoftTunnelServerLogCollectionResponseCollectionResponse | undefined>;
    /**
     * Create new navigation property to microsoftTunnelServerLogCollectionResponses for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MicrosoftTunnelServerLogCollectionResponse
     */
     post(body: MicrosoftTunnelServerLogCollectionResponse, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MicrosoftTunnelServerLogCollectionResponse | undefined>;
    /**
     * Collection of MicrosoftTunnelServerLogCollectionResponse settings associated with account.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MicrosoftTunnelServerLogCollectionResponsesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to microsoftTunnelServerLogCollectionResponses for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: MicrosoftTunnelServerLogCollectionResponse, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Collection of MicrosoftTunnelServerLogCollectionResponse settings associated with account.
 */
export interface MicrosoftTunnelServerLogCollectionResponsesRequestBuilderGetQueryParameters {
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
const MicrosoftTunnelServerLogCollectionResponsesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const MicrosoftTunnelServerLogCollectionResponsesRequestBuilderNavigationMetadata: Record<Exclude<keyof MicrosoftTunnelServerLogCollectionResponsesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMicrosoftTunnelServerLogCollectionResponseId: {
        uriTemplate: MicrosoftTunnelServerLogCollectionResponseItemRequestBuilderUriTemplate,
        requestsMetadata: MicrosoftTunnelServerLogCollectionResponseItemRequestBuilderRequestsMetadata,
        navigationMetadata: MicrosoftTunnelServerLogCollectionResponseItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["microsoftTunnelServerLogCollectionResponse%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MicrosoftTunnelServerLogCollectionResponsesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMicrosoftTunnelServerLogCollectionResponseCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: MicrosoftTunnelServerLogCollectionResponsesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMicrosoftTunnelServerLogCollectionResponseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMicrosoftTunnelServerLogCollectionResponse,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const MicrosoftTunnelServerLogCollectionResponsesRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/microsoftTunnelServerLogCollectionResponses{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */