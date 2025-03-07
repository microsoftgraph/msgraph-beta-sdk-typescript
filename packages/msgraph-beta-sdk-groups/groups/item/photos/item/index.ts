/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createProfilePhotoFromDiscriminatorValue, type ProfilePhoto } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { ContentRequestBuilderRequestsMetadata, type ContentRequestBuilder } from './value/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the photos property of the microsoft.graph.group entity.
 */
export interface ProfilePhotoItemRequestBuilder extends BaseRequestBuilder<ProfilePhotoItemRequestBuilder> {
    /**
     * Provides operations to manage the media for the group entity.
     */
    get content(): ContentRequestBuilder;
    /**
     * The profile photos owned by the group. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ProfilePhoto>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ProfilePhotoItemRequestBuilderGetQueryParameters> | undefined) : Promise<ProfilePhoto | undefined>;
    /**
     * The profile photos owned by the group. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ProfilePhotoItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The profile photos owned by the group. Read-only. Nullable.
 */
export interface ProfilePhotoItemRequestBuilderGetQueryParameters {
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
export const ProfilePhotoItemRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/photos/{profilePhoto%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ProfilePhotoItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ProfilePhotoItemRequestBuilderNavigationMetadata: Record<Exclude<keyof ProfilePhotoItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    content: {
        requestsMetadata: ContentRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ProfilePhotoItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ProfilePhotoItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createProfilePhotoFromDiscriminatorValue,
        queryParametersMapper: ProfilePhotoItemRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
