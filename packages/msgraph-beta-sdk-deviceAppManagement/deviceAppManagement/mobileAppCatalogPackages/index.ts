/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createMobileAppCatalogPackageCollectionResponseFromDiscriminatorValue, createMobileAppCatalogPackageFromDiscriminatorValue, serializeMobileAppCatalogPackage, type MobileAppCatalogPackage, type MobileAppCatalogPackageCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/';
import { MobileAppCatalogPackageItemRequestBuilderRequestsMetadata, type MobileAppCatalogPackageItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the mobileAppCatalogPackages property of the microsoft.graph.deviceAppManagement entity.
 */
export interface MobileAppCatalogPackagesRequestBuilder extends BaseRequestBuilder<MobileAppCatalogPackagesRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the mobileAppCatalogPackages property of the microsoft.graph.deviceAppManagement entity.
     * @param mobileAppCatalogPackageId The unique identifier of mobileAppCatalogPackage
     * @returns {MobileAppCatalogPackageItemRequestBuilder}
     */
     byMobileAppCatalogPackageId(mobileAppCatalogPackageId: string) : MobileAppCatalogPackageItemRequestBuilder;
    /**
     * MobileAppCatalogPackage entities.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MobileAppCatalogPackageCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<MobileAppCatalogPackagesRequestBuilderGetQueryParameters> | undefined) : Promise<MobileAppCatalogPackageCollectionResponse | undefined>;
    /**
     * Create new navigation property to mobileAppCatalogPackages for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MobileAppCatalogPackage>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: MobileAppCatalogPackage, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MobileAppCatalogPackage | undefined>;
    /**
     * MobileAppCatalogPackage entities.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MobileAppCatalogPackagesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to mobileAppCatalogPackages for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: MobileAppCatalogPackage, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * MobileAppCatalogPackage entities.
 */
export interface MobileAppCatalogPackagesRequestBuilderGetQueryParameters {
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
export const MobileAppCatalogPackagesRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/mobileAppCatalogPackages{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MobileAppCatalogPackagesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const MobileAppCatalogPackagesRequestBuilderNavigationMetadata: Record<Exclude<keyof MobileAppCatalogPackagesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMobileAppCatalogPackageId: {
        requestsMetadata: MobileAppCatalogPackageItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["mobileAppCatalogPackage%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MobileAppCatalogPackagesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: MobileAppCatalogPackagesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMobileAppCatalogPackageCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: MobileAppCatalogPackagesRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: MobileAppCatalogPackagesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMobileAppCatalogPackageFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMobileAppCatalogPackage,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */