/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPolicySetAssignmentCollectionResponseFromDiscriminatorValue, createPolicySetAssignmentFromDiscriminatorValue, serializePolicySetAssignment, type PolicySetAssignment, type PolicySetAssignmentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { PolicySetAssignmentItemRequestBuilderRequestsMetadata, PolicySetAssignmentItemRequestBuilderUriTemplate, type PolicySetAssignmentItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the assignments property of the microsoft.graph.policySet entity.
 */
export interface AssignmentsRequestBuilder extends BaseRequestBuilder<AssignmentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the assignments property of the microsoft.graph.policySet entity.
     * @param policySetAssignmentId The unique identifier of policySetAssignment
     * @returns a PolicySetAssignmentItemRequestBuilder
     */
     byPolicySetAssignmentId(policySetAssignmentId: string) : PolicySetAssignmentItemRequestBuilder;
    /**
     * Assignments of the PolicySet.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PolicySetAssignmentCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<AssignmentsRequestBuilderGetQueryParameters> | undefined) : Promise<PolicySetAssignmentCollectionResponse | undefined>;
    /**
     * Create new navigation property to assignments for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PolicySetAssignment
     */
     post(body: PolicySetAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PolicySetAssignment | undefined>;
    /**
     * Assignments of the PolicySet.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AssignmentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to assignments for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: PolicySetAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Assignments of the PolicySet.
 */
export interface AssignmentsRequestBuilderGetQueryParameters {
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
const AssignmentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AssignmentsRequestBuilderNavigationMetadata: Record<Exclude<keyof AssignmentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byPolicySetAssignmentId: {
        uriTemplate: PolicySetAssignmentItemRequestBuilderUriTemplate,
        requestsMetadata: PolicySetAssignmentItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["policySetAssignment%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AssignmentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPolicySetAssignmentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AssignmentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPolicySetAssignmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePolicySetAssignment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AssignmentsRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/policySets/{policySet%2Did}/assignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */