/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createWhoisHistoryRecordCollectionResponseFromDiscriminatorValue, type WhoisHistoryRecordCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/security/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { type WhoisHistoryRecordItemRequestBuilder, WhoisHistoryRecordItemRequestBuilderRequestsMetadata, WhoisHistoryRecordItemRequestBuilderUriTemplate } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the history property of the microsoft.graph.security.whoisRecord entity.
 */
export interface HistoryRequestBuilder extends BaseRequestBuilder<HistoryRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the history property of the microsoft.graph.security.whoisRecord entity.
     * @param whoisHistoryRecordId The unique identifier of whoisHistoryRecord
     * @returns a WhoisHistoryRecordItemRequestBuilder
     */
     byWhoisHistoryRecordId(whoisHistoryRecordId: string) : WhoisHistoryRecordItemRequestBuilder;
    /**
     * Get the history for a whoisRecord, as represented by a collection of whoisHistoryRecord resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WhoisHistoryRecordCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-whoisrecord-list-history?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<HistoryRequestBuilderGetQueryParameters> | undefined) : Promise<WhoisHistoryRecordCollectionResponse | undefined>;
    /**
     * Get the history for a whoisRecord, as represented by a collection of whoisHistoryRecord resources.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<HistoryRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get the history for a whoisRecord, as represented by a collection of whoisHistoryRecord resources.
 */
export interface HistoryRequestBuilderGetQueryParameters {
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
const HistoryRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const HistoryRequestBuilderNavigationMetadata: Record<Exclude<keyof HistoryRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byWhoisHistoryRecordId: {
        uriTemplate: WhoisHistoryRecordItemRequestBuilderUriTemplate,
        requestsMetadata: WhoisHistoryRecordItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["whoisHistoryRecord%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const HistoryRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWhoisHistoryRecordCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: HistoryRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const HistoryRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/whoisRecords/{whoisRecord%2Did}/history{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */