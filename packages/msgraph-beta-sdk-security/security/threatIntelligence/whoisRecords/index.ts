/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { createWhoisRecordCollectionResponseFromDiscriminatorValue, createWhoisRecordFromDiscriminatorValue, serializeWhoisRecord, type WhoisRecord, type WhoisRecordCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/security/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { type WhoisRecordItemRequestBuilder, WhoisRecordItemRequestBuilderNavigationMetadata, WhoisRecordItemRequestBuilderRequestsMetadata, WhoisRecordItemRequestBuilderUriTemplate } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the whoisRecords property of the microsoft.graph.security.threatIntelligence entity.
 */
export interface WhoisRecordsRequestBuilder extends BaseRequestBuilder<WhoisRecordsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the whoisRecords property of the microsoft.graph.security.threatIntelligence entity.
     * @param whoisRecordId The unique identifier of whoisRecord
     * @returns a WhoisRecordItemRequestBuilder
     */
     byWhoisRecordId(whoisRecordId: string) : WhoisRecordItemRequestBuilder;
    /**
     * Get a list of whoisRecord objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WhoisRecordCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/security-threatintelligence-list-whoisrecords?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<WhoisRecordsRequestBuilderGetQueryParameters> | undefined) : Promise<WhoisRecordCollectionResponse | undefined>;
    /**
     * Create new navigation property to whoisRecords for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of WhoisRecord
     */
     post(body: WhoisRecord, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WhoisRecord | undefined>;
    /**
     * Get a list of whoisRecord objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WhoisRecordsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to whoisRecords for security
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: WhoisRecord, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of whoisRecord objects.
 */
export interface WhoisRecordsRequestBuilderGetQueryParameters {
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
const WhoisRecordsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const WhoisRecordsRequestBuilderNavigationMetadata: Record<Exclude<keyof WhoisRecordsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byWhoisRecordId: {
        uriTemplate: WhoisRecordItemRequestBuilderUriTemplate,
        requestsMetadata: WhoisRecordItemRequestBuilderRequestsMetadata,
        navigationMetadata: WhoisRecordItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["whoisRecord%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WhoisRecordsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWhoisRecordCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: WhoisRecordsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createWhoisRecordFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWhoisRecord,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const WhoisRecordsRequestBuilderUriTemplate = "{+baseurl}/security/threatIntelligence/whoisRecords{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */