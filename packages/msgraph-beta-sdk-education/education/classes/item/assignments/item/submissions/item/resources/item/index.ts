/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createEducationSubmissionResourceFromDiscriminatorValue, serializeEducationSubmissionResource, type EducationSubmissionResource } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { DependentResourcesRequestBuilderNavigationMetadata, DependentResourcesRequestBuilderRequestsMetadata, DependentResourcesRequestBuilderUriTemplate, type DependentResourcesRequestBuilder } from './dependentResources/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resources property of the microsoft.graph.educationSubmission entity.
 */
export interface EducationSubmissionResourceItemRequestBuilder extends BaseRequestBuilder<EducationSubmissionResourceItemRequestBuilder> {
    /**
     * Provides operations to manage the dependentResources property of the microsoft.graph.educationSubmissionResource entity.
     */
    get dependentResources(): DependentResourcesRequestBuilder;
    /**
     * Delete an educationSubmissionResource from the submission. Only teachers and students can perform this operation. If the resource was copied from the assignment, a new copy of the resource will be created after the current copy is deleted. This allows you to 'reset' the resource to its original state. If the resource wasn't copied from the assignment but was added from the student, the resource is deleted.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/educationsubmissionresource-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties of a specific resource associated with a submission. Only teachers, students, and applications with application permissions can perform this operation. This resource is in the 'working' resource list and should be considered work in process by a student. This resource is wrapped with a possible pointer back to the assignment resource if it was copied from the assignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSubmissionResource
     * @see {@link https://learn.microsoft.com/graph/api/educationsubmissionresource-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<EducationSubmissionResourceItemRequestBuilderGetQueryParameters> | undefined) : Promise<EducationSubmissionResource | undefined>;
    /**
     * Update the navigation property resources in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationSubmissionResource
     */
     patch(body: EducationSubmissionResource, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EducationSubmissionResource | undefined>;
    /**
     * Delete an educationSubmissionResource from the submission. Only teachers and students can perform this operation. If the resource was copied from the assignment, a new copy of the resource will be created after the current copy is deleted. This allows you to 'reset' the resource to its original state. If the resource wasn't copied from the assignment but was added from the student, the resource is deleted.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties of a specific resource associated with a submission. Only teachers, students, and applications with application permissions can perform this operation. This resource is in the 'working' resource list and should be considered work in process by a student. This resource is wrapped with a possible pointer back to the assignment resource if it was copied from the assignment.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EducationSubmissionResourceItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property resources in education
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: EducationSubmissionResource, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties of a specific resource associated with a submission. Only teachers, students, and applications with application permissions can perform this operation. This resource is in the 'working' resource list and should be considered work in process by a student. This resource is wrapped with a possible pointer back to the assignment resource if it was copied from the assignment.
 */
export interface EducationSubmissionResourceItemRequestBuilderGetQueryParameters {
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
const EducationSubmissionResourceItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const EducationSubmissionResourceItemRequestBuilderNavigationMetadata: Record<Exclude<keyof EducationSubmissionResourceItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    dependentResources: {
        uriTemplate: DependentResourcesRequestBuilderUriTemplate,
        requestsMetadata: DependentResourcesRequestBuilderRequestsMetadata,
        navigationMetadata: DependentResourcesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EducationSubmissionResourceItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createEducationSubmissionResourceFromDiscriminatorValue,
        queryParametersMapper: EducationSubmissionResourceItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEducationSubmissionResourceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEducationSubmissionResource,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const EducationSubmissionResourceItemRequestBuilderUriTemplate = "{+baseurl}/education/classes/{educationClass%2Did}/assignments/{educationAssignment%2Did}/submissions/{educationSubmission%2Did}/resources/{educationSubmissionResource%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */