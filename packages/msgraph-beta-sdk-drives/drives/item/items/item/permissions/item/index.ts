/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPermissionFromDiscriminatorValue, serializePermission, type Permission } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { GrantRequestBuilderRequestsMetadata, type GrantRequestBuilder } from './grant/';
import { RevokeGrantsRequestBuilderRequestsMetadata, type RevokeGrantsRequestBuilder } from './revokeGrants/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the permissions property of the microsoft.graph.driveItem entity.
 */
export interface PermissionItemRequestBuilder extends BaseRequestBuilder<PermissionItemRequestBuilder> {
    /**
     * Provides operations to call the grant method.
     */
    get grant(): GrantRequestBuilder;
    /**
     * Provides operations to call the revokeGrants method.
     */
    get revokeGrants(): RevokeGrantsRequestBuilder;
    /**
     * Remove access to a DriveItem. Only sharing permissions that are not inherited can be deleted.The inheritedFrom property must be null.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/permission-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Return the effective sharing permission for a particular permission resource. Effective permissions of an item can come from two sources: permissions set directly on the item itself or permissions that are inherited from the item's ancestors. Callers can differentiate if the permission is inherited or not by checking the inheritedFrom property.This property is an ItemReference resource referencing the ancestor that the permission is inherited from.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Permission>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/permission-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<PermissionItemRequestBuilderGetQueryParameters> | undefined) : Promise<Permission | undefined>;
    /**
     * Update the properties of a sharing permission by patching the permission resource. Only the roles property can be modified this way.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Permission>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/permission-update?view=graph-rest-1.0|Find more info here}
     */
     patch(body: Permission, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Permission | undefined>;
    /**
     * Remove access to a DriveItem. Only sharing permissions that are not inherited can be deleted.The inheritedFrom property must be null.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Return the effective sharing permission for a particular permission resource. Effective permissions of an item can come from two sources: permissions set directly on the item itself or permissions that are inherited from the item's ancestors. Callers can differentiate if the permission is inherited or not by checking the inheritedFrom property.This property is an ItemReference resource referencing the ancestor that the permission is inherited from.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PermissionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a sharing permission by patching the permission resource. Only the roles property can be modified this way.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: Permission, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Return the effective sharing permission for a particular permission resource. Effective permissions of an item can come from two sources: permissions set directly on the item itself or permissions that are inherited from the item's ancestors. Callers can differentiate if the permission is inherited or not by checking the inheritedFrom property.This property is an ItemReference resource referencing the ancestor that the permission is inherited from.
 */
export interface PermissionItemRequestBuilderGetQueryParameters {
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
export const PermissionItemRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/permissions/{permission%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const PermissionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PermissionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof PermissionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    grant: {
        requestsMetadata: GrantRequestBuilderRequestsMetadata,
    },
    revokeGrants: {
        requestsMetadata: RevokeGrantsRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PermissionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: PermissionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: PermissionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPermissionFromDiscriminatorValue,
        queryParametersMapper: PermissionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: PermissionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPermissionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePermission,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
