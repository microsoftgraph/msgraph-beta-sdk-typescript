/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAccessPackageAssignmentCollectionResponseFromDiscriminatorValue, type AccessPackageAssignmentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { AccessPackageAssignmentItemRequestBuilderRequestsMetadata, type AccessPackageAssignmentItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackageAssignments property of the microsoft.graph.accessPackageAssignmentResourceRole entity.
 */
export interface AccessPackageAssignmentsRequestBuilder extends BaseRequestBuilder<AccessPackageAssignmentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the accessPackageAssignments property of the microsoft.graph.accessPackageAssignmentResourceRole entity.
     * @param accessPackageAssignmentId The unique identifier of accessPackageAssignment
     * @returns {AccessPackageAssignmentItemRequestBuilder}
     */
     byAccessPackageAssignmentId(accessPackageAssignmentId: string) : AccessPackageAssignmentItemRequestBuilder;
    /**
     * The access package assignments resulting in this role assignment. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<AccessPackageAssignmentCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<AccessPackageAssignmentsRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageAssignmentCollectionResponse | undefined>;
    /**
     * The access package assignments resulting in this role assignment. Read-only. Nullable.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessPackageAssignmentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * The access package assignments resulting in this role assignment. Read-only. Nullable.
 */
export interface AccessPackageAssignmentsRequestBuilderGetQueryParameters {
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
export const AccessPackageAssignmentsRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackageAssignmentResourceRoles/{accessPackageAssignmentResourceRole%2Did}/accessPackageAssignments{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const AccessPackageAssignmentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AccessPackageAssignmentsRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessPackageAssignmentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAccessPackageAssignmentId: {
        requestsMetadata: AccessPackageAssignmentItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["accessPackageAssignment%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessPackageAssignmentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: AccessPackageAssignmentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createAccessPackageAssignmentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AccessPackageAssignmentsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
