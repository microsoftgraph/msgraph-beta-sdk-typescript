/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createIpApplicationSegmentFromDiscriminatorValue, type IpApplicationSegment } from '@microsoft/msgraph-beta-sdk/models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the applicationSegments property of the microsoft.graph.onPremisesPublishingProfile entity.
 */
export interface IpApplicationSegmentItemRequestBuilder extends BaseRequestBuilder<IpApplicationSegmentItemRequestBuilder> {
    /**
     * Get applicationSegments from onPremisesPublishingProfiles
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<IpApplicationSegment>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<IpApplicationSegmentItemRequestBuilderGetQueryParameters> | undefined) : Promise<IpApplicationSegment | undefined>;
    /**
     * Get applicationSegments from onPremisesPublishingProfiles
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<IpApplicationSegmentItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get applicationSegments from onPremisesPublishingProfiles
 */
export interface IpApplicationSegmentItemRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const IpApplicationSegmentItemRequestBuilderUriTemplate = "{+baseurl}/onPremisesPublishingProfiles/{onPremisesPublishingProfile%2Did}/applicationSegments/{ipApplicationSegment%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const IpApplicationSegmentItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const IpApplicationSegmentItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: IpApplicationSegmentItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createIpApplicationSegmentFromDiscriminatorValue,
        queryParametersMapper: IpApplicationSegmentItemRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */