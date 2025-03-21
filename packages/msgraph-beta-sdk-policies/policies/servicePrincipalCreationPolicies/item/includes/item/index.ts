/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createServicePrincipalCreationConditionSetFromDiscriminatorValue, serializeServicePrincipalCreationConditionSet, type ServicePrincipalCreationConditionSet } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the includes property of the microsoft.graph.servicePrincipalCreationPolicy entity.
 */
export interface ServicePrincipalCreationConditionSetItemRequestBuilder extends BaseRequestBuilder<ServicePrincipalCreationConditionSetItemRequestBuilder> {
    /**
     * Delete navigation property includes for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get includes from policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ServicePrincipalCreationConditionSet>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ServicePrincipalCreationConditionSetItemRequestBuilderGetQueryParameters> | undefined) : Promise<ServicePrincipalCreationConditionSet | undefined>;
    /**
     * Update the navigation property includes in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ServicePrincipalCreationConditionSet>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ServicePrincipalCreationConditionSet, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ServicePrincipalCreationConditionSet | undefined>;
    /**
     * Delete navigation property includes for policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get includes from policies
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ServicePrincipalCreationConditionSetItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property includes in policies
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ServicePrincipalCreationConditionSet, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get includes from policies
 */
export interface ServicePrincipalCreationConditionSetItemRequestBuilderGetQueryParameters {
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
export const ServicePrincipalCreationConditionSetItemRequestBuilderUriTemplate = "{+baseurl}/policies/servicePrincipalCreationPolicies/{servicePrincipalCreationPolicy%2Did}/includes/{servicePrincipalCreationConditionSet%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ServicePrincipalCreationConditionSetItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ServicePrincipalCreationConditionSetItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ServicePrincipalCreationConditionSetItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ServicePrincipalCreationConditionSetItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createServicePrincipalCreationConditionSetFromDiscriminatorValue,
        queryParametersMapper: ServicePrincipalCreationConditionSetItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ServicePrincipalCreationConditionSetItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createServicePrincipalCreationConditionSetFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeServicePrincipalCreationConditionSet,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
