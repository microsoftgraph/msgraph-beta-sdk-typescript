/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMobilityManagementPolicyFromDiscriminatorValue, serializeMobilityManagementPolicy, type MobilityManagementPolicy } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { IncludedGroupsRequestBuilderNavigationMetadata, IncludedGroupsRequestBuilderRequestsMetadata, IncludedGroupsRequestBuilderUriTemplate, type IncludedGroupsRequestBuilder } from './includedGroups/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mobileDeviceManagementPolicies property of the microsoft.graph.policyRoot entity.
 */
export interface MobilityManagementPolicyItemRequestBuilder extends BaseRequestBuilder<MobilityManagementPolicyItemRequestBuilder> {
    /**
     * Provides operations to manage the includedGroups property of the microsoft.graph.mobilityManagementPolicy entity.
     */
    get includedGroups(): IncludedGroupsRequestBuilder;
    /**
     * Delete a mobilityManagementPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/mobiledevicemanagementpolicies-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a mobilityManagementPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobilityManagementPolicy
     * @see {@link https://learn.microsoft.com/graph/api/mobiledevicemanagementpolicies-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<MobilityManagementPolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<MobilityManagementPolicy | undefined>;
    /**
     * Update the properties of a mobilityManagementPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of MobilityManagementPolicy
     * @see {@link https://learn.microsoft.com/graph/api/mobiledevicemanagementpolicies-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: MobilityManagementPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MobilityManagementPolicy | undefined>;
    /**
     * Delete a mobilityManagementPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a mobilityManagementPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MobilityManagementPolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a mobilityManagementPolicy object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: MobilityManagementPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a mobilityManagementPolicy object.
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
export const MobilityManagementPolicyItemRequestBuilderUriTemplate = "{+baseurl}/policies/mobileDeviceManagementPolicies/{mobilityManagementPolicy%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */