/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCustomAccessPackageWorkflowExtensionFromDiscriminatorValue, serializeCustomAccessPackageWorkflowExtension, type CustomAccessPackageWorkflowExtension } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the customAccessPackageWorkflowExtensions property of the microsoft.graph.accessPackageCatalog entity.
 */
export interface CustomAccessPackageWorkflowExtensionItemRequestBuilder extends BaseRequestBuilder<CustomAccessPackageWorkflowExtensionItemRequestBuilder> {
    /**
     * Delete a customAccessPackageWorkflowExtension object. The custom workflow extension must first be removed from any associated policies before it can be deleted. Follow these steps to remove the custom workflow extension from any associated policies:1. First retrieve the accessPackageCatalogId by calling the Get accessPackageAssignmentPolicies operation and appending ?$expand=accessPackage($expand=accessPackageCatalog) to the query. For example, https://graph.microsoft.com/beta/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies?$expand=accessPackage($expand=accessPackageCatalog).2. Use the access package catalog ID and retrieve the ID of the customAccessPackageWorkflowExtension object that you want to delete by running the LIST customAccessPackageWorkflowExtensions operation.3. Call the Update accessPackageAssignmentPolicy operation to remove the custom workflow extension object from the policy. For an example, see Example 2: Remove the customExtensionHandlers and verifiableCredentialSettings from a policy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     * @see {@link https://learn.microsoft.com/graph/api/customaccesspackageworkflowextension-delete?view=graph-rest-beta|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a customAccessPackageWorkflowExtension object for an accessPackageCatalog object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CustomAccessPackageWorkflowExtension>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     * @see {@link https://learn.microsoft.com/graph/api/customaccesspackageworkflowextension-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<CustomAccessPackageWorkflowExtensionItemRequestBuilderGetQueryParameters> | undefined) : Promise<CustomAccessPackageWorkflowExtension | undefined>;
    /**
     * Update the properties of an existing customAccessPackageWorkflowExtension object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CustomAccessPackageWorkflowExtension>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     * @see {@link https://learn.microsoft.com/graph/api/customaccesspackageworkflowextension-update?view=graph-rest-beta|Find more info here}
     */
     patch(body: CustomAccessPackageWorkflowExtension, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CustomAccessPackageWorkflowExtension | undefined>;
    /**
     * Delete a customAccessPackageWorkflowExtension object. The custom workflow extension must first be removed from any associated policies before it can be deleted. Follow these steps to remove the custom workflow extension from any associated policies:1. First retrieve the accessPackageCatalogId by calling the Get accessPackageAssignmentPolicies operation and appending ?$expand=accessPackage($expand=accessPackageCatalog) to the query. For example, https://graph.microsoft.com/beta/identityGovernance/entitlementManagement/accessPackageAssignmentPolicies?$expand=accessPackage($expand=accessPackageCatalog).2. Use the access package catalog ID and retrieve the ID of the customAccessPackageWorkflowExtension object that you want to delete by running the LIST customAccessPackageWorkflowExtensions operation.3. Call the Update accessPackageAssignmentPolicy operation to remove the custom workflow extension object from the policy. For an example, see Example 2: Remove the customExtensionHandlers and verifiableCredentialSettings from a policy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a customAccessPackageWorkflowExtension object for an accessPackageCatalog object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CustomAccessPackageWorkflowExtensionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of an existing customAccessPackageWorkflowExtension object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
     toPatchRequestInformation(body: CustomAccessPackageWorkflowExtension, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a customAccessPackageWorkflowExtension object for an accessPackageCatalog object.
 */
export interface CustomAccessPackageWorkflowExtensionItemRequestBuilderGetQueryParameters {
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
export const CustomAccessPackageWorkflowExtensionItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog%2Did}/customAccessPackageWorkflowExtensions/{customAccessPackageWorkflowExtension%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CustomAccessPackageWorkflowExtensionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CustomAccessPackageWorkflowExtensionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: CustomAccessPackageWorkflowExtensionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: CustomAccessPackageWorkflowExtensionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCustomAccessPackageWorkflowExtensionFromDiscriminatorValue,
        queryParametersMapper: CustomAccessPackageWorkflowExtensionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: CustomAccessPackageWorkflowExtensionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCustomAccessPackageWorkflowExtensionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCustomAccessPackageWorkflowExtension,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
