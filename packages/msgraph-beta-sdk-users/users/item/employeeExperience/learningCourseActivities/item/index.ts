/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createLearningCourseActivityFromDiscriminatorValue, type LearningCourseActivity } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the learningCourseActivities property of the microsoft.graph.employeeExperienceUser entity.
 */
export interface LearningCourseActivityItemRequestBuilder extends BaseRequestBuilder<LearningCourseActivityItemRequestBuilder> {
    /**
     * Get the specified learningCourseActivity object using either an ID or an externalCourseActivityId of the learning provider, or a courseActivityId of a user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of LearningCourseActivity
     * @see {@link https://learn.microsoft.com/graph/api/learningcourseactivity-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<LearningCourseActivityItemRequestBuilderGetQueryParameters> | undefined) : Promise<LearningCourseActivity | undefined>;
    /**
     * Get the specified learningCourseActivity object using either an ID or an externalCourseActivityId of the learning provider, or a courseActivityId of a user.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<LearningCourseActivityItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the specified learningCourseActivity object using either an ID or an externalCourseActivityId of the learning provider, or a courseActivityId of a user.
 */
export interface LearningCourseActivityItemRequestBuilderGetQueryParameters {
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
const LearningCourseActivityItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const LearningCourseActivityItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createLearningCourseActivityFromDiscriminatorValue,
        queryParametersMapper: LearningCourseActivityItemRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const LearningCourseActivityItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/employeeExperience/learningCourseActivities/{learningCourseActivity%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */