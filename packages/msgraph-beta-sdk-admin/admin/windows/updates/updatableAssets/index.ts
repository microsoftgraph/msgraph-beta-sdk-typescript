/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createUpdatableAssetCollectionResponseFromDiscriminatorValue, createUpdatableAssetFromDiscriminatorValue, serializeUpdatableAsset, type UpdatableAsset, type UpdatableAssetCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/windowsUpdates/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { type UpdatableAssetItemRequestBuilder, UpdatableAssetItemRequestBuilderNavigationMetadata, UpdatableAssetItemRequestBuilderRequestsMetadata, UpdatableAssetItemRequestBuilderUriTemplate } from './item/';
import { MicrosoftGraphWindowsUpdatesEnrollAssetsRequestBuilderRequestsMetadata, MicrosoftGraphWindowsUpdatesEnrollAssetsRequestBuilderUriTemplate, type MicrosoftGraphWindowsUpdatesEnrollAssetsRequestBuilder } from './microsoftGraphWindowsUpdatesEnrollAssets/';
import { MicrosoftGraphWindowsUpdatesEnrollAssetsByIdRequestBuilderRequestsMetadata, MicrosoftGraphWindowsUpdatesEnrollAssetsByIdRequestBuilderUriTemplate, type MicrosoftGraphWindowsUpdatesEnrollAssetsByIdRequestBuilder } from './microsoftGraphWindowsUpdatesEnrollAssetsById/';
import { MicrosoftGraphWindowsUpdatesUnenrollAssetsRequestBuilderRequestsMetadata, MicrosoftGraphWindowsUpdatesUnenrollAssetsRequestBuilderUriTemplate, type MicrosoftGraphWindowsUpdatesUnenrollAssetsRequestBuilder } from './microsoftGraphWindowsUpdatesUnenrollAssets/';
import { MicrosoftGraphWindowsUpdatesUnenrollAssetsByIdRequestBuilderRequestsMetadata, MicrosoftGraphWindowsUpdatesUnenrollAssetsByIdRequestBuilderUriTemplate, type MicrosoftGraphWindowsUpdatesUnenrollAssetsByIdRequestBuilder } from './microsoftGraphWindowsUpdatesUnenrollAssetsById/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the updatableAssets property of the microsoft.graph.adminWindowsUpdates entity.
 */
export interface UpdatableAssetsRequestBuilder extends BaseRequestBuilder<UpdatableAssetsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the enrollAssets method.
     */
    get microsoftGraphWindowsUpdatesEnrollAssets(): MicrosoftGraphWindowsUpdatesEnrollAssetsRequestBuilder;
    /**
     * Provides operations to call the enrollAssetsById method.
     */
    get microsoftGraphWindowsUpdatesEnrollAssetsById(): MicrosoftGraphWindowsUpdatesEnrollAssetsByIdRequestBuilder;
    /**
     * Provides operations to call the unenrollAssets method.
     */
    get microsoftGraphWindowsUpdatesUnenrollAssets(): MicrosoftGraphWindowsUpdatesUnenrollAssetsRequestBuilder;
    /**
     * Provides operations to call the unenrollAssetsById method.
     */
    get microsoftGraphWindowsUpdatesUnenrollAssetsById(): MicrosoftGraphWindowsUpdatesUnenrollAssetsByIdRequestBuilder;
    /**
     * Provides operations to manage the updatableAssets property of the microsoft.graph.adminWindowsUpdates entity.
     * @param updatableAssetId The unique identifier of updatableAsset
     * @returns a UpdatableAssetItemRequestBuilder
     */
     byUpdatableAssetId(updatableAssetId: string) : UpdatableAssetItemRequestBuilder;
    /**
     * Get a list of updatableAsset objects and their properties. Listing updatable assets returns updatableAsset resources of the following derived types: azureADDevice and updatableAssetGroup. Use list azureADDevice resources or list updatableAssetGroup resources to filter and get resources of only one of the derived types.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UpdatableAssetCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/adminwindowsupdates-list-updatableassets?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<UpdatableAssetsRequestBuilderGetQueryParameters> | undefined) : Promise<UpdatableAssetCollectionResponse | undefined>;
    /**
     * Create a new updatableAssetGroup object. The updatableAssetGroup resource inherits from updatableAsset.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UpdatableAsset
     * @see {@link https://learn.microsoft.com/graph/api/adminwindowsupdates-post-updatableassets-updatableassetgroup?view=graph-rest-1.0|Find more info here}
     */
     post(body: UpdatableAsset, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UpdatableAsset | undefined>;
    /**
     * Get a list of updatableAsset objects and their properties. Listing updatable assets returns updatableAsset resources of the following derived types: azureADDevice and updatableAssetGroup. Use list azureADDevice resources or list updatableAssetGroup resources to filter and get resources of only one of the derived types.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UpdatableAssetsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new updatableAssetGroup object. The updatableAssetGroup resource inherits from updatableAsset.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UpdatableAsset, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of updatableAsset objects and their properties. Listing updatable assets returns updatableAsset resources of the following derived types: azureADDevice and updatableAssetGroup. Use list azureADDevice resources or list updatableAssetGroup resources to filter and get resources of only one of the derived types.
 */
export interface UpdatableAssetsRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UpdatableAssetsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const UpdatableAssetsRequestBuilderNavigationMetadata: Record<Exclude<keyof UpdatableAssetsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUpdatableAssetId: {
        uriTemplate: UpdatableAssetItemRequestBuilderUriTemplate,
        requestsMetadata: UpdatableAssetItemRequestBuilderRequestsMetadata,
        navigationMetadata: UpdatableAssetItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["updatableAsset%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    microsoftGraphWindowsUpdatesEnrollAssets: {
        uriTemplate: MicrosoftGraphWindowsUpdatesEnrollAssetsRequestBuilderUriTemplate,
        requestsMetadata: MicrosoftGraphWindowsUpdatesEnrollAssetsRequestBuilderRequestsMetadata,
    },
    microsoftGraphWindowsUpdatesEnrollAssetsById: {
        uriTemplate: MicrosoftGraphWindowsUpdatesEnrollAssetsByIdRequestBuilderUriTemplate,
        requestsMetadata: MicrosoftGraphWindowsUpdatesEnrollAssetsByIdRequestBuilderRequestsMetadata,
    },
    microsoftGraphWindowsUpdatesUnenrollAssets: {
        uriTemplate: MicrosoftGraphWindowsUpdatesUnenrollAssetsRequestBuilderUriTemplate,
        requestsMetadata: MicrosoftGraphWindowsUpdatesUnenrollAssetsRequestBuilderRequestsMetadata,
    },
    microsoftGraphWindowsUpdatesUnenrollAssetsById: {
        uriTemplate: MicrosoftGraphWindowsUpdatesUnenrollAssetsByIdRequestBuilderUriTemplate,
        requestsMetadata: MicrosoftGraphWindowsUpdatesUnenrollAssetsByIdRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UpdatableAssetsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUpdatableAssetCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UpdatableAssetsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUpdatableAssetFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUpdatableAsset,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UpdatableAssetsRequestBuilderUriTemplate = "{+baseurl}/admin/windows/updates/updatableAssets{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */