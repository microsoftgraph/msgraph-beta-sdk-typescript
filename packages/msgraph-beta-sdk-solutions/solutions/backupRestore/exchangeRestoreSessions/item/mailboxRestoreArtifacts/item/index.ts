/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMailboxRestoreArtifactFromDiscriminatorValue, serializeMailboxRestoreArtifact, type MailboxRestoreArtifact } from '@microsoft/msgraph-beta-sdk/models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
// @ts-ignore
import { RestorePointRequestBuilderRequestsMetadata, type RestorePointRequestBuilder } from './restorePoint/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mailboxRestoreArtifacts property of the microsoft.graph.exchangeRestoreSession entity.
 */
export interface MailboxRestoreArtifactItemRequestBuilder extends BaseRequestBuilder<MailboxRestoreArtifactItemRequestBuilder> {
    /**
     * Provides operations to manage the restorePoint property of the microsoft.graph.restoreArtifactBase entity.
     */
    get restorePoint(): RestorePointRequestBuilder;
    /**
     * Delete navigation property mailboxRestoreArtifacts for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * A collection of restore points and destination details that can be used to restore Exchange mailboxes.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MailboxRestoreArtifact>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<MailboxRestoreArtifactItemRequestBuilderGetQueryParameters> | undefined) : Promise<MailboxRestoreArtifact | undefined>;
    /**
     * Update the navigation property mailboxRestoreArtifacts in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MailboxRestoreArtifact>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: MailboxRestoreArtifact, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MailboxRestoreArtifact | undefined>;
    /**
     * Delete navigation property mailboxRestoreArtifacts for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * A collection of restore points and destination details that can be used to restore Exchange mailboxes.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MailboxRestoreArtifactItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property mailboxRestoreArtifacts in solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: MailboxRestoreArtifact, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * A collection of restore points and destination details that can be used to restore Exchange mailboxes.
 */
export interface MailboxRestoreArtifactItemRequestBuilderGetQueryParameters {
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
export const MailboxRestoreArtifactItemRequestBuilderUriTemplate = "{+baseurl}/solutions/backupRestore/exchangeRestoreSessions/{exchangeRestoreSession%2Did}/mailboxRestoreArtifacts/{mailboxRestoreArtifact%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MailboxRestoreArtifactItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MailboxRestoreArtifactItemRequestBuilderNavigationMetadata: Record<Exclude<keyof MailboxRestoreArtifactItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    restorePoint: {
        requestsMetadata: RestorePointRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MailboxRestoreArtifactItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: MailboxRestoreArtifactItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: MailboxRestoreArtifactItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMailboxRestoreArtifactFromDiscriminatorValue,
        queryParametersMapper: MailboxRestoreArtifactItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: MailboxRestoreArtifactItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMailboxRestoreArtifactFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMailboxRestoreArtifact,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */