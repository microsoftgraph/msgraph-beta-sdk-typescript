/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAuditEventCollectionResponseFromDiscriminatorValue, createAuditEventFromDiscriminatorValue, serializeAuditEvent, type AuditEvent, type AuditEventCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/managedTenants/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { AuditEventItemRequestBuilderRequestsMetadata, type AuditEventItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the auditEvents property of the microsoft.graph.managedTenants.managedTenant entity.
 */
export interface AuditEventsRequestBuilder extends BaseRequestBuilder<AuditEventsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the auditEvents property of the microsoft.graph.managedTenants.managedTenant entity.
     * @param auditEventId The unique identifier of auditEvent
     * @returns {AuditEventItemRequestBuilder}
     */
     byAuditEventId(auditEventId: string) : AuditEventItemRequestBuilder;
    /**
     * Get a list of the auditEvent objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AuditEventCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/managedtenants-managedtenant-list-auditevents?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AuditEventsRequestBuilderGetQueryParameters> | undefined) : Promise<AuditEventCollectionResponse | undefined>;
    /**
     * Create new navigation property to auditEvents for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AuditEvent>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: AuditEvent, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AuditEvent | undefined>;
    /**
     * Get a list of the auditEvent objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AuditEventsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to auditEvents for tenantRelationships
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AuditEvent, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of the auditEvent objects and their properties.
 */
export interface AuditEventsRequestBuilderGetQueryParameters {
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
export const AuditEventsRequestBuilderUriTemplate = "{+baseurl}/tenantRelationships/managedTenants/auditEvents{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AuditEventsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AuditEventsRequestBuilderNavigationMetadata: Record<Exclude<keyof AuditEventsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAuditEventId: {
        requestsMetadata: AuditEventItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["auditEvent%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AuditEventsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AuditEventsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAuditEventCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AuditEventsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: AuditEventsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAuditEventFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAuditEvent,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
