/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createServicePrincipalCreationPolicyCollectionResponseFromDiscriminatorValue, createServicePrincipalCreationPolicyFromDiscriminatorValue, serializeServicePrincipalCreationPolicy, type ServicePrincipalCreationPolicy, type ServicePrincipalCreationPolicyCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { ServicePrincipalCreationPolicyItemRequestBuilderNavigationMetadata, ServicePrincipalCreationPolicyItemRequestBuilderRequestsMetadata, ServicePrincipalCreationPolicyItemRequestBuilderUriTemplate, type ServicePrincipalCreationPolicyItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the servicePrincipalCreationPolicies property of the microsoft.graph.policyRoot entity.
 */
export interface ServicePrincipalCreationPoliciesRequestBuilder extends BaseRequestBuilder<ServicePrincipalCreationPoliciesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the servicePrincipalCreationPolicies property of the microsoft.graph.policyRoot entity.
     * @param servicePrincipalCreationPolicyId The unique identifier of servicePrincipalCreationPolicy
     * @returns a ServicePrincipalCreationPolicyItemRequestBuilder
     */
     byServicePrincipalCreationPolicyId(servicePrincipalCreationPolicyId: string) : ServicePrincipalCreationPolicyItemRequestBuilder;
    /**
     * Get servicePrincipalCreationPolicies from policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServicePrincipalCreationPolicyCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<ServicePrincipalCreationPoliciesRequestBuilderGetQueryParameters> | undefined) : Promise<ServicePrincipalCreationPolicyCollectionResponse | undefined>;
    /**
     * Create new navigation property to servicePrincipalCreationPolicies for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ServicePrincipalCreationPolicy
     */
     post(body: ServicePrincipalCreationPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ServicePrincipalCreationPolicy | undefined>;
    /**
     * Get servicePrincipalCreationPolicies from policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ServicePrincipalCreationPoliciesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to servicePrincipalCreationPolicies for policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: ServicePrincipalCreationPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get servicePrincipalCreationPolicies from policies
 */
export interface ServicePrincipalCreationPoliciesRequestBuilderGetQueryParameters {
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
const ServicePrincipalCreationPoliciesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ServicePrincipalCreationPoliciesRequestBuilderNavigationMetadata: Record<Exclude<keyof ServicePrincipalCreationPoliciesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byServicePrincipalCreationPolicyId: {
        uriTemplate: ServicePrincipalCreationPolicyItemRequestBuilderUriTemplate,
        requestsMetadata: ServicePrincipalCreationPolicyItemRequestBuilderRequestsMetadata,
        navigationMetadata: ServicePrincipalCreationPolicyItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["servicePrincipalCreationPolicy%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ServicePrincipalCreationPoliciesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createServicePrincipalCreationPolicyCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ServicePrincipalCreationPoliciesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createServicePrincipalCreationPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeServicePrincipalCreationPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ServicePrincipalCreationPoliciesRequestBuilderUriTemplate = "{+baseurl}/policies/servicePrincipalCreationPolicies{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */