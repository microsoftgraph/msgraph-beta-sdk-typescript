/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createCloudAppDiscoveryReportCollectionResponseFromDiscriminatorValue, createCloudAppDiscoveryReportFromDiscriminatorValue, serializeCloudAppDiscoveryReport, type CloudAppDiscoveryReport, type CloudAppDiscoveryReportCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/security/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { CloudAppDiscoveryReportItemRequestBuilderNavigationMetadata, CloudAppDiscoveryReportItemRequestBuilderRequestsMetadata, type CloudAppDiscoveryReportItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the uploadedStreams property of the microsoft.graph.security.dataDiscoveryReport entity.
 */
export interface UploadedStreamsRequestBuilder extends BaseRequestBuilder<UploadedStreamsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the uploadedStreams property of the microsoft.graph.security.dataDiscoveryReport entity.
     * @param cloudAppDiscoveryReportId The unique identifier of cloudAppDiscoveryReport
     * @returns {CloudAppDiscoveryReportItemRequestBuilder}
     */
     byCloudAppDiscoveryReportId(cloudAppDiscoveryReportId: string) : CloudAppDiscoveryReportItemRequestBuilder;
    /**
     * Get visibility into all the manually uploaded streams from your firewalls and proxies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudAppDiscoveryReportCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/security-datadiscoveryreport-list-uploadedstreams?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<UploadedStreamsRequestBuilderGetQueryParameters> | undefined) : Promise<CloudAppDiscoveryReportCollectionResponse | undefined>;
    /**
     * Create new navigation property to uploadedStreams for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CloudAppDiscoveryReport>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: CloudAppDiscoveryReport, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CloudAppDiscoveryReport | undefined>;
    /**
     * Get visibility into all the manually uploaded streams from your firewalls and proxies.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UploadedStreamsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to uploadedStreams for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CloudAppDiscoveryReport, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get visibility into all the manually uploaded streams from your firewalls and proxies.
 */
export interface UploadedStreamsRequestBuilderGetQueryParameters {
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
export const UploadedStreamsRequestBuilderUriTemplate = "{+baseurl}/security/dataDiscovery/cloudAppDiscovery/uploadedStreams{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UploadedStreamsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const UploadedStreamsRequestBuilderNavigationMetadata: Record<Exclude<keyof UploadedStreamsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCloudAppDiscoveryReportId: {
        requestsMetadata: CloudAppDiscoveryReportItemRequestBuilderRequestsMetadata,
        navigationMetadata: CloudAppDiscoveryReportItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["cloudAppDiscoveryReport%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UploadedStreamsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: UploadedStreamsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudAppDiscoveryReportCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UploadedStreamsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: UploadedStreamsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCloudAppDiscoveryReportFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCloudAppDiscoveryReport,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
