/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createOneDriveForBusinessRestoreSessionFromDiscriminatorValue, serializeOneDriveForBusinessRestoreSession, type OneDriveForBusinessRestoreSession } from '@microsoft/msgraph-beta-sdk/models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
// @ts-ignore
import { DriveRestoreArtifactsRequestBuilderNavigationMetadata, DriveRestoreArtifactsRequestBuilderRequestsMetadata, type DriveRestoreArtifactsRequestBuilder } from './driveRestoreArtifacts/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the oneDriveForBusinessRestoreSessions property of the microsoft.graph.backupRestoreRoot entity.
 */
export interface OneDriveForBusinessRestoreSessionItemRequestBuilder extends BaseRequestBuilder<OneDriveForBusinessRestoreSessionItemRequestBuilder> {
    /**
     * Provides operations to manage the driveRestoreArtifacts property of the microsoft.graph.oneDriveForBusinessRestoreSession entity.
     */
    get driveRestoreArtifacts(): DriveRestoreArtifactsRequestBuilder;
    /**
     * Delete navigation property oneDriveForBusinessRestoreSessions for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The list of OneDrive for Business restore sessions available in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OneDriveForBusinessRestoreSession>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<OneDriveForBusinessRestoreSessionItemRequestBuilderGetQueryParameters> | undefined) : Promise<OneDriveForBusinessRestoreSession | undefined>;
    /**
     * Update the properties of a oneDriveForBusinessRestoreSession object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OneDriveForBusinessRestoreSession>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/onedriveforbusinessrestoresession-update?view=graph-rest-beta|Find more info here}
     */
     patch(body: OneDriveForBusinessRestoreSession, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<OneDriveForBusinessRestoreSession | undefined>;
    /**
     * Delete navigation property oneDriveForBusinessRestoreSessions for solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The list of OneDrive for Business restore sessions available in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OneDriveForBusinessRestoreSessionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the properties of a oneDriveForBusinessRestoreSession object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: OneDriveForBusinessRestoreSession, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of OneDrive for Business restore sessions available in the tenant.
 */
export interface OneDriveForBusinessRestoreSessionItemRequestBuilderGetQueryParameters {
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
export const OneDriveForBusinessRestoreSessionItemRequestBuilderUriTemplate = "{+baseurl}/solutions/backupRestore/oneDriveForBusinessRestoreSessions/{oneDriveForBusinessRestoreSession%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const OneDriveForBusinessRestoreSessionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const OneDriveForBusinessRestoreSessionItemRequestBuilderNavigationMetadata: Record<Exclude<keyof OneDriveForBusinessRestoreSessionItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    driveRestoreArtifacts: {
        requestsMetadata: DriveRestoreArtifactsRequestBuilderRequestsMetadata,
        navigationMetadata: DriveRestoreArtifactsRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const OneDriveForBusinessRestoreSessionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: OneDriveForBusinessRestoreSessionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: OneDriveForBusinessRestoreSessionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOneDriveForBusinessRestoreSessionFromDiscriminatorValue,
        queryParametersMapper: OneDriveForBusinessRestoreSessionItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: OneDriveForBusinessRestoreSessionItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOneDriveForBusinessRestoreSessionFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeOneDriveForBusinessRestoreSession,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */