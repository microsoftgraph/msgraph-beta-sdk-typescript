/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMailboxFolderFromDiscriminatorValue, type MailboxFolder } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ItemsRequestBuilderNavigationMetadata, ItemsRequestBuilderRequestsMetadata, type ItemsRequestBuilder } from './items/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the childFolders property of the microsoft.graph.mailboxFolder entity.
 */
export interface MailboxFolderItemRequestBuilder extends BaseRequestBuilder<MailboxFolderItemRequestBuilder> {
    /**
     * Provides operations to manage the items property of the microsoft.graph.mailboxFolder entity.
     * @deprecated Private preview for Import Export APIs as of 2021-08/PrivatePreview:importExport on 2021-08-19 and will be removed 2021-11-15
     */
    get items(): ItemsRequestBuilder;
    /**
     * The collection of child folders in this folder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MailboxFolder>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated Private preview for Import Export APIs as of 2021-08/PrivatePreview:importExport on 2021-08-19 and will be removed 2021-11-15
     */
     get(requestConfiguration?: RequestConfiguration<MailboxFolderItemRequestBuilderGetQueryParameters> | undefined) : Promise<MailboxFolder | undefined>;
    /**
     * The collection of child folders in this folder.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated Private preview for Import Export APIs as of 2021-08/PrivatePreview:importExport on 2021-08-19 and will be removed 2021-11-15
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MailboxFolderItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The collection of child folders in this folder.
 */
export interface MailboxFolderItemRequestBuilderGetQueryParameters {
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
export const MailboxFolderItemRequestBuilderUriTemplate = "{+baseurl}/admin/exchange/mailboxes/{mailbox%2Did}/folders/{mailboxFolder%2Did}/childFolders/{mailboxFolder%2Did1}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MailboxFolderItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MailboxFolderItemRequestBuilderNavigationMetadata: Record<Exclude<keyof MailboxFolderItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    items: {
        requestsMetadata: ItemsRequestBuilderRequestsMetadata,
        navigationMetadata: ItemsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MailboxFolderItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: MailboxFolderItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMailboxFolderFromDiscriminatorValue,
        queryParametersMapper: MailboxFolderItemRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
