/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAuditEventCollectionResponseFromDiscriminatorValue, createAuditEventFromDiscriminatorValue, serializeAuditEvent, type AuditEvent, type AuditEventCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { GetAuditActivityTypesWithCategoryRequestBuilderRequestsMetadata, GetAuditActivityTypesWithCategoryRequestBuilderUriTemplate, type GetAuditActivityTypesWithCategoryRequestBuilder } from './getAuditActivityTypesWithCategory/';
import { GetAuditCategoriesRequestBuilderRequestsMetadata, GetAuditCategoriesRequestBuilderUriTemplate, type GetAuditCategoriesRequestBuilder } from './getAuditCategories/';
import { AuditEventItemRequestBuilderRequestsMetadata, AuditEventItemRequestBuilderUriTemplate, type AuditEventItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the auditEvents property of the microsoft.graph.deviceManagement entity.
 */
export interface AuditEventsRequestBuilder extends BaseRequestBuilder<AuditEventsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the getAuditCategories method.
     */
    get getAuditCategories(): GetAuditCategoriesRequestBuilder;
    /**
     * Provides operations to manage the auditEvents property of the microsoft.graph.deviceManagement entity.
     * @param auditEventId The unique identifier of auditEvent
     * @returns a AuditEventItemRequestBuilder
     */
     byAuditEventId(auditEventId: string) : AuditEventItemRequestBuilder;
    /**
     * The Audit Events
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuditEventCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<AuditEventsRequestBuilderGetQueryParameters> | undefined) : Promise<AuditEventCollectionResponse | undefined>;
    /**
     * Provides operations to call the getAuditActivityTypes method.
     * @param category Usage: category='{category}'
     * @returns a getAuditActivityTypesWithCategoryRequestBuilder
     */
     getAuditActivityTypesWithCategory(category: string | undefined) : GetAuditActivityTypesWithCategoryRequestBuilder;
    /**
     * Create new navigation property to auditEvents for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuditEvent
     */
     post(body: AuditEvent, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AuditEvent | undefined>;
    /**
     * The Audit Events
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AuditEventsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to auditEvents for deviceManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: AuditEvent, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The Audit Events
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
        uriTemplate: AuditEventItemRequestBuilderUriTemplate,
        requestsMetadata: AuditEventItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["auditEvent%2Did"],
    },
    getAuditActivityTypesWithCategory: {
        uriTemplate: GetAuditActivityTypesWithCategoryRequestBuilderUriTemplate,
        requestsMetadata: GetAuditActivityTypesWithCategoryRequestBuilderRequestsMetadata,
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    getAuditCategories: {
        uriTemplate: GetAuditCategoriesRequestBuilderUriTemplate,
        requestsMetadata: GetAuditCategoriesRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AuditEventsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAuditEventCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AuditEventsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAuditEventFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAuditEvent,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AuditEventsRequestBuilderUriTemplate = "{+baseurl}/deviceManagement/auditEvents{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */