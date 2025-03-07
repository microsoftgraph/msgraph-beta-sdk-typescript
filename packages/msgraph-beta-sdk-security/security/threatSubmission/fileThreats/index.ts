/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createFileThreatSubmissionCollectionResponseFromDiscriminatorValue, createFileThreatSubmissionFromDiscriminatorValue, serializeFileThreatSubmission, type FileThreatSubmission, type FileThreatSubmissionCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/security/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { FileThreatSubmissionItemRequestBuilderRequestsMetadata, type FileThreatSubmissionItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the fileThreats property of the microsoft.graph.security.threatSubmissionRoot entity.
 */
export interface FileThreatsRequestBuilder extends BaseRequestBuilder<FileThreatsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the fileThreats property of the microsoft.graph.security.threatSubmissionRoot entity.
     * @param fileThreatSubmissionId The unique identifier of fileThreatSubmission
     * @returns {FileThreatSubmissionItemRequestBuilder}
     */
     byFileThreatSubmissionId(fileThreatSubmissionId: string) : FileThreatSubmissionItemRequestBuilder;
    /**
     * Get a list of the fileThreatSubmission objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FileThreatSubmissionCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/security-filethreatsubmission-list?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<FileThreatsRequestBuilderGetQueryParameters> | undefined) : Promise<FileThreatSubmissionCollectionResponse | undefined>;
    /**
     * Create a new fileThreatSubmission object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FileThreatSubmission>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/security-filethreatsubmission-post-filethreats?view=graph-rest-beta|Find more info here}
     */
     post(body: FileThreatSubmission, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<FileThreatSubmission | undefined>;
    /**
     * Get a list of the fileThreatSubmission objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FileThreatsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new fileThreatSubmission object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: FileThreatSubmission, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the fileThreatSubmission objects and their properties.
 */
export interface FileThreatsRequestBuilderGetQueryParameters {
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
export const FileThreatsRequestBuilderUriTemplate = "{+baseurl}/security/threatSubmission/fileThreats{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FileThreatsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const FileThreatsRequestBuilderNavigationMetadata: Record<Exclude<keyof FileThreatsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byFileThreatSubmissionId: {
        requestsMetadata: FileThreatSubmissionItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["fileThreatSubmission%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FileThreatsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: FileThreatsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFileThreatSubmissionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: FileThreatsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: FileThreatsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFileThreatSubmissionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeFileThreatSubmission,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
