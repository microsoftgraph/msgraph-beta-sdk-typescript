/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createStringCollectionResponseFromDiscriminatorValue, serializeReferenceCreate, type ReferenceCreate, type StringCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the collection of group entities.
 */
export interface RefRequestBuilder extends BaseRequestBuilder<RefRequestBuilder> {
    /**
     * Get a list of users or groups that are in the accepted-senders list for this group. Users in the accepted senders list can post to conversations of the group (identified in the GET request URL). Make sure you do not specify the same user or group in the accepted senders and rejected senders lists, otherwise you will get an error.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of StringCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/group-list-acceptedsenders?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<RefRequestBuilderGetQueryParameters> | undefined) : Promise<StringCollectionResponse | undefined>;
    /**
     * Add a new user or group to the acceptedSender list. Specify the user or group in @odata.id in the request body. Users in the accepted senders list can post to conversations of the group. Make sure you don't specify the same user or group in the accepted senders and rejected senders lists, otherwise you'll get an error.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @see {@link https://learn.microsoft.com/graph/api/group-post-acceptedsenders?view=graph-rest-1.0|Find more info here}
     */
     post(body: ReferenceCreate, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get a list of users or groups that are in the accepted-senders list for this group. Users in the accepted senders list can post to conversations of the group (identified in the GET request URL). Make sure you do not specify the same user or group in the accepted senders and rejected senders lists, otherwise you will get an error.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RefRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Add a new user or group to the acceptedSender list. Specify the user or group in @odata.id in the request body. Users in the accepted senders list can post to conversations of the group. Make sure you don't specify the same user or group in the accepted senders and rejected senders lists, otherwise you'll get an error.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: ReferenceCreate, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get a list of users or groups that are in the accepted-senders list for this group. Users in the accepted senders list can post to conversations of the group (identified in the GET request URL). Make sure you do not specify the same user or group in the accepted senders and rejected senders lists, otherwise you will get an error.
 */
export interface RefRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
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
const RefRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RefRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createStringCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: RefRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeReferenceCreate,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const RefRequestBuilderUriTemplate = "{+baseurl}/groups/{group%2Did}/acceptedSenders/$ref{?%24top,%24skip,%24filter,%24count,%24orderby}";
/* tslint:enable */
/* eslint-enable */