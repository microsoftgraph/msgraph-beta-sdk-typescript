/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue, serializeCrossTenantAccessPolicyConfigurationDefault, type CrossTenantAccessPolicyConfigurationDefault } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { ResetToSystemDefaultRequestBuilderRequestsMetadata, ResetToSystemDefaultRequestBuilderUriTemplate, type ResetToSystemDefaultRequestBuilder } from './resetToSystemDefault/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the default property of the microsoft.graph.crossTenantAccessPolicy entity.
 */
export interface DefaultRequestBuilder extends BaseRequestBuilder<DefaultRequestBuilder> {
    /**
     * Provides operations to call the resetToSystemDefault method.
     */
    get resetToSystemDefault(): ResetToSystemDefaultRequestBuilder;
    /**
     * Delete navigation property default for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the default configuration of a cross-tenant access policy. This default configuration may be the service default assigned by Microsoft Entra ID (isServiceDefault is true) or may be customized in your tenant (isServiceDefault is false).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CrossTenantAccessPolicyConfigurationDefault
     * @see {@link https://learn.microsoft.com/graph/api/crosstenantaccesspolicyconfigurationdefault-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DefaultRequestBuilderGetQueryParameters> | undefined) : Promise<CrossTenantAccessPolicyConfigurationDefault | undefined>;
    /**
     * Update the default configuration of a cross-tenant access policy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of CrossTenantAccessPolicyConfigurationDefault
     * @see {@link https://learn.microsoft.com/graph/api/crosstenantaccesspolicyconfigurationdefault-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: CrossTenantAccessPolicyConfigurationDefault, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CrossTenantAccessPolicyConfigurationDefault | undefined>;
    /**
     * Delete navigation property default for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the default configuration of a cross-tenant access policy. This default configuration may be the service default assigned by Microsoft Entra ID (isServiceDefault is true) or may be customized in your tenant (isServiceDefault is false).
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DefaultRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the default configuration of a cross-tenant access policy.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: CrossTenantAccessPolicyConfigurationDefault, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the default configuration of a cross-tenant access policy. This default configuration may be the service default assigned by Microsoft Entra ID (isServiceDefault is true) or may be customized in your tenant (isServiceDefault is false).
 */
export interface DefaultRequestBuilderGetQueryParameters {
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
const DefaultRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DefaultRequestBuilderNavigationMetadata: Record<Exclude<keyof DefaultRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    resetToSystemDefault: {
        uriTemplate: ResetToSystemDefaultRequestBuilderUriTemplate,
        requestsMetadata: ResetToSystemDefaultRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DefaultRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue,
        queryParametersMapper: DefaultRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createCrossTenantAccessPolicyConfigurationDefaultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCrossTenantAccessPolicyConfigurationDefault,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const DefaultRequestBuilderUriTemplate = "{+baseurl}/policies/crossTenantAccessPolicy/default{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */