/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createEdgeFromDiscriminatorValue, serializeEdge, type Edge } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { InternetExplorerModeRequestBuilderNavigationMetadata, InternetExplorerModeRequestBuilderRequestsMetadata, InternetExplorerModeRequestBuilderUriTemplate, type InternetExplorerModeRequestBuilder } from './internetExplorerMode/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the edge property of the microsoft.graph.admin entity.
 */
export interface EdgeRequestBuilder extends BaseRequestBuilder<EdgeRequestBuilder> {
    /**
     * Provides operations to manage the internetExplorerMode property of the microsoft.graph.edge entity.
     */
    get internetExplorerMode(): InternetExplorerModeRequestBuilder;
    /**
     * Delete navigation property edge for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A container for Microsoft Edge resources. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Edge
     */
     get(requestConfiguration?: RequestConfiguration<EdgeRequestBuilderGetQueryParameters> | undefined) : Promise<Edge | undefined>;
    /**
     * Update the navigation property edge in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Edge
     */
     patch(body: Edge, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Edge | undefined>;
    /**
     * Delete navigation property edge for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A container for Microsoft Edge resources. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EdgeRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property edge in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: Edge, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A container for Microsoft Edge resources. Read-only.
 */
export interface EdgeRequestBuilderGetQueryParameters {
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
const EdgeRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const EdgeRequestBuilderNavigationMetadata: Record<Exclude<keyof EdgeRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    internetExplorerMode: {
        uriTemplate: InternetExplorerModeRequestBuilderUriTemplate,
        requestsMetadata: InternetExplorerModeRequestBuilderRequestsMetadata,
        navigationMetadata: InternetExplorerModeRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EdgeRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createEdgeFromDiscriminatorValue,
        queryParametersMapper: EdgeRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEdgeFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEdge,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const EdgeRequestBuilderUriTemplate = "{+baseurl}/admin/edge{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */