/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createDriveItemCollectionResponseFromDiscriminatorValue, type DriveItemCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { DriveItemItemRequestBuilderNavigationMetadata, DriveItemItemRequestBuilderRequestsMetadata, DriveItemItemRequestBuilderUriTemplate, type DriveItemItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the items property of the microsoft.graph.sharedDriveItem entity.
 */
export interface ItemsRequestBuilder extends BaseRequestBuilder<ItemsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the items property of the microsoft.graph.sharedDriveItem entity.
     * @param driveItemId The unique identifier of driveItem
     * @returns a DriveItemItemRequestBuilder
     */
     byDriveItemId(driveItemId: string) : DriveItemItemRequestBuilder;
    /**
     * All driveItems contained in the sharing root. This collection cannot be enumerated.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of DriveItemCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<ItemsRequestBuilderGetQueryParameters> | undefined) : Promise<DriveItemCollectionResponse | undefined>;
    /**
     * All driveItems contained in the sharing root. This collection cannot be enumerated.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ItemsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * All driveItems contained in the sharing root. This collection cannot be enumerated.
 */
export interface ItemsRequestBuilderGetQueryParameters {
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
const ItemsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ItemsRequestBuilderNavigationMetadata: Record<Exclude<keyof ItemsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byDriveItemId: {
        uriTemplate: DriveItemItemRequestBuilderUriTemplate,
        requestsMetadata: DriveItemItemRequestBuilderRequestsMetadata,
        navigationMetadata: DriveItemItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["driveItem%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ItemsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createDriveItemCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ItemsRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const ItemsRequestBuilderUriTemplate = "{+baseurl}/shares/{sharedDriveItem%2Did}/items{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */