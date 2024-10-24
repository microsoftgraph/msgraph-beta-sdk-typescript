/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createEducationSynchronizationErrorFromDiscriminatorValue, serializeEducationSynchronizationError, type EducationSynchronizationError } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the errors property of the microsoft.graph.educationSynchronizationProfile entity.
 */
export interface EducationSynchronizationErrorItemRequestBuilder extends BaseRequestBuilder<EducationSynchronizationErrorItemRequestBuilder> {
    /**
     * Delete navigation property errors for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * All errors associated with this synchronization profile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationSynchronizationError>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
     get(requestConfiguration?: RequestConfiguration<EducationSynchronizationErrorItemRequestBuilderGetQueryParameters> | undefined) : Promise<EducationSynchronizationError | undefined>;
    /**
     * Update the navigation property errors in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<EducationSynchronizationError>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
     patch(body: EducationSynchronizationError, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EducationSynchronizationError | undefined>;
    /**
     * Delete navigation property errors for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * All errors associated with this synchronization profile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EducationSynchronizationErrorItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property errors in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The Education Sync Profile API is deprecated and will stop returning data on December 31, 2024. Please transition to the new IndustryData API. as of 2024-06/Deprecated:SynchronizationProfiles
     */
     toPatchRequestInformation(body: EducationSynchronizationError, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * All errors associated with this synchronization profile.
 */
export interface EducationSynchronizationErrorItemRequestBuilderGetQueryParameters {
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
export const EducationSynchronizationErrorItemRequestBuilderUriTemplate = "{+baseurl}/education/synchronizationProfiles/{educationSynchronizationProfile%2Did}/errors/{educationSynchronizationError%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const EducationSynchronizationErrorItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EducationSynchronizationErrorItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: EducationSynchronizationErrorItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: EducationSynchronizationErrorItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationSynchronizationErrorFromDiscriminatorValue,
        queryParametersMapper: EducationSynchronizationErrorItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: EducationSynchronizationErrorItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createEducationSynchronizationErrorFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEducationSynchronizationError,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
