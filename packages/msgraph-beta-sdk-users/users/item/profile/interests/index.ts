/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPersonInterestCollectionResponseFromDiscriminatorValue, createPersonInterestFromDiscriminatorValue, serializePersonInterest, type PersonInterest, type PersonInterestCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { PersonInterestItemRequestBuilderRequestsMetadata, PersonInterestItemRequestBuilderUriTemplate, type PersonInterestItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the interests property of the microsoft.graph.profile entity.
 */
export interface InterestsRequestBuilder extends BaseRequestBuilder<InterestsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the interests property of the microsoft.graph.profile entity.
     * @param personInterestId The unique identifier of personInterest
     * @returns a PersonInterestItemRequestBuilder
     */
     byPersonInterestId(personInterestId: string) : PersonInterestItemRequestBuilder;
    /**
     * Retrieve a list of personInterest objects from a user's profile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PersonInterestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/profile-list-interests?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<InterestsRequestBuilderGetQueryParameters> | undefined) : Promise<PersonInterestCollectionResponse | undefined>;
    /**
     * Create a new personInterest.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PersonInterest
     * @see {@link https://learn.microsoft.com/graph/api/profile-post-interests?view=graph-rest-1.0|Find more info here}
     */
     post(body: PersonInterest, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PersonInterest | undefined>;
    /**
     * Retrieve a list of personInterest objects from a user's profile.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<InterestsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new personInterest.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: PersonInterest, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of personInterest objects from a user's profile.
 */
export interface InterestsRequestBuilderGetQueryParameters {
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
const InterestsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const InterestsRequestBuilderNavigationMetadata: Record<Exclude<keyof InterestsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byPersonInterestId: {
        uriTemplate: PersonInterestItemRequestBuilderUriTemplate,
        requestsMetadata: PersonInterestItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["personInterest%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const InterestsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPersonInterestCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: InterestsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createPersonInterestFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePersonInterest,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const InterestsRequestBuilderUriTemplate = "{+baseurl}/users/{user%2Did}/profile/interests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */