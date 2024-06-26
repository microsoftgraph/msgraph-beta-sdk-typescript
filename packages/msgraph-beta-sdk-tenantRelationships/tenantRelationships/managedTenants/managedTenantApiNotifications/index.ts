/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createManagedTenantApiNotificationCollectionResponseFromDiscriminatorValue, createManagedTenantApiNotificationFromDiscriminatorValue, serializeManagedTenantApiNotification, type ManagedTenantApiNotification, type ManagedTenantApiNotificationCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/managedTenants/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ManagedTenantApiNotificationItemRequestBuilderNavigationMetadata, ManagedTenantApiNotificationItemRequestBuilderRequestsMetadata, type ManagedTenantApiNotificationItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the managedTenantApiNotifications property of the microsoft.graph.managedTenants.managedTenant entity.
 */
export interface ManagedTenantApiNotificationsRequestBuilder extends BaseRequestBuilder<ManagedTenantApiNotificationsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the managedTenantApiNotifications property of the microsoft.graph.managedTenants.managedTenant entity.
     * @param managedTenantApiNotificationId The unique identifier of managedTenantApiNotification
     * @returns {ManagedTenantApiNotificationItemRequestBuilder}
     */
     byManagedTenantApiNotificationId(managedTenantApiNotificationId: string) : ManagedTenantApiNotificationItemRequestBuilder;
    /**
     * Get managedTenantApiNotifications from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedTenantApiNotificationCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ManagedTenantApiNotificationsRequestBuilderGetQueryParameters> | undefined) : Promise<ManagedTenantApiNotificationCollectionResponse | undefined>;
    /**
     * Create new navigation property to managedTenantApiNotifications for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ManagedTenantApiNotification>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ManagedTenantApiNotification, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ManagedTenantApiNotification | undefined>;
    /**
     * Get managedTenantApiNotifications from tenantRelationships
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ManagedTenantApiNotificationsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to managedTenantApiNotifications for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ManagedTenantApiNotification, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get managedTenantApiNotifications from tenantRelationships
 */
export interface ManagedTenantApiNotificationsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const ManagedTenantApiNotificationsRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants/managedTenantApiNotifications{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ManagedTenantApiNotificationsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ManagedTenantApiNotificationsRequestBuilderNavigationMetadata: Record<Exclude<keyof ManagedTenantApiNotificationsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byManagedTenantApiNotificationId: {
        requestsMetadata: ManagedTenantApiNotificationItemRequestBuilderRequestsMetadata,
        navigationMetadata: ManagedTenantApiNotificationItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["managedTenantApiNotification%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ManagedTenantApiNotificationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ManagedTenantApiNotificationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedTenantApiNotificationCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ManagedTenantApiNotificationsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ManagedTenantApiNotificationsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createManagedTenantApiNotificationFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeManagedTenantApiNotification,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
