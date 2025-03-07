/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createOnenoteOperationCollectionResponseFromDiscriminatorValue, createOnenoteOperationFromDiscriminatorValue, serializeOnenoteOperation, type OnenoteOperation, type OnenoteOperationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { OnenoteOperationItemRequestBuilderRequestsMetadata, type OnenoteOperationItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the operations property of the microsoft.graph.onenote entity.
 */
export interface OperationsRequestBuilder extends BaseRequestBuilder<OperationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the operations property of the microsoft.graph.onenote entity.
     * @param onenoteOperationId The unique identifier of onenoteOperation
     * @returns {OnenoteOperationItemRequestBuilder}
     */
     byOnenoteOperationId(onenoteOperationId: string) : OnenoteOperationItemRequestBuilder;
    /**
     * The status of OneNote operations. Getting an operations collection isn't supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OnenoteOperationCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<OperationsRequestBuilderGetQueryParameters> | undefined) : Promise<OnenoteOperationCollectionResponse | undefined>;
    /**
     * Create new navigation property to operations for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OnenoteOperation>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: OnenoteOperation, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<OnenoteOperation | undefined>;
    /**
     * The status of OneNote operations. Getting an operations collection isn't supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OperationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to operations for groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: OnenoteOperation, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The status of OneNote operations. Getting an operations collection isn't supported, but you can get the status of long-running operations if the Operation-Location header is returned in the response. Read-only. Nullable.
 */
export interface OperationsRequestBuilderGetQueryParameters {
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
export const OperationsRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/onenote/operations{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const OperationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const OperationsRequestBuilderNavigationMetadata: Record<Exclude<keyof OperationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byOnenoteOperationId: {
        requestsMetadata: OnenoteOperationItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["onenoteOperation%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const OperationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: OperationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOnenoteOperationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: OperationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: OperationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOnenoteOperationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeOnenoteOperation,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
