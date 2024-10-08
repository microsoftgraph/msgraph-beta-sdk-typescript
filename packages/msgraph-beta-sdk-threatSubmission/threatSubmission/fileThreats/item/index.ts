/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createFileThreatSubmissionFromDiscriminatorValue, serializeFileThreatSubmission, type FileThreatSubmission } from '@microsoft/msgraph-beta-sdk/models/security/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the fileThreats property of the microsoft.graph.security.threatSubmissionRoot entity.
 */
export interface FileThreatSubmissionItemRequestBuilder extends BaseRequestBuilder<FileThreatSubmissionItemRequestBuilder> {
    /**
     * Delete navigation property fileThreats for threatSubmission
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get fileThreats from threatSubmission
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FileThreatSubmission>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<FileThreatSubmissionItemRequestBuilderGetQueryParameters> | undefined) : Promise<FileThreatSubmission | undefined>;
    /**
     * Update the navigation property fileThreats in threatSubmission
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FileThreatSubmission>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: FileThreatSubmission, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<FileThreatSubmission | undefined>;
    /**
     * Delete navigation property fileThreats for threatSubmission
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get fileThreats from threatSubmission
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FileThreatSubmissionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property fileThreats in threatSubmission
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: FileThreatSubmission, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get fileThreats from threatSubmission
 */
export interface FileThreatSubmissionItemRequestBuilderGetQueryParameters {
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
 * Uri template for the request builder.
 */
export const FileThreatSubmissionItemRequestBuilderUriTemplate = "{+baseurl}/threatSubmission/fileThreats/{fileThreatSubmission%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FileThreatSubmissionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FileThreatSubmissionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: FileThreatSubmissionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: FileThreatSubmissionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFileThreatSubmissionFromDiscriminatorValue,
        queryParametersMapper: FileThreatSubmissionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: FileThreatSubmissionItemRequestBuilderUriTemplate,
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
