/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createManagementTemplateFromDiscriminatorValue, serializeManagementTemplate, type ManagementTemplate } from '@microsoft/msgraph-beta-sdk/models/managedTenants/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { ManagementTemplateCollectionsRequestBuilderNavigationMetadata, ManagementTemplateCollectionsRequestBuilderRequestsMetadata, ManagementTemplateCollectionsRequestBuilderUriTemplate, type ManagementTemplateCollectionsRequestBuilder } from './managementTemplateCollections/';
import { ManagementTemplateStepsRequestBuilderNavigationMetadata, ManagementTemplateStepsRequestBuilderRequestsMetadata, ManagementTemplateStepsRequestBuilderUriTemplate, type ManagementTemplateStepsRequestBuilder } from './managementTemplateSteps/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managementTemplates property of the microsoft.graph.managedTenants.managedTenant entity.
 */
export interface ManagementTemplateItemRequestBuilder extends BaseRequestBuilder<ManagementTemplateItemRequestBuilder> {
    /**
     * Provides operations to manage the managementTemplateCollections property of the microsoft.graph.managedTenants.managementTemplate entity.
     */
    get managementTemplateCollections(): ManagementTemplateCollectionsRequestBuilder;
    /**
     * Provides operations to manage the managementTemplateSteps property of the microsoft.graph.managedTenants.managementTemplate entity.
     */
    get managementTemplateSteps(): ManagementTemplateStepsRequestBuilder;
    /**
     * Delete navigation property managementTemplates for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a managementTemplate object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagementTemplate
     * @see {@link https://learn.microsoft.com/graph/api/managedtenants-managementtemplate-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<ManagementTemplateItemRequestBuilderGetQueryParameters> | undefined) : Promise<ManagementTemplate | undefined>;
    /**
     * Update the navigation property managementTemplates in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ManagementTemplate
     */
     patch(body: ManagementTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagementTemplate | undefined>;
    /**
     * Delete navigation property managementTemplates for tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a managementTemplate object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagementTemplateItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property managementTemplates in tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: ManagementTemplate, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a managementTemplate object.
 */
export interface ManagementTemplateItemRequestBuilderGetQueryParameters {
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
const ManagementTemplateItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ManagementTemplateItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ManagementTemplateItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    managementTemplateCollections: {
        uriTemplate: ManagementTemplateCollectionsRequestBuilderUriTemplate,
        requestsMetadata: ManagementTemplateCollectionsRequestBuilderRequestsMetadata,
        navigationMetadata: ManagementTemplateCollectionsRequestBuilderNavigationMetadata,
    },
    managementTemplateSteps: {
        uriTemplate: ManagementTemplateStepsRequestBuilderUriTemplate,
        requestsMetadata: ManagementTemplateStepsRequestBuilderRequestsMetadata,
        navigationMetadata: ManagementTemplateStepsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagementTemplateItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createManagementTemplateFromDiscriminatorValue,
        queryParametersMapper: ManagementTemplateItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createManagementTemplateFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagementTemplate,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const ManagementTemplateItemRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants/managementTemplates/{managementTemplate%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */