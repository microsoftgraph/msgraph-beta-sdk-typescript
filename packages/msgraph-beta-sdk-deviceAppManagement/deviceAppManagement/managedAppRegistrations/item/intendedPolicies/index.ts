/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createManagedAppPolicyCollectionResponseFromDiscriminatorValue, createManagedAppPolicyFromDiscriminatorValue, serializeManagedAppPolicy, type ManagedAppPolicy, type ManagedAppPolicyCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { ManagedAppPolicyItemRequestBuilderNavigationMetadata, ManagedAppPolicyItemRequestBuilderRequestsMetadata, ManagedAppPolicyItemRequestBuilderUriTemplate, type ManagedAppPolicyItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the intendedPolicies property of the microsoft.graph.managedAppRegistration entity.
 */
export interface IntendedPoliciesRequestBuilder extends BaseRequestBuilder<IntendedPoliciesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the intendedPolicies property of the microsoft.graph.managedAppRegistration entity.
     * @param managedAppPolicyId The unique identifier of managedAppPolicy
     * @returns a ManagedAppPolicyItemRequestBuilder
     */
     byManagedAppPolicyId(managedAppPolicyId: string) : ManagedAppPolicyItemRequestBuilder;
    /**
     * Zero or more policies admin intended for the app as of now.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppPolicyCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<IntendedPoliciesRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedAppPolicyCollectionResponse | undefined>;
    /**
     * Create new navigation property to intendedPolicies for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagedAppPolicy
     */
     post(body: ManagedAppPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagedAppPolicy | undefined>;
    /**
     * Zero or more policies admin intended for the app as of now.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<IntendedPoliciesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to intendedPolicies for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: ManagedAppPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Zero or more policies admin intended for the app as of now.
 */
export interface IntendedPoliciesRequestBuilderGetQueryParameters {
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
const IntendedPoliciesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const IntendedPoliciesRequestBuilderNavigationMetadata: Record<Exclude<keyof IntendedPoliciesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byManagedAppPolicyId: {
        uriTemplate: ManagedAppPolicyItemRequestBuilderUriTemplate,
        requestsMetadata: ManagedAppPolicyItemRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedAppPolicyItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["managedAppPolicy%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const IntendedPoliciesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createManagedAppPolicyCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: IntendedPoliciesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createManagedAppPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagedAppPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const IntendedPoliciesRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/managedAppRegistrations/{managedAppRegistration%2Did}/intendedPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */