/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPermissionGrantPolicyFromDiscriminatorValue, serializePermissionGrantPolicy, type PermissionGrantPolicy } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { ExcludesRequestBuilderNavigationMetadata, ExcludesRequestBuilderRequestsMetadata, ExcludesRequestBuilderUriTemplate, type ExcludesRequestBuilder } from './excludes/';
import { IncludesRequestBuilderNavigationMetadata, IncludesRequestBuilderRequestsMetadata, IncludesRequestBuilderUriTemplate, type IncludesRequestBuilder } from './includes/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the permissionGrantPolicies property of the microsoft.graph.policyRoot entity.
 */
export interface PermissionGrantPolicyItemRequestBuilder extends BaseRequestBuilder<PermissionGrantPolicyItemRequestBuilder> {
    /**
     * Provides operations to manage the excludes property of the microsoft.graph.permissionGrantPolicy entity.
     */
    get excludes(): ExcludesRequestBuilder;
    /**
     * Provides operations to manage the includes property of the microsoft.graph.permissionGrantPolicy entity.
     */
    get includes(): IncludesRequestBuilder;
    /**
     * Delete a permissionGrantPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/permissiongrantpolicy-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve a single permissionGrantPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PermissionGrantPolicy
     * @see {@link https://learn.microsoft.com/graph/api/permissiongrantpolicy-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<PermissionGrantPolicyItemRequestBuilderGetQueryParameters> | undefined) : Promise<PermissionGrantPolicy | undefined>;
    /**
     * Update properties of a  permissionGrantPolicy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PermissionGrantPolicy
     * @see {@link https://learn.microsoft.com/graph/api/permissiongrantpolicy-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: PermissionGrantPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PermissionGrantPolicy | undefined>;
    /**
     * Delete a permissionGrantPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve a single permissionGrantPolicy object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PermissionGrantPolicyItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update properties of a  permissionGrantPolicy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: PermissionGrantPolicy, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a single permissionGrantPolicy object.
 */
export interface PermissionGrantPolicyItemRequestBuilderGetQueryParameters {
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
const PermissionGrantPolicyItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PermissionGrantPolicyItemRequestBuilderNavigationMetadata: Record<Exclude<keyof PermissionGrantPolicyItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    excludes: {
        uriTemplate: ExcludesRequestBuilderUriTemplate,
        requestsMetadata: ExcludesRequestBuilderRequestsMetadata,
        navigationMetadata: ExcludesRequestBuilderNavigationMetadata,
    },
    includes: {
        uriTemplate: IncludesRequestBuilderUriTemplate,
        requestsMetadata: IncludesRequestBuilderRequestsMetadata,
        navigationMetadata: IncludesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PermissionGrantPolicyItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createPermissionGrantPolicyFromDiscriminatorValue,
        queryParametersMapper: PermissionGrantPolicyItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPermissionGrantPolicyFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePermissionGrantPolicy,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const PermissionGrantPolicyItemRequestBuilderUriTemplate = "{+baseurl}/policies/permissionGrantPolicies/{permissionGrantPolicy%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */