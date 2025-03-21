/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createJobResponseBaseFromDiscriminatorValue, serializeJobResponseBase, type JobResponseBase } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the jobs property of the microsoft.graph.dataClassificationService entity.
 */
export interface JobResponseBaseItemRequestBuilder extends BaseRequestBuilder<JobResponseBaseItemRequestBuilder> {
    /**
     * Delete navigation property jobs for dataClassification
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get jobs from dataClassification
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<JobResponseBase>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<JobResponseBaseItemRequestBuilderGetQueryParameters> | undefined) : Promise<JobResponseBase | undefined>;
    /**
     * Update the navigation property jobs in dataClassification
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<JobResponseBase>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: JobResponseBase, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<JobResponseBase | undefined>;
    /**
     * Delete navigation property jobs for dataClassification
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get jobs from dataClassification
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<JobResponseBaseItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property jobs in dataClassification
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: JobResponseBase, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get jobs from dataClassification
 */
export interface JobResponseBaseItemRequestBuilderGetQueryParameters {
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
export const JobResponseBaseItemRequestBuilderUriTemplate = "{+baseurl}/dataClassification/jobs/{jobResponseBase%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const JobResponseBaseItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const JobResponseBaseItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: JobResponseBaseItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: JobResponseBaseItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createJobResponseBaseFromDiscriminatorValue,
        queryParametersMapper: JobResponseBaseItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: JobResponseBaseItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createJobResponseBaseFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeJobResponseBase,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
