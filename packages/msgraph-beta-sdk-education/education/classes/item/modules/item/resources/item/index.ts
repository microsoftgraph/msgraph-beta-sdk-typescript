/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createEducationModuleResourceFromDiscriminatorValue, serializeEducationModuleResource, type EducationModuleResource } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the resources property of the microsoft.graph.educationModule entity.
 */
export interface EducationModuleResourceItemRequestBuilder extends BaseRequestBuilder<EducationModuleResourceItemRequestBuilder> {
    /**
     * Delete a specific educationModuleResource attached to a module. Only teachers in the class can remove a resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/educationmoduleresource-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get the properties of a resource associated with a module. Only teachers, students, and applications with application permissions can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationModuleResource
     * @see {@link https://learn.microsoft.com/graph/api/educationmoduleresource-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<EducationModuleResourceItemRequestBuilderGetQueryParameters> | undefined) : Promise<EducationModuleResource | undefined>;
    /**
     * Update a resource in a module. Only teachers can perform this operation. The only one property that can be updated is displayName, for all resource types.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of EducationModuleResource
     * @see {@link https://learn.microsoft.com/graph/api/educationmoduleresource-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: EducationModuleResource, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<EducationModuleResource | undefined>;
    /**
     * Delete a specific educationModuleResource attached to a module. Only teachers in the class can remove a resource.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get the properties of a resource associated with a module. Only teachers, students, and applications with application permissions can perform this operation.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<EducationModuleResourceItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update a resource in a module. Only teachers can perform this operation. The only one property that can be updated is displayName, for all resource types.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: EducationModuleResource, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the properties of a resource associated with a module. Only teachers, students, and applications with application permissions can perform this operation.
 */
export interface EducationModuleResourceItemRequestBuilderGetQueryParameters {
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
const EducationModuleResourceItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const EducationModuleResourceItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createEducationModuleResourceFromDiscriminatorValue,
        queryParametersMapper: EducationModuleResourceItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createEducationModuleResourceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeEducationModuleResource,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const EducationModuleResourceItemRequestBuilderUriTemplate = "{+baseurl}/education/classes/{educationClass%2Did}/modules/{educationModule%2Did}/resources/{educationModuleResource%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */