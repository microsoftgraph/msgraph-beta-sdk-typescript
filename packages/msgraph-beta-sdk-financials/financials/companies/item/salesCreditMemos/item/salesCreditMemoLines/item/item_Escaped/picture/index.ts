/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createPictureCollectionResponseFromDiscriminatorValue, createPictureFromDiscriminatorValue, serializePicture, type Picture, type PictureCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { PictureItemRequestBuilderNavigationMetadata, PictureItemRequestBuilderRequestsMetadata, type PictureItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Guid, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the picture property of the microsoft.graph.item entity.
 */
export interface PictureRequestBuilder extends BaseRequestBuilder<PictureRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the picture property of the microsoft.graph.item entity.
     * @param pictureId The unique identifier of picture
     * @returns {PictureItemRequestBuilder}
     */
     byPictureId(pictureId: Guid) : PictureItemRequestBuilder;
    /**
     * Get picture from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<PictureCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<PictureRequestBuilderGetQueryParameters> | undefined) : Promise<PictureCollectionResponse | undefined>;
    /**
     * Create new navigation property to picture for financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Picture>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: Picture, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Picture | undefined>;
    /**
     * Get picture from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PictureRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to picture for financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Picture, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get picture from financials
 */
export interface PictureRequestBuilderGetQueryParameters {
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
export const PictureRequestBuilderUriTemplate = "{+baseurl}/financials/companies/{company%2Did}/salesCreditMemos/{salesCreditMemo%2Did}/salesCreditMemoLines/{salesCreditMemoLine%2Did}/item/picture{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const PictureRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const PictureRequestBuilderNavigationMetadata: Record<Exclude<keyof PictureRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byPictureId: {
        requestsMetadata: PictureItemRequestBuilderRequestsMetadata,
        navigationMetadata: PictureItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["picture%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PictureRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: PictureRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPictureCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: PictureRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: PictureRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createPictureFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePicture,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
