/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createContentModelFromDiscriminatorValue, serializeContentModel, type ContentModel } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { AddToDriveRequestBuilderRequestsMetadata, type AddToDriveRequestBuilder } from './addToDrive/index.js';
// @ts-ignore
import { GetAppliedDrivesRequestBuilderRequestsMetadata, type GetAppliedDrivesRequestBuilder } from './getAppliedDrives/index.js';
// @ts-ignore
import { RemoveFromDriveRequestBuilderRequestsMetadata, type RemoveFromDriveRequestBuilder } from './removeFromDrive/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the contentModels property of the microsoft.graph.site entity.
 */
export interface ContentModelItemRequestBuilder extends BaseRequestBuilder<ContentModelItemRequestBuilder> {
    /**
     * Provides operations to call the addToDrive method.
     */
    get addToDrive(): AddToDriveRequestBuilder;
    /**
     * Provides operations to call the getAppliedDrives method.
     */
    get getAppliedDrives(): GetAppliedDrivesRequestBuilder;
    /**
     * Provides operations to call the removeFromDrive method.
     */
    get removeFromDrive(): RemoveFromDriveRequestBuilder;
    /**
     * Delete navigation property contentModels for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * The collection of content models applied to this site.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ContentModel>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ContentModelItemRequestBuilderGetQueryParameters> | undefined) : Promise<ContentModel | undefined>;
    /**
     * Update the navigation property contentModels in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ContentModel>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: ContentModel, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ContentModel | undefined>;
    /**
     * Delete navigation property contentModels for groups
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * The collection of content models applied to this site.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ContentModelItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property contentModels in groups
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: ContentModel, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The collection of content models applied to this site.
 */
export interface ContentModelItemRequestBuilderGetQueryParameters {
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
export const ContentModelItemRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/sites/{site%2Did}/contentModels/{contentModel%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ContentModelItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ContentModelItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ContentModelItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    addToDrive: {
        requestsMetadata: AddToDriveRequestBuilderRequestsMetadata,
    },
    getAppliedDrives: {
        requestsMetadata: GetAppliedDrivesRequestBuilderRequestsMetadata,
    },
    removeFromDrive: {
        requestsMetadata: RemoveFromDriveRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ContentModelItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: ContentModelItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: ContentModelItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createContentModelFromDiscriminatorValue,
        queryParametersMapper: ContentModelItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: ContentModelItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createContentModelFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeContentModel,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */