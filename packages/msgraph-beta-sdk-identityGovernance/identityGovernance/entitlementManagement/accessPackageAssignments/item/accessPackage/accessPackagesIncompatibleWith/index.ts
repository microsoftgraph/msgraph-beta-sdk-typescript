/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createAccessPackageCollectionResponseFromDiscriminatorValue, type AccessPackageCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, CountRequestBuilderUriTemplate, type CountRequestBuilder } from './count/';
import { AccessPackageItemRequestBuilderRequestsMetadata, AccessPackageItemRequestBuilderUriTemplate, type AccessPackageItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the accessPackagesIncompatibleWith property of the microsoft.graph.accessPackage entity.
 */
export interface AccessPackagesIncompatibleWithRequestBuilder extends BaseRequestBuilder<AccessPackagesIncompatibleWithRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the accessPackagesIncompatibleWith property of the microsoft.graph.accessPackage entity.
     * @param accessPackageId The unique identifier of accessPackage
     * @returns a AccessPackageItemRequestBuilder
     */
     byAccessPackageId(accessPackageId: string) : AccessPackageItemRequestBuilder;
    /**
     * Retrieve a list of the accessPackage objects that have marked a specified accessPackage as incompatible.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of AccessPackageCollectionResponse
     * @see {@link https://learn.microsoft.com/graph/api/accesspackage-list-accesspackagesincompatiblewith?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<AccessPackagesIncompatibleWithRequestBuilderGetQueryParameters> | undefined) : Promise<AccessPackageCollectionResponse | undefined>;
    /**
     * Retrieve a list of the accessPackage objects that have marked a specified accessPackage as incompatible.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<AccessPackagesIncompatibleWithRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Retrieve a list of the accessPackage objects that have marked a specified accessPackage as incompatible.
 */
export interface AccessPackagesIncompatibleWithRequestBuilderGetQueryParameters {
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
const AccessPackagesIncompatibleWithRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const AccessPackagesIncompatibleWithRequestBuilderNavigationMetadata: Record<Exclude<keyof AccessPackagesIncompatibleWithRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byAccessPackageId: {
        uriTemplate: AccessPackageItemRequestBuilderUriTemplate,
        requestsMetadata: AccessPackageItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["accessPackage%2Did"],
    },
    count: {
        uriTemplate: CountRequestBuilderUriTemplate,
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const AccessPackagesIncompatibleWithRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createAccessPackageCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: AccessPackagesIncompatibleWithRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const AccessPackagesIncompatibleWithRequestBuilderUriTemplate = "{+baseurl}/identityGovernance/entitlementManagement/accessPackageAssignments/{accessPackageAssignment%2Did}/accessPackage/accessPackagesIncompatibleWith{?%24top,%24skip,%24search,%24filter,%24count,%24orderby,%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */