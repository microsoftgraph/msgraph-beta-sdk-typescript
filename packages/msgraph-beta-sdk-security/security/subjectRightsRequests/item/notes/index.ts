/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAuthoredNoteCollectionResponseFromDiscriminatorValue, createAuthoredNoteFromDiscriminatorValue, serializeAuthoredNote, type AuthoredNote, type AuthoredNoteCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { AuthoredNoteItemRequestBuilderRequestsMetadata, AuthoredNoteItemRequestBuilderUriTemplate, type AuthoredNoteItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the notes property of the microsoft.graph.subjectRightsRequest entity.
 */
export interface NotesRequestBuilder extends BaseRequestBuilder<NotesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the notes property of the microsoft.graph.subjectRightsRequest entity.
     * @param authoredNoteId The unique identifier of authoredNote
     * @returns a AuthoredNoteItemRequestBuilder
     */
     byAuthoredNoteId(authoredNoteId: string) : AuthoredNoteItemRequestBuilder;
    /**
     * Get the list of authored notes associated with a subject rights request. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthoredNoteCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/subjectrightsrequest-list-notes?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<NotesRequestBuilderGetQueryParameters> | undefined) : Promise<AuthoredNoteCollectionResponse | undefined>;
    /**
     * Create a new authoredNote object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AuthoredNote
     * @see {@link https://learn.microsoft.com/graph/api/subjectrightsrequest-post-notes?view=graph-rest-1.0|Find more info here}
     */
     post(body: AuthoredNote, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AuthoredNote | undefined>;
    /**
     * Get the list of authored notes associated with a subject rights request. 
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<NotesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new authoredNote object.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: AuthoredNote, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get the list of authored notes associated with a subject rights request. 
 */
export interface NotesRequestBuilderGetQueryParameters {
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
const NotesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const NotesRequestBuilderNavigationMetadata: Record<Exclude<keyof NotesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAuthoredNoteId: {
        uriTemplate: AuthoredNoteItemRequestBuilderUriTemplate,
        requestsMetadata: AuthoredNoteItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["authoredNote%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const NotesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAuthoredNoteCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: NotesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAuthoredNoteFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAuthoredNote,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const NotesRequestBuilderUriTemplate = "{+baseurl}/security/subjectRightsRequests/{subjectRightsRequest%2Did}/notes{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */