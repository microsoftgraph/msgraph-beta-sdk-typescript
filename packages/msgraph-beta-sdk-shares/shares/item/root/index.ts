/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDriveItemFromDiscriminatorValue, type DriveItem } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { ContentRequestBuilderRequestsMetadata, ContentRequestBuilderUriTemplate, type ContentRequestBuilder } from './content/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the root property of the microsoft.graph.sharedDriveItem entity.
 */
export interface RootRequestBuilder extends BaseRequestBuilder<RootRequestBuilder> {
    /**
     * Provides operations to manage the media for the sharedDriveItem entity.
     */
    get content(): ContentRequestBuilder;
    /**
     * Get root from shares
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DriveItem
     */
     get(requestConfiguration?: RequestConfiguration<RootRequestBuilderGetQueryParameters> | undefined) : Promise<DriveItem | undefined>;
    /**
     * Get root from shares
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RootRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get root from shares
 */
export interface RootRequestBuilderGetQueryParameters {
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
const RootRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const RootRequestBuilderNavigationMetadata: Record<Exclude<keyof RootRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    content: {
        uriTemplate: ContentRequestBuilderUriTemplate,
        requestsMetadata: ContentRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RootRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDriveItemFromDiscriminatorValue,
        queryParametersMapper: RootRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const RootRequestBuilderUriTemplate = "{+baseurl}/shares/{sharedDriveItem%2Did}/root{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */