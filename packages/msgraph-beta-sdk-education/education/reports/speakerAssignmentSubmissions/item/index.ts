/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createSpeakerAssignmentSubmissionFromDiscriminatorValue, serializeSpeakerAssignmentSubmission, type SpeakerAssignmentSubmission } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the speakerAssignmentSubmissions property of the microsoft.graph.reportsRoot entity.
 */
export interface SpeakerAssignmentSubmissionItemRequestBuilder extends BaseRequestBuilder<SpeakerAssignmentSubmissionItemRequestBuilder> {
    /**
     * Delete navigation property speakerAssignmentSubmissions for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Details of submitted speaker assignments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SpeakerAssignmentSubmission>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<SpeakerAssignmentSubmissionItemRequestBuilderGetQueryParameters> | undefined) : Promise<SpeakerAssignmentSubmission | undefined>;
    /**
     * Update the navigation property speakerAssignmentSubmissions in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<SpeakerAssignmentSubmission>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: SpeakerAssignmentSubmission, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<SpeakerAssignmentSubmission | undefined>;
    /**
     * Delete navigation property speakerAssignmentSubmissions for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Details of submitted speaker assignments.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<SpeakerAssignmentSubmissionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property speakerAssignmentSubmissions in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: SpeakerAssignmentSubmission, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Details of submitted speaker assignments.
 */
export interface SpeakerAssignmentSubmissionItemRequestBuilderGetQueryParameters {
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
export const SpeakerAssignmentSubmissionItemRequestBuilderUriTemplate = "{+baseurl}/education/reports/speakerAssignmentSubmissions/{speakerAssignmentSubmission%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const SpeakerAssignmentSubmissionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const SpeakerAssignmentSubmissionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: SpeakerAssignmentSubmissionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: SpeakerAssignmentSubmissionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSpeakerAssignmentSubmissionFromDiscriminatorValue,
        queryParametersMapper: SpeakerAssignmentSubmissionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: SpeakerAssignmentSubmissionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createSpeakerAssignmentSubmissionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeSpeakerAssignmentSubmission,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
