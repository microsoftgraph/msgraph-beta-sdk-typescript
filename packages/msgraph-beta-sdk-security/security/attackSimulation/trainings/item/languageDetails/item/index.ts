/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createTrainingLanguageDetailFromDiscriminatorValue, serializeTrainingLanguageDetail, type TrainingLanguageDetail } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the languageDetails property of the microsoft.graph.training entity.
 */
export interface TrainingLanguageDetailItemRequestBuilder extends BaseRequestBuilder<TrainingLanguageDetailItemRequestBuilder> {
    /**
     * Delete navigation property languageDetails for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Language specific details on a training.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TrainingLanguageDetail
     */
     get(requestConfiguration?: RequestConfiguration<TrainingLanguageDetailItemRequestBuilderGetQueryParameters> | undefined) : Promise<TrainingLanguageDetail | undefined>;
    /**
     * Update the navigation property languageDetails in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TrainingLanguageDetail
     */
     patch(body: TrainingLanguageDetail, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TrainingLanguageDetail | undefined>;
    /**
     * Delete navigation property languageDetails for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Language specific details on a training.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TrainingLanguageDetailItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property languageDetails in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: TrainingLanguageDetail, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Language specific details on a training.
 */
export interface TrainingLanguageDetailItemRequestBuilderGetQueryParameters {
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
const TrainingLanguageDetailItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TrainingLanguageDetailItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createTrainingLanguageDetailFromDiscriminatorValue,
        queryParametersMapper: TrainingLanguageDetailItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTrainingLanguageDetailFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTrainingLanguageDetail,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const TrainingLanguageDetailItemRequestBuilderUriTemplate = "{+baseurl}/security/attackSimulation/trainings/{training%2Did}/languageDetails/{trainingLanguageDetail%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */