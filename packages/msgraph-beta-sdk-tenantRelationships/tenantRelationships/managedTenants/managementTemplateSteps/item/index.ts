/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createManagementTemplateStepFromDiscriminatorValue, serializeManagementTemplateStep, type ManagementTemplateStep } from '@microsoft/msgraph-beta-sdk/models/managedTenants/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AcceptedVersionRequestBuilderRequestsMetadata, AcceptedVersionRequestBuilderUriTemplate, type AcceptedVersionRequestBuilder } from './acceptedVersion/';
import { ManagementTemplateRequestBuilderRequestsMetadata, ManagementTemplateRequestBuilderUriTemplate, type ManagementTemplateRequestBuilder } from './managementTemplate/';
import { type VersionsRequestBuilder, VersionsRequestBuilderNavigationMetadata, VersionsRequestBuilderRequestsMetadata, VersionsRequestBuilderUriTemplate } from './versions/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managementTemplateSteps property of the microsoft.graph.managedTenants.managedTenant entity.
 */
export interface ManagementTemplateStepItemRequestBuilder extends BaseRequestBuilder<ManagementTemplateStepItemRequestBuilder> {
    /**
     * Provides operations to manage the acceptedVersion property of the microsoft.graph.managedTenants.managementTemplateStep entity.
     */
    get acceptedVersion(): AcceptedVersionRequestBuilder;
    /**
     * Provides operations to manage the managementTemplate property of the microsoft.graph.managedTenants.managementTemplateStep entity.
     */
    get managementTemplate(): ManagementTemplateRequestBuilder;
    /**
     * Provides operations to manage the versions property of the microsoft.graph.managedTenants.managementTemplateStep entity.
     */
    get versions(): VersionsRequestBuilder;
    /**
     * Delete navigation property managementTemplateSteps for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get managementTemplateSteps from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagementTemplateStep
     */
     get(requestConfiguration?: RequestConfiguration<ManagementTemplateStepItemRequestBuilderGetQueryParameters> | undefined) : Promise<ManagementTemplateStep | undefined>;
    /**
     * Update the navigation property managementTemplateSteps in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagementTemplateStep
     */
     patch(body: ManagementTemplateStep, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagementTemplateStep | undefined>;
    /**
     * Delete navigation property managementTemplateSteps for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get managementTemplateSteps from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagementTemplateStepItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property managementTemplateSteps in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ManagementTemplateStep, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get managementTemplateSteps from tenantRelationships
 */
export interface ManagementTemplateStepItemRequestBuilderGetQueryParameters {
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
const ManagementTemplateStepItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ManagementTemplateStepItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ManagementTemplateStepItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    acceptedVersion: {
        uriTemplate: AcceptedVersionRequestBuilderUriTemplate,
        requestsMetadata: AcceptedVersionRequestBuilderRequestsMetadata,
    },
    managementTemplate: {
        uriTemplate: ManagementTemplateRequestBuilderUriTemplate,
        requestsMetadata: ManagementTemplateRequestBuilderRequestsMetadata,
    },
    versions: {
        uriTemplate: VersionsRequestBuilderUriTemplate,
        requestsMetadata: VersionsRequestBuilderRequestsMetadata,
        navigationMetadata: VersionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagementTemplateStepItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createManagementTemplateStepFromDiscriminatorValue,
        queryParametersMapper: ManagementTemplateStepItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createManagementTemplateStepFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagementTemplateStep,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ManagementTemplateStepItemRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */