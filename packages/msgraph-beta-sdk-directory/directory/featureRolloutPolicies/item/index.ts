/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createFeatureRolloutPolicyFromDiscriminatorValue, serializeFeatureRolloutPolicy, type FeatureRolloutPolicy } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AppliesToRequestBuilderNavigationMetadata, AppliesToRequestBuilderRequestsMetadata, type AppliesToRequestBuilder } from './appliesTo/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the featureRolloutPolicies property of the microsoft.graph.directory entity.
 */
export interface FeatureRolloutPolicyItemRequestBuilder extends BaseRequestBuilder<FeatureRolloutPolicyItemRequestBuilder> {
    /**
     * Provides operations to manage the appliesTo property of the microsoft.graph.featureRolloutPolicy entity.
     * @deprecated Feature Rollout Policies have been grouped with other policies under /policies. The existing /directory/featureRolloutPolicies is deprecated and will stop returning data on 06/30/2021. Please use /policies/featureRolloutPolicies. as of 2021-01/DirectoryFeatureRolloutPolicies on 2021-03-05 and will be removed 2021-06-30
     */
    get appliesTo(): AppliesToRequestBuilder;
    /**
     * Delete navigation property featureRolloutPolicies for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated Feature Rollout Policies have been grouped with other policies under /policies. The existing /directory/featureRolloutPolicies is deprecated and will stop returning data on 06/30/2021. Please use /policies/featureRolloutPolicies. as of 2021-01/DirectoryFeatureRolloutPolicies on 2021-03-05 and will be removed 2021-06-30
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get featureRolloutPolicies from directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FeatureRolloutPolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated Feature Rollout Policies have been grouped with other policies under /policies. The existing /directory/featureRolloutPolicies is deprecated and will stop returning data on 06/30/2021. Please use /policies/featureRolloutPolicies. as of 2021-01/DirectoryFeatureRolloutPolicies on 2021-03-05 and will be removed 2021-06-30
     */
     get(requestConfiguration?: RequestConfiguration<FeatureRolloutPolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<FeatureRolloutPolicy | undefined>;
    /**
     * Update the navigation property featureRolloutPolicies in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FeatureRolloutPolicy>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated Feature Rollout Policies have been grouped with other policies under /policies. The existing /directory/featureRolloutPolicies is deprecated and will stop returning data on 06/30/2021. Please use /policies/featureRolloutPolicies. as of 2021-01/DirectoryFeatureRolloutPolicies on 2021-03-05 and will be removed 2021-06-30
     */
     patch(body: FeatureRolloutPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<FeatureRolloutPolicy | undefined>;
    /**
     * Delete navigation property featureRolloutPolicies for directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated Feature Rollout Policies have been grouped with other policies under /policies. The existing /directory/featureRolloutPolicies is deprecated and will stop returning data on 06/30/2021. Please use /policies/featureRolloutPolicies. as of 2021-01/DirectoryFeatureRolloutPolicies on 2021-03-05 and will be removed 2021-06-30
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get featureRolloutPolicies from directory
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated Feature Rollout Policies have been grouped with other policies under /policies. The existing /directory/featureRolloutPolicies is deprecated and will stop returning data on 06/30/2021. Please use /policies/featureRolloutPolicies. as of 2021-01/DirectoryFeatureRolloutPolicies on 2021-03-05 and will be removed 2021-06-30
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FeatureRolloutPolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property featureRolloutPolicies in directory
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated Feature Rollout Policies have been grouped with other policies under /policies. The existing /directory/featureRolloutPolicies is deprecated and will stop returning data on 06/30/2021. Please use /policies/featureRolloutPolicies. as of 2021-01/DirectoryFeatureRolloutPolicies on 2021-03-05 and will be removed 2021-06-30
     */
     toPatchRequestInformation(body: FeatureRolloutPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get featureRolloutPolicies from directory
 */
export interface FeatureRolloutPolicyItemRequestBuilderGetQueryParameters {
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
 * Uri template for the request builder.
 */
export const FeatureRolloutPolicyItemRequestBuilderUriTemplate = "{+baseurl}/directory/featureRolloutPolicies/{featureRolloutPolicy%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FeatureRolloutPolicyItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const FeatureRolloutPolicyItemRequestBuilderNavigationMetadata: Record<Exclude<keyof FeatureRolloutPolicyItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    appliesTo: {
        requestsMetadata: AppliesToRequestBuilderRequestsMetadata,
        navigationMetadata: AppliesToRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FeatureRolloutPolicyItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: FeatureRolloutPolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: FeatureRolloutPolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFeatureRolloutPolicyFromDiscriminatorValue,
        queryParametersMapper: FeatureRolloutPolicyItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: FeatureRolloutPolicyItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFeatureRolloutPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeFeatureRolloutPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
