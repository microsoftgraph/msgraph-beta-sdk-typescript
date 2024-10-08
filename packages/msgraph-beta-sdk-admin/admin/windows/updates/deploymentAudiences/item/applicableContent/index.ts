/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { createApplicableContentCollectionResponseFromDiscriminatorValue, createApplicableContentFromDiscriminatorValue, serializeApplicableContent, type ApplicableContent, type ApplicableContentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/windowsUpdates/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { ApplicableContentCatalogEntryItemRequestBuilderNavigationMetadata, ApplicableContentCatalogEntryItemRequestBuilderRequestsMetadata, type ApplicableContentCatalogEntryItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the applicableContent property of the microsoft.graph.windowsUpdates.deploymentAudience entity.
 */
export interface ApplicableContentRequestBuilder extends BaseRequestBuilder<ApplicableContentRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the applicableContent property of the microsoft.graph.windowsUpdates.deploymentAudience entity.
     * @param applicableContentCatalogEntryId The unique identifier of applicableContent
     * @returns {ApplicableContentCatalogEntryItemRequestBuilder}
     */
     byApplicableContentCatalogEntryId(applicableContentCatalogEntryId: string) : ApplicableContentCatalogEntryItemRequestBuilder;
    /**
     * Content eligible to deploy to devices in the audience. Not nullable. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ApplicableContentCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ApplicableContentRequestBuilderGetQueryParameters> | undefined) : Promise<ApplicableContentCollectionResponse | undefined>;
    /**
     * Create new navigation property to applicableContent for admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ApplicableContent>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: ApplicableContent, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ApplicableContent | undefined>;
    /**
     * Content eligible to deploy to devices in the audience. Not nullable. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ApplicableContentRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to applicableContent for admin
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: ApplicableContent, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Content eligible to deploy to devices in the audience. Not nullable. Read-only.
 */
export interface ApplicableContentRequestBuilderGetQueryParameters {
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
export const ApplicableContentRequestBuilderUriTemplate = "{+baseurl}/admin/windows/updates/deploymentAudiences/{deploymentAudience%2Did}/applicableContent{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ApplicableContentRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ApplicableContentRequestBuilderNavigationMetadata: Record<Exclude<keyof ApplicableContentRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byApplicableContentCatalogEntryId: {
        requestsMetadata: ApplicableContentCatalogEntryItemRequestBuilderRequestsMetadata,
        navigationMetadata: ApplicableContentCatalogEntryItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["applicableContent%2DcatalogEntryId"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ApplicableContentRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ApplicableContentRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createApplicableContentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ApplicableContentRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: ApplicableContentRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createApplicableContentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeApplicableContent,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
