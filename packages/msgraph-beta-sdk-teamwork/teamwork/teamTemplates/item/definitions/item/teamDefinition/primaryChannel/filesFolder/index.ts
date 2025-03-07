/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createDriveItemFromDiscriminatorValue, type DriveItem } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ContentRequestBuilderRequestsMetadata, type ContentRequestBuilder } from './content/index.js';
// @ts-ignore
import { ContentStreamRequestBuilderRequestsMetadata, type ContentStreamRequestBuilder } from './contentStream/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the filesFolder property of the microsoft.graph.channel entity.
 */
export interface FilesFolderRequestBuilder extends BaseRequestBuilder<FilesFolderRequestBuilder> {
    /**
     * Provides operations to manage the media for the teamwork entity.
     */
    get content(): ContentRequestBuilder;
    /**
     * Provides operations to manage the media for the teamwork entity.
     */
    get contentStream(): ContentStreamRequestBuilder;
    /**
     * Metadata for the location where the channel's files are stored.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<DriveItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<FilesFolderRequestBuilderGetQueryParameters> | undefined) : Promise<DriveItem | undefined>;
    /**
     * Metadata for the location where the channel's files are stored.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FilesFolderRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Metadata for the location where the channel's files are stored.
 */
export interface FilesFolderRequestBuilderGetQueryParameters {
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
export const FilesFolderRequestBuilderUriTemplate = "{+baseurl}/teamwork/teamTemplates/{teamTemplate%2Did}/definitions/{teamTemplateDefinition%2Did}/teamDefinition/primaryChannel/filesFolder{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FilesFolderRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const FilesFolderRequestBuilderNavigationMetadata: Record<Exclude<keyof FilesFolderRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    content: {
        requestsMetadata: ContentRequestBuilderRequestsMetadata,
    },
    contentStream: {
        requestsMetadata: ContentStreamRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FilesFolderRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: FilesFolderRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createDriveItemFromDiscriminatorValue,
        queryParametersMapper: FilesFolderRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
