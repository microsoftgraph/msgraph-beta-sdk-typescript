/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createServiceNowConnectionCollectionResponseFromDiscriminatorValue, createServiceNowConnectionFromDiscriminatorValue, serializeServiceNowConnection, type ServiceNowConnection, type ServiceNowConnectionCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { ServiceNowConnectionItemRequestBuilderRequestsMetadata, ServiceNowConnectionItemRequestBuilderUriTemplate, type ServiceNowConnectionItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the serviceNowConnections property of the microsoft.graph.deviceManagement entity.
 */
export interface ServiceNowConnectionsRequestBuilder extends BaseRequestBuilder<ServiceNowConnectionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the serviceNowConnections property of the microsoft.graph.deviceManagement entity.
     * @param serviceNowConnectionId The unique identifier of serviceNowConnection
     * @returns a ServiceNowConnectionItemRequestBuilder
     */
     byServiceNowConnectionId(serviceNowConnectionId: string) : ServiceNowConnectionItemRequestBuilder;
    /**
     * A list of ServiceNowConnections
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceNowConnectionCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<ServiceNowConnectionsRequestBuilderGetQueryParameters> | undefined) : Promise<ServiceNowConnectionCollectionResponse | undefined>;
    /**
     * Create new navigation property to serviceNowConnections for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServiceNowConnection
     */
     post(body: ServiceNowConnection, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ServiceNowConnection | undefined>;
    /**
     * A list of ServiceNowConnections
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ServiceNowConnectionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to serviceNowConnections for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: ServiceNowConnection, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A list of ServiceNowConnections
 */
export interface ServiceNowConnectionsRequestBuilderGetQueryParameters {
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
const ServiceNowConnectionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ServiceNowConnectionsRequestBuilderNavigationMetadata: Record<Exclude<keyof ServiceNowConnectionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byServiceNowConnectionId: {
        uriTemplate: ServiceNowConnectionItemRequestBuilderUriTemplate,
        requestsMetadata: ServiceNowConnectionItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["serviceNowConnection%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ServiceNowConnectionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createServiceNowConnectionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ServiceNowConnectionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createServiceNowConnectionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeServiceNowConnection,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ServiceNowConnectionsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/serviceNowConnections{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */