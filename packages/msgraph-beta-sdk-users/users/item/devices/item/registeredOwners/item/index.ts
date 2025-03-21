/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { GraphAppRoleAssignmentRequestBuilderRequestsMetadata, type GraphAppRoleAssignmentRequestBuilder } from './graphAppRoleAssignment/index.js';
// @ts-ignore
import { GraphEndpointRequestBuilderRequestsMetadata, type GraphEndpointRequestBuilder } from './graphEndpoint/index.js';
// @ts-ignore
import { GraphServicePrincipalRequestBuilderRequestsMetadata, type GraphServicePrincipalRequestBuilder } from './graphServicePrincipal/index.js';
// @ts-ignore
import { GraphUserRequestBuilderRequestsMetadata, type GraphUserRequestBuilder } from './graphUser/index.js';
// @ts-ignore
import { RefRequestBuilderRequestsMetadata, type RefRequestBuilder } from './ref/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{user-id}/devices/{device-id}/registeredOwners/{directoryObject-id}
 */
export interface DirectoryObjectItemRequestBuilder extends BaseRequestBuilder<DirectoryObjectItemRequestBuilder> {
    /**
     * Casts the previous resource to appRoleAssignment.
     */
    get graphAppRoleAssignment(): GraphAppRoleAssignmentRequestBuilder;
    /**
     * Casts the previous resource to endpoint.
     */
    get graphEndpoint(): GraphEndpointRequestBuilder;
    /**
     * Casts the previous resource to servicePrincipal.
     */
    get graphServicePrincipal(): GraphServicePrincipalRequestBuilder;
    /**
     * Casts the previous resource to user.
     */
    get graphUser(): GraphUserRequestBuilder;
    /**
     * Provides operations to manage the collection of user entities.
     */
    get ref(): RefRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const DirectoryObjectItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/devices/{device%2Did}/registeredOwners/{directoryObject%2Did}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DirectoryObjectItemRequestBuilderNavigationMetadata: Record<Exclude<keyof DirectoryObjectItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    graphAppRoleAssignment: {
        requestsMetadata: GraphAppRoleAssignmentRequestBuilderRequestsMetadata,
    },
    graphEndpoint: {
        requestsMetadata: GraphEndpointRequestBuilderRequestsMetadata,
    },
    graphServicePrincipal: {
        requestsMetadata: GraphServicePrincipalRequestBuilderRequestsMetadata,
    },
    graphUser: {
        requestsMetadata: GraphUserRequestBuilderRequestsMetadata,
    },
    ref: {
        requestsMetadata: RefRequestBuilderRequestsMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
