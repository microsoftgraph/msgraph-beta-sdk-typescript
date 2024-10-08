/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createProvisioningObjectSummaryCollectionResponseFromDiscriminatorValue, createProvisioningObjectSummaryFromDiscriminatorValue, serializeProvisioningObjectSummary, type ProvisioningObjectSummary, type ProvisioningObjectSummaryCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ProvisioningObjectSummaryItemRequestBuilderRequestsMetadata, type ProvisioningObjectSummaryItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the directoryProvisioning property of the microsoft.graph.auditLogRoot entity.
 */
export interface DirectoryProvisioningRequestBuilder extends BaseRequestBuilder<DirectoryProvisioningRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the directoryProvisioning property of the microsoft.graph.auditLogRoot entity.
     * @param provisioningObjectSummaryId The unique identifier of provisioningObjectSummary
     * @returns {ProvisioningObjectSummaryItemRequestBuilder}
     */
     byProvisioningObjectSummaryId(provisioningObjectSummaryId: string) : ProvisioningObjectSummaryItemRequestBuilder;
    /**
     * Get directoryProvisioning from auditLogs
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ProvisioningObjectSummaryCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<DirectoryProvisioningRequestBuilderGetQueryParameters> | undefined) : Promise<ProvisioningObjectSummaryCollectionResponse | undefined>;
    /**
     * Create new navigation property to directoryProvisioning for auditLogs
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ProvisioningObjectSummary>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ProvisioningObjectSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ProvisioningObjectSummary | undefined>;
    /**
     * Get directoryProvisioning from auditLogs
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DirectoryProvisioningRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to directoryProvisioning for auditLogs
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ProvisioningObjectSummary, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get directoryProvisioning from auditLogs
 */
export interface DirectoryProvisioningRequestBuilderGetQueryParameters {
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
export const DirectoryProvisioningRequestBuilderUriTemplate = "{+baseurl}/auditLogs/directoryProvisioning{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const DirectoryProvisioningRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const DirectoryProvisioningRequestBuilderNavigationMetadata: Record<Exclude<keyof DirectoryProvisioningRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byProvisioningObjectSummaryId: {
        requestsMetadata: ProvisioningObjectSummaryItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["provisioningObjectSummary%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DirectoryProvisioningRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: DirectoryProvisioningRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createProvisioningObjectSummaryCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DirectoryProvisioningRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: DirectoryProvisioningRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createProvisioningObjectSummaryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeProvisioningObjectSummary,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
