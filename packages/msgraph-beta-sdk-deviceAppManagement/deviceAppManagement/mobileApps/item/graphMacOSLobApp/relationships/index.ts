/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createMobileAppRelationshipCollectionResponseFromDiscriminatorValue, createMobileAppRelationshipFromDiscriminatorValue, serializeMobileAppRelationship, type MobileAppRelationship, type MobileAppRelationshipCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { MobileAppRelationshipItemRequestBuilderRequestsMetadata, type MobileAppRelationshipItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the relationships property of the microsoft.graph.mobileApp entity.
 */
export interface RelationshipsRequestBuilder extends BaseRequestBuilder<RelationshipsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the relationships property of the microsoft.graph.mobileApp entity.
     * @param mobileAppRelationshipId The unique identifier of mobileAppRelationship
     * @returns {MobileAppRelationshipItemRequestBuilder}
     */
     byMobileAppRelationshipId(mobileAppRelationshipId: string) : MobileAppRelationshipItemRequestBuilder;
    /**
     * The set of direct relationships for this app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MobileAppRelationshipCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<RelationshipsRequestBuilderGetQueryParameters> | undefined) : Promise<MobileAppRelationshipCollectionResponse | undefined>;
    /**
     * Create new navigation property to relationships for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<MobileAppRelationship>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: MobileAppRelationship, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<MobileAppRelationship | undefined>;
    /**
     * The set of direct relationships for this app.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<RelationshipsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to relationships for deviceAppManagement
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: MobileAppRelationship, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * The set of direct relationships for this app.
 */
export interface RelationshipsRequestBuilderGetQueryParameters {
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
export const RelationshipsRequestBuilderUriTemplate = "{+baseurl}/deviceAppManagement/mobileApps/{mobileApp%2Did}/graph.macOSLobApp/relationships{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const RelationshipsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const RelationshipsRequestBuilderNavigationMetadata: Record<Exclude<keyof RelationshipsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byMobileAppRelationshipId: {
        requestsMetadata: MobileAppRelationshipItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["mobileAppRelationship%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const RelationshipsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: RelationshipsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMobileAppRelationshipCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: RelationshipsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: RelationshipsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createMobileAppRelationshipFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeMobileAppRelationship,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
