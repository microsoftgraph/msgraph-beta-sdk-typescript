/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createTrainingCollectionResponseFromDiscriminatorValue, createTrainingFromDiscriminatorValue, serializeTraining, type Training, type TrainingCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { TrainingItemRequestBuilderNavigationMetadata, TrainingItemRequestBuilderRequestsMetadata, TrainingItemRequestBuilderUriTemplate, type TrainingItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the trainings property of the microsoft.graph.attackSimulationRoot entity.
 */
export interface TrainingsRequestBuilder extends BaseRequestBuilder<TrainingsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the trainings property of the microsoft.graph.attackSimulationRoot entity.
     * @param trainingId The unique identifier of training
     * @returns a TrainingItemRequestBuilder
     */
     byTrainingId(trainingId: string) : TrainingItemRequestBuilder;
    /**
     * Get a list of the training objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TrainingCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/attacksimulationroot-list-trainings?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TrainingsRequestBuilderGetQueryParameters> | undefined) : Promise<TrainingCollectionResponse | undefined>;
    /**
     * Create new navigation property to trainings for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Training
     */
     post(body: Training, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Training | undefined>;
    /**
     * Get a list of the training objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TrainingsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to trainings for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Training, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the training objects and their properties.
 */
export interface TrainingsRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TrainingsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const TrainingsRequestBuilderNavigationMetadata: Record<Exclude<keyof TrainingsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byTrainingId: {
        uriTemplate: TrainingItemRequestBuilderUriTemplate,
        requestsMetadata: TrainingItemRequestBuilderRequestsMetadata,
        navigationMetadata: TrainingItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["training%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TrainingsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTrainingCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: TrainingsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTrainingFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTraining,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const TrainingsRequestBuilderUriTemplate = "{+baseurl}/security/attackSimulation/trainings{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */