/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMobilityManagementPolicyFromDiscriminatorValue, serializeMobilityManagementPolicy, type MobilityManagementPolicy } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { IncludedGroupsRequestBuilderNavigationMetadata, IncludedGroupsRequestBuilderRequestsMetadata, IncludedGroupsRequestBuilderUriTemplate, type IncludedGroupsRequestBuilder } from './includedGroups/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of mobilityManagementPolicy entities.
 */
export interface MobilityManagementPolicyItemRequestBuilder extends BaseRequestBuilder<MobilityManagementPolicyItemRequestBuilder> {
    /**
     * Provides operations to manage the includedGroups property of the microsoft.graph.mobilityManagementPolicy entity.
     */
    get includedGroups(): IncludedGroupsRequestBuilder;
    /**
     * Delete entity from mobilityManagementPolicies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get entity from mobilityManagementPolicies by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobilityManagementPolicy
     */
     get(requestConfiguration?: RequestConfiguration<MobilityManagementPolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<MobilityManagementPolicy | undefined>;
    /**
     * Update entity in mobilityManagementPolicies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobilityManagementPolicy
     */
     patch(body: MobilityManagementPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MobilityManagementPolicy | undefined>;
    /**
     * Delete entity from mobilityManagementPolicies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get entity from mobilityManagementPolicies by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MobilityManagementPolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update entity in mobilityManagementPolicies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: MobilityManagementPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get entity from mobilityManagementPolicies by key
 */
export interface MobilityManagementPolicyItemRequestBuilderGetQueryParameters {
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
const MobilityManagementPolicyItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MobilityManagementPolicyItemRequestBuilderNavigationMetadata: Record<Exclude<keyof MobilityManagementPolicyItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    includedGroups: {
        uriTemplate: IncludedGroupsRequestBuilderUriTemplate,
        requestsMetadata: IncludedGroupsRequestBuilderRequestsMetadata,
        navigationMetadata: IncludedGroupsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MobilityManagementPolicyItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createMobilityManagementPolicyFromDiscriminatorValue,
        queryParametersMapper: MobilityManagementPolicyItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createMobilityManagementPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMobilityManagementPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const MobilityManagementPolicyItemRequestBuilderUriTemplate = "{+baseurl}/mobilityManagementPolicies/{mobilityManagementPolicy%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */