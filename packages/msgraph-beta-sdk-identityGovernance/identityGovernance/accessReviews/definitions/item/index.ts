/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAccessReviewScheduleDefinitionFromDiscriminatorValue, serializeAccessReviewScheduleDefinition, type AccessReviewScheduleDefinition } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { InstancesRequestBuilderNavigationMetadata, InstancesRequestBuilderRequestsMetadata, InstancesRequestBuilderUriTemplate, type InstancesRequestBuilder } from './instances/';
import { StopRequestBuilderRequestsMetadata, StopRequestBuilderUriTemplate, type StopRequestBuilder } from './stop/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the definitions property of the microsoft.graph.accessReviewSet entity.
 */
export interface AccessReviewScheduleDefinitionItemRequestBuilder extends BaseRequestBuilder<AccessReviewScheduleDefinitionItemRequestBuilder> {
    /**
     * Provides operations to manage the instances property of the microsoft.graph.accessReviewScheduleDefinition entity.
     */
    get instances(): InstancesRequestBuilder;
    /**
     * Provides operations to call the stop method.
     */
    get stop(): StopRequestBuilder;
    /**
     * Delete an accessReviewScheduleDefinition object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewscheduledefinition-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve an accessReviewScheduleDefinition object by ID. This returns all properties of the scheduled access review series except for the associated accessReviewInstances. Each accessReviewScheduleDefinition has at least one instance. An instance represents a review for a specific resource (such as a particular group's members), during one occurrence (for example, March 2021) of a recurring review. To retrieve the instances of the access review series, use the list accessReviewInstance API.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewScheduleDefinition
     * @see {@link https://learn.microsoft.com/graph/api/accessreviewscheduledefinition-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AccessReviewScheduleDefinitionItemRequestBuilderGetQueryParameters> | undefined) : Promise<AccessReviewScheduleDefinition | undefined>;
    /**
     * Update the navigation property definitions in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessReviewScheduleDefinition
     */
     put(body: AccessReviewScheduleDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessReviewScheduleDefinition | undefined>;
    /**
     * Delete an accessReviewScheduleDefinition object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve an accessReviewScheduleDefinition object by ID. This returns all properties of the scheduled access review series except for the associated accessReviewInstances. Each accessReviewScheduleDefinition has at least one instance. An instance represents a review for a specific resource (such as a particular group's members), during one occurrence (for example, March 2021) of a recurring review. To retrieve the instances of the access review series, use the list accessReviewInstance API.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessReviewScheduleDefinitionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property definitions in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPutRequestInformation(body: AccessReviewScheduleDefinition, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve an accessReviewScheduleDefinition object by ID. This returns all properties of the scheduled access review series except for the associated accessReviewInstances. Each accessReviewScheduleDefinition has at least one instance. An instance represents a review for a specific resource (such as a particular group's members), during one occurrence (for example, March 2021) of a recurring review. To retrieve the instances of the access review series, use the list accessReviewInstance API.
 */
export interface AccessReviewScheduleDefinitionItemRequestBuilderGetQueryParameters {
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
const AccessReviewScheduleDefinitionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AccessReviewScheduleDefinitionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessReviewScheduleDefinitionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    instances: {
        uriTemplate: InstancesRequestBuilderUriTemplate,
        requestsMetadata: InstancesRequestBuilderRequestsMetadata,
        navigationMetadata: InstancesRequestBuilderNavigationMetadata,
    },
    stop: {
        uriTemplate: StopRequestBuilderUriTemplate,
        requestsMetadata: StopRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessReviewScheduleDefinitionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createAccessReviewScheduleDefinitionFromDiscriminatorValue,
        queryParametersMapper: AccessReviewScheduleDefinitionItemRequestBuilderGetQueryParametersMapper,
    },
    put: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAccessReviewScheduleDefinitionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessReviewScheduleDefinition,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AccessReviewScheduleDefinitionItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/accessReviews/definitions/{accessReviewScheduleDefinition%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */