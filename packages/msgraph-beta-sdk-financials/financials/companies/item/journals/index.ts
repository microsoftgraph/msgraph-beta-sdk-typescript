/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createJournalCollectionResponseFromDiscriminatorValue, createJournalFromDiscriminatorValue, serializeJournal, type Journal, type JournalCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { JournalItemRequestBuilderNavigationMetadata, JournalItemRequestBuilderRequestsMetadata, JournalItemRequestBuilderUriTemplate, type JournalItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';
import { type Guid } from 'guid-typescript';

/**
 * Provides operations to manage the journals property of the microsoft.graph.company entity.
 */
export interface JournalsRequestBuilder extends BaseRequestBuilder<JournalsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the journals property of the microsoft.graph.company entity.
     * @param journalId The unique identifier of journal
     * @returns a JournalItemRequestBuilder
     */
     byJournalId(journalId: Guid) : JournalItemRequestBuilder;
    /**
     * Get journals from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of JournalCollectionResponse
     */
     get(requestConfiguration?: RequestConfiguration<JournalsRequestBuilderGetQueryParameters> | undefined) : Promise<JournalCollectionResponse | undefined>;
    /**
     * Create new navigation property to journals for financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of Journal
     */
     post(body: Journal, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Journal | undefined>;
    /**
     * Get journals from financials
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<JournalsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to journals for financials
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: Journal, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get journals from financials
 */
export interface JournalsRequestBuilderGetQueryParameters {
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
const JournalsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const JournalsRequestBuilderNavigationMetadata: Record<Exclude<keyof JournalsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byJournalId: {
        uriTemplate: JournalItemRequestBuilderUriTemplate,
        requestsMetadata: JournalItemRequestBuilderRequestsMetadata,
        navigationMetadata: JournalItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["journal%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const JournalsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createJournalCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: JournalsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createJournalFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeJournal,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const JournalsRequestBuilderUriTemplate = "{+baseurl}/financials/companies/{company%2Did}/journals{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */