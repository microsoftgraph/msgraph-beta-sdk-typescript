/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAccessPackageResourceFromDiscriminatorValue, serializeAccessPackageResource, type AccessPackageResource } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AccessPackageResourceEnvironmentRequestBuilderRequestsMetadata, AccessPackageResourceEnvironmentRequestBuilderUriTemplate, type AccessPackageResourceEnvironmentRequestBuilder } from './accessPackageResourceEnvironment/';
import { AccessPackageResourceRolesRequestBuilderNavigationMetadata, AccessPackageResourceRolesRequestBuilderRequestsMetadata, AccessPackageResourceRolesRequestBuilderUriTemplate, type AccessPackageResourceRolesRequestBuilder } from './accessPackageResourceRoles/';
import { AccessPackageResourceScopesRequestBuilderNavigationMetadata, AccessPackageResourceScopesRequestBuilderRequestsMetadata, AccessPackageResourceScopesRequestBuilderUriTemplate, type AccessPackageResourceScopesRequestBuilder } from './accessPackageResourceScopes/';
import { RefreshRequestBuilderRequestsMetadata, RefreshRequestBuilderUriTemplate, type RefreshRequestBuilder } from './refresh/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackageResources property of the microsoft.graph.entitlementManagement entity.
 */
export interface AccessPackageResourceItemRequestBuilder extends BaseRequestBuilder<AccessPackageResourceItemRequestBuilder> {
    /**
     * Provides operations to manage the accessPackageResourceEnvironment property of the microsoft.graph.accessPackageResource entity.
     */
    get accessPackageResourceEnvironment(): AccessPackageResourceEnvironmentRequestBuilder;
    /**
     * Provides operations to manage the accessPackageResourceRoles property of the microsoft.graph.accessPackageResource entity.
     */
    get accessPackageResourceRoles(): AccessPackageResourceRolesRequestBuilder;
    /**
     * Provides operations to manage the accessPackageResourceScopes property of the microsoft.graph.accessPackageResource entity.
     */
    get accessPackageResourceScopes(): AccessPackageResourceScopesRequestBuilder;
    /**
     * Provides operations to call the refresh method.
     */
    get refresh(): RefreshRequestBuilder;
    /**
     * Delete navigation property accessPackageResources for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A reference to a resource associated with an access package catalog.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResource
     */
     get(requestConfiguration?: RequestConfiguration<AccessPackageResourceItemRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageResource | undefined>;
    /**
     * Update the navigation property accessPackageResources in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResource
     */
     patch(body: AccessPackageResource, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessPackageResource | undefined>;
    /**
     * Delete navigation property accessPackageResources for identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A reference to a resource associated with an access package catalog.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessPackageResourceItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property accessPackageResources in identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: AccessPackageResource, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A reference to a resource associated with an access package catalog.
 */
export interface AccessPackageResourceItemRequestBuilderGetQueryParameters {
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
const AccessPackageResourceItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AccessPackageResourceItemRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessPackageResourceItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    accessPackageResourceEnvironment: {
        uriTemplate: AccessPackageResourceEnvironmentRequestBuilderUriTemplate,
        requestsMetadata: AccessPackageResourceEnvironmentRequestBuilderRequestsMetadata,
    },
    accessPackageResourceRoles: {
        uriTemplate: AccessPackageResourceRolesRequestBuilderUriTemplate,
        requestsMetadata: AccessPackageResourceRolesRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageResourceRolesRequestBuilderNavigationMetadata,
    },
    accessPackageResourceScopes: {
        uriTemplate: AccessPackageResourceScopesRequestBuilderUriTemplate,
        requestsMetadata: AccessPackageResourceScopesRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageResourceScopesRequestBuilderNavigationMetadata,
    },
    refresh: {
        uriTemplate: RefreshRequestBuilderUriTemplate,
        requestsMetadata: RefreshRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessPackageResourceItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createAccessPackageResourceFromDiscriminatorValue,
        queryParametersMapper: AccessPackageResourceItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAccessPackageResourceFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessPackageResource,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AccessPackageResourceItemRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackageResources/{accessPackageResource%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */