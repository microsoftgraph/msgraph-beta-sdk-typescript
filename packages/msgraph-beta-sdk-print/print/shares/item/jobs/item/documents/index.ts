/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPrintDocumentCollectionResponseFromDiscriminatorValue, createPrintDocumentFromDiscriminatorValue, serializePrintDocument, type PrintDocument, type PrintDocumentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { PrintDocumentItemRequestBuilderNavigationMetadata, PrintDocumentItemRequestBuilderRequestsMetadata, PrintDocumentItemRequestBuilderUriTemplate, type PrintDocumentItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the documents property of the microsoft.graph.printJob entity.
 */
export interface DocumentsRequestBuilder extends BaseRequestBuilder<DocumentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the documents property of the microsoft.graph.printJob entity.
     * @param printDocumentId The unique identifier of printDocument
     * @returns a PrintDocumentItemRequestBuilder
     */
     byPrintDocumentId(printDocumentId: string) : PrintDocumentItemRequestBuilder;
    /**
     * Get documents from print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintDocumentCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<DocumentsRequestBuilderGetQueryParameters> | undefined) : Promise<PrintDocumentCollectionResponse | undefined>;
    /**
     * Create new navigation property to documents for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintDocument
     */
     post(body: PrintDocument, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PrintDocument | undefined>;
    /**
     * Get documents from print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DocumentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to documents for print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: PrintDocument, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get documents from print
 */
export interface DocumentsRequestBuilderGetQueryParameters {
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
const DocumentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const DocumentsRequestBuilderNavigationMetadata: Record<Exclude<keyof DocumentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byPrintDocumentId: {
        uriTemplate: PrintDocumentItemRequestBuilderUriTemplate,
        requestsMetadata: PrintDocumentItemRequestBuilderRequestsMetadata,
        navigationMetadata: PrintDocumentItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["printDocument%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DocumentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPrintDocumentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: DocumentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPrintDocumentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePrintDocument,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const DocumentsRequestBuilderUriTemplate = "{+baseurl}/print/shares/{printerShare%2Did}/jobs/{printJob%2Did}/documents{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */