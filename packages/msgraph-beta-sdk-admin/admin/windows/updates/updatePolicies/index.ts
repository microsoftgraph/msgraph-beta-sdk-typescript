/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createUpdatePolicyCollectionResponseFromDiscriminatorValue, createUpdatePolicyFromDiscriminatorValue, serializeUpdatePolicy, type UpdatePolicy, type UpdatePolicyCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/windowsUpdates/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { type UpdatePolicyItemRequestBuilder, UpdatePolicyItemRequestBuilderNavigationMetadata, UpdatePolicyItemRequestBuilderRequestsMetadata, UpdatePolicyItemRequestBuilderUriTemplate } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the updatePolicies property of the microsoft.graph.adminWindowsUpdates entity.
 */
export interface UpdatePoliciesRequestBuilder extends BaseRequestBuilder<UpdatePoliciesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the updatePolicies property of the microsoft.graph.adminWindowsUpdates entity.
     * @param updatePolicyId The unique identifier of updatePolicy
     * @returns a UpdatePolicyItemRequestBuilder
     */
     byUpdatePolicyId(updatePolicyId: string) : UpdatePolicyItemRequestBuilder;
    /**
     * Get a list of updatePolicy objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UpdatePolicyCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/adminwindowsupdates-list-updatepolicies?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<UpdatePoliciesRequestBuilderGetQueryParameters> | undefined) : Promise<UpdatePolicyCollectionResponse | undefined>;
    /**
     * Create a new updatePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UpdatePolicy
     * @see {@link https://learn.microsoft.com/graph/api/adminwindowsupdates-post-updatepolicies?view=graph-rest-1.0|Find more info here}
     */
     post(body: UpdatePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UpdatePolicy | undefined>;
    /**
     * Get a list of updatePolicy objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UpdatePoliciesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new updatePolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UpdatePolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of updatePolicy objects and their properties.
 */
export interface UpdatePoliciesRequestBuilderGetQueryParameters {
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
const UpdatePoliciesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const UpdatePoliciesRequestBuilderNavigationMetadata: Record<Exclude<keyof UpdatePoliciesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUpdatePolicyId: {
        uriTemplate: UpdatePolicyItemRequestBuilderUriTemplate,
        requestsMetadata: UpdatePolicyItemRequestBuilderRequestsMetadata,
        navigationMetadata: UpdatePolicyItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["updatePolicy%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UpdatePoliciesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUpdatePolicyCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UpdatePoliciesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUpdatePolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUpdatePolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UpdatePoliciesRequestBuilderUriTemplate = "{+baseurl}/admin/windows/updates/updatePolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */