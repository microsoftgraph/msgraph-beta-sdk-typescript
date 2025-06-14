/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createCallTranscriptCollectionResponseFromDiscriminatorValue, createCallTranscriptFromDiscriminatorValue, serializeCallTranscript, type CallTranscript, type CallTranscriptCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { DeltaRequestBuilderRequestsMetadata, type DeltaRequestBuilder } from './delta/index.js';
// @ts-ignore
import { CallTranscriptItemRequestBuilderNavigationMetadata, CallTranscriptItemRequestBuilderRequestsMetadata, type CallTranscriptItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the transcripts property of the microsoft.graph.onlineMeeting entity.
 */
export interface TranscriptsRequestBuilder extends BaseRequestBuilder<TranscriptsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to call the delta method.
     */
    get delta(): DeltaRequestBuilder;
    /**
     * Provides operations to manage the transcripts property of the microsoft.graph.onlineMeeting entity.
     * @param callTranscriptId The unique identifier of callTranscript
     * @returns {CallTranscriptItemRequestBuilder}
     */
     byCallTranscriptId(callTranscriptId: string) : CallTranscriptItemRequestBuilder;
    /**
     * Retrieve the list of callTranscript objects associated with a scheduled onlineMeeting. This API supports the retrieval of call transcripts from private chat meetings and channel meetings. However, private channel meetings are not supported at this time.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CallTranscriptCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/onlinemeeting-list-transcripts?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<TranscriptsRequestBuilderGetQueryParameters> | undefined) : Promise<CallTranscriptCollectionResponse | undefined>;
    /**
     * Create new navigation property to transcripts for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<CallTranscript>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: CallTranscript, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<CallTranscript | undefined>;
    /**
     * Retrieve the list of callTranscript objects associated with a scheduled onlineMeeting. This API supports the retrieval of call transcripts from private chat meetings and channel meetings. However, private channel meetings are not supported at this time.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<TranscriptsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to transcripts for users
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CallTranscript, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the list of callTranscript objects associated with a scheduled onlineMeeting. This API supports the retrieval of call transcripts from private chat meetings and channel meetings. However, private channel meetings are not supported at this time.
 */
export interface TranscriptsRequestBuilderGetQueryParameters {
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
export const TranscriptsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/onlineMeetings/{onlineMeeting%2Did}/transcripts{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const TranscriptsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const TranscriptsRequestBuilderNavigationMetadata: Record<Exclude<keyof TranscriptsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byCallTranscriptId: {
        requestsMetadata: CallTranscriptItemRequestBuilderRequestsMetadata,
        navigationMetadata: CallTranscriptItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["callTranscript%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
    delta: {
        requestsMetadata: DeltaRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TranscriptsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: TranscriptsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCallTranscriptCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: TranscriptsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: TranscriptsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createCallTranscriptFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeCallTranscript,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
