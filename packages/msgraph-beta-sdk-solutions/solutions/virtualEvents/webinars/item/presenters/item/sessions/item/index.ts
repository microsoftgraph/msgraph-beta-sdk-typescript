/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createVirtualEventSessionFromDiscriminatorValue, type VirtualEventSession } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the sessions property of the microsoft.graph.virtualEventPresenter entity.
 */
export interface VirtualEventSessionItemRequestBuilder extends BaseRequestBuilder<VirtualEventSessionItemRequestBuilder> {
    /**
     * Get sessions from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of VirtualEventSession
     */
     get(requestConfiguration?: RequestConfiguration<VirtualEventSessionItemRequestBuilderGetQueryParameters> | undefined) : Promise<VirtualEventSession | undefined>;
    /**
     * Get sessions from solutions
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<VirtualEventSessionItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get sessions from solutions
 */
export interface VirtualEventSessionItemRequestBuilderGetQueryParameters {
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
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const VirtualEventSessionItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const VirtualEventSessionItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createVirtualEventSessionFromDiscriminatorValue,
        queryParametersMapper: VirtualEventSessionItemRequestBuilderGetQueryParametersMapper,
    },
};
/**
 * Uri template for the request builder.
 */
export const VirtualEventSessionItemRequestBuilderUriTemplate = "{+baseurl}/solutions/virtualEvents/webinars/{virtualEventWebinar%2Did}/presenters/{virtualEventPresenter%2Did}/sessions/{virtualEventSession%2Did}{?%24select,%24expand}";
/* tslint:enable */
/* eslint-enable */