/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAccessPackageResourceRequestCollectionResponseFromDiscriminatorValue, createAccessPackageResourceRequestFromDiscriminatorValue, serializeAccessPackageResourceRequest, type AccessPackageResourceRequest, type AccessPackageResourceRequestCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { AccessPackageResourceRequestItemRequestBuilderNavigationMetadata, AccessPackageResourceRequestItemRequestBuilderRequestsMetadata, AccessPackageResourceRequestItemRequestBuilderUriTemplate, type AccessPackageResourceRequestItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackageResourceRequests property of the microsoft.graph.entitlementManagement entity.
 */
export interface AccessPackageResourceRequestsRequestBuilder extends BaseRequestBuilder<AccessPackageResourceRequestsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the accessPackageResourceRequests property of the microsoft.graph.entitlementManagement entity.
     * @param accessPackageResourceRequestId The unique identifier of accessPackageResourceRequest
     * @returns a AccessPackageResourceRequestItemRequestBuilder
     */
     byAccessPackageResourceRequestId(accessPackageResourceRequestId: string) : AccessPackageResourceRequestItemRequestBuilder;
    /**
     * Retrieve a list of accessPackageResourceRequest objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceRequestCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagement-list-accesspackageresourcerequests?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AccessPackageResourceRequestsRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageResourceRequestCollectionResponse | undefined>;
    /**
     * Create a new accessPackageResourceRequest object to request the addition of a resource to an access package catalog, update of a resource, or the removal of a resource from a catalog.  A resource must be included in an access package catalog before a role of that resource can be added to an access package.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageResourceRequest
     * @see {@link https://learn.microsoft.com/graph/api/entitlementmanagement-post-accesspackageresourcerequests?view=graph-rest-1.0|Find more info here}
     */
     post(body: AccessPackageResourceRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessPackageResourceRequest | undefined>;
    /**
     * Retrieve a list of accessPackageResourceRequest objects.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessPackageResourceRequestsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create a new accessPackageResourceRequest object to request the addition of a resource to an access package catalog, update of a resource, or the removal of a resource from a catalog.  A resource must be included in an access package catalog before a role of that resource can be added to an access package.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: AccessPackageResourceRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of accessPackageResourceRequest objects.
 */
export interface AccessPackageResourceRequestsRequestBuilderGetQueryParameters {
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
const AccessPackageResourceRequestsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AccessPackageResourceRequestsRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessPackageResourceRequestsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAccessPackageResourceRequestId: {
        uriTemplate: AccessPackageResourceRequestItemRequestBuilderUriTemplate,
        requestsMetadata: AccessPackageResourceRequestItemRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageResourceRequestItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["accessPackageResourceRequest%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessPackageResourceRequestsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAccessPackageResourceRequestCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AccessPackageResourceRequestsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAccessPackageResourceRequestFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessPackageResourceRequest,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AccessPackageResourceRequestsRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackageResourceRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */