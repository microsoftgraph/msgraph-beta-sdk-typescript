/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAgreementFromDiscriminatorValue, serializeAgreement, type Agreement } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { AcceptancesRequestBuilderNavigationMetadata, AcceptancesRequestBuilderRequestsMetadata, AcceptancesRequestBuilderUriTemplate, type AcceptancesRequestBuilder } from './acceptances/';
import { FileRequestBuilderNavigationMetadata, FileRequestBuilderRequestsMetadata, FileRequestBuilderUriTemplate, type FileRequestBuilder } from './file/';
import { FilesRequestBuilderNavigationMetadata, FilesRequestBuilderRequestsMetadata, FilesRequestBuilderUriTemplate, type FilesRequestBuilder } from './files/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of agreement entities.
 */
export interface AgreementItemRequestBuilder extends BaseRequestBuilder<AgreementItemRequestBuilder> {
    /**
     * Provides operations to manage the acceptances property of the microsoft.graph.agreement entity.
     */
    get acceptances(): AcceptancesRequestBuilder;
    /**
     * Provides operations to manage the file property of the microsoft.graph.agreement entity.
     */
    get file(): FileRequestBuilder;
    /**
     * Provides operations to manage the files property of the microsoft.graph.agreement entity.
     */
    get files(): FilesRequestBuilder;
    /**
     * Delete entity from agreements
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get entity from agreements by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Agreement
     */
     get(requestConfiguration?: RequestConfiguration<AgreementItemRequestBuilderGetQueryParameters> | undefined) : Promise<Agreement | undefined>;
    /**
     * Update entity in agreements
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Agreement
     */
     patch(body: Agreement, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Agreement | undefined>;
    /**
     * Delete entity from agreements
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Get entity from agreements by key
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AgreementItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update entity in agreements
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPatchRequestInformation(body: Agreement, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get entity from agreements by key
 */
export interface AgreementItemRequestBuilderGetQueryParameters {
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AgreementItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const AgreementItemRequestBuilderNavigationMetadata: Record<Exclude<keyof AgreementItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    acceptances: {
        uriTemplate: AcceptancesRequestBuilderUriTemplate,
        requestsMetadata: AcceptancesRequestBuilderRequestsMetadata,
        navigationMetadata: AcceptancesRequestBuilderNavigationMetadata,
    },
    file: {
        uriTemplate: FileRequestBuilderUriTemplate,
        requestsMetadata: FileRequestBuilderRequestsMetadata,
        navigationMetadata: FileRequestBuilderNavigationMetadata,
    },
    files: {
        uriTemplate: FilesRequestBuilderUriTemplate,
        requestsMetadata: FilesRequestBuilderRequestsMetadata,
        navigationMetadata: FilesRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AgreementItemRequestBuilderRequestsMetadata: RequestsMetadata = {
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
        responseBodyFactory:  createAgreementFromDiscriminatorValue,
        queryParametersMapper: AgreementItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAgreementFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAgreement,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AgreementItemRequestBuilderUriTemplate = "{+baseurl}/agreements/{agreement%2Did}{?%24select}";
/* tslint:enable */
/* eslint-enable */