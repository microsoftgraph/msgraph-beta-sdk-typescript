/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDocumentSetVersionFromDiscriminatorValue, serializeDocumentSetVersion, type DocumentSetVersion } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { FieldsRequestBuilderRequestsMetadata, FieldsRequestBuilderUriTemplate, type FieldsRequestBuilder } from './fields/';
import { RestoreRequestBuilderRequestsMetadata, RestoreRequestBuilderUriTemplate, type RestoreRequestBuilder } from './restore/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the documentSetVersions property of the microsoft.graph.listItem entity.
 */
export interface DocumentSetVersionItemRequestBuilder extends BaseRequestBuilder<DocumentSetVersionItemRequestBuilder> {
    /**
     * Provides operations to manage the fields property of the microsoft.graph.listItemVersion entity.
     */
    get fields(): FieldsRequestBuilder;
    /**
     * Provides operations to call the restore method.
     */
    get restore(): RestoreRequestBuilder;
    /**
     * Delete a version of a document set in a list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/documentsetversion-delete?view=graph-rest-1.0|Find more info here}
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Read the properties and relationships of a documentSetVersion object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DocumentSetVersion
     * @see {@link https://learn.microsoft.com/graph/api/documentsetversion-get?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<DocumentSetVersionItemRequestBuilderGetQueryParameters> | undefined) : Promise<DocumentSetVersion | undefined>;
    /**
     * Update the navigation property documentSetVersions in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DocumentSetVersion
     */
     patch(body: DocumentSetVersion, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<DocumentSetVersion | undefined>;
    /**
     * Delete a version of a document set in a list.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Read the properties and relationships of a documentSetVersion object.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<DocumentSetVersionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property documentSetVersions in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: DocumentSetVersion, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Read the properties and relationships of a documentSetVersion object.
 */
export interface DocumentSetVersionItemRequestBuilderGetQueryParameters {
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
const DocumentSetVersionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DocumentSetVersionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof DocumentSetVersionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    fields: {
        uriTemplate: FieldsRequestBuilderUriTemplate,
        requestsMetadata: FieldsRequestBuilderRequestsMetadata,
    },
    restore: {
        uriTemplate: RestoreRequestBuilderUriTemplate,
        requestsMetadata: RestoreRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const DocumentSetVersionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createDocumentSetVersionFromDiscriminatorValue,
        queryParametersMapper: DocumentSetVersionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDocumentSetVersionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeDocumentSetVersion,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const DocumentSetVersionItemRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/list/items/{listItem%2Did}/documentSetVersions/{documentSetVersion%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */