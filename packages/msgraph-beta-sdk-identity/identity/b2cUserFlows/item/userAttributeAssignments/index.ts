/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createIdentityUserFlowAttributeAssignmentCollectionResponseFromDiscriminatorValue, createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue, serializeIdentityUserFlowAttributeAssignment, type IdentityUserFlowAttributeAssignment, type IdentityUserFlowAttributeAssignmentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { GetOrderRequestBuilderRequestsMetadata, GetOrderRequestBuilderUriTemplate, type GetOrderRequestBuilder } from './getOrder/';
import { IdentityUserFlowAttributeAssignmentItemRequestBuilderNavigationMetadata, IdentityUserFlowAttributeAssignmentItemRequestBuilderRequestsMetadata, IdentityUserFlowAttributeAssignmentItemRequestBuilderUriTemplate, type IdentityUserFlowAttributeAssignmentItemRequestBuilder } from './item/';
import { SetOrderRequestBuilderRequestsMetadata, SetOrderRequestBuilderUriTemplate, type SetOrderRequestBuilder } from './setOrder/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the userAttributeAssignments property of the microsoft.graph.b2cIdentityUserFlow entity.
 */
export interface UserAttributeAssignmentsRequestBuilder extends BaseRequestBuilder<UserAttributeAssignmentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the getOrder method.
     */
    get getOrder(): GetOrderRequestBuilder;
    /**
     * Provides operations to call the setOrder method.
     */
    get setOrder(): SetOrderRequestBuilder;
    /**
     * Provides operations to manage the userAttributeAssignments property of the microsoft.graph.b2cIdentityUserFlow entity.
     * @param identityUserFlowAttributeAssignmentId The unique identifier of identityUserFlowAttributeAssignment
     * @returns a IdentityUserFlowAttributeAssignmentItemRequestBuilder
     */
     byIdentityUserFlowAttributeAssignmentId(identityUserFlowAttributeAssignmentId: string) : IdentityUserFlowAttributeAssignmentItemRequestBuilder;
    /**
     * Get the identityUserFlowAttributeAssignment resources from the userAttributeAssignments navigation property in a b2cIdentityUserFlow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityUserFlowAttributeAssignmentCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/b2cidentityuserflow-list-userattributeassignments?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<UserAttributeAssignmentsRequestBuilderGetQueryParameters> | undefined) : Promise<IdentityUserFlowAttributeAssignmentCollectionResponse | undefined>;
    /**
     * Create a new identityUserFlowAttributeAssignment object in a b2cIdentityUserFlow.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of IdentityUserFlowAttributeAssignment
     * @see {@link https://learn.microsoft.com/graph/api/b2cidentityuserflow-post-userattributeassignments?view=graph-rest-1.0|Find more info here}
     */
     post(body: IdentityUserFlowAttributeAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<IdentityUserFlowAttributeAssignment | undefined>;
    /**
     * Get the identityUserFlowAttributeAssignment resources from the userAttributeAssignments navigation property in a b2cIdentityUserFlow.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserAttributeAssignmentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new identityUserFlowAttributeAssignment object in a b2cIdentityUserFlow.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: IdentityUserFlowAttributeAssignment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the identityUserFlowAttributeAssignment resources from the userAttributeAssignments navigation property in a b2cIdentityUserFlow.
 */
export interface UserAttributeAssignmentsRequestBuilderGetQueryParameters {
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
const UserAttributeAssignmentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const UserAttributeAssignmentsRequestBuilderNavigationMetadata: Record<Exclude<keyof UserAttributeAssignmentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byIdentityUserFlowAttributeAssignmentId: {
        uriTemplate: IdentityUserFlowAttributeAssignmentItemRequestBuilderUriTemplate,
        requestsMetadata: IdentityUserFlowAttributeAssignmentItemRequestBuilderRequestsMetadata,
        navigationMetadata: IdentityUserFlowAttributeAssignmentItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["identityUserFlowAttributeAssignment%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    getOrder: {
        uriTemplate: GetOrderRequestBuilderUriTemplate,
        requestsMetadata: GetOrderRequestBuilderRequestsMetadata,
    },
    setOrder: {
        uriTemplate: SetOrderRequestBuilderUriTemplate,
        requestsMetadata: SetOrderRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UserAttributeAssignmentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createIdentityUserFlowAttributeAssignmentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UserAttributeAssignmentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createIdentityUserFlowAttributeAssignmentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeIdentityUserFlowAttributeAssignment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UserAttributeAssignmentsRequestBuilderUriTemplate = "{+baseurl}/identity/b2cUserFlows/{b2cIdentityUserFlow%2Did}/userAttributeAssignments{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */