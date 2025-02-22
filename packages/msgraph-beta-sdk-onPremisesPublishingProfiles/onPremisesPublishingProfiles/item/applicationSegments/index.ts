/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createIpApplicationSegmentCollectionResponseFromDiscriminatorValue, type IpApplicationSegmentCollectionResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/index.js';
// @ts-ignore
import { IpApplicationSegmentItemRequestBuilderRequestsMetadata, type IpApplicationSegmentItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the applicationSegments property of the microsoft.graph.onPremisesPublishingProfile entity.
 */
export interface ApplicationSegmentsRequestBuilder extends BaseRequestBuilder<ApplicationSegmentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the applicationSegments property of the microsoft.graph.onPremisesPublishingProfile entity.
     * @param ipApplicationSegmentId The unique identifier of ipApplicationSegment
     * @returns {IpApplicationSegmentItemRequestBuilder}
     */
     byIpApplicationSegmentId(ipApplicationSegmentId: string) : IpApplicationSegmentItemRequestBuilder;
    /**
     * Represents the segment configurations that are allowed for an on-premises non-web application published through Microsoft Entra application proxy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<IpApplicationSegmentCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<ApplicationSegmentsRequestBuilderGetQueryParameters> | undefined) : Promise<IpApplicationSegmentCollectionResponse | undefined>;
    /**
     * Represents the segment configurations that are allowed for an on-premises non-web application published through Microsoft Entra application proxy.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<ApplicationSegmentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Represents the segment configurations that are allowed for an on-premises non-web application published through Microsoft Entra application proxy.
 */
export interface ApplicationSegmentsRequestBuilderGetQueryParameters {
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
export const ApplicationSegmentsRequestBuilderUriTemplate = "{+baseurl}/onPremisesPublishingProfiles/{onPremisesPublishingProfile%2Did}/applicationSegments{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const ApplicationSegmentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
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
export const ApplicationSegmentsRequestBuilderNavigationMetadata: Record<Exclude<keyof ApplicationSegmentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byIpApplicationSegmentId: {
        requestsMetadata: IpApplicationSegmentItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["ipApplicationSegment%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ApplicationSegmentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ApplicationSegmentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createIpApplicationSegmentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: ApplicationSegmentsRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
