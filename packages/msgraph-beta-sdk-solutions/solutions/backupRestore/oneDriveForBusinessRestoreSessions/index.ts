/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createOneDriveForBusinessRestoreSessionCollectionResponseFromDiscriminatorValue, createOneDriveForBusinessRestoreSessionFromDiscriminatorValue, serializeOneDriveForBusinessRestoreSession, type OneDriveForBusinessRestoreSession, type OneDriveForBusinessRestoreSessionCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/';
// @ts-ignore
import { OneDriveForBusinessRestoreSessionItemRequestBuilderNavigationMetadata, OneDriveForBusinessRestoreSessionItemRequestBuilderRequestsMetadata, type OneDriveForBusinessRestoreSessionItemRequestBuilder } from './item/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the oneDriveForBusinessRestoreSessions property of the microsoft.graph.backupRestoreRoot entity.
 */
export interface OneDriveForBusinessRestoreSessionsRequestBuilder extends BaseRequestBuilder<OneDriveForBusinessRestoreSessionsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the oneDriveForBusinessRestoreSessions property of the microsoft.graph.backupRestoreRoot entity.
     * @param oneDriveForBusinessRestoreSessionId The unique identifier of oneDriveForBusinessRestoreSession
     * @returns {OneDriveForBusinessRestoreSessionItemRequestBuilder}
     */
     byOneDriveForBusinessRestoreSessionId(oneDriveForBusinessRestoreSessionId: string) : OneDriveForBusinessRestoreSessionItemRequestBuilder;
    /**
     * The list of OneDrive for Business restore sessions available in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OneDriveForBusinessRestoreSessionCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<OneDriveForBusinessRestoreSessionsRequestBuilderGetQueryParameters> | undefined) : Promise<OneDriveForBusinessRestoreSessionCollectionResponse | undefined>;
    /**
     * Create new navigation property to oneDriveForBusinessRestoreSessions for solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<OneDriveForBusinessRestoreSession>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: OneDriveForBusinessRestoreSession, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<OneDriveForBusinessRestoreSession | undefined>;
    /**
     * The list of OneDrive for Business restore sessions available in the tenant.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OneDriveForBusinessRestoreSessionsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to oneDriveForBusinessRestoreSessions for solutions
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: OneDriveForBusinessRestoreSession, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The list of OneDrive for Business restore sessions available in the tenant.
 */
export interface OneDriveForBusinessRestoreSessionsRequestBuilderGetQueryParameters {
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
 * Uri template for the request builder.
 */
export const OneDriveForBusinessRestoreSessionsRequestBuilderUriTemplate = "{+baseurl}/solutions/backupRestore/oneDriveForBusinessRestoreSessions{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const OneDriveForBusinessRestoreSessionsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const OneDriveForBusinessRestoreSessionsRequestBuilderNavigationMetadata: Record<Exclude<keyof OneDriveForBusinessRestoreSessionsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byOneDriveForBusinessRestoreSessionId: {
        requestsMetadata: OneDriveForBusinessRestoreSessionItemRequestBuilderRequestsMetadata,
        navigationMetadata: OneDriveForBusinessRestoreSessionItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["oneDriveForBusinessRestoreSession%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const OneDriveForBusinessRestoreSessionsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: OneDriveForBusinessRestoreSessionsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createOneDriveForBusinessRestoreSessionCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: OneDriveForBusinessRestoreSessionsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: OneDriveForBusinessRestoreSessionsRequestBuilderUriTemplate,
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