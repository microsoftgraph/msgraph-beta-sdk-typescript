/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createAuditLogQueryFromDiscriminatorValue, serializeAuditLogQuery, type AuditLogQuery } from '@microsoft/msgraph-beta-sdk/models/security/';
import { RecordsRequestBuilderNavigationMetadata, RecordsRequestBuilderRequestsMetadata, RecordsRequestBuilderUriTemplate, type RecordsRequestBuilder } from './records/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the queries property of the microsoft.graph.security.auditCoreRoot entity.
 */
export interface AuditLogQueryItemRequestBuilder extends BaseRequestBuilder<AuditLogQueryItemRequestBuilder> {
    /**
     * Provides operations to manage the records property of the microsoft.graph.security.auditLogQuery entity.
     */
    get records(): RecordsRequestBuilder;
    /**
     * Delete navigation property queries for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get queries from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuditLogQuery
     */
     get(requestConfiguration?: RequestConfiguration<AuditLogQueryItemRequestBuilderGetQueryParameters> | undefined) : Promise<AuditLogQuery | undefined>;
    /**
     * Update the navigation property queries in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuditLogQuery
     */
     patch(body: AuditLogQuery, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AuditLogQuery | undefined>;
    /**
     * Delete navigation property queries for security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get queries from security
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AuditLogQueryItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property queries in security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: AuditLogQuery, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get queries from security
 */
export interface AuditLogQueryItemRequestBuilderGetQueryParameters {
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
const AuditLogQueryItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AuditLogQueryItemRequestBuilderNavigationMetadata: Record<Exclude<keyof AuditLogQueryItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    records: {
        uriTemplate: RecordsRequestBuilderUriTemplate,
        requestsMetadata: RecordsRequestBuilderRequestsMetadata,
        navigationMetadata: RecordsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AuditLogQueryItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createAuditLogQueryFromDiscriminatorValue,
        queryParametersMapper: AuditLogQueryItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAuditLogQueryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAuditLogQuery,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AuditLogQueryItemRequestBuilderUriTemplate = "{+baseurl}/security/auditLog/queries/{auditLogQuery%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */