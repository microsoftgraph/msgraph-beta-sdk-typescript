/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createManagementTemplateStepVersionFromDiscriminatorValue, serializeManagementTemplateStepVersion, type ManagementTemplateStepVersion } from '@microsoft/msgraph-beta-sdk/models/managedTenants/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AcceptedForRequestBuilderRequestsMetadata, AcceptedForRequestBuilderUriTemplate, type AcceptedForRequestBuilder } from './acceptedFor/';
import { DeploymentsRequestBuilderNavigationMetadata, DeploymentsRequestBuilderRequestsMetadata, DeploymentsRequestBuilderUriTemplate, type DeploymentsRequestBuilder } from './deployments/';
import { TemplateStepRequestBuilderRequestsMetadata, TemplateStepRequestBuilderUriTemplate, type TemplateStepRequestBuilder } from './templateStep/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managementTemplateStepVersions property of the microsoft.graph.managedTenants.managedTenant entity.
 */
export interface ManagementTemplateStepVersionItemRequestBuilder extends BaseRequestBuilder<ManagementTemplateStepVersionItemRequestBuilder> {
    /**
     * Provides operations to manage the acceptedFor property of the microsoft.graph.managedTenants.managementTemplateStepVersion entity.
     */
    get acceptedFor(): AcceptedForRequestBuilder;
    /**
     * Provides operations to manage the deployments property of the microsoft.graph.managedTenants.managementTemplateStepVersion entity.
     */
    get deployments(): DeploymentsRequestBuilder;
    /**
     * Provides operations to manage the templateStep property of the microsoft.graph.managedTenants.managementTemplateStepVersion entity.
     */
    get templateStep(): TemplateStepRequestBuilder;
    /**
     * Delete navigation property managementTemplateStepVersions for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get managementTemplateStepVersions from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagementTemplateStepVersion
     */
     get(requestConfiguration?: RequestConfiguration<ManagementTemplateStepVersionItemRequestBuilderGetQueryParameters> | undefined) : Promise<ManagementTemplateStepVersion | undefined>;
    /**
     * Update the navigation property managementTemplateStepVersions in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagementTemplateStepVersion
     */
     patch(body: ManagementTemplateStepVersion, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagementTemplateStepVersion | undefined>;
    /**
     * Delete navigation property managementTemplateStepVersions for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get managementTemplateStepVersions from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagementTemplateStepVersionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property managementTemplateStepVersions in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ManagementTemplateStepVersion, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get managementTemplateStepVersions from tenantRelationships
 */
export interface ManagementTemplateStepVersionItemRequestBuilderGetQueryParameters {
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
const ManagementTemplateStepVersionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ManagementTemplateStepVersionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ManagementTemplateStepVersionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    acceptedFor: {
        uriTemplate: AcceptedForRequestBuilderUriTemplate,
        requestsMetadata: AcceptedForRequestBuilderRequestsMetadata,
    },
    deployments: {
        uriTemplate: DeploymentsRequestBuilderUriTemplate,
        requestsMetadata: DeploymentsRequestBuilderRequestsMetadata,
        navigationMetadata: DeploymentsRequestBuilderNavigationMetadata,
    },
    templateStep: {
        uriTemplate: TemplateStepRequestBuilderUriTemplate,
        requestsMetadata: TemplateStepRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagementTemplateStepVersionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createManagementTemplateStepVersionFromDiscriminatorValue,
        queryParametersMapper: ManagementTemplateStepVersionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createManagementTemplateStepVersionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagementTemplateStepVersion,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ManagementTemplateStepVersionItemRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */