/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAccessPackageCatalogFromDiscriminatorValue, serializeAccessPackageCatalog, type AccessPackageCatalog } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AccessPackageCustomWorkflowExtensionsRequestBuilderNavigationMetadata, AccessPackageCustomWorkflowExtensionsRequestBuilderRequestsMetadata, type AccessPackageCustomWorkflowExtensionsRequestBuilder } from './accessPackageCustomWorkflowExtensions/index.js';
// @ts-ignore
import { AccessPackageResourceRolesRequestBuilderNavigationMetadata, AccessPackageResourceRolesRequestBuilderRequestsMetadata, type AccessPackageResourceRolesRequestBuilder } from './accessPackageResourceRoles/index.js';
// @ts-ignore
import { AccessPackageResourcesRequestBuilderNavigationMetadata, AccessPackageResourcesRequestBuilderRequestsMetadata, type AccessPackageResourcesRequestBuilder } from './accessPackageResources/index.js';
// @ts-ignore
import { AccessPackageResourceScopesRequestBuilderNavigationMetadata, AccessPackageResourceScopesRequestBuilderRequestsMetadata, type AccessPackageResourceScopesRequestBuilder } from './accessPackageResourceScopes/index.js';
// @ts-ignore
import { AccessPackagesRequestBuilderNavigationMetadata, AccessPackagesRequestBuilderRequestsMetadata, type AccessPackagesRequestBuilder } from './accessPackages/index.js';
// @ts-ignore
import { AccessPackagesWithUniqueNameRequestBuilderRequestsMetadata, type AccessPackagesWithUniqueNameRequestBuilder } from './accessPackagesWithUniqueName/index.js';
// @ts-ignore
import { CustomAccessPackageWorkflowExtensionsRequestBuilderNavigationMetadata, CustomAccessPackageWorkflowExtensionsRequestBuilderRequestsMetadata, type CustomAccessPackageWorkflowExtensionsRequestBuilder } from './customAccessPackageWorkflowExtensions/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackageCatalogs property of the microsoft.graph.entitlementManagement entity.
 */
export interface AccessPackageCatalogItemRequestBuilder extends BaseRequestBuilder<AccessPackageCatalogItemRequestBuilder> {
    /**
     * Provides operations to manage the accessPackageCustomWorkflowExtensions property of the microsoft.graph.accessPackageCatalog entity.
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
    get accessPackageCustomWorkflowExtensions(): AccessPackageCustomWorkflowExtensionsRequestBuilder;
    /**
     * Provides operations to manage the accessPackageResourceRoles property of the microsoft.graph.accessPackageCatalog entity.
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
    get accessPackageResourceRoles(): AccessPackageResourceRolesRequestBuilder;
    /**
     * Provides operations to manage the accessPackageResources property of the microsoft.graph.accessPackageCatalog entity.
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
    get accessPackageResources(): AccessPackageResourcesRequestBuilder;
    /**
     * Provides operations to manage the accessPackageResourceScopes property of the microsoft.graph.accessPackageCatalog entity.
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
    get accessPackageResourceScopes(): AccessPackageResourceScopesRequestBuilder;
    /**
     * Provides operations to manage the accessPackages property of the microsoft.graph.accessPackageCatalog entity.
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
    get accessPackages(): AccessPackagesRequestBuilder;
    /**
     * Provides operations to manage the customAccessPackageWorkflowExtensions property of the microsoft.graph.accessPackageCatalog entity.
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
    get customAccessPackageWorkflowExtensions(): CustomAccessPackageWorkflowExtensionsRequestBuilder;
    /**
     * Provides operations to manage the accessPackages property of the microsoft.graph.accessPackageCatalog entity.
     * @param uniqueName Alternate key of accessPackage
     * @returns {AccessPackagesWithUniqueNameRequestBuilder}
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
     accessPackagesWithUniqueName(uniqueName: string | undefined) : AccessPackagesWithUniqueNameRequestBuilder;
    /**
     * Delete an accessPackageCatalog.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     * @see {@link https://learn.microsoft.com/graph/api/accesspackagecatalog-delete?view=graph-rest-beta|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the properties and relationships of an accessPackageCatalog object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageCatalog>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     * @see {@link https://learn.microsoft.com/graph/api/accesspackagecatalog-get?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AccessPackageCatalogItemRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageCatalog | undefined>;
    /**
     * Update an existing accessPackageCatalog object to change one or more of its properties, such as the display name or description.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageCatalog>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     * @see {@link https://learn.microsoft.com/graph/api/accesspackagecatalog-update?view=graph-rest-beta|Find more info here}
     */
     patch(body: AccessPackageCatalog, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessPackageCatalog | undefined>;
    /**
     * Delete an accessPackageCatalog.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the properties and relationships of an accessPackageCatalog object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessPackageCatalogItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update an existing accessPackageCatalog object to change one or more of its properties, such as the display name or description.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions on 2023-03-01 and will be removed 2023-12-31
     */
     toPatchRequestInformation(body: AccessPackageCatalog, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the properties and relationships of an accessPackageCatalog object.
 */
export interface AccessPackageCatalogItemRequestBuilderGetQueryParameters {
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
export const AccessPackageCatalogItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackageCatalogs/{accessPackageCatalog%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AccessPackageCatalogItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AccessPackageCatalogItemRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessPackageCatalogItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    accessPackagesWithUniqueName: {
        requestsMetadata: AccessPackagesWithUniqueNameRequestBuilderRequestsMetadata,
        pathParametersMappings: ["uniqueName"],
    },
    accessPackageCustomWorkflowExtensions: {
        requestsMetadata: AccessPackageCustomWorkflowExtensionsRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageCustomWorkflowExtensionsRequestBuilderNavigationMetadata,
    },
    accessPackageResourceRoles: {
        requestsMetadata: AccessPackageResourceRolesRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageResourceRolesRequestBuilderNavigationMetadata,
    },
    accessPackageResources: {
        requestsMetadata: AccessPackageResourcesRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageResourcesRequestBuilderNavigationMetadata,
    },
    accessPackageResourceScopes: {
        requestsMetadata: AccessPackageResourceScopesRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageResourceScopesRequestBuilderNavigationMetadata,
    },
    accessPackages: {
        requestsMetadata: AccessPackagesRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackagesRequestBuilderNavigationMetadata,
    },
    customAccessPackageWorkflowExtensions: {
        requestsMetadata: CustomAccessPackageWorkflowExtensionsRequestBuilderRequestsMetadata,
        navigationMetadata: CustomAccessPackageWorkflowExtensionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessPackageCatalogItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: AccessPackageCatalogItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: AccessPackageCatalogItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageCatalogFromDiscriminatorValue,
        queryParametersMapper: AccessPackageCatalogItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: AccessPackageCatalogItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageCatalogFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessPackageCatalog,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
