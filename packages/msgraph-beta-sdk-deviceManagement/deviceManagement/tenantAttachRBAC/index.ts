/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createTenantAttachRBACFromDiscriminatorValue, serializeTenantAttachRBAC, type TenantAttachRBAC } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { EnableRequestBuilderRequestsMetadata, EnableRequestBuilderUriTemplate, type EnableRequestBuilder } from './enable/';
import { GetStateRequestBuilderRequestsMetadata, GetStateRequestBuilderUriTemplate, type GetStateRequestBuilder } from './getState/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the tenantAttachRBAC property of the microsoft.graph.deviceManagement entity.
 */
export interface TenantAttachRBACRequestBuilder extends BaseRequestBuilder<TenantAttachRBACRequestBuilder> {
    /**
     * Provides operations to call the enable method.
     */
    get enable(): EnableRequestBuilder;
    /**
     * Provides operations to call the getState method.
     */
    get getState(): GetStateRequestBuilder;
    /**
     * Delete navigation property tenantAttachRBAC for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * TenantAttach RBAC Enablement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TenantAttachRBAC
     */
     get(requestConfiguration?: RequestConfiguration<TenantAttachRBACRequestBuilderGetQueryParameters> | undefined) : Promise<TenantAttachRBAC | undefined>;
    /**
     * Update the navigation property tenantAttachRBAC in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of TenantAttachRBAC
     */
     patch(body: TenantAttachRBAC, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TenantAttachRBAC | undefined>;
    /**
     * Delete navigation property tenantAttachRBAC for deviceManagement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * TenantAttach RBAC Enablement
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TenantAttachRBACRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property tenantAttachRBAC in deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: TenantAttachRBAC, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * TenantAttach RBAC Enablement
 */
export interface TenantAttachRBACRequestBuilderGetQueryParameters {
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
const TenantAttachRBACRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TenantAttachRBACRequestBuilderNavigationMetadata: Record<Exclude<keyof TenantAttachRBACRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    enable: {
        uriTemplate: EnableRequestBuilderUriTemplate,
        requestsMetadata: EnableRequestBuilderRequestsMetadata,
    },
    getState: {
        uriTemplate: GetStateRequestBuilderUriTemplate,
        requestsMetadata: GetStateRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TenantAttachRBACRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createTenantAttachRBACFromDiscriminatorValue,
        queryParametersMapper: TenantAttachRBACRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createTenantAttachRBACFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeTenantAttachRBAC,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const TenantAttachRBACRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/tenantAttachRBAC{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */