/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createEducationSynchronizationErrorFromDiscriminatorValue, serializeEducationSynchronizationError, type EducationSynchronizationError } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the errors property of the microsoft.graph.educationSynchronizationProfile entity.
 */
export interface EducationSynchronizationErrorItemRequestBuilder extends BaseRequestBuilder<EducationSynchronizationErrorItemRequestBuilder> {
    /**
     * Delete navigation property errors for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * All errors associated with this synchronization profile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSynchronizationError
     */
     get(requestConfiguration?: RequestConfiguration<EducationSynchronizationErrorItemRequestBuilderGetQueryParameters> | undefined) : Promise<EducationSynchronizationError | undefined>;
    /**
     * Update the navigation property errors in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSynchronizationError
     */
     patch(body: EducationSynchronizationError, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EducationSynchronizationError | undefined>;
    /**
     * Delete navigation property errors for education
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * All errors associated with this synchronization profile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EducationSynchronizationErrorItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property errors in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
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
        responseBodyFactory:  createEducationSynchronizationErrorFromDiscriminatorValue,
        queryParametersMapper: EducationSynchronizationErrorItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEducationSynchronizationErrorFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEducationSynchronizationError,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const EducationSynchronizationErrorItemRequestBuilderUriTemplate = "{+baseurl}/education/synchronizationProfiles/{educationSynchronizationProfile%2Did}/errors/{educationSynchronizationError%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */