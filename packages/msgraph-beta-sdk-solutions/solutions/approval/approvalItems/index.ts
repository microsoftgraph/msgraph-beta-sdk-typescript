/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createApprovalItemCollectionResponseFromDiscriminatorValue, createApprovalItemFromDiscriminatorValue, serializeApprovalItem, type ApprovalItem, type ApprovalItemCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ApprovalItemItemRequestBuilderNavigationMetadata, ApprovalItemItemRequestBuilderRequestsMetadata, type ApprovalItemItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the approvalItems property of the microsoft.graph.approvalSolution entity.
 */
export interface ApprovalItemsRequestBuilder extends BaseRequestBuilder<ApprovalItemsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the approvalItems property of the microsoft.graph.approvalSolution entity.
     * @param approvalItemId The unique identifier of approvalItem
     * @returns {ApprovalItemItemRequestBuilder}
     */
     byApprovalItemId(approvalItemId: string) : ApprovalItemItemRequestBuilder;
    /**
     * Get a list of the approvalItem objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ApprovalItemCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/approvalsolution-list-approvalitems?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ApprovalItemsRequestBuilderGetQueryParameters> | undefined) : Promise<ApprovalItemCollectionResponse | undefined>;
    /**
     * Create a new approvalItem object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ApprovalItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/approvalsolution-post-approvalitems?view=graph-rest-beta|Find more info here}
     */
     post(body: ApprovalItem, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ApprovalItem | undefined>;
    /**
     * Get a list of the approvalItem objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ApprovalItemsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new approvalItem object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ApprovalItem, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the approvalItem objects and their properties.
 */
export interface ApprovalItemsRequestBuilderGetQueryParameters {
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
export const ApprovalItemsRequestBuilderUriTemplate = "{+baseurl}/solutions/approval/approvalItems{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ApprovalItemsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ApprovalItemsRequestBuilderNavigationMetadata: Record<Exclude<keyof ApprovalItemsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byApprovalItemId: {
        requestsMetadata: ApprovalItemItemRequestBuilderRequestsMetadata,
        navigationMetadata: ApprovalItemItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["approvalItem%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ApprovalItemsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ApprovalItemsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createApprovalItemCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ApprovalItemsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ApprovalItemsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createApprovalItemFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeApprovalItem,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */