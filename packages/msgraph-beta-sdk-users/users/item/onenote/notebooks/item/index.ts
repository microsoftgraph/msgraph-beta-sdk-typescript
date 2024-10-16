/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createNotebookFromDiscriminatorValue, serializeNotebook, type Notebook } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CopyNotebookRequestBuilderRequestsMetadata, type CopyNotebookRequestBuilder } from './copyNotebook/index.js';
// @ts-ignore
import { SectionGroupsRequestBuilderNavigationMetadata, SectionGroupsRequestBuilderRequestsMetadata, type SectionGroupsRequestBuilder } from './sectionGroups/index.js';
// @ts-ignore
import { SectionsRequestBuilderNavigationMetadata, SectionsRequestBuilderRequestsMetadata, type SectionsRequestBuilder } from './sections/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the notebooks property of the microsoft.graph.onenote entity.
 */
export interface NotebookItemRequestBuilder extends BaseRequestBuilder<NotebookItemRequestBuilder> {
    /**
     * Provides operations to call the copyNotebook method.
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
    get copyNotebook(): CopyNotebookRequestBuilder;
    /**
     * Provides operations to manage the sectionGroups property of the microsoft.graph.notebook entity.
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
    get sectionGroups(): SectionGroupsRequestBuilder;
    /**
     * Provides operations to manage the sections property of the microsoft.graph.notebook entity.
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
    get sections(): SectionsRequestBuilder;
    /**
     * Delete navigation property notebooks for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Notebook>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     get(requestConfiguration?: RequestConfiguration<NotebookItemRequestBuilderGetQueryParameters> | undefined) : Promise<Notebook | undefined>;
    /**
     * Update the navigation property notebooks in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Notebook>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     patch(body: Notebook, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Notebook | undefined>;
    /**
     * Delete navigation property notebooks for users
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<NotebookItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property notebooks in users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated  as of 2024-07/PrivatePreview:copilotExportAPI
     */
     toPatchRequestInformation(body: Notebook, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of OneNote notebooks that are owned by the user or group. Read-only. Nullable.
 */
export interface NotebookItemRequestBuilderGetQueryParameters {
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
export const NotebookItemRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/onenote/notebooks/{notebook%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const NotebookItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const NotebookItemRequestBuilderNavigationMetadata: Record<Exclude<keyof NotebookItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    copyNotebook: {
        requestsMetadata: CopyNotebookRequestBuilderRequestsMetadata,
    },
    sectionGroups: {
        requestsMetadata: SectionGroupsRequestBuilderRequestsMetadata,
        navigationMetadata: SectionGroupsRequestBuilderNavigationMetadata,
    },
    sections: {
        requestsMetadata: SectionsRequestBuilderRequestsMetadata,
        navigationMetadata: SectionsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const NotebookItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: NotebookItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: NotebookItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createNotebookFromDiscriminatorValue,
        queryParametersMapper: NotebookItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: NotebookItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createNotebookFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeNotebook,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
