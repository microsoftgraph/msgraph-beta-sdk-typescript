/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAppConsentRequestCollectionResponseFromDiscriminatorValue, createAppConsentRequestFromDiscriminatorValue, serializeAppConsentRequest, type AppConsentRequest, type AppConsentRequestCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { FilterByCurrentUserWithOnRequestBuilderRequestsMetadata, FilterByCurrentUserWithOnRequestBuilderUriTemplate, type FilterByCurrentUserWithOnRequestBuilder } from './filterByCurrentUserWithOn/';
import { AppConsentRequestItemRequestBuilderNavigationMetadata, AppConsentRequestItemRequestBuilderRequestsMetadata, AppConsentRequestItemRequestBuilderUriTemplate, type AppConsentRequestItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the appConsentRequests property of the microsoft.graph.appConsentApprovalRoute entity.
 */
export interface AppConsentRequestsRequestBuilder extends BaseRequestBuilder<AppConsentRequestsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the appConsentRequests property of the microsoft.graph.appConsentApprovalRoute entity.
     * @param appConsentRequestId The unique identifier of appConsentRequest
     * @returns a AppConsentRequestItemRequestBuilder
     */
     byAppConsentRequestId(appConsentRequestId: string) : AppConsentRequestItemRequestBuilder;
    /**
     * Provides operations to call the filterByCurrentUser method.
     * @param on Usage: on='{on}'
     * @returns a filterByCurrentUserWithOnRequestBuilder
     */
     filterByCurrentUserWithOn(on: string | undefined) : FilterByCurrentUserWithOnRequestBuilder;
    /**
     * Retrieve appConsentRequest objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppConsentRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/appconsentapprovalroute-list-appconsentrequests?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AppConsentRequestsRequestBuilderGetQueryParameters> | undefined) : Promise<AppConsentRequestCollectionResponse | undefined>;
    /**
     * Create new navigation property to appConsentRequests for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AppConsentRequest
     */
     post(body: AppConsentRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AppConsentRequest | undefined>;
    /**
     * Retrieve appConsentRequest objects and their properties.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AppConsentRequestsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to appConsentRequests for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: AppConsentRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve appConsentRequest objects and their properties.
 */
export interface AppConsentRequestsRequestBuilderGetQueryParameters {
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
const AppConsentRequestsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AppConsentRequestsRequestBuilderNavigationMetadata: Record<Exclude<keyof AppConsentRequestsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAppConsentRequestId: {
        uriTemplate: AppConsentRequestItemRequestBuilderUriTemplate,
        requestsMetadata: AppConsentRequestItemRequestBuilderRequestsMetadata,
        navigationMetadata: AppConsentRequestItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["appConsentRequest%2Did"],
    },
    filterByCurrentUserWithOn: {
        uriTemplate: FilterByCurrentUserWithOnRequestBuilderUriTemplate,
        requestsMetadata: FilterByCurrentUserWithOnRequestBuilderRequestsMetadata,
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AppConsentRequestsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAppConsentRequestCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AppConsentRequestsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAppConsentRequestFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAppConsentRequest,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AppConsentRequestsRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/appConsent/appConsentRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */