/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUnitOfMeasureCollectionResponseFromDiscriminatorValue, createUnitOfMeasureFromDiscriminatorValue, serializeUnitOfMeasure, type UnitOfMeasure, type UnitOfMeasureCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { type UnitOfMeasureItemRequestBuilder, UnitOfMeasureItemRequestBuilderRequestsMetadata } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Guid, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the unitsOfMeasure property of the microsoft.graph.company entity.
 */
export interface UnitsOfMeasureRequestBuilder extends BaseRequestBuilder<UnitsOfMeasureRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the unitsOfMeasure property of the microsoft.graph.company entity.
     * @param unitOfMeasureId The unique identifier of unitOfMeasure
     * @returns {UnitOfMeasureItemRequestBuilder}
     */
     byUnitOfMeasureId(unitOfMeasureId: Guid) : UnitOfMeasureItemRequestBuilder;
    /**
     * Get unitsOfMeasure from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnitOfMeasureCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<UnitsOfMeasureRequestBuilderGetQueryParameters> | undefined) : Promise<UnitOfMeasureCollectionResponse | undefined>;
    /**
     * Create new navigation property to unitsOfMeasure for financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UnitOfMeasure>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: UnitOfMeasure, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UnitOfMeasure | undefined>;
    /**
     * Get unitsOfMeasure from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UnitsOfMeasureRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to unitsOfMeasure for financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: UnitOfMeasure, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get unitsOfMeasure from financials
 */
export interface UnitsOfMeasureRequestBuilderGetQueryParameters {
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
export const UnitsOfMeasureRequestBuilderUriTemplate = "{+baseurl}/financials/companies/{company%2Did}/unitsOfMeasure{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const UnitsOfMeasureRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const UnitsOfMeasureRequestBuilderNavigationMetadata: Record<Exclude<keyof UnitsOfMeasureRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byUnitOfMeasureId: {
        requestsMetadata: UnitOfMeasureItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["unitOfMeasure%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const UnitsOfMeasureRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: UnitsOfMeasureRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnitOfMeasureCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: UnitsOfMeasureRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: UnitsOfMeasureRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createUnitOfMeasureFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUnitOfMeasure,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
