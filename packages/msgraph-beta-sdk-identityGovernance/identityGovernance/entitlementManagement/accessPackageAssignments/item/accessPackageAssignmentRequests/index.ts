/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAccessPackageAssignmentRequestCollectionResponseFromDiscriminatorValue, createAccessPackageAssignmentRequestFromDiscriminatorValue, serializeAccessPackageAssignmentRequest, type AccessPackageAssignmentRequest, type AccessPackageAssignmentRequestCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { FilterByCurrentUserWithOnRequestBuilderRequestsMetadata, FilterByCurrentUserWithOnRequestBuilderUriTemplate, type FilterByCurrentUserWithOnRequestBuilder } from './filterByCurrentUserWithOn/';
import { AccessPackageAssignmentRequestItemRequestBuilderNavigationMetadata, AccessPackageAssignmentRequestItemRequestBuilderRequestsMetadata, AccessPackageAssignmentRequestItemRequestBuilderUriTemplate, type AccessPackageAssignmentRequestItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackageAssignmentRequests property of the microsoft.graph.accessPackageAssignment entity.
 */
export interface AccessPackageAssignmentRequestsRequestBuilder extends BaseRequestBuilder<AccessPackageAssignmentRequestsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the accessPackageAssignmentRequests property of the microsoft.graph.accessPackageAssignment entity.
     * @param accessPackageAssignmentRequestId The unique identifier of accessPackageAssignmentRequest
     * @returns a AccessPackageAssignmentRequestItemRequestBuilder
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions
     */
     byAccessPackageAssignmentRequestId(accessPackageAssignmentRequestId: string) : AccessPackageAssignmentRequestItemRequestBuilder;
    /**
     * Provides operations to call the filterByCurrentUser method.
     * @param on Usage: on='{on}'
     * @returns a filterByCurrentUserWithOnRequestBuilder
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions
     */
     filterByCurrentUserWithOn(on: string | undefined) : FilterByCurrentUserWithOnRequestBuilder;
    /**
     * Get accessPackageAssignmentRequests from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageAssignmentRequestCollectionResponse
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions
     */
     get(requestConfiguration?: RequestConfiguration<AccessPackageAssignmentRequestsRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageAssignmentRequestCollectionResponse | undefined>;
    /**
     * Create new navigation property to accessPackageAssignmentRequests for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageAssignmentRequest
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions
     */
     post(body: AccessPackageAssignmentRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<AccessPackageAssignmentRequest | undefined>;
    /**
     * Get accessPackageAssignmentRequests from identityGovernance
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessPackageAssignmentRequestsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to accessPackageAssignmentRequests for identityGovernance
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     * @deprecated  as of 2022-10/PrivatePreview:MicrosofEntitlementManagementCustomextensions
     */
     toPostRequestInformation(body: AccessPackageAssignmentRequest, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get accessPackageAssignmentRequests from identityGovernance
 */
export interface AccessPackageAssignmentRequestsRequestBuilderGetQueryParameters {
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
const AccessPackageAssignmentRequestsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AccessPackageAssignmentRequestsRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessPackageAssignmentRequestsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAccessPackageAssignmentRequestId: {
        uriTemplate: AccessPackageAssignmentRequestItemRequestBuilderUriTemplate,
        requestsMetadata: AccessPackageAssignmentRequestItemRequestBuilderRequestsMetadata,
        navigationMetadata: AccessPackageAssignmentRequestItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["accessPackageAssignmentRequest%2Did"],
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
export const AccessPackageAssignmentRequestsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAccessPackageAssignmentRequestCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AccessPackageAssignmentRequestsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAccessPackageAssignmentRequestFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAccessPackageAssignmentRequest,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const AccessPackageAssignmentRequestsRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment%2Did}/accessPackageAssignmentRequests{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */