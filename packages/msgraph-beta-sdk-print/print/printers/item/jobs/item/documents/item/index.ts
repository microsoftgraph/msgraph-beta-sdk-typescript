/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPrintDocumentFromDiscriminatorValue, serializePrintDocument, type PrintDocument } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CreateUploadSessionRequestBuilderRequestsMetadata, CreateUploadSessionRequestBuilderUriTemplate, type CreateUploadSessionRequestBuilder } from './createUploadSession/';
import { ContentRequestBuilderRequestsMetadata, ContentRequestBuilderUriTemplate, type ContentRequestBuilder } from './value/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the documents property of the microsoft.graph.printJob entity.
 */
export interface PrintDocumentItemRequestBuilder extends BaseRequestBuilder<PrintDocumentItemRequestBuilder> {
    /**
     * Provides operations to manage the media for the print entity.
     */
    get content(): ContentRequestBuilder;
    /**
     * Provides operations to call the createUploadSession method.
     */
    get createUploadSession(): CreateUploadSessionRequestBuilder;
    /**
     * Delete navigation property documents for print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get documents from print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintDocument
     */
     get(requestConfiguration?: RequestConfiguration<PrintDocumentItemRequestBuilderGetQueryParameters> | undefined) : Promise<PrintDocument | undefined>;
    /**
     * Update the navigation property documents in print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintDocument
     */
     patch(body: PrintDocument, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PrintDocument | undefined>;
    /**
     * Delete navigation property documents for print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get documents from print
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PrintDocumentItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property documents in print
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: PrintDocument, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get documents from print
 */
export interface PrintDocumentItemRequestBuilderGetQueryParameters {
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
const PrintDocumentItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PrintDocumentItemRequestBuilderNavigationMetadata: Record<Exclude<keyof PrintDocumentItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    content: {
        uriTemplate: ContentRequestBuilderUriTemplate,
        requestsMetadata: ContentRequestBuilderRequestsMetadata,
    },
    createUploadSession: {
        uriTemplate: CreateUploadSessionRequestBuilderUriTemplate,
        requestsMetadata: CreateUploadSessionRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PrintDocumentItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createPrintDocumentFromDiscriminatorValue,
        queryParametersMapper: PrintDocumentItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
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
export const PrintDocumentItemRequestBuilderUriTemplate = "{+baseurl}/print/printers/{printer%2Did}/jobs/{printJob%2Did}/documents/{printDocument%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */