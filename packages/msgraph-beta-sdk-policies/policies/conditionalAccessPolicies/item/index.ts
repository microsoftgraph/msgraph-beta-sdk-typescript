/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createConditionalAccessPolicyFromDiscriminatorValue, serializeConditionalAccessPolicy, type ConditionalAccessPolicy } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the conditionalAccessPolicies property of the microsoft.graph.policyRoot entity.
 */
export interface ConditionalAccessPolicyItemRequestBuilder extends BaseRequestBuilder<ConditionalAccessPolicyItemRequestBuilder> {
    /**
     * Delete navigation property conditionalAccessPolicies for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The custom rules that define an access scenario.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConditionalAccessPolicy
     */
     get(requestConfiguration?: RequestConfiguration<ConditionalAccessPolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<ConditionalAccessPolicy | undefined>;
    /**
     * Update the navigation property conditionalAccessPolicies in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ConditionalAccessPolicy
     */
     patch(body: ConditionalAccessPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ConditionalAccessPolicy | undefined>;
    /**
     * Delete navigation property conditionalAccessPolicies for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The custom rules that define an access scenario.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ConditionalAccessPolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property conditionalAccessPolicies in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ConditionalAccessPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The custom rules that define an access scenario.
 */
export interface ConditionalAccessPolicyItemRequestBuilderGetQueryParameters {
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
const ConditionalAccessPolicyItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ConditionalAccessPolicyItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createConditionalAccessPolicyFromDiscriminatorValue,
        queryParametersMapper: ConditionalAccessPolicyItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createConditionalAccessPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeConditionalAccessPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ConditionalAccessPolicyItemRequestBuilderUriTemplate = "{+baseurl}/policies/conditionalAccessPolicies/{conditionalAccessPolicy%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */