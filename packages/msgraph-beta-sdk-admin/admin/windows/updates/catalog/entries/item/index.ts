/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createCatalogEntryFromDiscriminatorValue, serializeCatalogEntry, type CatalogEntry } from '@microsoft/msgraph-beta-sdk/models/windowsUpdates/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the entries property of the microsoft.graph.windowsUpdates.catalog entity.
 */
export interface CatalogEntryItemRequestBuilder extends BaseRequestBuilder<CatalogEntryItemRequestBuilder> {
    /**
     * Delete navigation property entries for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Lists the content that you can approve for deployment. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CatalogEntry>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<CatalogEntryItemRequestBuilderGetQueryParameters> | undefined) : Promise<CatalogEntry | undefined>;
    /**
     * Update the navigation property entries in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CatalogEntry>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: CatalogEntry, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CatalogEntry | undefined>;
    /**
     * Delete navigation property entries for admin
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Lists the content that you can approve for deployment. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CatalogEntryItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property entries in admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: CatalogEntry, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Lists the content that you can approve for deployment. Read-only.
 */
export interface CatalogEntryItemRequestBuilderGetQueryParameters {
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
export const CatalogEntryItemRequestBuilderUriTemplate = "{+baseurl}/admin/windows/updates/catalog/entries/{catalogEntry%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CatalogEntryItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CatalogEntryItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: CatalogEntryItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: CatalogEntryItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCatalogEntryFromDiscriminatorValue,
        queryParametersMapper: CatalogEntryItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: CatalogEntryItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCatalogEntryFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCatalogEntry,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
